'use client';

import Image from 'next/image';
import Banner from "@/images/AboutUsBanner.png";
import "./HeroAbout.scss";
import Link from 'next/link';

const HeroAbout = () => {
  return (
    <section className="heroAbout">
      <div className="heroAbout__container">
        <div className="heroAbout__imageWrapper">
          <Image
            src={Banner}
            alt="About Us Interior"
            className="heroAbout__image"
          />

          <div className="heroAbout__content">
            <h1 className="heroAbout__title">ABOUT US</h1>
            <Link href={"https://www.youtube.com/channel/UCQLqYlIthw4Buk6XKW4lqNg"} target='_blank'>
            <button className="heroAbout__button">
              VISIT MY YOUTUBE
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
