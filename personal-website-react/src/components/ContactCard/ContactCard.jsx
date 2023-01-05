import React from "react";
import styles from "./ContactCard.module.scss";

const ContactCard = () => {
  return (
    <div className={styles.ContactCard}>
      <h1>Get In Touch</h1>
      <div className={styles.ContactCard_Links}>
        <a href="#">paulpham3000@gmail.com</a>
        <a href="#">@paul-pham</a>
        <a href="#">@paultree</a>
      </div>
    </div>
  );
};

export default ContactCard;
