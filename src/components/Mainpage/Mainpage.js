import styles from './Mainpage.module.css'
import Holder from "../Apartment/Holder"
import Container from "../Switch/Container"
import Navbar from "../common/Navbar/Navbar"

const Mainpage = () => {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.inner}>
            <Navbar/>
            <Container/>
            <Holder/>
          </div>
        </div>
      </>
    );
  };
  
  export default Mainpage;
