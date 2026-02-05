'use client';

import Image from 'next/image';
import './AboutStory.scss';

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
      className={`about-story__container ${
          !imageSrc ? 'about-story__container--no-image' : ''
        }`}
      >
        
        {/* Left Content */}
        <div className="about-story__content">
          <h2 className="about-story__title">{title}</h2>

          {/* <div className="about-story__text">
            {paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div> */}
           <div className="about-story__text">
            {paragraphs.map((text, index) => (
              <div key={index} className="about-story__paragraph">
                <p>{text}</p>

                {/* Know More after first paragraph only */}
                {index === 1 && showKnowMore && (
                  <button
                    type="button"
                    className="about-story__know-more"
                    onClick={onKnowMore}
                  >
                    {knowMoreText}
                  </button>
                )}
              </div>
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
