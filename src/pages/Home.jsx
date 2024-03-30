

import ImageReadyToCompete from "../assets/pictures/img_compete.jpg";
import ImageAmbitiousMembers from "../assets/pictures/img_members.jpg";
import ImageQualifiedTrainers from "../assets/pictures/img_trainer.jpg";

import {useEffect} from 'react';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
    visible: {opacity: 1, translateX: 0, transition: {duration: 1.25}},
    hidden: {opacity: 0, translateX: -100},
    hiddenright: {opacity: 0, translateX: 200},
    visibleup: {opacity: 1, translateY: 0, transition: {duration: 1.25}},
    hiddenup: {opacity:0, translateY: 100}
};


const Home = () =>{
    const control1 = useAnimation();
    const control2 = useAnimation();
    const control3 = useAnimation();
    const control4 = useAnimation();
    const control5 = useAnimation();
    const [ref1, inView1] = useInView();
    const [ref2, inView2] = useInView();
    const [ref3, inView3] = useInView();
    const [ref4, inView4] = useInView();
    const [ref5, inView5] = useInView();

    useEffect(() => {
        if (inView1) {
          control1.start("visible");
        }
        if (inView2) {
            control2.start("visible");
        }
        if (inView3) {
            control3.start("visible");
        }
        if (inView4) {
            control4.start("visibleup");
        }
        if (inView5) {
            control5.start("visibleup");
        }
        
      }, [control1, inView1, control2, inView2, control3, inView3, control4, inView4, control5, inView5]);


    return(
        <section className="Page-section">
            <h2 className="Page-header">About us</h2>

            <article className="Home-feature-boxes">
                <motion.div variants={boxVariant} initial="hidden" animate={control1} className="Feature-box" ref={ref1}>
                    <div className="Feature-image">
                        <img src={ImageAmbitiousMembers} alt="" />
                    </div>
                    <div className="Feature-text-box">
                        <h2 className="Box-header">
                            Ambitious members
                        </h2>
                        <div className="Feature-text-box-description">
                        <p>Our young members are keen to
                        improve themselves
                        every day</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="Feature-box" variants={boxVariant} initial="hiddenright" animate={control2} ref={ref2}>
                    <div className="Feature-image">
                        <img src={ImageReadyToCompete} alt="" />
                    </div>
                    <div className="Feature-text-box">
                        <h2 className="Box-header">
                            Ready to compete
                        </h2>
                        <div className="Feature-text-box-description">
                            <p>As a small company
                                we are not afraid to
                                compete with huge concurrences</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="Feature-box" variants={boxVariant} initial="hidden" animate={control3} ref={ref3}>
                    <div className="Feature-image">
                        <img src={ImageQualifiedTrainers} alt="" />
                    </div>
                    <div className="Feature-text-box">
                        <h2 className="Box-header">
                            Qualified trainers
                        </h2>
                        <div className="Feature-text-box-description">
                            <p>Our highly experienced trainers ensure that you achieve your dreams</p>
                        </div>
                    </div>
                </motion.div>
            </article>
            <motion.div className="Info-box" variants={boxVariant} initial="hiddenup" animate={control4} ref={ref4}>
                <h2 className="Box-header">
                    Did you know?
                </h2>
                <div className="Info-box-content">
                    <ol>
                        <li>We hired twice as many fresh graduates
                        in 2021 than in 2020
                        </li>
                        <li>We have huge companies as our clients such as Shell, or TFL</li>
                        <li>Our customer satisfaction rate is 4.87/5 </li>
                    </ol>
                </div>
            </motion.div>
            <motion.div className="Info-box" variants={boxVariant} initial="hiddenup" animate={control4} ref={ref5}>
                <h2 className="Box-header">
                    Aim
                </h2>
                <div className="Info-box-content">
                    <p style={{textAlign:"center"}}>Hot Beans Web was established in 2017 with the aim to bring web 
                    development closer to young people. Our number one goal is to
                    deliver high quality products and satisfy our customers.</p>
                </div>
            </motion.div>
        </section>
    );
};

export default Home;