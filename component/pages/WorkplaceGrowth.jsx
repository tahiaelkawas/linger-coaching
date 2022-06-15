import react from "react"
import style from "./../../asserts/css/service_links.module.css"
import Footer from "../footer"

const WorkplaceGrowth = () => {
  return (
    <div>
      <div className={style.general_title}>
        <h1>Workplace</h1>
      </div>
      <div className={style.general_main}>
        <div className={style.general_card}>
          <img src="/assets/images/services/2-3.jpeg" />
          <h1>Growth Mindset</h1>
        </div>
        <div className={style.busin_text}>
          <p>
            A growth mindset is an essential component of a healthy and
            productive working life. As opposed to a fixed mindset employee who
            believes that their abilities are already set in stone, a growth
            mindset employee will always leave room for improvement resulting in
            constant personal and professional development. This course will
            teach you how to cultivate the appropriate growth mindset needed to
            thrive in your respective field, reach long-term milestones and
            become an integral pillar of your company.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default WorkplaceGrowth
