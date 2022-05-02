import react from "react";
import style from './../../asserts/css/contact-us.module.css';



const Contact = () => {
    return (
        <div>
            <div className={style.contact_title}>
                <h1>Schedule a Consultation.</h1>
            </div>
            <div className={style.contact_section}>
                <div className={style.contact_left}>
                    <h1>Beacon Business Advisors</h1>
                    <a href="#">904-495-9848</a>
                    <img src="/assets/images/contact_us.png" />
                </div>
                <form className={style.contact_right}>
                    <div className={style.input_box}>
                        <label>
                            <span>First name</span>
                            <span className={style.multi}>*</span>
                        </label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>
                            <span>Last name</span>
                            <span className={style.multi}>*</span>
                        </label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>
                            <span>Company name</span>
                            <span className={style.multi}>*</span>
                        </label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>
                            <span>Phone number</span>
                            <span className={style.multi}>*</span>
                        </label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>
                            <span>Mobile phone number</span>
                            <span className={style.multi}>*</span>
                        </label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>
                            <span>Email</span>
                            <span className={style.multi}>*</span>
                        </label>
                        <input type="text" />
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Contact;