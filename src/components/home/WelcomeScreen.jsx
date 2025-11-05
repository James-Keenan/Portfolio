import React, { useState, useEffect } from "react";
import styles from "./WelcomeScreen.module.css";

const WelcomeScreen = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  const handleDismiss = () => {
    setFadeOut(true);
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  useEffect(() => {
    // Auto-dismiss after 3 seconds
    const timer = setTimeout(() => {
      handleDismiss();
    }, 3000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`${styles.welcomeScreen} ${fadeOut ? styles.fadeOut : ""}`}
      onClick={handleDismiss}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <div className={styles.loader}>
          <div className={styles.loaderBar}></div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
