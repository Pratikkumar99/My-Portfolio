import React from "react";
import styles from "./Certificates.module.css";
import { getImageUrl } from "../../utils";

const certificates = [
  {
    title: "Full Stack Web Development with AI Training",
    issuer: "Internshala",
    year: "2024",
    image: getImageUrl('certificates/training.png'),
    link: "https://drive.google.com/file/d/1yN0yIIIMk1y6BwGLWUMnXoh_3SXdW05U/view?usp=sharing",
  },
  {
    title: "Full Stack Web Development Internship",
    issuer: "Digital Guru",
    year: "2025",
    image: getImageUrl("certificates/intern.png"),
    link: "https://drive.google.com/file/d/1qV1HYMb6KN-3XAt8TxSfYxtLIc-VR1q9/view?usp=sharing",
  },
];

export const Certificates = () => {
  return (
    <section className={styles.container} id="certificates">
      <h2 className={styles.title}>Certificates</h2>

      <div className={styles.certificates}>
        {certificates.map((certificate, index) => (
          <div
            className={styles.certificate}
            key={certificate.title}
          >
            <div className={styles.imageContainer}>
              <img
                src={certificate.image}
                alt={`${certificate.title} certificate`}
                className={styles.image}
              />
            </div>

            <div className={styles.info}>
              <span className={styles.issuer}>
                {certificate.issuer}
              </span>

              <h3>{certificate.title}</h3>

              <p>{certificate.year}</p>

              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};