import react from "react";
import Data from './.././../public/Data/blog.json'
import style from './../../asserts/css/about.module.css';
import Footer from "../footer";

const Blog = () => {
    return (
        <div>
            <div className={style.blog_main}>
                {
                    Data.map((item, index) => (
                        <div className={style.blog_card} key={index}>
                            <a href="#"><img src={item.image} /></a>
                            <h2><a href="#">{item.link}</a></h2>
                            <div className={style.blog_text}>
                                <p>
                                    <strong>{item.bold_text}</strong>
                                    {item.norma_text}
                                </p>
                            </div>
                            <div className={style.read_more}>
                                <img src={item.icon} />
                                <a href="#">{item.button}</a>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div>
    )
};

export default Blog;