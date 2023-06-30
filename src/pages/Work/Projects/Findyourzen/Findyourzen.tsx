import { Typography, Stack } from "@mui/material";
import BackHome from "../../../../components/BackHome/BackHome";
import Banner from "../../../../components/Banner/Banner";
import Navbar from "../../../../components/Navbar/Navbar";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import findyourzenimages from "../../../../images/findyourzenimages.png";
import findyourzenscreens from "../../../../images/findyourzenscreens.png";

import styles from "../Projects.module.css";
const Findyourzen = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar color="#CFDBCD" />

      {/* Header */}
      <div style={{ backgroundColor: "#CFDBCD", paddingBottom: "5%" }}>
        <Typography variant="h2" className={styles.title}>
          Find Your Zen
        </Typography>
        <Typography className={styles.info}>
          Organization: UC Berkeley Codeology <br /> Position: Mobile Designer +
          Developer
        </Typography>
        <img src={findyourzenscreens} alt="omega" className={styles.homeimg} />
      </div>

      {/* Body */}
      <div className={styles.body}>
        <Banner
          title="Project"
          info="UC Berkeley Codeology hosts projects for new members to learn different areas of development and find their fit in the tech world. This was my first project team after joining the club, and I chose it because I didn't have any experience in mobile development.  The project consisted of designing wireframes for our wellness app and then developing them throughout the semester."
        />
        <img src={findyourzenimages} alt="bsc" className={styles.smallimg} />

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

export default Findyourzen;
