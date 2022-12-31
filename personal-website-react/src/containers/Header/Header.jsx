import styles from "./Header.module.scss";
import LanguagesGrid from "../../components/LanguagesGrid/LanguagesGrid";

const Header = () => {
  return (
    <div className={styles.Header}>
      <h1>Hi, I'm Paul.</h1>
      <h2>Junior Full-Stack Developer</h2>
      <h1>-</h1>
      <LanguagesGrid />
    </div>
  );
};

export default Header;
