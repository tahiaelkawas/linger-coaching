import react from "react";
import style from './../../asserts/css/about.module.css';
import Footer from "../footer";

const About = () => {
    return (
        <div>
            <div className={style.about_title}>
                <h4>Beacon Business Advisors uses a strong business model with creative thinking, open and honest conversations and self observation.</h4>
            </div>
            <div className={style.about_content}>
                <div className={style.about_img}>
                    <img src="/assets/images/lady.jpeg" alt="" />
                </div>
                <div className={style.about_text}>
                    <h4>Alicia Hart</h4>
                    <p>Co-Owner</p>
                    <hr />
                    <div className={style.text_title}>
                        <p>In business, solving issues is about planning, problem solving and implementing systems to improve a business which is a constant work in progress, but beneficial.</p>
                        <p>For the past 15 years, I’ve run my own business, Simply Organized by Hart, a Professional Organizing business, working with clients one-on-one. I love to organize. As a mother of four (now grown), a wife, and a small business entrepreneur, life has taught me to multitask at home and in business. This helped me develop skills to problem solve and foresee strategies to help simplify and efficiently manage a home, work and life balance.</p>
                        <p>Within the scope of being a Professional Organizer, I was hired by a high-end estate sales company to help stage homes, work in sales and also help create a back end liquidation process to clear out estates. Through this experience, the next business of Upscale Resale CT was created. A local, online furniture sales website where clients sold their furniture and home decor right from their home in a safe and secure process. I enjoyed learning the process of growing my businesses all while providing customers a service they needed.</p>
                        <p>I volunteered extensively for 20 years as team manager for several hockey and lacrosse teams and volunteered as a preschool coordinator at our local church. I enjoy puzzles, gardening, photography and history. I am an avid New York Rangers fan and a developing Jacksonville Jaguars fan. I love beach walks, the GTM Reserve and being outdoors with our Siberian Husky, Koda.</p>
                        <p>I graduated from the University of Connecticut with a B.A. in Human Development and Family Sciences and was a past member of NAPO, National Association of Professional Organizers.</p>
                    </div>
                </div>
            </div><div className={style.about_content}>
                <div className={style.about_img}>
                    <img src="/assets/images/man.jpeg" alt="" />
                </div>
                <div className={style.about_text}>
                    <h4>Doug Hart</h4>
                    <p>Co-Owner</p>
                    <hr />
                    <div className={style.text_title}>
                        <p>Doug HartCo-Owner During my career I have experienced many up and down business economic cycles. In some cases these were very disruptive and required the ability to change or pivot. In others these cycles exposed opportunities for those entrepreneurs and businesses organized well enough to seize them. I have had the opportunity to work at many organizational levels with good mentors and have learned the importance of listening, asking questions and also working collaboratively with a wide range of resources. It has made clear to me the importance of regular planning and good communication. This is often the difference between success and failure.</p>
                        <p>Over the past 35 years I have worked in construction, food services, real estate, manufacturing and private equity. My industry experience includes Automotive, Medical, Industrial, Aerospace, Textile, Transportation, Military, Steel, Testing Instruments and Outdoor Recreational products with a focus on Operations, Planning, New Product Development, Administration and Finance. I was co-owner and COO of an international manufacturer of engineered industrial consumable products; served as COO for a privately owned composite materials manufacturer; was co-owner of a successful business advisory firm focused on driving client sales, income, and overall growth. Most recently I have been an Operating Partner with a successful strategic equity investment group focused on small to midsize businesses.</p>
                        <p>My personal interests include running, biking, fishing and history. I follow the NFL, College Football and NHL Hockey. I graduated from Hobart & William Smith Colleges.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default About;