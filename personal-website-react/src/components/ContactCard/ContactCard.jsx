import React from "react";
import styles from "./ContactCard.module.scss";
import linkedin from "../../assets/linkedin-tile.svg";
import gmail from "../../assets/gmail-tile.svg";
import git from "../../assets/git-tile.svg";

const ContactCard = () => {
  return (
    <div className={styles.ContactCard}>
      <h1>Get In Touch</h1>
      <div className={styles.ContactCard_Links}>
        <a href="mailto:paulpham3000@gmail.com" target="_blank">
          <img src={gmail} />
          paulpham3000@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/paul-pham-b49244110/"
          target="_blank"
        >
          <img src={linkedin} />
          @paul-pham
        </a>
        <a href="https://github.com/Paultree" target="_blank">
          <img src={git} />
          @paultree
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
