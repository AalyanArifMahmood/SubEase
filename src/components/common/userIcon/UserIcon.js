import React from "react";
import styles from "./userIcon.module.css";
const UserIcon = () => {
  return (
    <div className={styles.userIconContainer}>
      <img src="newAppliance.png" />
      <img src="newListing.png" />
      <img src="/Person.png" />
    </div>
  );
};

export default UserIcon;
