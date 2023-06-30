import { Stack, Typography } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../About/About.module.css";
import contact from "../../images/contact.png";
import CopyToClipboardButton from "../../components/CopyToClipboard/Copytoclipboard";

const Contact = () => {
  return (
    <div style={{ minHeight: "100vw" }}>
      <Navbar />
      <div className={styles.body}>
        {/* intro */}
        <Stack
          direction="row"
          spacing="5%"
          alignItems={"center"}
          justifyContent={"center"}
          margin={"5% 0 20% 0"}
        >
          <img src={contact} alt="contact" className={styles.contactimg} />

          <Stack sx={{ width: "30%" }}>
            <Typography variant="h2" className={styles.smallpadding}>
              Contact Me!
            </Typography>
            <div className={styles.contactinfo}>
              <Typography variant="body2">
                <span style={{ fontWeight: "bolder" }}>Email:</span>{" "}
                sami_oh@berkeley.edu
              </Typography>
              <CopyToClipboardButton text="sami_oh@berkeley.edu" />
            </div>
            <div className={styles.contactinfo}>
              <Typography variant="body2">
                <span style={{ fontWeight: "bolder" }}>Mobile:</span>{" "}
                714-321-7505
              </Typography>
              <CopyToClipboardButton text="714-321-7505" />
            </div>
            <div>
              <a
                className={styles.link2}
                href="https://www.linkedin.com/in/samantha-oh-3315b31b7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography variant="body2">LinkedIn</Typography>
              </a>
            </div>
            <div>
              <a
                className={styles.link2}
                href="https://drive.google.com/file/d/1VE-5CvzKy00ap0mXMIRyEHI3X2yMoG3K/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography variant="body2">Resume</Typography>
              </a>
            </div>
          </Stack>
        </Stack>
      </div>
    </div>
  );
};

export default Contact;
