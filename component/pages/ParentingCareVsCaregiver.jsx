import react from "react"
import style from "./../../asserts/css/service_links.module.css"
import Footer from "../footer"

const ParentingCareVsCaregiver = () => {
  return (
    <div>
      <div className={style.general_title}>
        <h1>Parenting Workshop</h1>
      </div>
      <div className={style.general_main}>
        <div className={style.general_card}>
          <img src="/assets/images/services/3-1.jpeg" />
          <h1>Care vs Caregiver</h1>
        </div>
        <div className={style.busin_text}>
          <p>
            To care for and be a caregiver to your children are two separate
            things, and it is important to learn the distinction between the two
            concepts. As a parent, your role is to first and foremost act as
            unconditional support to your children and do whatever is necessary
            for them to thrive and be healthy. To simply care is not sufficient
            and for that to happen, you must be their caregiver. When consulting
            this course, you will begin to see the difference between merely
            caring and being a caregiver as well as understand the role that you
            need to uphold during your parenting.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ParentingCareVsCaregiver
