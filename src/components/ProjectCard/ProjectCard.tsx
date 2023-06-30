import styles from "./ProjectCard.module.css";
import bsc1 from "../../images/bsc.png";
import cadence from "../../images/cadence.png";
import xkeeper from "../../images/xkeeper.png";
import omega from "../../images/omega.png";
import bp from "../../images/bp.png";
import aaa from "../../images/aaa.png";
import codeo from "../../images/codeo.png";

import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const ProjectCard = ({ id }: { id: string }) => {
  if (id === "BSC") {
    return (
      <div className={styles.card}>
        <Card className={styles.actioncard}>
          <Link className={styles.here2left} to="/bsc">
            <CardActionArea>
              <CardMedia component="img" height="auto" image={bsc1} />
              <CardContent>
                <h1 className={styles.lefttitle}>Berkeley Student Coop</h1>
                <Link className={styles.here2left} to="/bsc">
                  {" "}
                  Learn More<span className="sr-only"></span>
                </Link>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </div>
    );
  }
  if (id === "cadence") {
    return (
      <div className={styles.card}>
        <Card className={styles.actioncard}>
          <Link className={styles.here2left} to="/cadence">
            <CardActionArea>
              <CardMedia component="img" height="auto" image={cadence} />
              <CardContent>
                <h1 className={styles.lefttitle}>Cadence</h1>
                <Link className={styles.here2left} to="/cadence">
                  {" "}
                  Learn More<span className="sr-only"></span>
                </Link>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </div>
    );
  }
  if (id === "xkeeper") {
    return (
      <div className={styles.card}>
        <Card className={styles.actioncard}>
          <Link className={styles.here2left} to="/xkeeper">
            <CardActionArea>
              <CardMedia component="img" height="auto" image={xkeeper} />
              <CardContent>
                <h1 className={styles.lefttitle}>XKeeper</h1>
                <Link className={styles.here2left} to="/xkeeper">
                  {" "}
                  Learn More<span className="sr-only"></span>
                </Link>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </div>
    );
  }
  if (id === "omega") {
    return (
      <div className={styles.card}>
        <Card className={styles.actioncard}>
          <Link className={styles.here2left} to="/omega">
            <CardActionArea>
              <CardMedia component="img" height="auto" image={omega} />
              <CardContent>
                <h1 className={styles.lefttitle}>Omega</h1>
                <Link className={styles.here2left} to="/omega">
                  {" "}
                  Learn More<span className="sr-only"></span>
                </Link>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </div>
    );
  }
  if (id === "blueprint") {
    return (
      <div className={styles.clubcard}>
        <Card className={styles.actioncard}>
          <a
            className={styles.here2left}
            href="https://calblueprint.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardActionArea>
              <CardMedia component="img" height="auto" image={bp} />
              <CardContent>
                <h1 className={styles.lefttitle}>Blueprint</h1>
                <Link className={styles.here2left} to="/blueprint">
                  {" "}
                  Learn More<span className="sr-only"></span>
                </Link>
              </CardContent>
            </CardActionArea>
          </a>
        </Card>
      </div>
    );
  }
  if (id === "aaa") {
    return (
      <div className={styles.clubcard}>
        <Card className={styles.actioncard}>
          <a
            className={styles.here2left}
            href="https://www.instagram.com/ucberkeleyaaa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardActionArea>
              <CardMedia component="img" height="auto" image={aaa} />
              <CardContent>
                <h1 className={styles.lefttitle}>AAA</h1>
                <Link className={styles.here2left} to="/aaa">
                  {" "}
                  Learn More<span className="sr-only"></span>
                </Link>
              </CardContent>
            </CardActionArea>
          </a>
        </Card>
      </div>
    );
  }
  if (id === "codeo") {
    return (
      <div className={styles.clubcard}>
        <Card className={styles.actioncard}>
          <a
            className={styles.here2left}
            href="https://codeology.club/#/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardActionArea>
              <CardMedia component="img" height="auto" image={codeo} />
              <CardContent>
                <h1 className={styles.lefttitle}>Codeology</h1>
                <Link className={styles.here2left} to="/codeology">
                  {" "}
                  Learn More<span className="sr-only"></span>
                </Link>
              </CardContent>
            </CardActionArea>
          </a>
        </Card>
      </div>
    );
  }
  if (id === "omega") {
    return (
      <div className={styles.card}>
        <Card className={styles.actioncard}>
          <Link className={styles.here2left} to="/omega">
            <CardActionArea>
              <CardMedia component="img" height="auto" image={omega} />
              <CardContent>
                <h1 className={styles.lefttitle}>Omega</h1>
                <Link className={styles.here2left} to="/omega">
                  {" "}
                  Learn More<span className="sr-only"></span>
                </Link>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </div>
    );
  }
  return (
    <div className={styles.card}>
      <Card className={styles.actioncard}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={bsc1}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ProjectCard;
