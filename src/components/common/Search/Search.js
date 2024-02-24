"use client";

import React from "react";
import styles from "./search.module.css";
import { SearchOutlined } from "@material-ui/icons";

const Search = () => {
  return (
    <div className={styles.searchBox}>
      <div style={{ opacity: 0.5 }}>Search...</div>
      <div className={styles.searchButton}>
        <SearchOutlined style={{ color: "white" }} />
      </div>
    </div>
  );
};

export default Search;
