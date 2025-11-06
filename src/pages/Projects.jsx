import React, { useState } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectFilter from "../components/projects/ProjectFilter";
import styles from "./Projects.module.css";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Sample projects data - Replace with your actual projects
  const projects = [
    {
      id: 2,
      title: "Bomb-Drop Game",
      description:
        "A fun and interactive game where players avoid bombs to survive and achieve a high score. Built with Phaser.js game framework.",
      image: `${process.env.PUBLIC_URL}/assets/images/Bomb-drop.png`,
      tech: [
        "Phaser.js",
        "JavaScript",
        "Canvas API",
        "LocalStorage",
        "Animation",
        "AI-Assisted Design",
        "Game Mechanics",
      ],
      category: "frontend",
      github: "https://github.com/James-Keenan/BombDrop",
      demo: "https://james-keenan.github.io/BombDrop/",
    },
    {
      id: 1,
      title: "Space Travel Web Application",
      description:
        "A multi-page React app simulating interplanetary evacuation logistics. Features spacecraft management, planet dispatching, and route handling with form validation and error handling.",
      image: `${process.env.PUBLIC_URL}/assets/images/SpaceTravel.png`,
      tech: [
        "React",
        "JavaScript",
        "Vite",
        "CSS",
        "JSX",
        "Api Integration",
        "Form Validation",
      ],
      category: "frontend",
      github: "https://github.com/James-Keenan/Space-Travel-Project",
      demo: "https://james-keenan.github.io/Space-Travel-Project/",
    },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  return (
    <div className={styles.projects}>
      {/* Hero Section */}
      <section className={styles.projectsHero}>
        <div className="container">
          <h1 className={styles.pageTitle}>My Projects</h1>
          <p className={styles.pageSubtitle}>
            A showcase of my recent work and side projects
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <div className="container">
          <ProjectFilter
            selectedFilter={selectedFilter}
            onFilterChange={setSelectedFilter}
          />

          <div className={styles.projectsGrid}>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <div className={styles.noProjects}>
                <p>No projects found for this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
