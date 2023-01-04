import {
  aws,
  css,
  js,
  reactjs,
  java,
  sass,
  spring,
  sql,
  git,
  firebase,
  html,
} from "../../assets/images";
import styles from "./LanguagesGrid.module.scss";

const LanguagesGrid = () => {
  const icons = [
    aws,
    css,
    js,
    reactjs,
    java,
    sass,
    spring,
    git,
    firebase,
    html,
    sql,
  ];

  return (
    <div className={styles.LanguagesGrid}>
      {icons.map((icon, index) => {
        return (
          <div key={index} className={styles.language}>
            <img src={icon} />
          </div>
        );
      })}
    </div>
  );
};

export default LanguagesGrid;
