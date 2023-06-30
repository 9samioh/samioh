import { Stack, Typography } from "@mui/material";
import styles from "./WorkComponents.module.css";
import { NavLink } from "react-router-dom";

const RightWorkComponent = ({
  image,
  name,
  description,
  link,
}: {
  image: string;
  name: string;
  description: string;
  link: string;
}) => {
  return (
    <Stack direction="row" alignItems={"center"} paddingBottom={"5%"}>
      <Stack sx={{ float: "right" }} textAlign={"right"} display={"block"}>
        <Typography variant="h2" className={styles.righttitlefont}>
          {name}
        </Typography>
        <Typography className={styles.rightbodyfont}>{description}</Typography>
        <NavLink to={link} className={styles.navlink}>
          <Typography className={styles.rightlinkfont}>
            VIEW &gt;&gt;
          </Typography>
        </NavLink>
      </Stack>
      <img src={image} alt="cadence" className={styles.rightimg} />
    </Stack>
  );
};

export default RightWorkComponent;
