import { Typography } from "@mui/material";
import styles from "../../pages/Work/Projects/Projects.module.css";
import scrollup from "../../images/scrollup.png";
import { NavLink } from "react-router-dom";

const BackHome = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="body2" sx={{ paddingBottom: "1%" }}>
        go back
      </Typography>
      <NavLink to={"/"} className={styles.navlink}>
        <img src={scrollup} alt="scrollup" style={{ width: "2%" }} />{" "}
      </NavLink>
    </div>
  );
};

export default BackHome;
