import React from "react";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <NavLink to="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoText}>Portfolio</span>
        </NavLink>

        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span
            className={`${styles.hamburgerLine} ${isOpen ? styles.open : ""}`}
          ></span>
          <span
            className={`${styles.hamburgerLine} ${isOpen ? styles.open : ""}`}
          ></span>
          <span
            className={`${styles.hamburgerLine} ${isOpen ? styles.open : ""}`}
          ></span>
        </button>

        <div className={`${styles.navMenu} ${isOpen ? styles.active : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.activeLink}`
                    : styles.navLink
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.activeLink}`
                    : styles.navLink
                }
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.activeLink}`
                    : styles.navLink
                }
                onClick={closeMenu}
              >
                Projects
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.activeLink}`
                    : styles.navLink
                }
                onClick={closeMenu}
              >
                Resume
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.activeLink}`
                    : styles.navLink
                }
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className={styles.themeToggleWrapper}>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
