import React from "react";
import AboutCard from "../../components/AboutCard/AboutCard";
import ContactCard from "../../components/ContactCard/ContactCard";
import styles from "./AboutPage.module.scss";

const AboutPage = () => {
  return (
    <div className={styles.AboutPage}>
      <AboutCard />
      <ContactCard />
    </div>
  );
};

export default AboutPage;
