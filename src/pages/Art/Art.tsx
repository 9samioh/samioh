import ArtCard from "../../components/ArtCard/ArtCard";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../components/ArtCard/ArtCard.module.css";

import slippers from "../../images/sailorSlippers.png";
import milotte from "../../images/milotte.png";
import bluestripe from "../../images/bluestripe.png";
import whitev from "../../images/newbieWhite.png";
import junctionmitten from "../../images/mittenJunction.png";
import tomato from "../../images/tomato.png";
import miffy from "../../images/miffy.png";
import kiwi from "../../images/kiwi.png";
import slugs from "../../images/slugs.png";
import suki from "../../images/suki.png";
import hamburger from "../../images/hamburger.png";

const Art = () => {
  return (
    <div style={{ minHeight: "100vw" }}>
      <Navbar />
      <div className={styles.cardsDiv}>
        <div className={styles.cardDiv}>
          <ArtCard
            img={slippers}
            title="Sailor Slippers"
            info="Pattern by Annie Sews"
          />
        </div>
        <div className={styles.cardDiv}>
          <ArtCard
            img={milotte}
            title="Elle Tee + Marie Sweater"
            info="Patterns by Millote"
          />
        </div>
        <div className={styles.cardDiv}>
          <ArtCard
            img={bluestripe}
            title="Newbie Sweater V-Neck"
            info="Pattern by DreamKnit"
          />
        </div>
        <div className={styles.cardDiv}>
          <ArtCard
            img={whitev}
            title="Newbie Sweater V-Neck"
            info="Pattern by DreamKnit"
          />
        </div>
        <div className={styles.cardDiv}>
          <ArtCard
            img={junctionmitten}
            title="Junction Beanie + Matilda Mitten"
            info="Patterns by Cosmaudi + JuicyLu"
          />
        </div>
        <div className={styles.cardDiv}>
          <ArtCard img={tomato} title="Tomato Beanie" info="Freehand Crochet" />
        </div>
        <div className={styles.cardDiv}>
          <ArtCard img={miffy} title="Miffy Beanie" info="Freehand Crochet" />
        </div>
        <div className={styles.cardDiv}>
          <ArtCard
            img={hamburger}
            title="Hamburger Beanie"
            info="Freehand Crochet"
          />
        </div>
        <div className={styles.cardDiv}>
          <ArtCard img={kiwi} title="Tufted Rugs" info="" />
        </div>
        <div className={styles.cardDiv}>
          <ArtCard img={slugs} title="Tufted Rugs" info="" />
        </div>
        <div className={styles.cardDiv}>
          <ArtCard img={suki} title="Tufted Rugs" info="" />
        </div>
      </div>
    </div>
  );
};

export default Art;
