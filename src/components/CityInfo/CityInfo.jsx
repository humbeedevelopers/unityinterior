"use client";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";
import "./CityInfo.scss";
import { motion, AnimatePresence } from "framer-motion";

const CityInfo = () => {
    return (
        <section className="cityInfo">
            <div>
                <h2 className="cityInfo__SubDesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>
            </div>
            <div className="cityInfo__container">

                <div className="cityInfo__left">
                    <motion.h2 initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0 }}
                        viewport={{ once: true }}
                        className="cityInfo__title">
                        {/* <ParagraphTextReveal> */}
                        THE DESIGN MANIFESTO
                        {/* </ParagraphTextReveal> */}
                    </motion.h2>
                    {/* <button className="cityInfo__button">Contact us</button> */}
                </div>

                <div className="cityInfo__middle">
                    <motion.p
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="cityInfo__description">
                        This 6000 sq ft home in Kolkata gave us the chance to really
                        experiment with scale and detail. From a 22-foot hand-crafted
                        marble wall in the living room to bold contrasts in the master
                        bedroom and a smart, gold-detailed master bathroom, every space
                        has its own story. The design plays with curves, textures, and
                        light while still feeling warm and comfortable. It's a project
                        that pushed us to try new things, and we love how it all came
                        together.
                    </motion.p>
                </div>

                <div className="cityInfo__right">
                    <div className="cityInfo__textWrapper">
                        <motion.p
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            className="cityInfo__rightText">
                            This 6000 sq ft home in Kolkata gave us the chance to really
                            experiment with scale and detail. From a 22-foot hand-crafted
                            marble wall in the living room to bold contrasts in the master
                            bedroom and a smart, gold-detailed master bathroom, every space
                            has its own story. The design plays with curves, textures, and
                            light while still feeling warm and comfortable. It's a project
                            that pushed us to try new things, and we love how it all came
                            together.</motion.p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CityInfo;
