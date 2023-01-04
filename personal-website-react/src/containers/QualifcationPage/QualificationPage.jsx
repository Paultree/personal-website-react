import React from "react";
import image from "../../assets/education.png";
import styles from "./QualificationPage.module.scss";

const QualificationPage = () => {
  return (
    <div className={styles.QualificationPage}>
      <h1>I've studied...</h1>
      <div>
        <h3>BACHELOR OF PSYCHOLOGICAL SCIENCE</h3>
        <h4>2020</h4>
        <img src={image} />
      </div>
    </div>
  );
};

export default QualificationPage;
