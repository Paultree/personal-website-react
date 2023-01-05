import styles from "./App.module.scss";
import { Link } from "react-scroll";
import HomePage from "./containers/HomePage/HomePage";
import ProjectsPage from "./containers/ProjectsPage/ProjectsPage";
import QualificationPage from "./containers/QualifcationPage/QualificationPage";
import AboutPage from "./containers/AboutPage/AboutPage";

function App() {
  return (
    <div className={styles.App}>
      <header>
        <nav className={styles.NavBar}>
          <ul>
            <li>
              <Link activeClass="active" smooth={true} spy={true} to="home">
                HOME
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth={true} spy={true} to="projects">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                to="qualifications"
              >
                QUALIFICATIONS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth={true} spy={true} to="contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section id="home">
        <HomePage />
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
