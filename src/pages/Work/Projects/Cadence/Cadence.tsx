import { Typography, Stack } from "@mui/material";
import BackHome from "../../../../components/BackHome/BackHome";
import Banner from "../../../../components/Banner/Banner";
import Navbar from "../../../../components/Navbar/Navbar";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import cadence1 from "../../../../images/cadence1.png";
import cadence2 from "../../../../images/cadence2.png";
import cadence3 from "../../../../images/cadence3.png";
import cadence4 from "../../../../images/cadence4.png";
import cadence5 from "../../../../images/cadence5.png";
import cadence6 from "../../../../images/cadence6.png";
import cadence8 from "../../../../images/cadence8.png";

import styles from "../Projects.module.css";

const Cadence = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar color="#CFDBCD" />

      {/* Header */}
      <div style={{ backgroundColor: "#CFDBCD", paddingBottom: "5%" }}>
        <Typography variant="h2" className={styles.title}>
          Cadence
        </Typography>
        <Typography className={styles.info}>
          Company: Cadence (Solutions) <br /> Position: Software Engineer
        </Typography>
        <img src={cadence1} alt="bsc" className={styles.homeimg} />
      </div>

      {/* Body */}
      <div className={styles.body}>
        {/* Format */}
        <div className={styles.center}>
          <Typography variant="h3" className={styles.smallpadding}>
            Summer 2022
          </Typography>
          <Typography variant="body2">
            I worked on Cadence’s frontend engineering team, taking features
            from beginning to end in cycles of 6 weeks for their remote patient
            monitoring application. I worked on a lot of tech debt sprints to
            clean up the application in small features, and below are three
            large, clinician-facing features I worked on!
          </Typography>
        </div>

        <Banner
          title="Multi-select Location"
          info="Because clinicians could only filter patients by a singular hospital name, they found it extremeley difficult to look through patients when they often had patients from multiple hospitals. After working closely with designers on the team, I developed the multi-select filtering for hospital locations. This feature was actually deployed shortly after I left the company, and it was exciting to hear about the feedback and impact that this had made on the clinicians' workflows."
        />

        <Stack padding={"5% 0 5% 0"}>
          <img src={cadence2} alt="bsc" className={styles.smallimg} />
          <img src={cadence8} alt="bsc" className={styles.smallimg} />
        </Stack>

        <Banner
          title="Priority Alerts"
          info="I worked on the alerts team for one cycle during the summer, and we developed three different alert priorities for clinicians to better prioritize patients. Each of the alert thresholds were calculated based on the patient's specific chronic illness (ex: Type 2 Diabetes or Hypertension) and then shown by three different icons. The icons also had multiple variants and hover states to describe more detail about the readings on first glance."
        />
        <img src={cadence3} alt="bsc" className={styles.img} />

        <Banner
          title="Form Error Messages"
          info="My first big feature that I worked on was creating error messages for medical forms filled out by clinicians. I added in-line error messages, red titles, and red outlines to the schema driven forms as well as descriptive error messages on the side, shown on submission."
        />
        <Stack
          direction="row"
          justifyContent={"center"}
          spacing={"3%"}
          paddingBottom={"3%"}
        >
          <img src={cadence4} alt="bsc" className={styles.imgs} />
          <img src={cadence5} alt="bsc" className={styles.imgs} />
        </Stack>
        <img src={cadence6} alt="bsc" className={styles.img} />

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
            <ProjectCard id="xkeeper" />
            <ProjectCard id="omega" />
          </Stack>
        </div>

        {/* Back to work page */}
        <BackHome />
      </div>
    </div>
  );
};

export default Cadence;
