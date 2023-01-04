import React from "react";
import { Link } from "react-scroll";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <ul>
        <li>
          <Link activeClass="active" smooth spy to="home">
            HOME
          </Link>
        </li>
        <li>
          <Link activeClass="active" smooth spy to="projects">
            PROJECTS
          </Link>
        </li>
        <li>
          <Link activeClass="active" smooth spy to="qualifications">
            QUALIFICATIONS
          </Link>
        </li>
        <li>
          <Link activeClass="active" smooth spy to="contact">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
