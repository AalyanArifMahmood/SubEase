import React from "react";
import styles from "./navbar.module.css";
import Search from "../Search/Search";
import UserIcon from "../userIcon/UserIcon";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <img src="/subease.png" style={{ width: 90 }} />
      </div>
      <Search />
      <UserIcon />
    </div>
  );
};

export default Navbar;
