import react from "react"
import style from "./../../asserts/css/service_links.module.css"
import Footer from "../footer"

const ParentingMindfulness = () => {
  return (
    <div>
      <div className={style.general_title}>
        <h1>Parenting</h1>
      </div>
      <div className={style.general_main}>
        <div className={style.general_card}>
          <img src="/assets/images/services/3-4.jpeg" />
          <h1>Mindfulness</h1>
        </div>
        <div className={style.busin_text}>
          <p>
            During your children’s development, they are constantly evolving and
            expressing new thoughts and behaviors that may be difficult to keep
            up with. In consequence, the style and effectiveness of your
            parenting are always shifting, presenting you with different ways to
            grow and improve. Taking this into account, it is crucial that you
            adopt a growth mindset to your style of parenting and optimize the
            positive impact that you will have on your children. This course
            will teach you how to cultivate the relevant growth mindset and show
            you how and when to properly apply it throughout your parenting.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ParentingMindfulness
