import React from "react";
import styles from "./ProjectsCard.module.scss";
import go from "../../assets/go.svg";
import git from "../../assets/git-tile.svg";

const ProjectsCard = ({ data }) => {
  return (
    <div className={styles.ProjectsCard}>
      <div className={styles.ProjectsCard_Image}>
        <img src={data.image} />
        <div className={styles.ProjectDetails_Tiles}>
          <a href="#">
            <img src={go} />
          </a>
          <a href={data.git} target="_blank">
            <img src={git} />
          </a>
        </div>
      </div>
      <div className={styles.ProjectDetails}>
        <h2>{data.title}</h2>
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
