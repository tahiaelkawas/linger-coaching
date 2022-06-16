import react, { useState } from 'react';
import Link from 'next/link';
import styles from '../asserts/css/nav.module.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isHover, setIsHover] = useState(false)
    const [stickyHover, setStickyHover] = useState(false)
    const ServiceData = [
        {
            title: "School Workshop",
            link: "/school"
        },
        {
            title: "Workplace Workshop",
            link: "/workplace"
        },
        {
            title: "Parenting Workshop",
            link: "/parenting"
        }
    ]

    const handleToogle = ()=> {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <div className={styles.stick_nav} id='stick_nav'>
                <ul>
                    <li className={styles.sticky_logo}>
                        <a href='#'></a>
                    </li>
                    <div className={styles.bars} onClick={handleToogle}>
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className={`${ styles.navLinkcontainer} ${isOpen && styles.show}`}>

                    <Link href='/'>
                        <li onClick={()=>setIsOpen(false)}>HOME</li>
                    </Link>
                    <Link href='/about-us'>
                        <li onClick={()=>setIsOpen(false)}>ABOUT US</li>
                    </Link>
                    <div className={styles.special_link} onMouseEnter={() => setStickyHover(!stickyHover)} onMouseLeave={() => setStickyHover(!stickyHover)}>
                        <Link href='/services' >
                            <div>
                                <li onClick={()=>setIsOpen(false)}>OUR SERVICES</li>
                                <div className={stickyHover ? styles.list_hidden_menu : styles.dropdown_menu}  >
                                    {
                                        ServiceData.map((item, index) => (
                                            <Link href={item.link} key={index}>
                                                <h5 onClick={()=>setIsOpen(false)}>{item.title}</h5>
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </Link>
                    </div>
                    </div>
                    {/* <Link href='/blog'>
                        <li>BLOG</li>
                    </Link> */}
                </ul>
                {/* <a href='#' className={styles.stick_btn}>CONTACT US</a> */}
            </div>
        </div>
    )
};

export default Navbar;