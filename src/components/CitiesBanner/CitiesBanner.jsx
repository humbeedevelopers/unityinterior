"use client";
import Image from "next/image";
import "./CitiesBanner.scss";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";

const CitiesBanner = ({ title = "CITIES", subtitle = "", image = null }) => {
  if (!image) return null;

  return (
    <section className="citiesBanner">
      <div className="citiesBanner__container">

        <div className="citiesBanner__header">
          <h2 className="citiesBanner__title">
            <ParagraphTextReveal>{title}</ParagraphTextReveal>
          </h2>
          {subtitle && (
            <p className="citiesBanner__subtitle">
              <ParagraphTextReveal>{subtitle}</ParagraphTextReveal>
            </p>
          )}
        </div>

        <div className="citiesBanner__imageWrapper">
          <Image
            src={image.url}
            alt={image.alt || title}
            width={image.width || 1920}
            height={image.height || 1080}
            className="citiesBanner__image"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default CitiesBanner;
