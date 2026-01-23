"use client";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="HeroSection">
    <div className="hero">
      <div className="hero__overlay" />

      <div className="hero__content">
        <h1 className="hero__title">
          WE DESIGN <br />
         <p className="TextPattern"> THE FEELING</p> 
          <p className="TextPatternTwo"> OF YOU</p>
        </h1>

        <div className="hero__footer">
          <p className="hero__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>

          <button className="hero__button">Contact us</button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero;
