'use client';

import Image from 'next/image';
import './AboutStory.scss';
import ParagraphTextReveal from '@/animations/ParagraphTextReveal';
import { motion } from "framer-motion";

const AboutStory = ({
  title,
  paragraphs = [],
  imageSrc = null,
  imageAlt = 'About story image',
  showKnowMore = false,
  knowMoreText = 'Know more',
  onKnowMore,
}) => {
  return (
    <section className="about-story">
      <div
        // className="about-story__container"
        className={`about-story__container ${!imageSrc ? 'about-story__container--no-image' : ''
          }`}
      >

        {/* Left Content */}
        <div className="about-story__content">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0 }}
            viewport={{ once: true }}
            className="about-story__title">
            {/* <ParagraphTextReveal> */}
            {title}
            {/* </ParagraphTextReveal> */}
          </motion.h2>

          {/* <div className="about-story__text">
            {paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div> */}
          <div className="about-story__text">
            {paragraphs.map((text, index) => (
              <div key={index} className="about-story__paragraph">
                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0 }}
                  viewport={{ once: true }}
                >{text}</motion.p>

                {/* Know More after first paragraph only */}
                {index === 1 && showKnowMore && (
                  <motion.button
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0 }}
                    viewport={{ once: true }}
                    type="button"
                    className="about-story__know-more"
                    onClick={onKnowMore}
                  >
                    {knowMoreText}
                  </motion.button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        {imageSrc && (
          <motion.div 
          initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0 }}
            viewport={{ once: true }}
          className="about-story__image-wrapper">
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="about-story__image"
            />
          </motion.div>
        )}
        {/* <div className="about-story__image-wrapper">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="about-story__image"
          />
        </div> */}

      </div>
    </section>
  );
};

export default AboutStory;
