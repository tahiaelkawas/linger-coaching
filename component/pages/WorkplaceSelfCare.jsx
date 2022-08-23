import react from "react"
import style from "./../../asserts/css/service_links.module.css"
import Footer from "../footer"

const WorkplaceSelfCare = () => {
  return (
    <div>
      <div className={style.general_title}>
        <h1>Workplace Workshops</h1>
      </div>
      <div className={style.general_main}>
        <div className={style.general_card}>
          <img src="/assets/images/services/2-5.jpeg" />
          <h1>Self care & Life Balance </h1>
        </div>
        <div className={style.busin_text}>
          <p>
            It is easy to neglect personal enjoyment during employment resulting
            in an unhealthy cycle that can profoundly impact your mental health
            and wellbeing. Many individuals often report feeling different
            sources of pressure from deadlines, goals and other
            workplace-related demands that lead them to lose sight of their own
            goals. Accordingly, it is fundamental to set boundaries and allocate
            time and energy to caring for yourself and creating a healthy
            balance between work and personal life. Throughout this course, you
            will learn how to cultivate this and place your well-being at the
            forefront of your life.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default WorkplaceSelfCare
