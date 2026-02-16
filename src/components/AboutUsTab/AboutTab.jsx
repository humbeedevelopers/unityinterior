'use client';

import { useState } from 'react';
import Image from 'next/image';
import './AboutTab.scss';
import ParagraphTextReveal from '@/animations/ParagraphTextReveal';

const AboutTab = ({ title, tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="aboutTab">
      <div className="aboutTab__container">

        {/* Heading */}
        <h2 className="aboutTab__title"><ParagraphTextReveal>{title}</ParagraphTextReveal></h2>

        {/* Tabs */}
        <div className="aboutTab__tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`aboutTab__tab ${
                activeTab === index ? 'is-active' : ''
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="aboutTab__content">
          <div className="aboutTab__contentInner">

            {/* Left */}
            <div className="aboutTab__text">
              <h4 className="aboutTab__subtitle">
                {tabs[activeTab].heading}
              </h4>

              <p className="aboutTab__description">
                {tabs[activeTab].description}
              </p>
            </div>

            {/* Right */}
            <div className="aboutTab__image">
              <Image
                src={tabs[activeTab].image}
                alt={tabs[activeTab].label}
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutTab;
