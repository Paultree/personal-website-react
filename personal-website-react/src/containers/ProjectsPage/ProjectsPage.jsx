import React from "react";
import styles from "./ProjectsPage.module.scss";
import {
  morseObj,
  wordleObj,
  booksObj,
  calcObj,
  eshopObj,
  employeeObj,
} from "../../service/projects.js";
import ProjectsCard from "../../components/ProjectsCard/ProjectsCard.jsx";

const ProjectsPage = () => {
  const projectsArr = [
    morseObj,
    wordleObj,
    booksObj,
    calcObj,
    eshopObj,
    employeeObj,
  ];

  return (
    <div className={styles.ProjectsPage}>
      <h1>Projects I have worked on...</h1>
      <div className={styles.ProjectsPage_Grid}>
        {projectsArr.map((project, index) => {
          return <ProjectsCard data={project} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
