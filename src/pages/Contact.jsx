import React from "react";
import ContactForm from "../components/forms/ContactForm";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      {/* Hero Section */}
      <section className={styles.contactHero}>
        <div className="container">
          <h1 className={styles.pageTitle}>Get In Touch</h1>
          <p className={styles.pageSubtitle}>
            Have a question or want to work together? Let's connect!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <h2 className={styles.infoTitle}>Let's Talk</h2>
              <p className={styles.infoDescription}>
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out!
              </p>

              <div className={styles.contactMethods}>
                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>📧</div>
                  <div className={styles.methodDetails}>
                    <h3 className={styles.methodTitle}>Email</h3>
                    <a
                      href="mailto:James.Keenan3403@gmail.com"
                      className={styles.methodLink}
                    >
                      James.Keenan3403@gmail.com
                    </a>
                  </div>
                </div>

                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>💼</div>
                  <div className={styles.methodDetails}>
                    <h3 className={styles.methodTitle}>LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/james-keenan3403"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.methodLink}
                    >
                      linkedin.com/in/james-keenan3403
                    </a>
                  </div>
                </div>

                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>🐙</div>
                  <div className={styles.methodDetails}>
                    <h3 className={styles.methodTitle}>GitHub</h3>
                    <a
                      href="https://github.com/James-Keenan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.methodLink}
                    >
                      https://github.com/James-Keenan
                    </a>
                  </div>
                </div>

                <div className={styles.contactMethod}>
                  <div className={styles.methodIcon}>🐦</div>
                  <div className={styles.methodDetails}>
                    <h3 className={styles.methodTitle}>Twitter</h3>
                    <a
                      href="https://x.com/JamesKeenan93"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.methodLink}
                    >
                      @JamesKeenan93
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formSection}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
