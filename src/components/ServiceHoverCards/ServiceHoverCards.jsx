"use client";

import { useRef, useState } from "react";
import Image from "next/image";
// import ContactUsButton from "@/animations/ContactUsButton";
import "./ServiceHoverCards.scss";

const ServiceHoverCards = ({
    title,
    description,
    buttonText = "Contact Us",
    onButtonClick,
    imageSrc,
    imageSrc1,
    imageAlt = "Service preview image",
}) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const containerRef1 = useRef(null);

    const handleMouseMove = (e, ref) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };


    return (
        <section
            className="service-hover-cards">
            <div className="service-hover-cards__wrapper">
                {/* Left Content */}
                <div className="service-hover-cards__content">
                    <h2 className="service-hover-cards__title">{title}</h2>
                    {/* <ContactUsButton href="/contact">CONTACT US</ContactUsButton> */}
                    <button
                        className="service-hover-cards__button"
                        onClick={onButtonClick}
                    >
                        {buttonText}
                    </button>
                </div>

                {/* Divider */}
                <span className="service-hover-cards__divider" />

                {/* Right Content */}
                <div className="service-hover-cards__section">
                    <div
                        className="service-hover-cards__info"
                        ref={containerRef}
                        onMouseMove={(e) => handleMouseMove(e, containerRef)}
                        onMouseEnter={() => setActiveIndex(0)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        <p className="service-hover-cards__description">{description}</p>

                        <div
                            className={`service-hover-cards__image ${activeIndex === 0 ? "is-active" : ""
                                }`}
                            style={{
                                transform: `translate(${position.x}px, ${position.y}px)`,
                            }}
                        >
                            <Image src={imageSrc} alt={imageAlt} width={260} height={180} />
                        </div>
                    </div>

                    <div
                        className="service-hover-cards__info"
                        ref={containerRef1}
                        onMouseMove={(e) => handleMouseMove(e, containerRef1)}
                        onMouseEnter={() => setActiveIndex(1)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        <p className="service-hover-cards__description">{description}</p>

                        <div
                            className={`service-hover-cards__image ${activeIndex === 1 ? "is-active" : ""
                                }`}
                            style={{
                                transform: `translate(${position.x}px, ${position.y}px)`,
                            }}
                        >
                            <Image src={imageSrc1} alt={imageAlt} width={260} height={180} />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ServiceHoverCards;
