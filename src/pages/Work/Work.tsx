import { Typography } from "@mui/material";

import bkgd from "../../images/gif.gif";
import bsc from "../../images/bsc.png";
import cadence from "../../images/cadence.png";
import omega from "../../images/omega.png";
import xkeeper from "../../images/xkeeper.png";
import bloom from "../../images/bloom.png";
import nbjc from "../../images/nbjc.png";
import findyourzen from "../../images/findyourzen.png";
import buildabear from "../../images/buildabear.png";
import LeftWorkComponent from "../../components/WorkComponents/LeftWorkComponent";
import RightWorkComponent from "../../components/WorkComponents/RightWorkComponent";
import styles from "./Work.module.css";
import Navbar from "../../components/Navbar/Navbar";

const Work = () => {
  return (
    <div>
      <Navbar />
      <img src={bkgd} alt="background" className={styles.bkgd} />

      {/* Recent Work */}
      <Typography variant="h1" padding={"5%"} textAlign={"center"}>
        Recent Work
      </Typography>

      {/* BSC */}
      <LeftWorkComponent
        image={bsc}
        name="Berkeley Student Coooperative"
        description="Created a workshift application for 1000+ students and managers
            living in affordable housing."
        link="/bsc"
      />

      {/* Cadence */}
      <RightWorkComponent
        image={cadence}
        name="Cadence Solutions"
        description="Developed a clinician facing application for a Remote Patient
        Monitoring startup."
        link="/cadence"
      />

      {/* XKeeper */}
      <LeftWorkComponent
        image={xkeeper}
        name="XKeeper by Jiran"
        description="Redesign of a Korean parental control app to focus on safety features."
        link="/xkeeper"
      />

      {/* Omega */}
      <RightWorkComponent
        image={omega}
        name="Omega Packaging"
        description="Packaging company website redesign to create a more customer focused expereince."
        link="/omega"
      />

      {/* Buildabear */}
      <LeftWorkComponent
        image={buildabear}
        name="Build-a-Bear"
        description="Co-led a personal portolio website project teaching design and development skills in UC Berkeley Codeology."
        link="/buildabear"
      />

      {/* findyourzen */}
      <RightWorkComponent
        image={findyourzen}
        name="Find Your Zen"
        description="Designed and developed a student wellness app on iOS in UC Berkeley Codology."
        link="/findyourzen"
      />

      {/* nbjc */}
      <LeftWorkComponent
        image={nbjc}
        name="National Black 
        Justice Coalition"
        description="Developed a moderator and organization platform to engage and empower Black LGBTQ SGL+ communities."
        link="/nbjc"
      />

      {/* Bloom */}
      <RightWorkComponent
        image={bloom}
        name="Bloom"
        description="Social good mentorship program for students to recieve professional advice through UC Berkeley Blueprint."
        link="/bloom"
      />
    </div>
  );
};

export default Work;
