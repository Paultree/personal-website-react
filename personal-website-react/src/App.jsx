import styles from "./App.module.scss";
import { Link } from "react-scroll";
import HomePage from "./containers/HomePage/HomePage";
import ProjectsPage from "./containers/ProjectsPage/ProjectsPage";
import QualificationPage from "./containers/QualifcationPage/QualificationPage";
import AboutPage from "./containers/AboutPage/AboutPage";
import { useMediaQuery } from "react-responsive";
import SideBar from "./SideBar";

function App() {
  const isMobile = useMediaQuery({ query: `(max-width: 761px)` });

  return (
    <div className={styles.App}>
      {isMobile ? (
        <SideBar />
      ) : (
        <nav className={styles.NavBar}>
          <Link activeClass="active" smooth={true} spy={true} to="home">
            HOME
          </Link>
          <Link activeClass="active" smooth={true} spy={true} to="projects">
            PROJECTS
          </Link>

          <Link
            activeClass="active"
            smooth={true}
            spy={true}
            to="qualifications"
          >
            QUALIFICATIONS
          </Link>

          <Link activeClass="active" smooth={true} spy={true} to="contact">
            CONTACT
          </Link>
        </nav>
      )}

      <section id="home">
        <HomePage isMobile={isMobile} />
      </section>
      <section id="projects" className={styles.ProjectPage}>
        <ProjectsPage />
      </section>
      <section id="qualifications" className={styles.QualPage}>
        <QualificationPage />
      </section>
      <section id="contact">
        <AboutPage />
      </section>
    </div>
  );
}

export default App;
