import { Stack, Typography } from "@mui/material";
import styles from "./WorkComponents.module.css";
import { NavLink } from "react-router-dom";

const LeftWorkComponent = ({
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
      <img src={image} alt="bsc" className={styles.leftimg} />
      <Stack>
        <Typography variant="h2" className={styles.lefttitlefont}>
          {name}
        </Typography>
        <Typography className={styles.leftbodyfont}>{description}</Typography>
        <NavLink to={link} className={styles.navlink}>
          <Typography className={styles.leftlinkfont}>&lt;&lt; VIEW</Typography>
        </NavLink>
      </Stack>
    </Stack>
  );
};

export default LeftWorkComponent;
