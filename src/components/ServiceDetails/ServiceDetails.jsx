import React from "react";
import "./ServiceDetails.scss";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";
import { motion } from "framer-motion";

const ServiceDetails = ({
    title,
    primaryDescription,
    secondaryDescription,
}) => {
    return (
        <section className="service-details">
            <div className="service-details__container">
                {/* Left Title */}
                <div className="service-details__title">
                    <motion.h2
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* <ParagraphTextReveal> */}
                        {title}
                        {/* </ParagraphTextReveal> */}
                    </motion.h2>
                </div>

                {/* Center Content */}
                <div className="service-details__content">
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 1.2,
                            ease: "easeInOut"
                        }}
                        viewport={{ once: true }}
                    >{primaryDescription}</motion.p>
                </div>

                {/* Right Content */}
                <div className="service-details__aside">
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 1.2,
                            ease: "easeInOut"
                        }}
                        viewport={{ once: true }}>{secondaryDescription}</motion.p>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;
