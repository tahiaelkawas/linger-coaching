import style from './../../asserts/css/service_links.module.css';
import Footer from "../footer";

const Office = () => {
    return (
        <div> 
            <div className={style.general_title}>
            <h1>Office Planning</h1>
        </div>
            <div className={style.general_main}>
                <div className={style.general_card}>
                    <img src="/assets/images/office-plan.jpg" />
                    <h1>Beacon Advisors help business owners with Office and Workspace Planning in St. Augustine, Jacksonville, and all around Northeast Florida!</h1>
                </div>
                <div className={style.busin_text}>
                    <p>Personal organizational skills create a professional environment which allows you to better manage a business as an owner or manage a productive work environment for all employees.</p>
                    <p>The benefits of being organized at work can create better:</p>
                        <ul>
                            <li>Time management skills</li>
                            <li>Better communication</li>
                            <li>Goal setting</li>
                            <li>Delegation of work</li>
                            <li>Working under pressure</li>
                            <li>Self motivation</li>
                            <li>Analytical thinking</li>
                            <li>Attention to detail</li>
                            <li>Decision making</li>
                            <li>Strategic planning</li>
                            <li>Time and material cost savings</li>
                            <li>Employee retention</li>
                        </ul>
                    <p>Developing good organizational habits by establishing a well-organized office space, storefront and/or warehouse will help you streamline and maintain the environment needed to run a business efficiently and economically.</p>
                    <p>You get overall better productivity as a team with a sense of calm, better workplace safety and positive morale that can support a mentally healthy workplace. You also establish a sense of trust with other employees, job roles are clear through better communication and defined roles and in return, you get better quality of work from employees and a better chance of employee retention.</p>
                </div>
            </div>
            <Footer />
            </div>
    )
};

export default Office;