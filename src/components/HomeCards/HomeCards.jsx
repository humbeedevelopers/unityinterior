"use client";

import React from "react";
import "./HomeCards.scss";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";

const HomeCards = ({ heading, cards = [] }) => {
  return (
    <section className="home-cards">
      <div className="home-cards__container">

        {heading && <h2 className="home-cards__heading"><ParagraphTextReveal>{heading}</ParagraphTextReveal></h2>}


        <div className="home-cards__list">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`home-cards__item ${index === 0 ? "home-cards__item--active" : ""
                }`}
            >
              <h3 className="home-cards__title">{card.title}</h3>

              {card.description && (
                <p className="home-cards__description">
                  {card.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
