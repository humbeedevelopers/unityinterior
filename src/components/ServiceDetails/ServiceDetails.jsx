import React from "react";
import "./ServiceDetails.scss";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";

const ServiceDetails = ({
    title,
    primaryDescription,
    secondaryDescription,
}) => {
    return (
        <section className="service-details">
            <div className="service-details__container">
                {/* Left Title */}
                <div className="service-details__title">
                    <h2><ParagraphTextReveal>{title}</ParagraphTextReveal></h2>
                </div>

                {/* Center Content */}
                <div className="service-details__content">
                    <p>{primaryDescription}</p>
                </div>

                {/* Right Content */}
                <div className="service-details__aside">
                    <p>{secondaryDescription}</p>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;
