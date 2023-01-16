import React from "react";
import Header from "../Header/Header";
import styles from "./HomePage.module.scss";

const HomePage = ({ isMobile }) => {
  return (
    <div className={styles.HomePage}>
      <Header isMobile={isMobile} />
    </div>
  );
};

export default HomePage;
