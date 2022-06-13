import react from "react"
import style from "./../../asserts/css/service_links.module.css"
import Footer from "../footer"

const ParentingDisciplineHelp = () => {
  return (
    <div>
      <div className={style.general_title}>
        <h1>Parenting</h1>
      </div>
      <div className={style.general_main}>
        <div className={style.general_card}>
          <img src="/assets/images/busin-planning.jpg" />
          <h1>Discipline vs seeking professional help</h1>
        </div>
        <div className={style.busin_text}>
          <p>
            There are some instances where your children express problematic behaviours leaving
            you unable to address this through your own understanding. When this happens, it is
            important to seek professional help for the benefit of your children. However, it becomes
            difficult to recognise when this step must be taken as situations surrounding children are
            often confusing. This course will educate you on the surrounding elements that are
            important to take into account for navigating these situations as parents.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ParentingDisciplineHelp
