"use client";

import Image from "next/image";
import "./ProjectInfo.scss";
import ProjectInfoImg from "@/images/projectDummy.png";
import { motion, AnimatePresence } from "framer-motion";

const ProjectInfo = () => {
    return (
        <section className="projectInfo">
            <div className="projectInfo__container">
                <div className="projectInfo__left">
                    <motion.h2
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0 }}
                        viewport={{ once: true }}
                        className="projectInfo__title">THE SPACE</motion.h2>
                    <button className="projectInfo__button">Contact us</button>
                </div>


                <div className="projectInfo__middle">
                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0 }}
                        viewport={{ once: true }}
                        className="projectInfo__description">
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


                <div className="projectInfo__right">
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0 }}
                        viewport={{ once: true }}
                        className="projectInfo__imageWrapper">
                        <Image
                            src={ProjectInfoImg}
                            alt="Project Interior"
                            className="projectInfo__image"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default ProjectInfo;
