import React from "react";
import styles from "./ProjectsCard.module.scss";
import go from "../../assets/go.svg";
import git from "../../assets/git-tile.svg";

const ProjectsCard = ({ data }) => {
  const imageStyle = {
    backgroundImage: `url(${data.image})`,
    width: "15rem",
    height: "20rem",
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
        <div className={styles.ProjectDetails_Tiles}>
          <a href="#">
            <img src={go} />
          </a>
          <a href="#">
            <img src={git} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
