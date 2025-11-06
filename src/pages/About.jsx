import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      {/* Hero Section */}
      <section className={styles.aboutHero}>
        <div className="container">
          <h1 className={styles.pageTitle}>About Me</h1>
          <p className={styles.pageSubtitle}>
            Passionate developer crafting digital solutions
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.bioSection}>
              <h2 className={styles.sectionTitle}>Who I Am</h2>
              <p className={styles.bioText}>
                Hi! I'm James Keenan, a full-stack developer and software
                engineer transitioning from a successful 10+ year career in
                hospitality management. My experience leading high-volume
                operations at The Red Bar in Fort Walton Beach taught me
                critical thinking, team coordination, and how to solve problems
                under pressure.
              </p>
              <p className={styles.bioText}>
                I am currently completing 800+ hours of intensive full-stack
                development training at Springboard, where I am mastering
                JavaScript, React, Node.js, Express, and SQL. What excites me
                most about software engineering is the ability to build
                solutions that improve efficiency and user experience—skills I
                honed serving thousands of guests throughout my hospitality
                career.
              </p>
              <p className={styles.bioText}>
                I bring a unique perspective to development: the customer-first
                mindset of hospitality combined with technical problem-solving
                skills. Whether managing a packed restaurant or debugging
                complex code, I thrive in fast-paced environments where details
                matter and teamwork is essential.
              </p>
            </div>

            <div className={styles.imageSection}>
              <div className={styles.imageContainer}>
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/images/Profile Picture.jpg`}
                  alt="James Keenan" 
                  className={styles.profileImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className={`section ${styles.techSection}`}>
        <div className="container">
          <h2 className="section-title text-center">Tech Stack</h2>
          <p className={styles.techIntro}>
            Technologies and tools I work with to bring ideas to life
          </p>

          <div className={styles.techGrid}>
            <div className={styles.techCategory}>
              <h3 className={styles.techCategoryTitle}>Frontend</h3>
              <ul className={styles.techList}>
                <li>React</li>
                <li>Redux</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3</li>
                <li>Responsive Design</li>
              </ul>
            </div>

            <div className={styles.techCategory}>
              <h3 className={styles.techCategoryTitle}>Backend</h3>
              <ul className={styles.techList}>
                <li>Node.js</li>
                <li>Express</li>
                <li>REST APIs</li>
                <li>SQL</li>
              </ul>
            </div>

            <div className={styles.techCategory}>
              <h3 className={styles.techCategoryTitle}>Tools & Others</h3>
              <ul className={styles.techList}>
                <li>GitHub</li>
                <li>VS Code</li>
                <li>Jest (Testing)</li>
                <li>npm / Yarn</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <h2 className="section-title text-center">What Drives Me</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🎯</div>
              <h3 className={styles.valueTitle}>Customer-Focused</h3>
              <p className={styles.valueText}>
                10+ years in hospitality taught me to prioritize user
                experience. Every feature I build starts with understanding the
                end user's needs.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>⚡</div>
              <h3 className={styles.valueTitle}>Problem Solver</h3>
              <p className={styles.valueText}>
                From managing high-volume restaurant operations to debugging
                complex code, I excel at finding efficient solutions under
                pressure.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>💡</div>
              <h3 className={styles.valueTitle}>Continuous Learner</h3>
              <p className={styles.valueText}>
                Completed 800+ hours of intensive bootcamp training and actively
                learning new technologies to stay current in the ever-evolving
                tech landscape.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3 className={styles.valueTitle}>Team Player</h3>
              <p className={styles.valueText}>
                Led teams through busy shifts and critical moments. I understand
                that great products are built through collaboration and clear
                communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Let's Work Together</h2>
            <p className={styles.ctaDescription}>
              Have a project in mind? I'd love to hear about it.
            </p>
            <Link to="/contact" className="btn-primary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
