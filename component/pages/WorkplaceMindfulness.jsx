import react from "react"
import style from "./../../asserts/css/service_links.module.css"
import Footer from "../footer"

const WorkplaceMindfulness = () => {
  return (
    <div>
      <div className={style.general_title}>
        <h1>Workplace Workshop</h1>
      </div>
      <div className={style.general_main}>
        <div className={style.general_card}>
          <img src="/assets/images/services/2-4.jpeg" />
          <h1>Mindfulness</h1>
        </div>
        <div className={style.busin_text}>
          <p>
            Our work-life occupies a large portion of the day and oftentimes
            gives rise to significant stress in our lives. Whether it comes from
            tight deadlines, difficult conversations or long hours, there is a
            constant risk of being exposed to stressful events. Mindfulness is a
            scientifically proven method for efficiently managing or
            counteracting stressful events stemming from the workplace and it is
            essential to integrate it within your routine. The contents of this
            course aim to guide you through the core tenets of mindfulness for
            you to effectively apply them throughout your day.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default WorkplaceMindfulness
