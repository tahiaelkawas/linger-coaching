import react from "react"
import style from "./../../asserts/css/service_links.module.css"
import Footer from "../footer"

const ParentingSocialEmotional = () => {
  return (
    <div>
      <div className={style.general_title}>
        <h1>Parenting</h1>
      </div>
      <div className={style.general_main}>
        <div className={style.general_card}>
          <img src="/assets/images/busin-planning.jpg" />
          <h1>Social-emotional learning</h1>
        </div>
        <div className={style.busin_text}>
          <p>
            The way you treat your children is oftentimes a reflection of your internal state. To
            become a model parent, it is important to have a strong awareness of your emotions
            and understand how to relate them to your children as this is what they will assimilate
            throughout their growth. This course will guide you through the various steps that you
            will need to face in order to optimize your social-emotional learning (SEL) to benefit not
            only your child but the relationship between the both of you.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ParentingSocialEmotional
