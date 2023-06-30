import styles from "./ProjectCard.module.css";
import bsc1 from "../../images/bsc.png";
import cadence from "../../images/cadence.png";
import xkeeper from "../../images/xkeeper.png";
import omega from "../../images/omega.png";
import bp from "../../images/bp.png";
import aaa from "../../images/aaa.png";
import codeo from "../../images/codeo.png";

import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const ProjectCard = ({ id }: { id: string }) => {
  if (id === "BSC") {
    return (
      <div className={styles.card}>
        <Card className={styles.actioncard}>
          <Link className={styles.here2left} to="/bsc">
            <CardActionArea>
              <CardMedia component="img" height="auto" image={bsc1} />
              <CardContent>
                <Typography
                  variant="h3"
                  sx={{ color: "#333", padding: "5% 0 5% 0 " }}
                >
                  Berkeley Student Coop
                </Typography>
                <Typography variant="body1" sx={{ paddingBottom: "3%" }}>
                  Learn More
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </div>
    );
  }
  if (id === "cadence") {
    return (
      <div className={styles.card}>
        <Card className={styles.actioncard}>
          <Link className={styles.here2left} to="/cadence">
            <CardActionArea>
              <CardMedia component="img" height="auto" image={cadence} />
              <CardContent>
                <Typography
                  variant="h3"
                  sx={{ color: "#333", padding: "5% 0 5% 0 " }}
                >
                  Cadence
                </Typography>
                <Typography variant="body1" sx={{ paddingBottom: "3%" }}>
                  Learn More
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </div>
    );
  }
  if (id === "xkeeper") {
    return (
      <div className={styles.card}>
        <Card className={styles.actioncard}>
          <Link className={styles.here2left} to="/xkeeper">
            <CardActionArea>
              <CardMedia component="img" height="auto" image={xkeeper} />
              <CardContent>
                <Typography
                  variant="h3"
                  sx={{ color: "#333", padding: "5% 0 5% 0 " }}
                >
                  XKeeper
                </Typography>
                <Typography variant="body1" sx={{ paddingBottom: "3%" }}>
                  Learn More
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </div>
    );
  }
  if (id === "omega") {
    return (
      <div className={styles.card}>
        <Card className={styles.actioncard}>
          <Link className={styles.here2left} to="/omega">
            <CardActionArea>
              <CardMedia component="img" height="auto" image={omega} />
              <CardContent>
                <Typography
                  variant="h3"
                  sx={{ color: "#333", padding: "5% 0 5% 0 " }}
                >
                  Omega
                </Typography>
                <Typography variant="body1" sx={{ paddingBottom: "3%" }}>
                  Learn More
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </div>
    );
  }
  if (id === "blueprint") {
    return (
      <div className={styles.card}>
        <Card className={styles.actioncard}>
          <a
            className={styles.here2left}
            href="https://calblueprint.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardActionArea>
              <CardMedia component="img" height="auto" image={bp} />
              <CardContent>
                <Typography
                  variant="h3"
                  sx={{ color: "#333", padding: "5% 0 5% 0 " }}
                >
                  Blueprint
                </Typography>
                <Typography variant="body1" sx={{ paddingBottom: "3%" }}>
                  Learn More
                </Typography>
              </CardContent>
            </CardActionArea>
          </a>
        </Card>
      </div>
    );
  }
  if (id === "aaa") {
    return (
      <div className={styles.card}>
        <Card className={styles.actioncard}>
          <a
            className={styles.here2left}
            href="https://www.instagram.com/ucberkeleyaaa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardActionArea>
              <CardMedia component="img" height="auto" image={aaa} />
              <CardContent>
                <Typography
                  variant="h3"
                  sx={{ color: "#333", padding: "5% 0 5% 0 " }}
                >
                  AAA
                </Typography>
                <Typography variant="body1" sx={{ paddingBottom: "3%" }}>
                  Learn More
                </Typography>
              </CardContent>
            </CardActionArea>
          </a>
        </Card>
      </div>
    );
  }
  if (id === "codeo") {
    return (
      <div className={styles.card}>
        <Card className={styles.actioncard}>
          <a
            className={styles.here2left}
            href="https://codeology.club/#/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardActionArea>
              <CardMedia component="img" height="auto" image={codeo} />
              <CardContent>
                <Typography
                  variant="h3"
                  sx={{ color: "#333", padding: "5% 0 5% 0 " }}
                >
                  Codeology
                </Typography>
                <Typography variant="body1" sx={{ paddingBottom: "3%" }}>
                  Learn More
                </Typography>
              </CardContent>
            </CardActionArea>
          </a>
        </Card>
      </div>
    );
  }
  // if (id === "omega") {
  //   return (
  //     <div className={styles.card}>
  //       <Card className={styles.actioncard}>
  //         <Link className={styles.here2left} to="/omega">
  //           <CardActionArea>
  //             <CardMedia component="img" height="auto" image={omega} />
  //             <CardContent>
  //               <h1 className={styles.lefttitle}>Omega</h1>
  //               <Link className={styles.here2left} to="/omega">
  //                 {" "}
  //                 Learn More<span className="sr-only"></span>
  //               </Link>
  //             </CardContent>
  //           </CardActionArea>
  //         </Link>
  //       </Card>
  //     </div>
  //   );
  // }
  return (
    <div className={styles.card}>
      <Card className={styles.actioncard}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={bsc1}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ProjectCard;
