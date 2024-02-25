import styles from './Container.module.css'

const Container = () => {
    return (
      <>
        <div className={styles.container}>
            <div className={styles.button_container}>
                <img src="/squiggleleft.png"/>
                <div>
                    <img src="/backgroundslider.png" className={styles.center}/>
                    <img src="/slider.png" className={styles.slider}/>
                    <img src="/minihouse.png" className={styles.mini_house_icon} />
                    <img src="/appliances.png" className={styles.mini_appliance_icon} />
                </div>
                <img src="/squiggleright.png"/>
            </div>
            <div className={styles.button_container_seasons}>
                <img src="/slidercircle.png" className={styles.season_slider}/>
                <img src="/autumn.png" className={styles.autumn}/>
                <img src="/summer.png" className={styles.summer}/>
                <img src="/spring.png" className={styles.spring}/>
                <img src="/winter.png" className={styles.winter}/>
                <img src="/seasonsbackground.png"/>
            </div>
        </div>
      </>
    );
  };
  
  export default Container;
  