import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/projects">PROJECTS</NavLink>
      <NavLink to="/contact">CONTACT</NavLink>
    </nav>
  );
};

export default NavBar;
