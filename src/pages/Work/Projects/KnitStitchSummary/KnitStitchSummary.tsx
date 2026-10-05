import { Typography, Stack } from "@mui/material";
import BackHome from "../../../../components/BackHome/BackHome";
import Navbar from "../../../../components/Navbar/Navbar";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import knitstitch from "../../../../images/knitstitch.png";
import knitstitchcover from "../../../../images/knitstitchcover.png";

import styles from "../Projects.module.css";
import { NavLink } from "react-router-dom";
const KnitStitchSummary = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar color="#D1CCD9" />

      {/* Header */}
      <div style={{ backgroundColor: "#D1CCD9", paddingBottom: "5%" }}>
        <Typography variant="h2" className={styles.title}>
          Knit Stitch
        </Typography>
        <Typography className={styles.info}>
            A quick tool I made to help you create knitting patterns from images!
        </Typography>
        <img src={knitstitchcover} alt="omega" className={styles.homeimg} />
      </div>

      {/* Body */}
      <div className={styles.body}>

        <div className={styles.bodyitem}>
          <Typography variant="body1" sx={{ textAlign: "center", padding: "5% 0 2%" }}>
          When knitting, sometimes you want a custom pattern on your sweater, which is easiest to do with a colorwork chart.  
          I wanted to create a tool where you could easily create these colorwork patterns by uploading images.
          It gives you an initial output and you can edit stitches individually to finalize your pattern before downloading it.
          <br/><br/>Here's an example of a recent pattern I made!
          </Typography>
        </div>

        <Stack>
          <img src={knitstitch} alt="knitstitch" className={styles.smallimg} />
        </Stack>

        <div className={styles.bodyitem}>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Try out the tool yourself!
          </Typography>
            <NavLink
            to="/knit-stitch" className={styles.pinkButton}
            >
            KNIT STITCH
            </NavLink>
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

export default KnitStitchSummary;
