import React from "react";
import { useTheme } from "../../context/ThemeContext";
import styles from "./DarkModeToggle.module.css";

const DarkModeToggle = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      className={styles.toggleButton}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div className={`${styles.toggle} ${isDark ? styles.dark : ""}`}>
        <span className={styles.icon}>{isDark ? "🌙" : "☀️"}</span>
      </div>
    </button>
  );
};

export default DarkModeToggle;
