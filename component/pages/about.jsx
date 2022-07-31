import react from "react"
import style from "./../../asserts/css/about.module.css"
import Footer from "../footer"

const About = () => {
  return (
    <div>
      <div className={style.about_title2}>
          <h1>
            Linger Coaching uses contemporary behavior change interventions
            through engaging coaching workshops
          </h1>
      </div>

      <div className={style.about_content}>
        <div className={style.about_img}>
          <img src="/assets/images/new/rania_1.jpeg" alt="" />
        </div>
        <div className={style.about_text}>
          <h4>Rania Abuelzain</h4>
          <p>Co-Owner</p>
          <hr />
          <div className={style.text_title}>
            <p>
              My electrical engineering personality traits include curiosity,
              critical thinking, creativity, effective communication, and a
              collaborative spirit, along with my interest in exploring new
              subjects and interacting with new technology; training and
              development was my career choice since 1999.
            </p>
            <p>
              Whereas promoting self-development, helping others, and supporting
              vocational aspiration, was the motive behind earning my
              master&#39;s degree in Psychology which helped me implement
              effective behavior change into training programs and deliver
              targeted learning interventions.
            </p>
            <p>
              As a professional certified coach and a certified behavior
              analyst, I aim to focus on shifting mindset and behavior change
              coaching.
            </p>
          </div>
        </div>
      </div>
      <div className={style.about_content}>
        <div className={style.about_img}>
          <img src="/assets/images/new/tahia_1.jpeg" alt="" />
        </div>
        <div className={style.about_text}>
          <h4>Tahia Abdelrahman</h4>
          <p>Co-Owner</p>

          <hr />
          <div className={style.text_title}>
            <p>
              I have had a wide range of experience in marketing, business, and
              computer science. I have a bachelor&#39;s degree in information
              technology, a degree in software engineering and in business.
            </p>
            <p>
              For the past 13 years, I have been actively involved in my
              community. I have been serving the low-income, underprivileged,
              and vulnerable population through the nonprofit that I am a board
              member of. Through my work with this population, I have been able
              to see the great need for behavior change and how much potential
              there is when applied into their lives.
            </p>
            <p>
              I believe that when behavior is changed positively, it results in
              productive habits. These habits can be used every day within any
              interactive setting.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
