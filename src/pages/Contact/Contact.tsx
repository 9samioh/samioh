import { Stack, Typography } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../About/About.module.css";
import contact from "../../images/contact.png";

const Contact = () => {
  return (
    <div style={{ }}>
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

          <Stack sx={{ paddingRight: "5%" }}>
            <Typography variant="h2" className={styles.smallpadding}>
              Contact Me!
            </Typography>
            <Typography variant="body2">
              <span style={{ fontWeight: "bolder" }}>Email:</span>{" "}
              sami_oh@berkeley.edu
            </Typography>
            <Typography variant="body2">
              <span style={{ fontWeight: "bolder" }}>Mobile:</span> 714-321-7505
            </Typography>
            <a
              className={styles.link2}
              href="https://www.linkedin.com/in/samantha-oh-3315b31b7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="body2">LinkedIn</Typography>
            </a>
            <a
              className={styles.link2}
              href="https://drive.google.com/file/d/1EomaCp-phZlfEfnNqZw8_C_MhA5yCBEK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="body2">Resume</Typography>
            </a>
          </Stack>
        </Stack>
      </div>
    </div>
  );
};

export default Contact;
