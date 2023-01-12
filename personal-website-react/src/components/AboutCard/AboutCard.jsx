import React from "react";
import portrait from "../../assets/portrait.jpg";
import styles from "./AboutCard.module.scss";

const AboutCard = () => {
  const portraitStyle = {
    backgroundImage: `url(${portrait})`,
    borderRadius: "10rem",
    width: "20rem",
    height: "20rem",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    boxShadow: "2px 2px 10px #f8f9fa",
  };

  return (
    <div className={styles.AboutCard}>
      <h1>About me</h1>
      <div className={styles.AboutCard_Info}>
        <div style={portraitStyle}></div>
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
