import react from "react"
import style from "./../../asserts/css/service_links.module.css"
import Footer from "../footer"

const WorkplaceEffectiveCommunication = () => {
  return (
    <div>
      <div className={style.general_title}>
        <h1>Workplace Workshops</h1>
      </div>
      <div className={style.general_main}>
        <div className={style.general_card}>
          <img src="/assets/images/services/2-7.jpeg" />
          <h1>Effective Communication & Active Listening Skills</h1>
        </div>
        <div className={style.busin_text}>
          <p>
            Communication and listening go hand in hand, with one process
            complementing the other resulting in a powerful combination. When
            applied to the workplace, communication and listening skills are
            fundamental components for navigating and manipulating your
            professional environment with ease. Throughout this course, you will
            learn how to adequality integrate both effective communication and
            active listening to your working environment to build your
            foundation as an employee.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default WorkplaceEffectiveCommunication
