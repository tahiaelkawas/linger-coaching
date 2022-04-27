import react from "react";
import Footer from "../footer";
import styles from './../../asserts/css/home.module.css';
import Link from 'next/link';

const Home = () => {
  const ServiceData = [
    {
      title: "Business Planning",
      text: "Does your business have a Roadmap to a more successful, profitable and predictable business which rests upon a comprehensive, strategic and trackable Business Plan?  ",
      link: "/business-plan"
    },
    {
      title: "Office Planning",
      text: "Chaos in a workplace can hinder efficiency and a small business’ bottom line. An organized workplace will help you streamline and maintain a professional environment needed to run a business efficiently, economically and support a positive company culture. Are you organized? ",
      link: "/office-plan"
    },
    {
      title: "Contingency Planning",
      text: "Do you have backup plans based upon honest risk assessments, prepared and ready to act upon in the event of unplanned circumstances? Today’s volatile business, political and economic climate requires that stability not be taken for granted. ",
      link: "/contingencg-plan"
    },
    {
      title: "Pivot/Change Planning",
      text: "In today’s constantly changing business environment, there is a need to be able to pivot, reimagine your business or quickly adapt to change. This will continue to be more important to survival than ever. Do you have a plan?  ",
      link: "/pivot-plan"
    },
    {
      title: "Workforce Planning",
      text: " A key component of the success of your Small Business is a Workforce Plan that is supportive of your company culture along with its current and future objectives. Do you have a Workforce Plan? ",
      link: "/workforce-plan"
    },
    {
      title: "Short Term Business Forecasting ",
      text: "  Create a better understanding of your next 6-12 month short-term goals and objectives along with the actions you need to take to succeed. Do you have a Short-Term Business Forecast?",
      link: "/short-plan"
    },
  ]
  return (
    <>
      <div className={styles.home_container}>
        <div className={styles.home_title}>
          <h4>BUSINESS ADVISORS, COACHES AND CONSULTANTS</h4>
          <p>Beacon Business Advisors works collaboratively with business owners in the areas of business planning, employee retention, staffing, cash management, process creation, contingency planning, pivot planning and execution. The result is a business that is more aligned with a business owner’s vision and goals, enjoying increased profit and performance in less time and with less effort. Beacon Business Advisors also support business owners with their new business development. We partner with executives and small businesses that are looking to enhance their leadership and management performance to achieve long term profitability and business growth. Beacon Business Advisors is a St Augustine based Business Advisory and Coaching firm, consulting with clients in the Northeast Florida area including Jacksonville, St Augustine and St Johns County area.</p>
          <h4>BEACON BUSINESS ADVISORS WILL WORK WITH YOU TO</h4>
          <h1>Plan. Organize. Perform</h1>
          <ul className={styles.title_box}>
            <h4>
              <li> Small Businesses account for 99.7% of all businesses in the U.S.A. <span>(Fundera)</span></li>
            </h4>
            <h4>
              <li>Only 33% of small businesses have a formal Business Plan.  <span>  (Thryv)</span></li>
            </h4>
          </ul>
        </div>
        <div className={styles.title_img}>
          <img src="/assets/images/home_title.png" />
        </div>
        <div className={styles.home_service}>
          <h1 className={styles.service_text}>Our Services</h1>
          {
            ServiceData.map((item, index) => (
              <div className={styles.service_card} key={index}>
                <Link href={item.link} >
                  <a href="#">
                    <h1>{item.title}</h1>
                    <p>{item.text}</p>
                  </a>
                </Link>
              </div>
            )
            )
          }
        </div>
        <div className={styles.talk_sec}>
          <ul className={styles.title_box}>
            <h4>
              <li>19% of Small Business Owners work over sixty-hours a week.  <span>(Fundera)</span></li>
            </h4>
            <h4>
              <li> 63.3% of companies say retaining employeesis actually harder than hiring them.  <span> (Smarp)</span></li>
            </h4>
          </ul>

        </div>
        <Footer />
      </div>
    </>
  )
}
export default Home;