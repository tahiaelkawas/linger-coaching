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
        <h4>Welcome to Linger Coaching
Based in the Pacific Northwest, Linger Coaching aims to implement positive behavior change in clients through the dispensing of high-quality workshops. As a behavior coaching business, the company’s principle mission is to ensure that every individual receives adequate coaching in all aspects of their environment whether it be at the workplace, school or even at home. Furthermore, through extensive practice, they have integrated the most impactful methods of mindfulness cultivation and behavior change which they believe is central to creating positive interpersonal relations in one’s life and daily functioning.
</h4>
          <h2>Changing behavior is most effective through changing the mindset. </h2>
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
