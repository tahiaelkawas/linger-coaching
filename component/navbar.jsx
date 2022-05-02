import react, { useState } from 'react';
import Link from 'next/link';
import styles from '../asserts/css/nav.module.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isHover, setIsHover] = useState(false)
    const [stickyHover, setStickyHover] = useState(false)
    const ServiceData = [
        {
            title: "Business Planning",
            link: "/business-plan"
        },
        {
            title: "Office Planning",
            link: "/office-plan"
        },
        {
            title: "Contingency Planning",
            link: "/contingencg-plan"
        },
        {
            title: "Pivot/Change Planning",
            link: "/pivot-plan"
        },
        {
            title: "Workforce Planning",
            link: "/workforce-plan"
        },
        {
            title: "Short Term Business Forecasting",
            link: "/short-plan"
        },

    ]

    if (process.browser) {
        window.addEventListener("scroll", scrollFunction);
        function scrollFunction() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                document.getElementById("stick_nav").style.top = "0";
            } else {
                document.getElementById("stick_nav").style.top = "-60px";
            }
        }
    }
    return (
        <div>
            <div className={styles.logo}>
                <a href='#'></a>
            </div>
            <nav className={styles.navbar}>
                <button className={styles.bars} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul className={isOpen ? styles.list_mobile : styles.listItem} onClick={() => setIsOpen(false)}>
                    <Link href='/'>
                        <li>HOME</li>
                    </Link>
                    <Link href='/about-us'>
                        <li>ABOUT US</li>
                    </Link>
                    <div className={styles.special_link} onMouseEnter={() => setIsHover(!isHover)} onMouseLeave={() => setIsHover(!isHover)}>
                        <Link href='/services' >
                            <div>
                                <li>OUR SERVICES</li>
                                <div className={isHover ? styles.list_hidden_menu : styles.dropdown_menu} >
                                    {
                                        ServiceData.map((item, index) => (
                                            <Link href={item.link} key={index}>
                                                <h5>{item.title}</h5>
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </Link>
                    </div>
                    <Link href='/blog'>
                        <li>BLOG</li>
                    </Link>
                </ul>
                <a href='/contact-us' className={styles.stick_btn}>CONTACT US</a>
            </nav>
            <div className={styles.stick_nav} id='stick_nav'>
                <ul>
                    <li className={styles.sticky_logo}>
                        <a href='#'></a>
                    </li>
                    <Link href='/'>
                        <li>HOME</li>
                    </Link>
                    <Link href='/about-us'>
                        <li>ABOUT US</li>
                    </Link>
                    <div className={styles.special_link} onMouseEnter={() => setStickyHover(!stickyHover)} onMouseLeave={() => setStickyHover(!stickyHover)}>
                        <Link href='/services' >
                            <div>
                                <li>OUR SERVICES</li>
                                <div className={stickyHover ? styles.list_hidden_menu : styles.dropdown_menu}  >
                                    {
                                        ServiceData.map((item, index) => (
                                            <Link href={item.link} key={index}>
                                                <h5>{item.title}</h5>
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </Link>
                    </div>
                    <Link href='/blog'>
                        <li>BLOG</li>
                    </Link>
                </ul>
                <a href='#' className={styles.stick_btn}>CONTACT US</a>
            </div>
        </div>
    )
};

export default Navbar;