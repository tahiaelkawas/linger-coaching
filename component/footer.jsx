import react from "react";
import styles from '../asserts/css/home.module.css'
import { useState, useEffect } from "react"

const Footer = () => {
    const [backtoTop, setbacktoTop] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setbacktoTop(true)
            } else {
                setbacktoTop(false)
            }
        })
    }, [])

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div>
            <div className={styles.talk_text}>
                <h2>Let's Talk.</h2>
                <a href="#">Schedule a Consultation Today</a>
            </div>
            <div>
                <div className={styles.top_footer}>
                    <div className={styles.foot_top_first}>
                        <img src="/assets/images/foot_logo.png" />
                    </div>
                    <div className={styles.foot_top_sec}>
                        <h5>Contact</h5>
                        <h4><a href="#">904-495-9848</a></h4>
                        <h5>Mailing Address</h5>
                        <p>3501 N. Ponce De Leon Blvd.<br />
                            Suite 106<br />
                            St. Augustine, FL 32084-1403</p>
                    </div>
                    <div className={styles.foot_top_third}>
                        <h2>Beacon Business Advisors</h2>
                        <span>Proud Member of</span>
                        <div >
                            <img src="/assets/images/flag_logo.jpg" />
                        </div>
                    </div>
                </div>
                <div className={styles.bot}></div>
            </div>
            <div className={styles.copy_right}>
                {
                    backtoTop && (
                        <button className={styles.back_top} onClick={scrollTop}>^</button>
                    )
                }
                <a href="#">Privacy Policy</a>
                <br />
                <br />
                <span>© 2021 Beacon Business Advisors – All rights reserved.</span>
                <a href="#">Web Design by Ward Design Group – St. Augustine, Florida</a>
            </div>
        </div>
    )
};

export default Footer;