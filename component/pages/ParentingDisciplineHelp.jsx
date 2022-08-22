import react from "react"
import style from "./../../asserts/css/service_links.module.css"
import Footer from "../footer"

const ParentingDisciplineHelp = () => {
  return (
    <div>
      <div className={style.general_title}>
        <h1>Parenting Workshop</h1>
      </div>
      <div className={style.general_main}>
        <div className={style.general_card}>
          <img src="/assets/images/services/3-2.jpeg" />
          <h1>Discipline vs Seeking Professional Help</h1>
        </div>
        <div className={style.busin_text}>
          <p>
            There are some instances where your children express problematic
            behaviors leaving you unable to address this through your own
            understanding. When this happens, it is important to seek
            professional help for the benefit of your children. However, it
            becomes difficult to recognize when this step must be taken as
            situations surrounding children are often confusing. This course
            will educate you on the surrounding elements that are important to
            consider for navigating these situations as parents.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ParentingDisciplineHelp
