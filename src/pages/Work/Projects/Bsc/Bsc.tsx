import { Stack, Typography } from "@mui/material";
import Navbar from "../../../../components/Navbar/Navbar";
import bschome from "../../../../images/bschome.png";
import bsc1 from "../../../../images/bsc1.png";
import bsc2 from "../../../../images/bsc2.png";
import bsc3 from "../../../../images/bsc3.png";
import bsc4 from "../../../../images/bsc4.png";
import bsc5 from "../../../../images/bsc5.png";
import bsc6 from "../../../../images/bsc6.png";
import bsc8 from "../../../../images/bsc8.png";

import styles from "./Bsc.module.css";
import Banner from "../../../../components/Banner/Banner";
import BackHome from "../../../../components/BackHome/BackHome";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";

const Bsc = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar color="#AAB284" />

      {/* Header */}
      <div style={{ backgroundColor: "#AAB284", paddingBottom: "5%" }}>
        <Typography variant="h2" className={styles.title}>
          Berkeley Student Cooperative
        </Typography>
        <Typography className={styles.info}>
          Organization: UC Berkeley Blueprint <br /> Position: Full Stack
          Developer
        </Typography>
        <img src={bschome} alt="bsc" className={styles.homeimg} />
      </div>

      {/* Body */}
      <div className={styles.body}>
        {/* Format */}
        <div className={styles.padding}>
          <Typography variant="h3" className={styles.smallpadding}>
            Product
          </Typography>
          <Typography variant="body2">
            The Workshift App has 3 different user groups: Members, Managers,
            and Supervisors.
          </Typography>
        </div>

        <Stack direction="row" spacing={"10%"} className={styles.padding}>
          <div>
            <Typography variant="h3" className={styles.smallpadding}>
              Managers
            </Typography>
            <Typography variant="body2">
              - Create shifts <br />
              - Input house lists (house member users)
              <br />
              - View member users’ availabilities and workshift preferences
              <br />
              - Assign member users to shifts
              <br />
              - Track member users workshift hours
              <br />
            </Typography>
          </div>
          <div>
            <Typography variant="h3" className={styles.smallpadding}>
              Supervisors
            </Typography>
            <Typography variant="body2">
              - Same as managers with the ability to view other houses and
              promote members to manager
            </Typography>
          </div>
          <div>
            <Typography variant="h3" className={styles.smallpadding}>
              Members
            </Typography>
            <Typography variant="body2">
              - Submit their availabilities and workshift preferences <br />
              - View the workshift assigned to them throughout the week
              <br />
              - Track their own workshift hours
              <br />- Submit verification for other member workshifts upon
              completion (witness PIN)
            </Typography>
          </div>
        </Stack>

        <Banner
          title="Problem"
          info="Currently, it’s plagued by technical issues that make it difficult
          to navigate and use at a large scale. Because of these issues, some
          managers have resorted to using excel sheets to match members with
          shifts. With some houses having over 100 members, this has become a
          huge painpoint for managers."
        />

        <Stack
          direction="row"
          justifyContent={"center"}
          spacing={"3%"}
          paddingBottom={"3%"}
        >
          <img src={bsc1} alt="bsc" className={styles.imgs} />
          <img src={bsc8} alt="bsc" className={styles.imgs} />
        </Stack>

        <div className={styles.padding}>
          <Typography variant="h3" className={styles.smallpadding}>
            Rebuilding
          </Typography>
          <Typography variant="body2">
            Rebuilding the workshift application will allow managers to create
            and assign shifts for the semester, while residents can verify
            shifts, submit preferences, and modify their availabilities. <br />
            Below are some key features that I've been implementing throughout
            the project!
          </Typography>
        </div>

        <Banner
          title="Shift Creation"
          info="Managers can create shifts to assign to members by submitting this
          form"
        />
        <img src={bsc2} alt="bsc" className={styles.img} />

        <Banner
          title="Shift Assigment"
          info="Managers can assign shifts to members by clicking on available
          members. When ideating this application, I came up with the idea to
          filter members by their availibility, showing only members that can
          complete the shift at this time. I also suggested we include shift
          preferences for members, so that we can order them by preference as
          well as needed hours."
        />
        <img src={bsc3} alt="bsc" className={styles.img} />

        <Banner
          title="Login Page"
          info="All three users have the same login page, where their credentials
          are authenticated and then redirects them to their home page."
        />
        <img src={bsc5} alt="bsc" className={styles.img} />

        <Banner
          title="Editing House Member's Information"
          info="Managers can easily edit the information of members in their house."
        />
        <img src={bsc4} alt="bsc" className={styles.img} />

        <Banner
          title="Member Settings"
          info="Members can input or edit their own information. Each edit button
            opens a separate dialog, prompting them to make changes. The
            password editing dialog will confirm their current password for
            security measures."
        />
        <img src={bsc6} alt="bsc" className={styles.img} />

        <div className={styles.banner}>
          <Typography variant="h3" className={styles.smallpadding}>
            Project Update{" "}
          </Typography>
          <Typography variant="body2" className={styles.smallpadding}>
            This workshift application is currently being developed and will be
            deployed at the end of the Spring 2023 semester!! <br />
            Read this article released by the club!
          </Typography>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/blueprint/berkeley-student-cooperative-a-project-overview-cfc07b7113a4"
            className={styles.link}
          >
            <Typography variant="body1">LET'S GO!</Typography>
          </a>
        </div>

        {/* Next Projects */}
        <div style={{padding: "5% 0 5% 0"}}>
          <Typography
            variant="h3"
            className={styles.smallpadding}
            sx={{ textAlign: "center" }}
          >
            You Might Be Interested In
          </Typography>
          <Stack direction="row" sx={{ justifyContent: "center" }}>
            <ProjectCard id="cadence" />
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

export default Bsc;
