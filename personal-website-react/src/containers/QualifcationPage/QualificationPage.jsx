import React from "react";
import image from "../../assets/education.png";
import styles from "./QualificationPage.module.scss";

const QualificationPage = () => {
  return (
    <div className={styles.QualificationPage}>
      <h1>I've studied...</h1>
      <div className={styles.QualificationPage_One}>
        <p>BACHELOR OF PSYCHOLOGICAL SCIENCE</p>
        <p>2020</p>
        <img src={image} />
      </div>
    </div>
  );
};

export default QualificationPage;
