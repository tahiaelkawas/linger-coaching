import react from "react"
import style from "./../../asserts/css/service_links.module.css"
import Footer from "../footer"

const SchoolSelfCare = () => {
  return (
    <div>
      <div className={style.general_title}>
        <h1>School</h1>
      </div>
      <div className={style.general_main}>
        <div className={style.general_card}>
          <img src="/assets/images/services/1-4.jpeg" />
          <h1>Self-Care</h1>
        </div>
        <div className={style.busin_text}>
          <p>
          Self-care and optimal functioning go hand in hand, especially in academic settings.
          When the balance between school and personal wellbeing is adequately maintained,
          you will display the strongest impact on your academic performance and mental health.
          Throughout this course, you will learn how to integrate self-care within your academic
          life without neglecting one or the other and be able to thrive within your respective
          subject.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SchoolSelfCare
