import Link from "next/link";
import Footer from "../footer";
import style from './../../asserts/css/service.module.css';

const Workplace = () => {
    const ServiceData = [
        {
            title: "DISC",
            link: "/workplace-disc"
        },
        {
            title: "Social Emotional Learning ",
            link: "/workplace-social-emotional"
        },
        {
            title: "Growth Mindset",
            link: "/workplace-growth"
        },
        {
            title: "Mindfulness",
            link: "/workplace-mindfulness"
        },
        {
            title: "Self Care & Life Balance",
            link: "/workplace-self-care"
        },
        {
            title: "Conflict Resolutions",
            link: "/workplace-conflict-resolutions"
        },
        {
            title: "Effective Communication & Active Listening Skills",
            link: "/workplace-effective-communication"
        }
    ]
      
    return (
        <div className={style.service_container}>
            <div className={style.Servic_link_container}>
                <h2>Workplace Workshop</h2>
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

export default Workplace;
