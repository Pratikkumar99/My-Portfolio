import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h3>Contact</h3>
        <p>Feel free to reach out!</p>

        <a
          href="https://portfolio-feedback.zapier.app/"
          className={styles.special_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          leave your valuable feedback
        </a>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a
            href="mailto:pratikk12093@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            pratikk12093@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            href="https://www.linkedin.com/in/pratik-kumar-41a936293/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/pratik-kumar
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a
            href="https://github.com/Pratikkumar99"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Pratikkumar99
          </a>
        </li>
      </ul>
    </footer>
  );
};
