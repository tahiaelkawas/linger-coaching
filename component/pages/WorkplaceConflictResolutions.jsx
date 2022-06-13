import react from "react"
import style from "./../../asserts/css/service_links.module.css"
import Footer from "../footer"

const WorkplaceConflictResolutions = () => {
  return (
    <div>
      <div className={style.general_title}>
        <h1>Workplace</h1>
      </div>
      <div className={style.general_main}>
        <div className={style.general_card}>
          <img src="/assets/images/busin-planning.jpg" />
          <h1>Conflict resolution</h1>
        </div>
        <div className={style.busin_text}>
          <p>
            Conflict in the workplace is a complex process that can either be a source of damage or
            growth in your job where the deciding factor for these outcomes stems from how conflict
            is resolved between the two parties. To promote the latter (i.e., growth) an employee
            needs to be able to listen, empathize, communicate, and execute skills in accordance
            with a given situation. Throughout this course, you will learn the necessary skills to be
            able to resolve conflict productively and efficiently. Once completed, you will have the
            confidence to apply the information you have learned and thrive in your respective field.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default WorkplaceConflictResolutions
