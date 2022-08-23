import react from "react"
import style from "./../../asserts/css/service_links.module.css"
import Footer from "../footer"

const ParentingDeescalationTechniques = () => {
  return (
    <div>
      <div className={style.general_title}>
        <h1>Parenting Workshops</h1>
      </div>
      <div className={style.general_main}>
        <div className={style.general_card}>
          <img src="/assets/images/services/3-5.jpeg" />
          <h1>De-escalation Techniques</h1>
        </div>
        <div className={style.busin_text}>
          <p>
            It is easy to fall into the pattern of reacting in a negative way
            when your child displays shocking or unwanted behavior, ultimately
            making the situation worse than it had to be. Unconsciously
            reflecting the negative attitudes of our children is normal but it
            highlights the lack of ability to adequately de-escalate a shaky
            situation. This course will impart you with simple strategies that
            will help you de-escalate tension and bring your child back on the
            right track through positive and constructive means.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ParentingDeescalationTechniques
