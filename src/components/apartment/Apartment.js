import styles from './Apartment.module.css'

export default function Apartment()
{
    return (
        <>
        <div className={styles.outer}>
            <img src="/home.png" className='mainimage'/>
            <div className={styles.maintext}>Grand Ave, Saint Paul</div>
            <div className={styles.subtext}>50 miles away</div>
            <div className={styles.subtext}>May 2024</div>
            <div className={styles.flexbox}>
                <div className={styles.maintext}>$600</div>
                <div className={styles.text}>/person/month</div>    
            </div>
        </div>
        </>
    );
}