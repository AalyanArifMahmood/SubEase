/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import React from "react";
import styles from "./page.module.css";
import Navbar from "../../components/common/Navbar/Navbar";
import { EmojiNature } from "@material-ui/icons";

const Page = () => {
  return (
    <div className={styles["centered-page"]}>
      <div className={styles["centered-container"]}>
        <Navbar />
        <div style={{ height: "80vh" }}>
          <div className={styles.imgscontainer}>
            <img src="/home3.png" className={styles.listingImg} />
            <img src="/home2.png" className={styles.listingImg} />
            <img src="/home4.png" className={styles.listingImg} />
            <img src="/home5.png" className={styles.listingImg} />
          </div>
        </div>

        <div className={styles.listingTitle}>
          <EmojiNature style={{ fontSize: 80 }} />
          <div className={styles.listingHeading}>
            Beautiful 2 Bedroom Apartment on Grand |{" "}
            <span style={{ opacity: 0.5 }}>Jan - May 2024</span>
          </div>
        </div>

        <div className={styles.listingMetadata}>
          <div className={styles.metaDataDiv}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <p>
                {" "}
                <span className={styles.metaDataTitle}>$750</span> / Person /
                Month
              </p>
              <div className={styles.actionButton}>Contact Student</div>
            </div>
          </div>
          <div className={styles.metaDataDiv}>hi</div>
          <div className={styles.metaDataDiv}>hi</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
{
  /* <div
          style={
            dark
              ? { opacity: 0, "user-select": none }
              : {
                  opacity: 1,
                  backgroundColor: "black",
                  width: "300%",
                  height: "300%",
                  top: -100,
                  left: -100,
                  position: "absolute",
                  zIndex: -1,
                  "user-select": none,
                }
          }
        ></div> */
}
