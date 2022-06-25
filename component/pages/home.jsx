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
                 <source src="/Video.mov" type="video/mp4"/>
            </video>
        <div className={styles.home_title}>
        <h1>Linger Coaching Workshops</h1>
        <h4>Linger Coaching is a local Pacific Northwest behavior coaching business. The owners are aspired businesswomen implementing behavior changes in their clients through workshops. They believe that proper behavior coaching is essential to every individual&#39;s day-to-day life, whether at workplace, school, or even at home. In addition, they have learned that the cultivation of mindfulness and behavior change increase positive healthy interactions in everyone&#39;s daily life..</h4>
          <h1>Plan. Organize. Perform</h1>
          {/* <ul className={styles.title_box}>
            <h4>
              <li> Small Businesses account for 99.7% of all businesses in the U.S.A. <span>(Fundera)</span></li>
            </h4>
            <h4>
              <li>Only 33% of small businesses have a formal Business Plan.  <span>  (Thryv)</span></li>
            </h4>
          </ul> */}
        </div>
        <div className={styles.title_img}>
          <img src="/assets/images/new/image2.jpeg" />
        </div>
        {/* <div className={styles.home_service}>
          <h1 className={styles.service_text}>Our Services</h1>
          {
            ServiceData.map((item, index) => (
              <div className={styles.service_card} key={index}>
                <Link href={item.link} >
                  <a>
                    <h1>{item.title}</h1>
                  </a>
                </Link>
              </div>
            )
            )
          }
        </div> */}
        <ServiceBox />
        {/* <div className={styles.talk_sec}>
          <ul className={styles.title_box}>
            <h4>
              <li>19% of Small Business Owners work over sixty-hours a week.  <span>(Fundera)</span></li>
            </h4>
            <h4>
              <li> 63.3% of companies say retaining employeesis actually harder than hiring them.  <span> (Smarp)</span></li>
            </h4>
          </ul>

        </div> */}
        <Footer />
      </div>
    </>
  )
}
export default Home;