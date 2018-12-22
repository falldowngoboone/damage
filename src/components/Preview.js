import React from "react";

import styles from "./Preview.module.scss";

export default function Preview() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.paper} />
      <div className={styles.paper} />
      <button className={styles.exportButton} />
    </div>
  );
}
