import React from "react";

import styles from "./Hero.module.css";
import meImg from "./me.png";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>I'm R.Sutheshika</h1>
        <p className={styles.description}>
          I'm a software developer with hands-on experience in building responsive web applications. 
          I'm currently expanding my skills into mobile app development and AI.
        </p>
        <a href="mailto:sutheshikasuthe@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={meImg}
        alt="image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};