"use client";
import "./HomeTimeline.scss";
import { motion } from "framer-motion";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";

const timelineData = [
    {
        step: "01",
        title: "Layout Planning",
        description:
            "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
    },
    {
        step: "02",
        title: "Ceiling Design",
        description:
            "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
    },
    {
        step: "03",
        title: "Electrical Design",
        description:
            "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
    },
    {
        step: "04",
        title: "2D Elevations",
        description:
            "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
    },
    {
        step: "05",
        title: "3D Renders",
        description:
            "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
    },
    {
        step: "06",
        title: "Working Drawings",
        description:
            "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s",
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
                MASTER FORMULA FOR <br />
                OUTSTANDING INTERIOR DESIGNS
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
