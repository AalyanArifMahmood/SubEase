import styles from './Container.module.css'

const Container = () => {
    return (
      <>
        <div className={styles.container}>
            <div className={styles.button_container}>
                <img src="/backgroundslider.png"/>
            </div>
            <div className={styles.button_container_seasons}>
                <img src="/seasonsbackground.png"/>
            </div>
        </div>
      </>
    );
  };
  
  export default Container;
  