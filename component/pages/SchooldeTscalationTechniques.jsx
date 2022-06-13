import react from "react"
import style from "./../../asserts/css/service_links.module.css"
import Footer from "../footer"

const SchooldeTscalationTechniques = () => {
  return (
    <div>
      <div className={style.general_title}>
        <h1>School</h1>
      </div>
      <div className={style.general_main}>
        <div className={style.general_card}>
          <img src="/assets/images/busin-planning.jpg" />
          <h1>De-escalation techniques</h1>
        </div>
        <div className={style.busin_text}>
          <p>
          De-escalation refers to the process of defusing conflicts before they develop into
          harmful situations. School is an environment that is accompanied by frequent
          behavioural outbursts that have the potential to disrupt the learning and functioning of
          other students. De-escalation is key to maintaining a productive learning environment
          and it is an important skill to learn. Throughout this course, you will learn the various de-
          escalation techniques that have been used throughout educational settings and learn
          how to apply them to different scenarios.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SchooldeTscalationTechniques
