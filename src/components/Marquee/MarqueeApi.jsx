"use client";
import "./Marquee.scss";
import Image from "next/image";

const MarqueeSection = ({ logos = [] }) => {
  if (!logos.length) return null;

  return (
    <section className="clients">
      <div className="clients__container">
        <div className="clients__rows">
          <div className="clients__row">
            <div className="clients__track">
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div key={index} className="clients__logo">
                  <Image
                    src={logo.url}
                    alt={logo.alt}
                    width={logo.width || 150}
                    height={logo.height || 80}
                    className="clients__img"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;