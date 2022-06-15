import react from "react"
import style from "./../../asserts/css/service_links.module.css"
import Footer from "../footer"

const WorkplaceSocialEmotional = () => {
  return (
    <div>
      <div className={style.general_title}>
        <h1>Workplace</h1>
      </div>
      <div className={style.general_main}>
        <div className={style.general_card}>
          <img src="/assets/images/services/2-2.jpeg" />
          <h1>Social-emotional learning</h1>
        </div>
        <div className={style.busin_text}>
          <p>
            Workplace environments are fraught with unspoken rules, oftentimes
            strict hierarchical structures and require particular social skills
            to be navigated efficiently. This makes for an extremely dynamic
            environment that demands a heightened awareness of one’s social
            emotions. Throughout this course, you will be familiarized with the
            core principles of Social Emotional Learning (SEL) and learn how to
            manage emotions, establish positive relationships, make responsible
            decisions and express empathy for your co- workers.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default WorkplaceSocialEmotional
