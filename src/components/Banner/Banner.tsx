import { Typography } from "@mui/material";
import styles from "../../pages/Work/Projects/Projects.module.css";

const Banner = ({ title, info }: { title: string; info: string }) => {
  console.log(title, info);
  return (
    <div className={styles.banner}>
      <Typography variant="h3" className={styles.smallpadding}>
        {title}
      </Typography>
      <Typography variant="body2">{info}</Typography>
    </div>
  );
};

export default Banner;
