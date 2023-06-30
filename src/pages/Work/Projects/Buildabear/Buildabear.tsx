import { Typography, Stack } from "@mui/material";
import BackHome from "../../../../components/BackHome/BackHome";
import Banner from "../../../../components/Banner/Banner";
import Navbar from "../../../../components/Navbar/Navbar";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import buildabearhome from "../../../../images/buildabearhome.png";
import buildabear1 from "../../../../images/buildabear1.png";
import buildabear2 from "../../../../images/buildabear2.png";
import buildabear3 from "../../../../images/buildabear3.png";

import styles from "../Projects.module.css";
const Buildabear = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar color="#AAB284" />

      {/* Header */}
      <div style={{ backgroundColor: "#AAB284", paddingBottom: "5%" }}>
        <Typography variant="h2" className={styles.title}>
          BUILD-A-BEAR
        </Typography>
        <Typography className={styles.info}>
          Organization: UC Berkeley Codeology <br /> Position: Project Leader
        </Typography>
        <img src={buildabearhome} alt="omega" className={styles.homeimg} />
      </div>

      {/* Body */}
      <div className={styles.body}>
        <Banner
          title="Project"
          info="UC Berkeley Codeology hosts projects for new members to learn different areas of development and find their fit in the tech world. This semester I am co-leading a project that teaches website design and development skills. All semester, we are giving lessons on Figma, React, HTML, and CSS for each member to design, develop, and deploy a personal website."
        />

        <div className={styles.bodyitem}>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            I am teaching the development portion of this project and created
            this website as a demo! While developing this website, I created
            lesson plans on each language needed to create a React website, and
            also gained experience deploying through Github pages. <br />
            <br />I went through a couple design iterations before settling on
            this website design. The previous ideas and iterations are shown
            below.
          </Typography>
        </div>

        <Stack
          direction="row"
          justifyContent={"center"}
          spacing={"3%"}
          paddingBottom={"3%"}
        >
          <img src={buildabear1} alt="bsc" className={styles.imgs} />
          <img src={buildabear2} alt="bsc" className={styles.imgs} />
        </Stack>
        <img src={buildabear3} alt="bsc" className={styles.smallimg} />
        <div className={styles.bodyitem}>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            I ended up going with a more simple design. Since then, I redid the
            website to be mobile adaptive and with better coding practices. I also got a new cat since then :)
          </Typography>
        </div>
        <img src={buildabearhome} alt="bsc" className={styles.smallimg} />

        <div className={styles.bodyitem}>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            You can visit the old website here!
          </Typography>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://9samioh.github.io/sami-portfolio/#/"
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

export default Buildabear;
