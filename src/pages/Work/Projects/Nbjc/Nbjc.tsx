import { Typography, Stack } from "@mui/material";
import BackHome from "../../../../components/BackHome/BackHome";
import Banner from "../../../../components/Banner/Banner";
import Navbar from "../../../../components/Navbar/Navbar";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import nbjc1 from "../../../../images/nbjc1.png";
import nbjc2 from "../../../../images/nbjc2.png";
import nbjc3 from "../../../../images/nbjc3.png";
import nbjc4 from "../../../../images/nbjc4.png";
import nbjc5 from "../../../../images/nbjc5.png";
import nbjc6 from "../../../../images/nbjc6.png";
import nbjc7 from "../../../../images/nbjc7.png";
import nbjcscreen from "../../../../images/nbjcscreen.png";
import nbjcteam from "../../../../images/nbjcteam.png";

import styles from "../Projects.module.css";
const Nbjc = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar color="#D1CCD9" />

      {/* Header */}
      <div style={{ backgroundColor: "#D1CCD9", paddingBottom: "5%" }}>
        <Typography variant="h2" className={styles.title}>
          National Black Justice Coalition
        </Typography>
        <Typography className={styles.info}>
          Organization: UC Berkeley Blueprint <br /> Position: Developer
        </Typography>
        <img src={nbjcscreen} alt="omega" className={styles.homeimg} />
      </div>

      {/* Body */}
      <div className={styles.body}>
        <div style={{ paddingTop: "5%" }} />
        <Banner
          title="NBJC"
          info="National Black Justice Coalition is a civil rights organization based in Washington, D.C. dedicated to empowering Black LGBTQ/SGL+ and people living with HIV/AIDS through federal public policy advocacy. Founded in 2003, NBJC has provided leadership at the intersection of national civil rights groups and LGBTQ/SGL+ organizations, advocating for the unique challenges and needs of this community that are often relegated to the sidelines."
        />

        <div className={styles.bodyitem}>
          <Typography variant="h3" className={styles.smallpadding}>
            Our Team
          </Typography>
          <Typography variant="body2">
            Blueprint partners with different NPO’s every year to help build
            beautiful technology for nonprofits that we want to contribute to. I
            joined the NBJC team in the Spring 2021 semester as a developer.{" "}
            <br />
            <br />
            <span style={{ fontWeight: "bolder" }}>Project Leader:</span> Calvin
            Chen
            <br />
            <span style={{ fontWeight: "bolder" }}>Designer:</span> Elizabeth Wu{" "}
            <br />
            <span style={{ fontWeight: "bolder" }}>Developers:</span> Samantha
            Oh, Bryanna Gavino, Cindy Zhang, Frederick Kim, Gabe Espinosa, Sonja
            Johanson
          </Typography>
        </div>
        <img src={nbjcteam} alt="bsc" className={styles.smallimg} />

        <div className={styles.center}>
          <Typography variant="h3" className={styles.smallpadding}>
            Product
          </Typography>
          <Typography variant="body2">
            We created a public-facing web application for NBJC where
            organizations that staff has approved can enter their information so
            that they can be easily found by users on the platform. NBJC staff
            has the ability to moderate and remove organizations from the
            platform if necessary. Organizations on the platform also have the
            ability to raise awareness about cultural or political events they
            are hosting while benefiting from a network of similar groups. The
            aim is to help individuals find and contribute to local
            organizations that are working to help Black LGBTQ/SGL+ and other
            marginalized communities.
          </Typography>
        </div>

        <Banner
          title="Key Features"
          info="These are the key features of the website that were fully designed and developed throughout Fall 2020 - Spring 2021. We are still ongoing the handoff process as NBJC is working to integrate it into their home page website."
        />

        <div className={styles.center}>
          <Typography variant="h3" className={styles.smallpadding}>
            1. Authentication/ User Roles
          </Typography>
          <Typography variant="body2">
            The application has three types of users: organizations, moderators,
            and admins.
          </Typography>
        </div>
        <img src={nbjc1} alt="bsc" className={styles.smallimg} />

        <div className={styles.center}>
          <Typography variant="h3" className={styles.smallpadding}>
            2. Homepage- Organization List
          </Typography>
          <Typography variant="body2">
            This is the first page a public user will see upon visiting the
            application.
          </Typography>
        </div>
        <img src={nbjc2} alt="bsc" className={styles.smallimg} />

        <div className={styles.center}>
          <Typography variant="h3" className={styles.smallpadding}>
            3. Organization Dashboard
          </Typography>
          <Typography variant="body2">
            This is the first page an organization user already on the platform
            will see upon signing into the application.
          </Typography>
        </div>
        <img src={nbjc3} alt="bsc" className={styles.smallimg} />

        <div className={styles.center}>
          <Typography variant="h3" className={styles.smallpadding}>
            4. Moderator Dashboard
          </Typography>
          <Typography variant="body2">
            This is the first page a moderator will see upon signing into the
            application.
          </Typography>
        </div>
        <img src={nbjc4} alt="bsc" className={styles.smallimg} />

        <div className={styles.center}>
          <Typography variant="h3" className={styles.smallpadding}>
            5. Admin Dashboard
          </Typography>
          <Typography variant="body2">
            This is the first page an admin will see upon signing into the
            application.
          </Typography>
        </div>
        <img src={nbjc5} alt="bsc" className={styles.smallimg} />

        <div className={styles.center}>
          <Typography variant="h3" className={styles.smallpadding}>
            6. Events List
          </Typography>
          <Typography variant="body2">
            Events posted by organizations will be viewable by the public on the
            Events page. Basic information such as the title, date(s), location
            (optional), type of event, summary will be displayed in a list. Upon
            clicking one of events, more detail about the organization will be
            displayed
          </Typography>
        </div>
        <img src={nbjc6} alt="bsc" className={styles.smallimg} />
        <img src={nbjc7} alt="bsc" className={styles.smallimg} />

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

export default Nbjc;
