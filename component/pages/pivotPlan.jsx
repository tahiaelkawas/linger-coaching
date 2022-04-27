import reactDom from "react-dom";
import style from './../../asserts/css/service_links.module.css';
import Footer from "../footer";

const PivotPlan = () => {
    return (
        <div>
            <div className={style.general_title}>
            <h1>Pivot/Change Planning</h1>
        </div>
            <div className={style.general_main}>
                <div className={style.general_card}>
                    <img src="/assets/images/pivot-plan.jpg" />
                    <h1>Beacon Advisors help business owners with Pivoting and Planning for Change in St. Augustine, Jacksonville, and all around Northeast Florida!</h1>
                </div>
                <div className={style.busin_text}>
                    <p>Pivot Planning can take many forms and most often involves a tweak or fundamental change in a product, service, industry, markets served or an owner's personal goals and objectives. In all cases a Pivot involves change and must be supported and it’s roll out plan well communicated by the owner of a business.</p>
                    <p>A small business owner may need or choose to “pivot” their services, products or markets served for a number of reasons. Pivot Planning can be a second phase of a Contingency Plan borne out of an unforeseen change in circumstances or a change by choice in how you do business, who you market to and what you market. In both instances the effectiveness of your pivot will be heightened by an organized Plan just like any Business Plan. Additionally, if your pivot is a change to your historical business model it is important to understand how it will be supported internally and received externally as well as how it will impact your base business.</p>

                </div>
            </div>
            <Footer />
            </div>
    )
};

export default PivotPlan;