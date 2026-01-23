"use client";

import React, { useState } from "react";
import "./Faqs.scss";

const FAQS_DATA = [
  {
    id: 1,
    question: "How do architects charge for their services?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  { id: 2, question: "How do architects charge for their services?", answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  { id: 3, question: "How do architects charge for their services?", answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  { id: 4, question: "How do architects charge for their services?", answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  { id: 5, question: "How do architects charge for their services?", answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  { id: 6, question: "How do architects charge for their services?", answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const FaqsSection = () => {
  const [activeId, setActiveId] = useState(1);

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faqs">
      <div className="faqs__container">
        {/* Left Column */}
        <div className="faqs__left">
          <h2 className="faqs__title">QnA</h2>
          <button className="faqs__cta">MY QUESTION IS NOT HERE</button>
        </div>

        {/* Right Column */}
        <div className="faqs__right">
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
