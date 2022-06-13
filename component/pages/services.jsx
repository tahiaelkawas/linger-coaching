import Link from "next/link";
import react from "react";
import Footer from "../footer";
import style from './../../asserts/css/service.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import ServiceBox from "../serviceBox";

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
        }
        ]
      
    return (
        <div>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={3000}
            >
        {SLIDERIMG.map((item) => (
           <div className={style.groundsection} style={{ backgroundImage: `url(/assets/images/new/${item.image})`}}>
         </div>
        ))}
    </Carousel>
          <ServiceBox />
            <div className={style.servic_box_container}>
                <div className={style.service_bot_logo}>
                    <img src="/assets/images/new/image3.jpeg" alt="" />
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Services;