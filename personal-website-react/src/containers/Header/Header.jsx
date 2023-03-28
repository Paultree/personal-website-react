import styles from "./Header.module.scss";
import LanguagesGrid from "../../components/LanguagesGrid/LanguagesGrid";
import TypeWriter from "typewriter-effect";

const Header = ({ isMobile }) => {
  return (
    <div className={styles.Header}>
      <h1>Hi, I'm Paul.</h1>
      <h2>Junior Full-Stack Developer</h2>
      <h1>-</h1>

      <h1 className={styles.Header_TypeWriter}>
        I can code in&nbsp;
        {isMobile ? (
          <>_</>
        ) : (
          <TypeWriter
            onInit={(typewriter) => {
              typewriter
                .typeString("CSS")
                .pauseFor(1000)
                .deleteAll()
                .typeString("JavaScript")
                .pauseFor(1000)
                .deleteAll()
                .typeString("TypeScript")
                .pauseFor(1000)
                .deleteAll()
                .typeString("ReactJS")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Java")
                .pauseFor(1000)
                .deleteAll()
                .typeString("SASS")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Springboot")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Git")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Firestore & Firebase")
                .pauseFor(1000)
                .deleteAll()
                .typeString("HTML")
                .pauseFor(1000)
                .deleteAll()
                .typeString("SQL")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
          />
        )}
      </h1>

      <LanguagesGrid />
    </div>
  );
};

export default Header;
