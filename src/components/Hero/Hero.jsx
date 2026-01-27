"use client";
import "./Hero.scss";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";

const Hero = () => {
  return (
    <section className="HeroSection">
    <div className="hero">
      <div className="hero__overlay" />

      <div className="hero__content">
        <h1 className="hero__title">
          <ParagraphTextReveal>
          WE DESIGN <br /></ParagraphTextReveal>
         <p className="TextPattern"><ParagraphTextReveal> THE FEELING</ParagraphTextReveal></p> 
          <p className="TextPatternTwo"><ParagraphTextReveal> OF YOU</ParagraphTextReveal></p>
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
