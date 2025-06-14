import React from "react";

import styles from "./Contact.module.css";
import emailImg from "./emailIcon.png";
import linkedinImg from "./linkedinIcon.png";
import githubImg from "./githubIcon.png";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailImg} alt="Email icon" />
          <a href="mailto:sutheshikasuthe@gmail.com">sutheshikasuthe@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinImg}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/rathnavel-sutheshika02/">linkedin.com/Sutheshika</a>
        </li>
        <li className={styles.link}>
          <img src={githubImg} alt="Github icon" />
          <a href="https://github.com/Sutheshika">github.com/Sutheshika</a>
        </li>
      </ul>
    </footer>
  );
};