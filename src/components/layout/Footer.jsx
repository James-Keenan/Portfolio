import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Portfolio</h3>
            <p className={styles.footerDescription}>
              Building digital experiences with passion and precision.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSectionTitle}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link to="/" className={styles.footerLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={styles.footerLink}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className={styles.footerLink}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/resume" className={styles.footerLink}>
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/contact" className={styles.footerLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSectionTitle}>Connect</h4>
            <ul className={styles.socialLinks}>
              <li>
                <a
                  href="https://github.com/James-Keenan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="GitHub"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/james-keenan3403"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/JamesKeenan93"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Twitter"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} James Keenan. All rights reserved.
          </p>
          <p className={styles.builtWith}>Built with React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
