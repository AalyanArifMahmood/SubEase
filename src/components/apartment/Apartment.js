import styles from "./Apartment.module.css";

const Apartment = () => {
  return (
    <>
      <div className={styles.outer}>
        <img src="/home.png" className={styles.mainimage} />
        <div className={styles.maintext}>Grand Ave, Saint Paul</div>
        <div className={styles.subtext}>50 miles away</div>
        <div className={styles.subtext}>May 2024</div>
        <div className={styles.flexbox}>
          <div className={styles.maintext}>
            $600<span className={styles.text}>/person/month</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apartment;
