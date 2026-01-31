import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      {/* LEFT TEXT */}
      <div className={styles.text}>
        <h3>Contact</h3>
        <p>Feel free to reach out!</p>

        <a
          href="https://portfolio-feedback.zapier.app/"
          className={styles.specialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here for your valuable feedback
        </a>
      </div>

      {/* LINKS COLUMN 1 */}
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/leetcodeicon.png")}
            alt="LeetCode icon"
          />
          <a
            href="https://leetcode.com/u/Pratik_kumar99/"
            target="_blank"
            rel="noopener noreferrer"
          >
            leetcode/Pratik_kumar99
          </a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/xicon.png")} alt="X icon" />
          <a
            href="https://x.com/newHackker"
            target="_blank"
            rel="noopener noreferrer"
          >
            x.com/newHackker
          </a>
        </li>
      </ul>

      {/* LINKS COLUMN 2 */}
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:pratikk12093@gmail.com">
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
          <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
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