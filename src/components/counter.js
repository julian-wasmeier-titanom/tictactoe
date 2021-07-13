import React from "react";
import styles from "./counter.module.css";

const Counter = ({ XCounter, YCounter, resetCounter }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        {" "}
        <p className={styles.text}>X: {XCounter} </p>
        <p className={styles.text}>O: {YCounter} </p>
      </div>
      <button className={styles.resetButton} onClick={resetCounter}>
        Reset Counter
      </button>
    </div>
  );
};

export default Counter;
