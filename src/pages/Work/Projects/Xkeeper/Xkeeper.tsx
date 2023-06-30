import { Typography, Stack } from "@mui/material";
import BackHome from "../../../../components/BackHome/BackHome";
import Banner from "../../../../components/Banner/Banner";
import Navbar from "../../../../components/Navbar/Navbar";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import xkeeperhome from "../../../../images/xkeeperhome.png";
import xkeeper1 from "../../../../images/xkeeper1.png";
import xbefore from "../../../../images/xbefore.png";
import xdrawings from "../../../../images/xdrawings.png";
import xfeature from "../../../../images/xfeature.png";
import xgirl from "../../../../images/xgirl.png";
import xicons1 from "../../../../images/xicons1.png";
import xicons2 from "../../../../images/xicons2.png";
import similarservices from "../../../../images/similarservices.png";
import xoverview from "../../../../images/xoverview.png";
import xtesting from "../../../../images/xutesting.png";
import xicons from "../../../../images/xicons.png";
import xscreens from "../../../../images/xscreens.png";
import xafter from "../../../../images/xafter.png";
import styles from "../Projects.module.css";

const Xkeeper = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar color="#D4A384" />

      {/* Header */}
      <div style={{ backgroundColor: "#D4A384", paddingBottom: "5%" }}>
        <Typography variant="h2" className={styles.title}>
          XKeeper
        </Typography>
        <Typography className={styles.info}>
          Company: Jiran Software <br /> Position: UI/UX Design Intern
        </Typography>
        <img src={xkeeperhome} alt="bsc" className={styles.homeimg} />
      </div>

      {/* Body */}
      <div className={styles.body}>
        {/* intro */}
        <Stack
          direction="row"
          spacing="5%"
          alignItems={"center"}
          className={styles.bodyitem}
        >
          <Stack
            sx={{ paddingRight: "5%", textAlign: "right" }}
            className={styles.righthalftext}
          >
            <Typography variant="h3" className={styles.smallpadding}>
              Product
            </Typography>
            <Typography variant="body2">
              XKeeper is a Korean parental control app that allows for parents
              to have better control over their child’s mobile usage such as
              browser history, screen time usage, and location.
            </Typography>
          </Stack>
          <img src={xkeeper1} alt="headshot" className={styles.halfimg} />
        </Stack>

        <Banner
          title="Problem"
          info="The app has been receiving a lot of negative feedback from younger users that view it as controlling and an invasion of privacy. Their app also doesn’t support iOS because of Apple’s limitations on privacy, however competitors do offer options for iOS with limited functionality."
        />

        <Stack sx={{}} className={styles.bodyitem}>
          <Typography variant="h3" className={styles.smallpadding}>
            User Testing
          </Typography>
          <Typography variant="body2">
            I spent two weeks conducting research on the XKeeper app as well as
            the six main competitors on Android and iOS. After comparing costs,
            device compatibility, features, and user experience, our team
            decided that Wondershare Famisafe was the biggest competitor.
          </Typography>
        </Stack>

        <Stack padding={"5% 0 5% 0"}>
          <img src={similarservices} alt="bsc" className={styles.smallimg} />
          <img src={xoverview} alt="bsc" className={styles.smallimg} />
        </Stack>

        <Banner
          title="Note #1"
          info="Put more focus on giving children rewards and having strong safety features so that there’s an incentive for both parties, not just the parents. Every app has a different brand image and XKeeper should be marketed as a child safety app instead of an app for helicopter parents."
        />
        <img src={xfeature} alt="bsc" className={styles.smallimg} />

        <Banner
          title="Note #2"
          info="XKeeper is one of the only services that provides communication between parent and child when requesting access to an app or more screen time. This gave me the idea to use the app as a complete communication platform between parents and their children."
        />
        <img src={xtesting} alt="bsc" className={styles.smallimg} />
        <div className={styles.bodyitem}>
          <ul>
            <li>
              <Typography variant="body2">
                The note feature lets children have more control on the app
              </Typography>
            </li>
            <ul>
              <li>
                <Typography variant="body2">
                  They can send a note to explain their request and parents can
                  send a note to explain why they denied a request, increasing
                  communication on the app
                </Typography>
              </li>
            </ul>
            <br />
            <li>
              <Typography variant="body2">
                Based on user feedback from testing the app, we found that the
                notifications disappeared too quickly
              </Typography>
            </li>
            <br />
            <li>
              <Typography variant="body2">
                I introduced the idea of a task list and reward system in order
                to increase engagement on the app
              </Typography>
            </li>
            <ul>
              <li>
                <Typography variant="body2">
                  This will further the image of XKeeper being a communication
                  and safety platform necessary for young children with
                  smartphones
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  If children can engage with the app and recieve benefits such
                  as extra screentime when homework is done, they have a reason
                  to want the XKeeper app more than other parental control apps
                </Typography>
              </li>
            </ul>
            <br />
            <li>
              <Typography variant="body2">
                Lastly, I wanted to emphasize the safety features of this app,
                which I noticed many competitors were doing
              </Typography>
            </li>
            <ul>
              <li>
                <Typography variant="body2">
                  Quick access to a panic button would create more functionality
                  and appeal to a younger user
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  I also thought a low battery alert would be helpful for
                  parents to know if their child’s phone was actually dead or
                  just turned off
                </Typography>
              </li>
              <li>
                <Typography variant="body2">
                  (I was also once a young child with a tracking app installed
                  on my phone... we’ve all been there)
                </Typography>
              </li>
            </ul>
          </ul>
        </div>

        <Banner
          title="Designs: Child App"
          info="My team wanted the new designs to include more engaging designs for younger users such as cartoons, fun graphics, and encouraging messages."
        />

        <img src={xicons1} alt="bsc" className={styles.smallimg} />
        <div className={styles.bodyitem}>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            I first made these navbar icons using a lot lines and gradients.
            They looked very messy and inconsistent but thankfully my design
            leader was super supportive and sent me a helpful link to icon
            styles. (she even went out of her way to find one in english :’) )
            We decided that these flat, two-toned icons would be most fitting
            for the playful style we were going for.
          </Typography>
        </div>
        <img src={xicons2} alt="bsc" className={styles.smallimg} />
        <div className={styles.bodyitem}>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            Here are all the random icons I made, many didn’t end up being used
            but it gave me a lot of practice with Illustrator!
          </Typography>
        </div>
        <img src={xicons} alt="bsc" className={styles.smallimg} />
        <div className={styles.bodyitem}>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            We had a hard time choosing between human and non-human designs, but
            ended up going with the more fictional, youthful designs.
          </Typography>
        </div>
        <img src={xscreens} alt="bsc" className={styles.smallimg} />
        <div className={styles.bodyitem}>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            I was the youngest member of the design team, so I think they were
            mostly interested to see what “youthful” designs I would come up
            with. I really enjoyed the task of turning a message that says “you
            ran out of screen time for the day” into a fun cartoon that says
            “woohoo! go outside and try a new activity!”
          </Typography>
        </div>
        <img src={xdrawings} alt="bsc" className={styles.smallimg} />

        <div className={styles.bodyitem}>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            This was my first set of designs for the app, and again I felt like
            it was very cluttered and messy. I recieved design critique and
            decided to focus more on clean designs with cartoons as background
            images.
          </Typography>
        </div>
        <img src={xbefore} alt="bsc" className={styles.smallimg} />

        <div className={styles.bodyitem}>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            These were my final designs! In the critique I received feedback to
            focus on creating a more intuitive design and using less harsh
            colors. The team that I was working under said they really enjoyed
            my child-like taste (LOL) and that the designs were much cleaner!
          </Typography>
        </div>
        <img src={xafter} alt="bsc" className={styles.smallimg} />

        <div className={styles.bodyitem}>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            You can play around with the app wireframes here! (if you click on
            the screen it will highlight the clickable areas in blue)
          </Typography>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://xd.adobe.com/view/30f21b19-380d-4661-8fd1-aade8bfe073e-65a1/"
            className={styles.link}
          >
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              LET'S GO!
            </Typography>
          </a>
          <img src={xgirl} alt="bsc" className={styles.tinyimg} />
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
            <ProjectCard id="omega" />
          </Stack>
        </div>

        {/* Back to work page */}
        <BackHome />
      </div>
    </div>
  );
};

export default Xkeeper;
