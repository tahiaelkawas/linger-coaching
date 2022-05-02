import reactDom from "react-dom";
import style from './../../asserts/css/service_links.module.css';
import Footer from "../footer";

const WorkForec = () => {
    return (
        <div>
            <div className={style.general_title}>
            <h1>Workforce Planning</h1>
        </div>
            <div className={style.general_main}>
                <div className={style.general_card}>
                    <img src="/assets/images/work-plan.jpg" />
                    <h1>Beacon Advisors help guide business owners with Workforce Planning in St. Augustine, Jacksonville, and all around Northeast Florida!</h1>
                </div>
                <div className={style.busin_text}>
                    <p><strong>We will work with you to develop a Workforce Plan that will meet your Business Plan goals and objectives.</strong></p>
                        <ul className="list_text">
                            <li> Identify the current gaps in function or skill set within your business</li>
                            <li>Create an Organization Chart</li>
                            <li>Create Job Descriptions</li>
                            <li>Evaluate and grade all positions</li>
                            <li>Prepare job posting for open or new positions</li>
                            <li>Provide a succession planning template for use in reviewing employees</li>
                        </ul>
                    <p> <strong>The benefits of a good Employment plan include:</strong></p>
                        <ul className="list_text">
                            <li> Clearly defined daily roles and responsibilities</li>
                            <li> Greater overall business and employee efficiency</li>
                            <li>A healthy work environment</li>
                            <li>A motivated workforce</li>
                            <li>Heightened employee retention levels</li>
                            <li>Higher customer satisfaction and reviews</li>
                            <li>More predictable growth and results</li>
                        </ul>
                </div>
            </div>
            <Footer />
            </div>
    )
};

export default WorkForec;