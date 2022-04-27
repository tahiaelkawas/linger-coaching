import Link from "next/link";
import react from "react";
import Footer from "../footer";
import style from './../../asserts/css/service.module.css';
const Services = () => {
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
            title: "Cash Management",
            link: "page not found"
        },

    ]
    return (
        <div>
            <div className={style.servic_title}>
                <h4>If you are ‘driving’ a business, you need to have a clear view of the road, looking forward (future), sideways (pivot/change) and behind you (results). Our services can help lead to better predictability, sustainable growth and healthy outcomes.</h4>
            </div>
            <div className={style.Servic_link_container}>
                <h2>Our Services</h2>
                <div className={style.servic_card_container}>
                    {
                        ServiceData.map((item, index) => (
                            <div className={style.servic_card} key={index}>
                                <Link href={item.link}>
                                    <h5>{item.title}</h5>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={style.servic_box_container}>
                <div className={style.service_bot_logo}>
                    <img src="/assets/images/WordBubble-blue.png" alt="" />
                </div>
                <div className={style.servic_box}>
                    <ul>
                        <h4>
                            <li>82% of businesses fail because of inconsistent or insufficient cash flow. <span>(Fundera)</span></li>
                        </h4>
                        <h4>
                            <li> 40% of Small Businesses are profitable.  <span> (Small Biz Trends)</span></li>
                        </h4>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Services;