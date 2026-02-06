'use client';

import Image from "next/image";
import Banner from "@/images/coreBanner.png";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";
import "./CoreOfferingCards.scss";

const CoreOfferingCards = () => {
  const offerings = [
    {
      id: 1,
      title: 'INTERIOR DESIGNING',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: Banner,
    },
    {
      id: 2,
      title: 'ARCHITECTURAL PLANNING',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: Banner,
    },
    {
      id: 3,
      title: '3D VISUALIZATION',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: Banner,
    },
  ];

  return (
    <section className="core-offering-cards">
      <div className="core-offering-cards__container">
        <h2 className="core-offering-cards__title">
          <ParagraphTextReveal>CORE OFFERINGS</ParagraphTextReveal>
        </h2>

        <div className="core-offering-cards__list">
          {offerings.map((offering) => (
            <div key={offering.id} className="core-offering-cards__card">
              
              {/* Header */}
              <div className="core-offering-cards__card-header">
                <h3 className="core-offering-cards__card-title">
                  {offering.title}
                </h3>
              </div>

              {/* Content */}
              <div className="core-offering-cards__card-content">
                <div className="core-offering-cards__image-wrapper">
                  <Image
                    src={offering.image}
                    alt={offering.title}
                    className="core-offering-cards__image"
                  />

                  <div className="core-offering-cards__overlay">
                    <p className="core-offering-cards__description">
                      {offering.description}
                    </p>

                    <button className="core-offering-cards__btn">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreOfferingCards;
