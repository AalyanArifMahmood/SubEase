/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import React from "react";
import styles from "./page.module.css";
import Navbar from "../../components/common/Navbar/Navbar";
import {
  Cancel,
  CheckCircle,
  EmojiNature,
  KingBed,
  Pets,
  Weekend,
  Wifi,
} from "@material-ui/icons";
import { Divider } from "@material-ui/core";

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

          <div className={styles.metaDataDiv}>
            <div className={styles.metaDataIcons}>
              <Weekend style={{ fontSize: 50 }} />
              <CheckCircle style={{ color: "#58BB89" }} />
            </div>
            <Divider orientation="vertical" />
            <div className={styles.metaDataIcons}>
              <Wifi style={{ fontSize: 50 }} />
              <CheckCircle style={{ color: "#58BB89" }} />
            </div>
            <Divider orientation="vertical" />
            <div className={styles.metaDataIcons}>
              <Pets style={{ fontSize: 50 }} />
              <Cancel style={{ color: "#E22F2F" }} />
            </div>
            <Divider orientation="vertical" />
            <div className={styles.metaDataIcons}>
              <KingBed style={{ fontSize: 50 }} />
              <p>2</p>
            </div>
          </div>

          <div className={styles.metaDataDiv}>
            <div className={styles.personHeader}>
              <img src="/Person.png" />
              <p className={styles.personTitle}>Michelle Johnson</p>
            </div>
            <p className={styles.personDesc}>
              Michelle is a senior at Macalester studying Economics and
              Political Science. I am leaving for study abroad and would like a
              clean person to take over the apartment.
            </p>
          </div>
        </div>
        <div style={{ height: 50 }}> </div>
      </div>
    </div>
  );
};

export default Page;
