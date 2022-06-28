import react from "react";
import Footer from "../footer";
import styles from './../../asserts/css/home.module.css';
import Link from 'next/link';
import ServiceBox from "../serviceBox";

const Home = () => {
  return (
    <>
      <div className={styles.home_container}>
      <video className={styles.heroimg} autoPlay muted loop>
                 <source src="/home_video.mp4" type="video/mp4"/>
            </video>
        <div className={styles.home_title}>
        <h1>Linger Coaching Workshops</h1>
        <h4>Linger Coaching is a local Pacific Northwest behavior coaching business. The owners are aspired businesswomen implementing behavior changes in their clients through workshops. They believe that proper behavior coaching is essential to every individual&#39;s day-to-day life, whether at workplace, school, or even at home. In addition, they have learned that the cultivation of mindfulness and behavior change increase positive healthy interactions in everyone&#39;s daily life..</h4>
          <h1>Changing behavior is most effective through changing the mindset. </h1>
        </div>
        <div className={styles.title_img}>
          <img src="/assets/images/new/image2.jpeg" />
        </div>
        <ServiceBox />
        <div className={styles.landing_images}>
        <img src="/assets/images/new/image3.jpeg" />
        <img src="/assets/images/new/image5.jpeg" />
        </div>    
        <Footer />
      </div>
    </>
  )
}
export default Home;