import react from "react"
import style from "./../../asserts/css/service_links.module.css"
import Footer from "../footer"

const WorkplaceDisc = () => {
  return (
    <div>
      <div className={style.general_title}>
        <h1>Workplace</h1>
      </div>
      <div className={style.general_main}>
        <div className={style.general_card}>
          <img src="/assets/images/busin-planning.jpg" />
          <h1>DISC (Dominance, Influence, Steadiness, and Conscientiousness)</h1>
        </div>
        <div className={style.busin_text}>
          <p>
          Cooperation and teamwork are key elements of workplace performance. An awareness
          of DISC (Dominance, Influence, Steadiness, and Conscientiousness) profiles has been
          proven to be an essential component to unlocking self-awareness and guiding positive
          change in your job. Throughout this course, you will learn strategies to increase
          connection with your peers, use team-centered language and identify advantages that
          can be harnessed by you and your team. The modules of this course are specifically
          designed to be applied in the workplace and professional settings.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default WorkplaceDisc
