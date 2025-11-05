import React from "react";
import styles from "./ProjectFilter.module.css";

const ProjectFilter = ({ selectedFilter, onFilterChange }) => {
  const filters = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
  ];

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterButtons}>
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`${styles.filterButton} ${
              selectedFilter === filter.id ? styles.active : ""
            }`}
            onClick={() => onFilterChange(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;
