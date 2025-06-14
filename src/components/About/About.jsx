import React from "react";

import styles from "./About.module.css";
import aboutImg from "./aboutImage.png";
import uiImg from "./uiIcon.png";
import cursorImg from "./cursorIcon.png";
import serverImg from "./serverIcon.png";
import { getImageUrl } from "../../utils";


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImg}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={uiImg} alt="ui icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
                I build responsive and optimized websites using modern web technologies.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverImg} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Mobile Developer(Learning)</h3>
              <p>
                Currently learning to develop mobile apps with a focus on performance and user experience.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={cursorImg} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>AI developer(Learning)</h3>
              <p>
                Exploring AI development, including machine learning models and intelligent systems.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};