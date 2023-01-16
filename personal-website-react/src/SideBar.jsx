import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-scroll";
import "./SideBar.css";

export default (props) => {
  const [isOpen, setOpen] = useState(false);
  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
      <Link
        onClick={handleIsOpen}
        activeClass="active"
        smooth={true}
        spy={true}
        to="home"
      >
        HOME
      </Link>
      <Link
        onClick={handleIsOpen}
        activeClass="active"
        smooth={true}
        spy={true}
        to="projects"
      >
        PROJECTS
      </Link>

      <Link
        onClick={handleIsOpen}
        activeClass="active"
        smooth={true}
        spy={true}
        to="qualifications"
      >
        QUALIFICATIONS
      </Link>

      <Link
        onClick={handleIsOpen}
        activeClass="active"
        smooth={true}
        spy={true}
        to="contact"
      >
        CONTACT
      </Link>
    </Menu>
  );
};
