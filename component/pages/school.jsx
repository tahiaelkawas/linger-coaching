import Link from "next/link";
import Footer from "../footer";
import style from './../../asserts/css/service.module.css';

const School = () => {
    const ServiceData = [
        {
            title: "DISC",
            link: "/school-disc"
        },
        {
            title: "Social Emotional Learning & Growth Mindset",
            link: "/school-social-emotional-learning"
        },
        {
            title: "De-escalation Techniques",
            link: "/school-de-escalation-techniques"
        },
        {
            title: "Self-Care",
            link: "/school-self-care"
        },
        {
            title: "Effective Communication & Active Listening Skills",
            link: "/school-effective-communication"
        },
        {
            title: "Effective Teaching Techniques",
            link: "/school-effective-teaching-techniques"
        }
       
    ]
      
    return (
        <div className={style.service_container}>
            <div className={style.Servic_link_container}>
                <h2>School Workshop</h2>
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
            <Footer />
        </div>
    )
};

export default School;
