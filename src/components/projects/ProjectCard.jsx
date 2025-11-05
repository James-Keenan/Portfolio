import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  const { title, description, image, tech, github, demo } = project;

  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        {image ? (
          <>
            <img src={image} alt={title} className={styles.projectImage} />
            <div className={styles.imageOverlay}>
              <div className={styles.overlayContent}>
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.overlayButton}
                    aria-label="View GitHub repository"
                  >
                    💻 Code
                  </a>
                )}
                {demo && (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.overlayButton}
                    aria-label="View live demo"
                  >
                    � Demo
                  </a>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className={styles.imagePlaceholder}>
            <span className={styles.placeholderIcon}>🚀</span>
          </div>
        )}
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>

        <div className={styles.techStack}>
          {tech.map((technology, index) => (
            <span key={index} className={styles.techTag}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
