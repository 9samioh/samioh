import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Stack } from "@mui/material";

const Navbar = ({ color }: { color?: string }) => {
  let hex = "#F2ECE2";
  if (color) {
    hex = color;
  }
  return (
    <div style={{ backgroundColor: hex }}>
      <Stack
        direction="row"
        spacing={"10%"}
        justifyContent="center"
        paddingTop={"3%"}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.active : styles.navlink
          }
        >
          WORK
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? styles.active : styles.navlink
          }
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/art"
          className={({ isActive }) =>
            isActive ? styles.active : styles.navlink
          }
        >
          ART
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? styles.active : styles.navlink
          }
        >
          CONTACT
        </NavLink>
      </Stack>
    </div>
  );
};

export default Navbar;
