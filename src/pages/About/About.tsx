import Navbar from "../../components/Navbar/Navbar";
import styles from "./About.module.css";
import headshot from "../../images/headshot.png";
import info from "../../images/info.png";
import volleyball from "../../images/volleyball.png";
import chef from "../../images/chef.png";
import painting from "../../images/painting.png";
import cookbook from "../../images/cookbook.png";

import { Stack, Typography } from "@mui/material";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.body}>
        {/* intro */}
        <Stack direction="row" spacing="5%" alignItems={"center"}>
          <img src={headshot} alt="headshot" className={styles.halfimg} />

          <Stack sx={{ paddingRight: "5%", textAlign: "right" }}>
            <Typography variant="h3" className={styles.smallpadding}>
              Background
            </Typography>
            <Typography variant="body2">
              Hi! My name is Sami and I'm a developer with previous experience
              as a designer. My coding background comes from my CS courses and
              involvment in two tech clubs during my time at Berkeley. In
              college, I gained a lot of technical experience through my
              on-campus organization called Blueprint, where we built web and
              mobile applications for non-profits. All of my design skills are
              from online courses, youtube videos, and a lot of google searches!
              I gained industry experience throughout the past three years
              through my current full-time Web Developer role as well as design
              and software engineering internships in the past. I am always{" "}
              <span style={{ fontWeight: "bolder" }}>
                looking for open roles in software engineering
              </span>{" "}
              to continue growing my skillset!
            </Typography>
          </Stack>
        </Stack>

        {/* education */}
        <div style={{ padding: "10% 0 10% 0" }}>
          <img src={info} alt="info" className={styles.img} />
        </div>

        {/* interests */}
        <Stack
          style={{ padding: "10% 0 5% 0" }}
          direction={"row"}
          justifyContent={"center"}
        >
          <Stack className={styles.interest1}>
            <img
              src={volleyball}
              alt="volleyball"
              className={styles.smallimg}
            />
            <Typography variant="body2">
              I’ve played competetive volleyball since sixth grade, and have
              traveled to over 10 states to play in tournaments. Now I play on a
              recreational team with my friends.
            </Typography>
          </Stack>

          <Stack className={styles.interest1} sx={{ margin: "6% 10% 5% 10% " }}>
            <img src={chef} alt="chef" className={styles.smallimg} />
            <Typography variant="body2">
              I randomly get cravings for a specific food, so I started learning
              very diverse recipes. Recently, I've been obsessed with making
              sourdough and have been selling loaves to friends and coworkers.
            </Typography>
          </Stack>

          <Stack className={styles.interest1}>
            <Typography
              variant="h2"
              className={styles.smallpadding}
              sx={{ paddingBottom: "29%" }}
            >
              Interests
            </Typography>
            <img src={painting} alt="painting" className={styles.smallimg} />
            <Typography variant="body2">
              I've hyperfixated on all types of crafts throughout the years.
              Painting, pottery, rug tufting, crochet, and now knitting. Click
              on the art tab so see what I've been creating recently!
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          spacing="5%"
          alignItems={"center"}
          padding={"10% 0 10% 0"}
        >
          <img src={cookbook} alt="cookbook" className={styles.halfimg} />

          <Stack sx={{ paddingRight: "5%", textAlign: "right" }}>
            <Typography variant="h3" className={styles.smallpadding}>
              Cookbook
            </Typography>
            <Typography variant="body2">
              My dream is to make a cookbook... let's see what I have so far!!
            </Typography>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.notion.so/Cookbook-3-21a299cde58b45288cef9d6131b3534c?pvs=4"
              className={styles.link}
            >
              <Typography variant="body1">LET'S GO!</Typography>
            </a>
          </Stack>
        </Stack>
      </div>
      {/* Next Projects */}
      <div className={styles.projects}>
        <Typography
          variant="h2"
          className={styles.smallpadding}
          sx={{ textAlign: "center" }}
        >
          Campus Clubs
        </Typography>
        <Stack direction="row" sx={{ justifyContent: "center" }}>
          <ProjectCard id="blueprint" />
          <ProjectCard id="aaa" />
          <ProjectCard id="codeo" />
        </Stack>
      </div>
    </div>
  );
};

export default About;
