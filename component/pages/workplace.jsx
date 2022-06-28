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
            title: "Social emotional learning (Self care)",
            link: "/workplace-social-emotional"
        },
        {
            title: "Growth mind set",
            link: "/workplace-growth"
        },
        {
            title: "Mindfulness",
            link: "/workplace-mindfulness"
        },
        {
            title: "Self care/life balance",
            link: "/workplace-self-care"
        },
        {
            title: "Conflict resolutions",
            link: "/workplace-conflict-resolutions"
        },
        {
            title: "Effective communication and active listening skills",
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