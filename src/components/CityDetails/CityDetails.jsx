"use client";
import "./CityDetails.scss";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";

const CityDetails = ({
  heading = "",
  descriptionHtml = "",
}) => {
  if (!heading && !descriptionHtml) return null;

  return (
    <section className="cityDetails">
      <div className="cityDetails__container">
        {heading && (
          <h2 className="cityDetails__title">
            <ParagraphTextReveal>{heading}</ParagraphTextReveal>
          </h2>
        )}

        {descriptionHtml && (
          <div
            className="cityDetails__content"
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          />
        )}
      </div>
    </section>
  );
};

export default CityDetails;
