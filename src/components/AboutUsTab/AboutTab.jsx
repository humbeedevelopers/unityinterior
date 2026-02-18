'use client';

import { useState } from 'react';
import Image from 'next/image';
import './AboutTab.scss';
// import ParagraphTextReveal from '@/animations/ParagraphTextReveal';
import { motion, AnimatePresence } from "framer-motion";


const AboutTab = ({ title, tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="aboutTab">
      <div className="aboutTab__container">

        {/* Heading */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0 }}
          viewport={{ once: true }}
          className="aboutTab__title">
          {/* <ParagraphTextReveal> */}
          {title}
          {/* </ParagraphTextReveal> */}
        </motion.h2>

        {/* Tabs */}
        <div className="aboutTab__tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`aboutTab__tab ${activeTab === index ? 'is-active' : ''
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
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="aboutTab__text">
                <h4

                  className="aboutTab__subtitle">
                  {tabs[activeTab].heading}
                </h4>

                <p

                  className="aboutTab__description">
                  {tabs[activeTab].description}
                </p>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              {/* Right */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="aboutTab__image">
                <Image
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].label}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutTab;
