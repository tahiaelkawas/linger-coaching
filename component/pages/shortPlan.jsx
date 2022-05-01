import reactDom from "react-dom";
import style from './../../asserts/css/service_links.module.css';
import Footer from "../footer";

const ShortPlan = () => {
    return (
        <div>
            <div className={style.general_title}>
            <h1>Short Term Business Forecasting</h1>
        </div>
            <div className={style.general_main}>
                <div className={style.general_card}>
                    <img src="/assets/images/busin-planning.jpg" />
                    <h1>Beacon Advisors help business owners with Short Term Business Forecasting in St. Augustine, Jacksonville, and all around Northeast Florida!</h1>
                </div>
                <div className={style.busin_text}>
                    <p>Short Term Business Forecasting, a 6-12 month look ahead, provides your business and team with a clearly defined set of goals, roles and responsibilities. While “forecasting” involves guesswork in addition to hard data, you will be able to quickly test and learn from your results and make informed and intelligent decisions. By revisiting your progress in smaller time increments you will make course changes regularly as needed and the accuracy of your Short Term Forecasts will continue to improve. This can lead to a more efficient workplace, greater productivity and improved customer and employee satisfaction. Beacon Business Advisors Short Term Business Forecasting program includes:</p>
                        <ul>
                            <li>Business Assessment</li>
                            <li>Executive Summary</li>
                            <li>Opportunity/Challenges Review</li>
                            <li>Benchmarking</li>
                            <li>1 year Financial Forecast</li>
                            <li>Financial Dashboard setup</li>
                            <li>Milestones & Metrics</li>
                            <li>Team and Key Roles</li>
                            <li>Bi-weekly 12 month Maintenance Program/Reviews/Revisions</li>
                        </ul>
                    <p>Beacon Business Advisors will work alongside you during the entire Short Term Business Forecasting process, its execution and regularly thereafter to review your progress and continuing needs.</p>
                </div>
            </div>
            <Footer />
            </div>
    )
};

export default ShortPlan;