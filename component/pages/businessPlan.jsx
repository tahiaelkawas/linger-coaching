import react from "react";
import style from './../../asserts/css/service_links.module.css';
import Footer from "../footer";

const BusinessPlan = () => {
    return (
        <div>
            <div className={style.general_title}>
                <h1>Business Planning</h1>
            </div>
            <div className={style.general_main}>
                <div className={style.general_card}>
                    <img src="/assets/images/busin-planning.jpg" />
                    <h1>Beacon Advisors help business owners with Business Planning in St. Augustine, Jacksonville, and all around Northeast Florida!</h1>
                </div>
                <div className={style.busin_text}>
                    <p>Business Planning for small business owners is not a one size fits all exercise. Every successful business is built upon a sound Business Plan that clearly defines your vision, mission, goals and objectives. That Business Plan should also include a strategy or Roadmap detailing how your business will perform successfully. However, small business owners often lack the time, manpower or objective vantage point to effectively plan for the future.</p>
                    <p>Beacon Business Advisors will meet with each small business owner to have an honest and thorough review of their businesses history and current state. This will guide the development and type of Business Plan that best suits your needs. We will work collaboratively with each small business owner to define a clear and realistic vision for the future. This will include the development of operational, organizational, financial, marketing and growth plans as needed. Each Business Plan will include trackable metrics and or milestones for daily, weekly, monthly and annual guidance and be accompanied and supported by an organization plan (personnel and office/workspace) that defines business roles and responsibilities. Finally, Beacon Business Advisors will work alongside you during the entire planning process, its execution and regularly thereafter to review your progress and continuing needs.</p>
                        <ul>
                            <li>Short Term Action Planning (3 - 6 months)</li>
                            <li>Annual Business Plan</li>
                            <li>Strategic Business Plan (1-3 years)</li>
                            <li>Exit Planning</li>
                            <li>Contingency Planning</li>
                            <li>Pivot/Change Planning</li>
                        </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default BusinessPlan;