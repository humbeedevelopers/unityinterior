'use client';

import Image from 'next/image';
import './AboutStory.scss';

const AboutStory = ({
  title,
  paragraphs = [],
  imageSrc = null,
  imageAlt = 'About story image',
}) => {
  return (
    <section className="about-story">
      <div 
      // className="about-story__container"
      className={`about-story__container ${
          !imageSrc ? 'about-story__container--no-image' : ''
        }`}
      >
        
        {/* Left Content */}
        <div className="about-story__content">
          <h2 className="about-story__title">{title}</h2>

          <div className="about-story__text">
            {paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>

        {/* Right Image */}
        {imageSrc && (
          <div className="about-story__image-wrapper">
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="about-story__image"
            />
          </div>
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
