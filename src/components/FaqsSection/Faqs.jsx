"use client";

import React, { useState } from "react";
import "./Faqs.scss";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";
import { motion } from "framer-motion";

const FAQS_DATA = [
  {
    id: 1,
    question: "Why should I hire an interior designer?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2, question: "How involved will I be in the design process?", answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3, question: "Do you provide only design consultation services?", answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 4, question: "Which cities do you provide services in?", answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 5, question: "Do you help with material selection and sourcing?", answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 6, question: "Can you renovate an existing space?", answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 7, question: "Will you be involved during execution?", answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const FaqsSection = ({ faqs = [] }) => {
  const [activeId, setActiveId] = useState(1);
  // const [activeId, setActiveId] = useState(
  //   faqs.length > 0 ? faqs[0].id : null
  // );
  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faqs">
      <div className="faqs__container">
        {/* Left Column */}
        <div className="faqs__left">
          <h2 className="faqs__title"><ParagraphTextReveal>QnA</ParagraphTextReveal></h2>
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0 }}
            viewport={{ once: true }}
            className="faqs__cta">MY QUESTION IS NOT HERE</motion.button>
        </div>

        {/* Right Column */}
        <div className="faqs__right">
          {/* dynamic data  */}
          {/* {faqs.map((item, index) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                className={`faqs__item ${isActive ? "is-active" : ""}`}
              >
                <button
                  className="faqs__question"
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isActive}
                >
                  <span>{item.acf?.faq_question}</span>
                  <span className="faqs__icon">
                    {isActive ? "–" : "+"}
                  </span>
                </button>

                <div className="faqs__answer-wrapper">
                  <div className="faqs__answer">
                    {item.acf?.faq_answer}
                  </div>
                </div>
              </div>
            );
          })} */}
          {/* static data */}
          {FAQS_DATA.map((item) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                className={`faqs__item ${isActive ? "is-active" : ""}`}
              >
                <button
                  className="faqs__question"
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isActive}
                >
                  <span>{item.question}</span>
                  <span className="faqs__icon">{isActive ? "–" : "+"}</span>
                </button>

                <div className="faqs__answer-wrapper">
                  <div className="faqs__answer">
                    {item.answer || " "}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
