"use client";
import "./HomeTimeline.scss";
import { motion } from "framer-motion";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";

const HomeTimeline = ({
  timelineHeading,
  timelineItems = [],
  executionHeading,
  executionItems = [],
}) => {
  return (
    <section className="homeTimeline">
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="homeTimeline__heading"
      >
        {timelineHeading}
      </motion.h2>

      <div className="homeTimeline__container">
        <div className="homeTimeline__timeline">
          <div className="homeTimeline__line" />

          {timelineItems?.map((item, index) => {
            const isRight = index % 2 === 0;

            return (
              <div
                key={index}
                className={`homeTimeline__item ${
                  isRight ? "is-right" : "is-left"
                }`}
              >
                <div className="homeTimeline__contentWrapper">
                  <motion.h4
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className="homeTimeline__title"
                  >
                    {item.title}
                  </motion.h4>

                  <motion.p
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className="homeTimeline__text"
                  >
                    {item.description}
                  </motion.p>
                </div>

                <div className="homeTimeline__step">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  >
                    {item.step}
                  </motion.span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Execution Section */}
        <section className="home-cardsH">
          <div className="home-cardsH__container">
            <h2 className="home-cardsH__heading">
              <ParagraphTextReveal>
                {executionHeading}
              </ParagraphTextReveal>
            </h2>

            <div className="home-cardsH__list">
              {executionItems?.map((item, index) => (
                <div
                  key={index}
                  className={`home-cardsH__item ${
                    item.is_active ? "home-cardsH__item--active" : ""
                  }`}
                >
                  <h3 className="home-cardsH__title">
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className="home-cardsH__description">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HomeTimeline;