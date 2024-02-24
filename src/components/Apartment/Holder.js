import Apartment from './Apartment';
import styles from './Holder.module.css'

export default function Holder()
{
    return (
        <>
        <div className={styles.flexbox}>
          <Apartment/>
          <Apartment/>
          <Apartment/>
          <Apartment/>
          <Apartment/>
          <Apartment/>
          <Apartment/>
          <Apartment/>
        </div>
        </>
    );
}
