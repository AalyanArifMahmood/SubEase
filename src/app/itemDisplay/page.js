// pages/CenteredContainer.jsx

import React from "react";
import styles from "./page.module.css";

const page = () => {
  return (
    <div className={styles["centered-page"]}>
      <div className={styles["centered-container"]}>
        {/* Your other components go here */}
        <h1>Hello, World!</h1>
        <p>This is your centered container.</p>
      </div>
    </div>
  );
};

export default page;
