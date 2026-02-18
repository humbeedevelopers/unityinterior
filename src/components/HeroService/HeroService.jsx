"use client";

import Image from "next/image";
import PropTypes from "prop-types";
import "./HeroService.scss";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";
import { motion } from "framer-motion";

const HeroService = ({ title, description, image, imageAlt }) => {
    return (
        <section className="hero-service">
            <div className="hero-service__container">


                <div className="hero-service__header">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0 }}
                        viewport={{ once: true }}
                        className="hero-service__title">
                        {/* <ParagraphTextReveal> */}
                        {title}
                        {/* </ParagraphTextReveal> */}
                    </motion.h1>
                    <motion.p 
                    initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0 }}
            viewport={{ once: true }}
                    className="hero-service__description">
                        {/* <ParagraphTextReveal> */}
                            {description}
                            {/* </ParagraphTextReveal> */}
                            </motion.p>
                </div>

                <div className="hero-service__image-wrapper">
                    <Image
                        src={image}
                        alt={imageAlt || title}
                        className="hero-service__image"
                    />
                </div>

            </div>
        </section>
    );
};

HeroService.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    imageAlt: PropTypes.string,
};

export default HeroService;
