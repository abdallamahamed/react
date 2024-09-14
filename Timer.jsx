import styles from "./timer.module.scss";
import React from "react";

const Timer = () => {
  return (
    <div className={styles.countDown}>
      <h1>VONTES END IN</h1>
      <div className={styles.timer}>
        <div className={styles.digit_text}>
          <span className={styles.digit}>08</span>
          <span className={styles.text}>days</span>
        </div>
        <div className={styles.digit_text}>
          <span className={styles.digit}>01</span>
          <span className={styles.text}>haures</span>
        </div>
        <div className={styles.digit_text}>
          <span className={styles.digit}>20</span>
          <span className={styles.text}>minutis</span>
        </div>
        <div className={styles.digit_text}>
          <span className={styles.digit}>33</span>
          <span className={styles.text}>seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
