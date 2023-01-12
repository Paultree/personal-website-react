import React from "react";
import portrait from "../../../src/assets/portrait.jpg";
import styles from "./AboutCard.module.scss";

const AboutCard = () => {
  return (
    <div className={styles.AboutCard}>
      <h1>About me</h1>
      <div className={styles.AboutCard_Info}>
        <div className={styles.AboutCard_Image}>
          <img src={portrait} />
        </div>
        <div className={styles.AboutCard_Info_Para}>
          <p>
            I'm Paul, a full-stack developer based in Sydney, Australia. I love
            building and automating things, and love playing around with all
            things tech.
          </p>
          <p>
            Outside of coding, you can find me playing video games, watching
            movies, slurping down a good bowl of ramen or playing tennis!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
