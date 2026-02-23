"use client";
import "./HomeTimeline.scss";
import { motion } from "framer-motion";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";

const timelineData = [
    {
        step: "01",
        title: "Layout Planning",
        description:
            "We carefully plan your space to ensure smooth movement, smart zoning, and maximum functionality. Every layout is designed to suit your lifestyle while making the best use of available space.",
    },
    {
        step: "02",
        title: "Ceiling Design",
        description:
            "We design ceilings that enhance lighting, proportions, and overall aesthetics. From subtle detailing to statement elements, we ensure the ceiling complements your space beautifully.",
    },
    {
        step: "03",
        title: "Electrical Design",
        description:
            "We strategically plan lighting points, switches, and power layouts for comfort and convenience. Our approach ensures both functionality and a seamless visual finish.",
    },
    {
        step: "04",
        title: "2D Elevations",
        description:
            "We create detailed 2D elevations to help you clearly visualize finishes, materials, and design elements before execution begins.",
    },
    {
        step: "05",
        title: "3D Renders",
        description:
            "Through high quality and realistic 3D views, we give you a complete picture of how your space will look and feel, helping you make confident design decisions.",
    },
    {
        step: "06",
        title: "Working Drawings",
        description:
            "Once the design is final and approved from both ends, we prepare precise technical drawings that guide contractors during execution, ensuring accuracy, smooth coordination, and high-quality results.",
    },
];

const executionData = [
    {
        title: "CO ORDINATION",
        description:
            "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
    },
    { title: "SITE VISITS" },
    { title: "MATERIAL SELECTION" },
    { title: "ARTEFACT SELECTION" },
];

const HomeTimeline = () => {
    return (
        <section className="homeTimeline">
            <motion.h2
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0 }}
                viewport={{ once: true }}
                className="homeTimeline__heading">
                {/* <ParagraphTextReveal> */}
                OUR DESIGN PROCESS
                {/* MASTER FORMULA FOR <br />
                OUTSTANDING INTERIOR DESIGNS */}
                {/* </ParagraphTextReveal> */}
            </motion.h2>
            <div className="homeTimeline__container">

                <div className="homeTimeline__timeline">
                    <div className="homeTimeline__line" />

                    {timelineData.map((item, index) => {
                        const isRight = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className={`homeTimeline__item ${isRight ? "is-right" : "is-left"
                                    }`}
                            >

                                <div className="homeTimeline__contentWrapper">
                                    <motion.h4
                                        initial={{ x: 50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1.5, delay: 0 }}
                                        viewport={{ once: true }}
                                        className="homeTimeline__title">{item.title}</motion.h4>
                                    <motion.p
                                        initial={{ x: -50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 1.5, delay: 0 }}
                                        viewport={{ once: true }}
                                        className="homeTimeline__text">{item.description}</motion.p>
                                </div>

                                <div className="homeTimeline__step">
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        viewport={{ once: true }}
                                    >{item.step}</motion.span>
                                </div>
                            </div>
                        );
                    })}
                </div>


                {/* Execution Section */}
                <section className="home-cardsH">
                    <div className="home-cardsH__container">

                        <h2 className="home-cardsH__heading"><ParagraphTextReveal>During Execution</ParagraphTextReveal></h2>

                        <div className="home-cardsH__list">

                            <div className="home-cardsH__item home-cardsH__item--active">
                                <h3 className="home-cardsH__title">Co<br />ordination</h3>
                                <p className="home-cardsH__description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>

                            <div className="home-cardsH__item">
                                <h3 className="home-cardsH__title">Site <br />Visit</h3>
                                <p className="home-cardsH__description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>

                            <div className="home-cardsH__item">
                                <h3 className="home-cardsH__title">MAterial<br /> selection</h3>
                                <p className="home-cardsH__description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>

                            <div className="home-cardsH__item">
                                <h3 className="home-cardsH__title">Artefact<br /> selection</h3>
                                <p className="home-cardsH__description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default HomeTimeline;
