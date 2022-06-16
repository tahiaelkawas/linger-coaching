import react from "react"
import style from "./../../asserts/css/service_links.module.css"
import Footer from "../footer"

const SchoolDisc = () => {
  return (
    <div>
      <div className={style.general_title}>
        <h1>School Workshop</h1>
      </div>
      <div className={style.general_main}>
        <div className={style.general_card}>
          <img src="/assets/images/services/1-1.png" />
          <h1>Disc (Dominance, Influence, Steadiness, and Conscientiousness)</h1>
        </div>
        <div className={style.busin_text}>
          <p>
            DISC (Dominance, Influence, Steadiness, and Conscientiousness) is a powerful and
            profoundly simple tool used for optimizing your academic performance through self-
            awareness training. It is key to creating a shared understanding with your peers
            resulting in favorable learning environments where everyone can learn and relate to one
            another. This course will supply you with relevant knowledge surrounding DISC profiles
            and teach you how to apply them to your specific circumstances.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SchoolDisc
