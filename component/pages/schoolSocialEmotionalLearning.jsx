import react from "react"
import style from "./../../asserts/css/service_links.module.css"
import Footer from "../footer"

const SchoolSocialEmotionalLearning = () => {
  return (
    <div>
      <div className={style.general_title}>
        <h1>School Workshop</h1>
      </div>
      <div className={style.general_main}>
        <div className={style.general_card}>
          <img src="/assets/images/services/1-2.jpeg" />
          <h1>Social-emotional learning (Self Care), Growth Mindset, Mindfulness</h1>
        </div>
        <div className={style.busin_text}>
          <p>
            One aspect of performance that is not taught in educational settings is how to optimize
            mental capabilities. Various proven methods can be applied to learning which broadens
            the scope of performance by fostering social and emotional skills, cultivating a growth
            mindset, and undertaking daily tasks through a mindful perspective. Throughout this
            course, you will learn how to integrate these processes within your daily habits and
            expand your repertoire of abilities to reap the best academic benefits
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SchoolSocialEmotionalLearning
