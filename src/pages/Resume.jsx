import React from "react";
import styles from "./Resume.module.css";

const Resume = () => {
  return (
    <div className={styles.resume}>
      {/* Hero Section */}
      <section className={styles.resumeHero}>
        <div className="container">
          <h1 className={styles.pageTitle}>Resume</h1>
          <p className={styles.pageSubtitle}>
            My professional journey and qualifications
          </p>
          <a
            href={`${process.env.PUBLIC_URL}/assets/images/Resume.pdf`}
            download
            className="btn-primary"
            aria-label="Download Resume PDF"
          >
            📥 Download PDF
          </a>
        </div>
      </section>

      {/* Summary Section */}
      <section className={`section ${styles.summarySection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Professional Summary</h2>
          <p className={styles.summary}>
            Full-stack software engineer with 800+ hours of intensive training
            in modern web development. Proficient in building responsive,
            user-focused applications using React, Node.js, and JavaScript.
            Experienced in RESTful API design, database management, and
            implementing test-driven development practices. Passionate about
            writing clean, maintainable code and solving complex technical
            challenges.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className={`section ${styles.educationSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Education</h2>

          <div className={styles.educationItem}>
            <div className={styles.educationHeader}>
              <div>
                <h3 className={styles.degree}>Software Engineering</h3>
                <p className={styles.school}>SpringBoard University</p>
              </div>
              <span className={styles.date}>2025 - 2026</span>
            </div>
            <p className={styles.educationDescription}>
              Completing 800+ hours of full-stack development training focused on
              JavaScript, React, Node.js, Express, SQL, and testing. Built and
              deployed responsive web apps with RESTful APIs, version control,
              and real-world debugging strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`section ${styles.skillsSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Technical Skills</h2>

          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>
                Programming Languages
              </h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>JavaScript</span>
                <span className={styles.skillTag}>HTML</span>
                <span className={styles.skillTag}>CSS</span>
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>
                Frameworks & Libraries
              </h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>React</span>
                <span className={styles.skillTag}>Redux</span>
                <span className={styles.skillTag}>Node.js</span>
                <span className={styles.skillTag}>Express</span>
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>
                Tools & Technologies
              </h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>REST APIs</span>
                <span className={styles.skillTag}>GitHub</span>
                <span className={styles.skillTag}>npm / Yarn</span>
                <span className={styles.skillTag}>Jest</span>
                <span className={styles.skillTag}>SQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
