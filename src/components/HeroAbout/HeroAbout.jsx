'use client';

import Image from 'next/image';
import Banner from "@/images/HeroAboutBanner.png";
import "./HeroAbout.scss";

const HeroAbout = () => {
  return (
    <section className="heroAbout">
      <div className="heroAbout__container">
        <div className="heroAbout__imageWrapper">
          <Image
            src={Banner}
            alt="About Us Interior"
            fill
            priority
            className="heroAbout__image"
          />

          <div className="heroAbout__content">
            <h1 className="heroAbout__title">ABOUT US</h1>
            {/* <button className="heroAbout__button">
              KNOW ABOUT US
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
