import react from "react"
import style from "./../../asserts/css/service_links.module.css"
import Footer from "../footer"

const SchoolEffectiveCommunication = () => {
  return (
    <div>
      <div className={style.general_title}>
        <h1>School Workshops</h1>
      </div>
      <div className={style.general_main}>
        <div className={style.general_card}>
          <img src="/assets/images/services/1-5.jpeg" />
          <h1>Effective Communication & Active Listening Skills </h1>
        </div>
        <div className={style.busin_text}>
          <p>
          In an educational environment filled with constant streams of information, the ability to
          listen and effectively communicate is fundamental for acquiring and transmitting
          valuable knowledge. By cultivating these skills, you will observe a direct impact on your
          productivity, understanding and relationship-building. When consulting this course, you
          will learn the various methods that can be applied to your academic life and boost your
          performance through effective communication and active listening.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SchoolEffectiveCommunication
