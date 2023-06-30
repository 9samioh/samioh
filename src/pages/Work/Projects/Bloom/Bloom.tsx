import { Typography, Stack } from "@mui/material";
import BackHome from "../../../../components/BackHome/BackHome";
import Banner from "../../../../components/Banner/Banner";
import Navbar from "../../../../components/Navbar/Navbar";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import bloomscreen from "../../../../images/bloomscreen.png";

import styles from "../Projects.module.css";
const Bloom = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar color="#D4A384" />

      {/* Header */}
      <div style={{ backgroundColor: "#D4A384", paddingBottom: "5%" }}>
        <Typography variant="h2" className={styles.title}>
          Bloom
        </Typography>
        <Typography className={styles.info}>
          Organization: UC Berkeley Blueprint <br /> Position: External Director
          + Media director
        </Typography>
        <img src={bloomscreen} alt="omega" className={styles.homeimg} />
      </div>

      {/* Body */}
      <div className={styles.body}>
        <Banner
          title="Project"
          info="Bloom is a social good mentorship program created by Blueprint. We designed it as a space for Berkeley students to connect with mentors in the social good space. Through Bloom, we hope to grow and build a supportive community of learners, advocates, and leaders. We are currently in the process of launching our first round of mentors and mentees!"
        />

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

export default Bloom;
