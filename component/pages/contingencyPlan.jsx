import reactDom from "react-dom";
import style from './../../asserts/css/service_links.module.css';
import Footer from "../footer";

const Contingency = () => {
    return (
        <div><div className={style.general_title}>
            <h1>Contingency Planning</h1>
        </div>
            <div className={style.general_main}>
                <div className={style.general_card}>
                    <img src="/assets/images/contingency-plan.jpg" />
                    <h1>Beacon Advisors help business owners with understanding and executing wise Contingency Planning in St. Augustine, Jacksonville, and all around Northeast Florida!</h1>
                </div>
                <div className={style.busin_text}>
                    <p>Business Contingency Plans are backup plans or strategies prepared to allow for small business owners and their employees to respond effectively to unforeseen events materially impacting their original business plan. Having a strong Plan B in place will allow your business to act quickly to resolve the risk of unplanned negative developments and protect the future of your business.</p>
                    <p>Contingency Plans can be developed for multiple risk scenarios. They should be ready, waiting and familiar to business owners and their employees. They provide peace of mind. Beacon Business Advisors will work with you to identify all potential risks that might impact your business. Their likelihood and impact (financial, operational, business value) will be weighed and we will then work with you to develop Contingency Plans for each of the top risks. Each Contingency Plan will define the risk, take action event, checklist of action items and who will be responsible for the Plan and its overall timeline.</p>

                </div>
            </div>
            <Footer /></div>
    )
};

export default Contingency;