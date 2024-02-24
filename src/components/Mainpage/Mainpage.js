import styles from './Mainpage.module.css'
import Holder from "../Apartment/Holder"
import Container from "../Switch/Container"

const Mainpage = () => {
    return (
      <>
        <div className={styles.container}>
          <Container/>
          <Holder/>
        </div>
      </>
    );
  };
  
  export default Mainpage;
