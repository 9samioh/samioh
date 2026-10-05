import { useState, useRef, useEffect, useMemo, ChangeEvent, KeyboardEvent, PointerEvent } from "react";
import styles from "./KnitStitch.module.css";
import { NavLink } from "react-router-dom";

type RGB = [number, number, number];

interface Chart {
  w: number;
  h: number;
  palette: string[]; // hex colors
  grid: number[]; // palette index per stitch, row-major, top row first
}

const SYMBOLS = ["●", "○", "✕", "▲", "■", "◆", "+", "/", "\\", "▽", "★", "#"];
const START_COLORS = 4;

// One knit stitch is drawn in a square 20 x 20 unit box
const UW = 20;
const UH = 20;
// Rows of white stitches drawn around the design in the preview
const PAD = 2;

const hexToRgb = (h: string): RGB => {
  const n = parseInt(h.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};
const rgbToHex = ([r, g, b]: RGB): string =>
  "#" + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, "0")).join("");
const lum = ([r, g, b]: RGB): number => 0.299 * r + 0.587 * g + 0.114 * b;
const isDark = (hex: string): boolean => lum(hexToRgb(hex)) < 140;
const dist = (a: RGB, b: RGB): number =>
  (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2;

// Simple k-means with a deterministic start (spread by brightness)
function quantize(pixels: RGB[], k: number): { centers: RGB[]; assign: number[] } {
  const sorted = [...pixels].sort((a, b) => lum(a) - lum(b));
  let centers: RGB[] = Array.from({ length: k }, (_, i) => {
    const p = sorted[Math.min(sorted.length - 1, Math.floor(((i + 0.5) / k) * sorted.length))];
    return [p[0], p[1], p[2]] as RGB;
  });
  let assign: number[] = new Array(pixels.length).fill(0);
  for (let it = 0; it < 12; it++) {
    assign = pixels.map((p) => {
      let best = 0;
      let bd = Infinity;
      centers.forEach((c, i) => {
        const d = dist(p, c);
        if (d < bd) {
          bd = d;
          best = i;
        }
      });
      return best;
    });
    const sums = centers.map(() => [0, 0, 0, 0]);
    pixels.forEach((p, i) => {
      const s = sums[assign[i]];
      s[0] += p[0];
      s[1] += p[1];
      s[2] += p[2];
      s[3]++;
    });
    centers = centers.map((c, i) =>
      sums[i][3]
        ? ([sums[i][0] / sums[i][3], sums[i][1] / sums[i][3], sums[i][2] / sums[i][3]] as RGB)
        : c
    );
  }
  return { centers, assign };
}

// SVG symbol for one knit stitch (square box), colored through currentColor.
function StitchDefs() {
  const full = { x: -0.2, y: -0.2, width: UW + 0.4, height: UH + 0.4 };
  return (
    <defs>
      <g id="knit-leg" fill="none" strokeLinecap="round">
        <path d="M5 3.4 L10 16.8" stroke="#000" strokeOpacity=".4" strokeWidth="9.6" />
        <path d="M5 3.4 L10 16.8" stroke="currentColor" strokeWidth="8.6" />
        <path d="M3.8 4.6 L7.8 14.4" stroke="#fff" strokeOpacity=".32" strokeWidth="2.4" />
      </g>
      <g id="knit-v">
        {/* darker copy of the yarn color behind the legs reads as shadow */}
        <rect {...full} fill="currentColor" />
        <rect {...full} fill="#000" fillOpacity=".4" />
        <use href="#knit-leg" />
        <use href="#knit-leg" transform={`translate(${UW} 0) scale(-1 1)`} />
      </g>
    </defs>
  );
}

export default function KnitStitch() {
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [w, setW] = useState<number>(20);
  const [h, setH] = useState<number>(20);
  const [chart, setChart] = useState<Chart | null>(null);
  const [brush, setBrush] = useState<number>(0);
  const [regen, setRegen] = useState<number>(0);
  const [histLen, setHistLen] = useState<number>(0);
  const [colW, setColW] = useState<number>(420);
  const [error, setError] = useState<string>("");

  const fileRef = useRef<HTMLInputElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<Chart | null>(null);
  const history = useRef<Chart[]>([]);
  const painting = useRef<boolean>(false);
  const strokeSaved = useRef<boolean>(false);
  chartRef.current = chart;
  const hasChart = chart !== null;

  const clamp = (v: string | number): number =>
    Math.max(2, Math.min(100, Math.round(Number(v) || 2)));

  const pushHistory = () => {
    if (chartRef.current) {
      history.current.push(chartRef.current);
      if (history.current.length > 50) history.current.shift();
      setHistLen(history.current.length);
    }
  };

  const onFile = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (!f.type.startsWith("image/")) {
      setError("That file isn't an image. Choose a PNG, JPG, GIF or WebP.");
      return;
    }
    setError("");
    const reader = new FileReader();
    reader.onerror = () => setError("This file couldn't be read. Try a different image.");
    reader.onload = () => {
      const url = String(reader.result);
      const im = new Image();
      im.onload = () => {
        setImg(im);
        setImgUrl(url);
      };
      im.onerror = () =>
        setError("This image format isn't supported by your browser. Try a PNG or JPG.");
      im.src = url;
    };
    reader.readAsDataURL(f);
    e.target.value = "";
  };

  const matchRatio = () => {
    if (img) setH(clamp((w * img.height) / img.width));
  };

  // Build the chart from the image. Runs when the image or size changes.
  useEffect(() => {
    if (!img) return;
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    const ctx = c.getContext("2d", { willReadFrequently: true });
    if (!ctx) {
      setError("Your browser couldn't create a drawing surface.");
      return;
    }
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, w, h);
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0, w, h);
    const data = ctx.getImageData(0, 0, w, h).data;
    const pixels: RGB[] = [];
    for (let i = 0; i < data.length; i += 4) pixels.push([data[i], data[i + 1], data[i + 2]]);

    const k = Math.min(START_COLORS, pixels.length);
    const { centers, assign } = quantize(pixels, k);
    const order = centers.map((_, i) => i).sort((a, b) => lum(centers[a]) - lum(centers[b]));
    const remap: Record<number, number> = {};
    order.forEach((old, i) => (remap[old] = i));

    history.current = [];
    setHistLen(0);
    setBrush(0);
    setChart({
      w,
      h,
      palette: order.map((i) => rgbToHex(centers[i])),
      grid: assign.map((a) => remap[a]),
    });
  }, [img, w, h, regen]);

  // Measure the left chart column so the symbol chart fills its half
  useEffect(() => {
    const el = leftRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setColW(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, [hasChart]);

  const counts = useMemo<number[]>(() => {
    if (!chart) return [];
    const n = chart.palette.map(() => 0);
    chart.grid.forEach((g) => n[g]++);
    return n;
  }, [chart]);

  // ---- editing ----
  const paint = (r: number, c: number) => {
    const cur = chartRef.current;
    if (!cur || r < 0 || c < 0 || r >= cur.h || c >= cur.w) return;
    const i = r * cur.w + c;
    if (cur.grid[i] === brush) return;
    if (!strokeSaved.current) {
      pushHistory();
      strokeSaved.current = true;
    }
    const grid = cur.grid.slice();
    grid[i] = brush;
    const next = { ...cur, grid };
    chartRef.current = next;
    setChart(next);
  };

  const paintAtPoint = (x: number, y: number) => {
    const el = document.elementFromPoint(x, y);
    if (!el) return;
    const svg = el.closest("svg[data-knit]") as SVGSVGElement | null;
    if (svg && chartRef.current) {
      const rect = svg.getBoundingClientRect();
      const cur = chartRef.current;
      paint(
        Math.floor(((y - rect.top) / rect.height) * (cur.h + 2 * PAD)) - PAD,
        Math.floor(((x - rect.left) / rect.width) * (cur.w + 2 * PAD)) - PAD
      );
      return;
    }
    const td = el.closest("td[data-r]") as HTMLElement | null;
    if (td) paint(Number(td.dataset.r), Number(td.dataset.c));
  };

  const onDown = (e: PointerEvent<HTMLDivElement>) => {
    painting.current = true;
    strokeSaved.current = false;
    paintAtPoint(e.clientX, e.clientY);
  };
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (painting.current) paintAtPoint(e.clientX, e.clientY);
  };
  useEffect(() => {
    const stop = () => (painting.current = false);
    window.addEventListener("pointerup", stop);
    window.addEventListener("pointercancel", stop);
    return () => {
      window.removeEventListener("pointerup", stop);
      window.removeEventListener("pointercancel", stop);
    };
  }, []);

  const undo = () => {
    const prev = history.current.pop();
    if (prev) {
      setChart(prev);
      setBrush((b) => Math.min(b, prev.palette.length - 1));
      setHistLen(history.current.length);
    }
  };

  const setColor = (i: number, value: string) =>
    setChart((p) => (p ? { ...p, palette: p.palette.map((c, j) => (j === i ? value : c)) } : p));

  const addColor = () => {
    if (!chart || chart.palette.length >= SYMBOLS.length) return;
    pushHistory();
    setChart({ ...chart, palette: [...chart.palette, "#c9d6df"] });
    setBrush(chart.palette.length);
  };

  // Removing a color merges its stitches into the closest remaining color
  const removeColor = (i: number) => {
    if (!chart || chart.palette.length <= 2) return;
    const me = hexToRgb(chart.palette[i]);
    let near = -1;
    let nd = Infinity;
    chart.palette.forEach((p, j) => {
      if (j === i) return;
      const d = dist(me, hexToRgb(p));
      if (d < nd) {
        nd = d;
        near = j;
      }
    });
    pushHistory();
    setChart({
      ...chart,
      palette: chart.palette.filter((_, j) => j !== i),
      grid: chart.grid.map((g) => {
        const v = g === i ? near : g;
        return v > i ? v - 1 : v;
      }),
    });
    setBrush((b) => {
      const v = b === i ? near : b;
      return v > i ? v - 1 : v;
    });
  };

  const cell = chart ? Math.max(10, Math.min(32, Math.floor((colW - 34) / chart.w))) : 20;

  const openPicker = () => fileRef.current?.click();
  const onDropKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openPicker();
    }
  };

  return (
    <div className={styles.ks}>
      <NavLink
          to="/"
          className={styles.backToHome}
        >
          &larr; Back to Home
        </NavLink>
      <h1>Welcome to Knit Stitch!</h1>
      <p className={styles.sub}>
        Upload a simple picture, choose how many stitches wide and tall, then edit the chart and
        see what the knitted fabric will look like.<br />Make sure to print your pattern!
      </p>

      {/* ---------- inputs ---------- */}
      <section className={styles.inputs} aria-label="Chart settings">
        <div className={styles.inputRow}>
          <div>
            <label htmlFor="knit-file">Image</label>
            <div className={styles.drop} role="button" tabIndex={0} onClick={openPicker} onKeyDown={onDropKey}>
              {imgUrl ? (
                <img className={styles.thumb} src={imgUrl} alt="Uploaded preview" />
              ) : (
                "Choose an image to upload"
              )}
            </div>
            <input id="knit-file" ref={fileRef} type="file" accept="image/*" onChange={onFile} hidden />
            {error && <p className={styles.error}>{error}</p>}
          </div>

          <div>
            <label>Size in stitches</label>
            <div className={styles.row}>
              <div className={styles.grow}>
                <span className={styles.small}>Width</span>
                <input type="number" min={2} max={100} value={w} onChange={(e) => setW(clamp(e.target.value))} />
              </div>
              <div className={styles.grow}>
                <span className={styles.small}>Height (rows)</span>
                <input type="number" min={2} max={100} value={h} onChange={(e) => setH(clamp(e.target.value))} />
              </div>
            </div>
            <div className={styles.row} style={{ marginTop: 10 }}>
              <button onClick={() => { setW(20); setH(20); }}>Reset to 20 × 20</button>
              <button onClick={matchRatio} disabled={!img}>Match image shape</button>
            </div>
            <p className={styles.note}>
              Changing the size rebuilds the chart from your image and clears your edits.
            </p>
          </div>

          <div>
            <label>Output</label>
            <button className="primary" onClick={() => window.print()} disabled={!chart}
              style={{ background: "var(--accent)", color: "#fff", borderColor: "var(--accent)" }}>
              Print charts
            </button>
          </div>
        </div>

        {chart && (
          <>
            <hr className={styles.divider} />
            <div>
              <label>Colors</label>
              <div className={styles.palette} role="radiogroup" aria-label="Brush color">
                {chart.palette.map((col, i) => (
                  <div className={`${styles.chip} ${brush === i ? styles.sel : ""}`} key={i}>
                    <button
                      className={styles.sw}
                      role="radio"
                      aria-checked={brush === i}
                      aria-label={`Paint with color ${i + 1}`}
                      onClick={() => setBrush(i)}
                      style={{ background: col, color: isDark(col) ? "#fff" : "#111" }}
                    >
                      {SYMBOLS[i % SYMBOLS.length]}
                    </button>
                    <div>
                      Color {i + 1}
                      <br />
                      {counts[i]} stitches
                    </div>
                    <input
                      type="color"
                      value={col}
                      aria-label={`Change color ${i + 1}`}
                      title="Change this yarn color"
                      onChange={(e) => setColor(i, e.target.value)}
                    />
                    {chart.palette.length > 2 && (
                      <button
                        className={styles.x}
                        aria-label={`Remove color ${i + 1}`}
                        title="Remove this color (its stitches merge into the closest color)"
                        onClick={() => removeColor(i)}
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <div className={styles.row} style={{ marginTop: 10 }}>
                <button onClick={addColor} disabled={chart.palette.length >= SYMBOLS.length}>Add color</button>
                <button onClick={undo} disabled={histLen === 0}>Undo</button>
                <button onClick={() => setRegen((n) => n + 1)} disabled={!img}>Reset to image</button>
              </div>
              <p className={styles.note}>
                Pick a color, then click or drag on either chart to paint stitches. Use the color
                box on a swatch to change that yarn everywhere. Removing a color merges its
                stitches into the closest remaining color.
              </p>
            </div>
          </>
        )}
      </section>

      {/* ---------- charts ---------- */}
      {!chart ? (
        <div className={styles.empty}>
          Your charts will appear here.
          <br />
          Upload an image to start. Logos, icons and drawings with simple colors work best.
          <br />
          Don't worry if it's not perfect! You'll be able to edit it later.
        </div>
      ) : (
        <>
          <div className={styles.charts} onPointerDown={onDown} onPointerMove={onMove}>
            <div className={styles.chartCol} ref={leftRef}>
              <h2>Symbol chart</h2>
              <div className={styles.scroll}>
                <table className={styles.chart} style={{ ["--cell" as string]: cell + "px" }} aria-label="Knitting symbol chart">
                  <tbody>
                    {Array.from({ length: chart.h }, (_, r) => {
                      const rowNum = chart.h - r; // row 1 is at the bottom
                      return (
                        <tr key={r} className={rowNum % 5 === 0 && r !== chart.h - 1 ? styles.fiveRow : ""}>
                          {Array.from({ length: chart.w }, (_, c) => {
                            const idx = chart.grid[r * chart.w + c];
                            const col = chart.palette[idx];
                            const fromRight = chart.w - c;
                            return (
                              <td
                                key={c}
                                data-r={r}
                                data-c={c}
                                className={fromRight % 5 === 1 && c !== 0 ? styles.five : ""}
                                style={{ background: col, color: isDark(col) ? "#fff" : "#111" }}
                              >
                                {SYMBOLS[idx % SYMBOLS.length]}
                              </td>
                            );
                          })}
                          <td className={styles.n}>{rowNum}</td>
                        </tr>
                      );
                    })}
                    <tr>
                      {Array.from({ length: chart.w }, (_, c) => {
                        const n = chart.w - c;
                        return (
                          <td key={c} className={styles.n}>
                            {n % 5 === 0 || n === 1 ? n : ""}
                          </td>
                        );
                      })}
                      <td className={styles.n} />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className={styles.chartCol}>
              <h2>Knit preview</h2>
              <div className={styles.scroll}>
                <svg
                  className={styles.knit}
                  data-knit="1"
                  width="100%"
                  style={{ maxWidth: (chart.w + 2 * PAD) * 40 }}
                  viewBox={`0 0 ${(chart.w + 2 * PAD) * UW} ${(chart.h + 2 * PAD) * UH}`}
                  role="img"
                  aria-label="Preview of the knitted fabric"
                >
                  <StitchDefs />
                  {Array.from({ length: chart.h + 2 * PAD }, (_, rr) =>
                    Array.from({ length: chart.w + 2 * PAD }, (_, cc) => {
                      const r = rr - PAD;
                      const c = cc - PAD;
                      const inside = r >= 0 && c >= 0 && r < chart.h && c < chart.w;
                      return (
                        <use
                          key={rr * 1000 + cc}
                          href="#knit-v"
                          x={cc * UW}
                          y={rr * UH}
                          color={inside ? chart.palette[chart.grid[r * chart.w + c]] : "#ffffff"}
                        />
                      );
                    })
                  )}
                </svg>
              </div>
            </div>
          </div>

          <p className={`${styles.note} ${styles.noprint}`}>
            Row 1 is at the bottom. Read right to left on right-side rows and left to right on
            wrong-side rows. Heavier lines mark every 5 stitches and rows, counted from the right.
            The preview shows every stitch as a knit stitch (stockinette), so it is an
            approximation of the finished look. Happy Knitting!!!
          </p>
        </>
      )}
    </div>
  );
}
