"use client";

import Image from "next/image";
import PropTypes from "prop-types";
import "./HeroService.scss";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";

const HeroService = ({ title, description, image, imageAlt }) => {
    return (
        <section className="hero-service">
            <div className="hero-service__container">


                <div className="hero-service__header">
                    <h1 className="hero-service__title"><ParagraphTextReveal>{title}</ParagraphTextReveal></h1>
                    <p className="hero-service__description"><ParagraphTextReveal>{description}</ParagraphTextReveal></p>
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
