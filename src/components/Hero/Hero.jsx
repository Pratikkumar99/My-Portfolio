import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const roles = [
    "Full Stack Developer",
    "PHP Developer",
    "Next.Js Developer",
    "Backend Developer",
    "MERN Stack Developer",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[index];

      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
      } else {
        setText((prev) => currentRole.slice(0, prev.length + 1));
      }

      if (!isDeleting && text.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm a</h1>
        <div className={styles.description}>
          <p>
            <span className={styles.typingContainer}>{text}</span>
            <span className={styles.cursor}>|</span>
          </p>
        </div>
        <div className={styles.buttons}>
          <a href="#contact" className={styles.contactBtn}>
            Contact Me
          </a>
          <a
            href="https://drive.google.com/drive/folders/1-4I4y7rcOOHZsZuC0zCbGucrpwLYKEW4"
            download
            className={styles.downloadBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download My CV
          </a>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src={getImageUrl("hero/heroImage.jpg")}
          alt="Hero front"
          className={styles.imgFront}
        />
        <img
          src={getImageUrl("hero/hoverhero.png")} // second image
          alt="Hero hover"
          className={styles.imgBack}
        />
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
