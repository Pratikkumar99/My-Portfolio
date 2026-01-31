import React, { useRef, useState } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projectsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    if (!projectsRef.current) return;

    const cardWidth =
      projectsRef.current.firstChild.offsetWidth + 15;

    projectsRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const scrollByArrow = (direction) => {
    const newIndex =
      direction === "left" ? activeIndex - 1 : activeIndex + 1;

    if (newIndex < 0 || newIndex >= projects.length) return;
    scrollToIndex(newIndex);
  };

  const handleScroll = () => {
    if (!projectsRef.current) return;

    const cardWidth =
      projectsRef.current.firstChild.offsetWidth + 15;

    const index = Math.round(
      projectsRef.current.scrollLeft / cardWidth
    );

    setActiveIndex(index);
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.wrapper}>
        {/* LEFT ARROW (desktop only via CSS) */}
        <button
          className={styles.arrow}
          onClick={() => scrollByArrow("left")}
          disabled={activeIndex === 0}
        >
          ‹
        </button>

        <div
          className={styles.projects}
          ref={projectsRef}
          onScroll={handleScroll}
        >
          {projects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>

        {/* RIGHT ARROW (desktop only via CSS) */}
        <button
          className={styles.arrow}
          onClick={() => scrollByArrow("right")}
          disabled={activeIndex === projects.length - 1}
        >
          ›
        </button>
      </div>

      {/* DOT SLIDER (desktop + mobile) */}
      <div className={styles.dots}>
        {projects.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === activeIndex ? styles.activeDot : ""
            }`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};