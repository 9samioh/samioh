import { Typography } from "@mui/material";
import styles from "./ArtCard.module.css";
import useScreenSize from "../ScreenSize";

const ArtCard = ({
  img,
  title,
  info,
}: {
  img: string;
  title: string;
  info: string;
}) => {
  const isMobile = useScreenSize();

  return (
    <div className={isMobile ? styles.mobileCard : styles.card}>
      <div className={styles.imgDiv}>
        <img src={img} className={styles.img} alt="art project" />
      </div>

      <div className={styles.overlay}>
        <Typography variant="h3" className={styles.title}>
          {title}
        </Typography>
        <Typography variant="body1" className={styles.info}>
          {info}
        </Typography>
      </div>
    </div>
  );
};

export default ArtCard;
