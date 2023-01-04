import React from "react";
import styles from "./ProjectsCard.module.scss";

const ProjectsCard = ({ data }) => {
  const imageStyle = {
    backgroundImage: `url(${data.image})`,
    width: "200px",
    height: "290px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "1rem",
    boxShadow: "0 0 10px gray",
  };

  return (
    <div className={styles.ProjectsCard}>
      <div style={imageStyle}></div>
      <div className={styles.ProjectDetails}>
        <h2>{data.title}</h2>
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
