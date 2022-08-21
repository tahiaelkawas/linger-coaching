import Link from "next/link";
import Footer from "../footer";
import style from './../../asserts/css/service.module.css';

const Parenting = () => {
    const ServiceData = [
        {
            title: "Care vs Caregiver",
            link: "/parenting-care-vs-caregiver"
        },
        {
            title: "Discipline vs Seeking Professional Help",
            link: "/parenting-discipline-help"
        },
        {
            title: "Social Emotional Learning",
            link: "/parenting-social-emotional"
        },
        {
            title: "Mindfulness",
            link: "/parenting-mindfulness"
        },
        {
            title: "De-escalation Techniques",
            link: "/parenting-de-escalation-techniques"
        }
    ]
      
    return (
        <div className={style.service_container}>
            <div className={style.Servic_link_container}>
                <h2>Parenting Workshop</h2>
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

export default Parenting;
