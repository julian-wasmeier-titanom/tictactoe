import React from "react";
import styles from "./fieldstyle.module.css";

const FieldItem = ({ id, state, onClick, running }) => {
  return (
    <div
      className={`${styles.container} ${id % 2 === 0 ? styles.blue : ""}`}
      onClick={() => {
        onClick(id);
      }}
    >
      {state === "O" && (
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
      )}
      {state === "X" && (
        <div className={styles.x}>
          <span className={styles.line1} />
          <span className={styles.line2} />
        </div>
      )}
      {state === "empty" && (
        <div
          className={`${styles.empty} ${
            !running ? styles.noPointer : styles.pointer
          }`}
        ></div>
      )}
    </div>
  );
};

export default FieldItem;
