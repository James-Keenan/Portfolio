import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WelcomeScreen from "../components/home/WelcomeScreen";
import styles from "./Home.module.css";

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Check if welcome screen has been shown this session
    const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcome");
    if (!hasSeenWelcome) {
      setShowWelcome(true);
    }
  }, []);

  const handleWelcomeComplete = () => {
    sessionStorage.setItem("hasSeenWelcome", "true");
    setShowWelcome(false);
  };

  if (showWelcome) {
    return <WelcomeScreen onComplete={handleWelcomeComplete} />;
  }

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroLines}></div>
        </div>

        <div className={styles.heroContent}>


          <h1 className={styles.heroTitle}>James Keenan</h1>

          <h2 className={styles.heroSubtitle}>
            Full Stack Developer | Software Engineer
          </h2>

          <p className={styles.heroDescription}>
            Hospitality leader turned software engineer. Building full-stack web
            applications with React, Node.js, and modern JavaScript. Skilled in
            problem-solving, team coordination, and creating efficient
            solutions.
          </p>

          <div className={styles.heroCTA}>
            <Link to="/projects" className={styles.btnPrimary}>
              View Projects
            </Link>
            <Link to="/contact" className={styles.btnSecondary}>
              Get In Touch
            </Link>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>800+</span>
              <span className={styles.statLabel}>Hours Training</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>10+</span>
              <span className={styles.statLabel}>Years Hospitality</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>Persistant</span>
              <span className={styles.statLabel}>Pushes to Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className={styles.techStack}>
        <div className={styles.container}>
          <h3 className={styles.sectionLabel}>CORE TECHNOLOGIES</h3>
          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <div className={styles.techIcon}>📄</div>
              <span>HTML</span>
            </div>
            <div className={styles.techCard}>
              <div className={styles.techIcon}>🎨</div>
              <span>CSS</span>
            </div>
            <div className={styles.techCard}>
              <div className={styles.techIcon}>🟨</div>
              <span>JavaScript</span>
            </div>
            <div className={styles.techCard}>
              <div className={styles.techIcon}>⚛️</div>
              <span>React</span>
            </div>
            <div className={styles.techCard}>
              <div className={styles.techIcon}>🔄</div>
              <span>Redux</span>
            </div>
            <div className={styles.techCard}>
              <div className={styles.techIcon}>🟢</div>
              <span>Node.js</span>
            </div>
            <div className={styles.techCard}>
              <div className={styles.techIcon}>⚡</div>
              <span>Express</span>
            </div>
            <div className={styles.techCard}>
              <div className={styles.techIcon}>⚙️</div>
              <span>REST APIs</span>
            </div>
            <div className={styles.techCard}>
              <div className={styles.techIcon}>🗄️</div>
              <span>SQL</span>
            </div>
            <div className={styles.techCard}>
              <div className={styles.techIcon}>🧪</div>
              <span>Jest</span>
            </div>
            <div className={styles.techCard}>
              <div className={styles.techIcon}>📦</div>
              <span>npm</span>
            </div>
            <div className={styles.techCard}>
              <div className={styles.techIcon}>🐙</div>
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className={styles.container}>
          <h3 className={styles.sectionLabel}>WHAT I DO</h3>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceNumber}>01</div>
              <h4 className={styles.serviceTitle}>Full Stack Development</h4>
              <p className={styles.serviceDescription}>
                End-to-end development of web applications using modern
                frameworks and best practices. From database design to
                responsive UI.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceNumber}>02</div>
              <h4 className={styles.serviceTitle}>React Development</h4>
              <p className={styles.serviceDescription}>
                Building responsive, interactive single-page applications with
                React and Redux. Component-based architecture with modern hooks
                and state management.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceNumber}>03</div>
              <h4 className={styles.serviceTitle}>API Integration</h4>
              <p className={styles.serviceDescription}>
                Creating and consuming RESTful APIs with Node.js and Express.
                Handling data flow and integrating third-party services
                seamlessly.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceNumber}>04</div>
              <h4 className={styles.serviceTitle}>Problem Solving</h4>
              <p className={styles.serviceDescription}>
                Leveraging 10+ years of leadership experience to approach
                technical challenges with critical thinking and efficient
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Let's Build Something Great</h2>
          <p className={styles.ctaText}>
            Have a project in mind? Let's discuss how I can help bring your
            ideas to life.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Start a Conversation →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
