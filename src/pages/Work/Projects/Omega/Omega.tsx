import { Typography, Stack } from "@mui/material";
import BackHome from "../../../../components/BackHome/BackHome";
import Banner from "../../../../components/Banner/Banner";
import Navbar from "../../../../components/Navbar/Navbar";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import ofaq from "../../../../images/ofaq.png";
import ohome from "../../../../images/ohome.png";
import omegascreen from "../../../../images/omegascreen.png";
import onews from "../../../../images/onews.png";

import styles from "../Projects.module.css";
const Omega = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar color="#D1CCD9" />

      {/* Header */}
      <div style={{ backgroundColor: "#D1CCD9", paddingBottom: "5%" }}>
        <Typography variant="h2" className={styles.title}>
          Omega Packaging
        </Typography>
        <Typography className={styles.info}>
          Company: Omega Packaging <br /> Position: Website Designer + Developer
        </Typography>
        <img src={omegascreen} alt="omega" className={styles.homeimg} />
      </div>

      {/* Body */}
      <div className={styles.body}>
        <Banner
          title="Product"
          info="Omega Packaging is a plastic packaging company based in Orange County. Their old website was coded in bare HTML with little-to-no CSS :0"
        />

        <div className={styles.bodyitem}>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            My instruction was to keep all of the website information the same,
            just make it look slightly better (without looking flashy). The
            purpose of the website is solely for companies looking for
            information such as jar sizing and availability, rather than
            individuals being sold on a product.
          </Typography>
        </div>

        <Stack padding={"5% 0 5% 0"}>
          <img src={ohome} alt="bsc" className={styles.smallimg} />
          <img src={omegascreen} alt="bsc" className={styles.smallimg} />
          <img src={ofaq} alt="bsc" className={styles.smallimg} />
          <img src={onews} alt="bsc" className={styles.smallimg} />
        </Stack>

        <div className={styles.bodyitem}>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            You can visit the website here!
          </Typography>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.omegapkg.com/"
            className={styles.link}
          >
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              LET'S GO!
            </Typography>
          </a>
        </div>

        {/* Next Projects */}
        <div style={{ padding: "5% 0 5% 0" }}>
          <Typography
            variant="h3"
            className={styles.smallpadding}
            sx={{ textAlign: "center" }}
          >
            You Might Be Interested In
          </Typography>
          <Stack direction="row" sx={{ justifyContent: "center" }}>
            <ProjectCard id="BSC" />
            <ProjectCard id="cadence" />
            <ProjectCard id="xkeeper" />
          </Stack>
        </div>

        {/* Back to work page */}
        <BackHome />
      </div>
    </div>
  );
};

export default Omega;
