import styles from './Container.module.css'

const Container = () => {
    return (
      <>
        <div className={styles.container}>
            <div className={styles.button_container}>
                <img src="/squiggleleft.png"/>
                <div>
                    <img src="/backgroundslider.png"/>
                    <img src="/slider.png" className={styles.slider}/>;
                </div>
                <img src="/squiggleright.png"/>
            </div>
            <div className={styles.button_container_seasons}>
                <img src="/seasonsbackground.png"/>
            </div>
        </div>
      </>
    );
  };
  
  export default Container;
  