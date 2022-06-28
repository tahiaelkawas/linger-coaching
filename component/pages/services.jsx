import Link from "next/link"
import react from "react"
import Footer from "../footer"
import style from "./../../asserts/css/service.module.css"
import ServiceBox from "../serviceBox"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
const Services = () => {
  const SLIDERIMG = [
    {
      text: "visit_major_cities",
      image: "image5.jpeg",
    },
    {
      text: "visit_major_cities",
      image: "image7.jpeg",
    },
    {
      text: "visit_major_cities",
      image: "image2.jpeg",
    },
  ]

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

  }

  return (
    <div>
      <Slider {...settings}>
        {SLIDERIMG.map((item) => (
          <div
            className={style.groundsection + " " + style.slick_slide}
            style={{ backgroundImage: `url(assets/images/new/${item.image})` }}
          >
            <img src={`/assets/images/new/${item.image}`} alt="" />
          </div>
        ))}
      </Slider>
      <ServiceBox />
      <div className={style.servic_box_container}>
        <div className={style.service_bot_logo}>
          <img src="/assets/images/new/image3.jpeg" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Services
