"use client";
import "./Hero.scss";
// import ParagraphTextReveal from "@/animations/ParagraphTextReveal";
import WordReveal from "@/animations/WordReveal";
import CommonButton from "@/animations/Buttons/CommonButton";

const Hero = () => {
  return (
    <section className="HeroSection">
      <div className="hero">
        <div className="hero__overlay" />

        <div className="hero__content">
          <h1 className="hero__title">
            <WordReveal>
              WE DESIGN <br /></WordReveal>
            <p className="TextPattern"><WordReveal> THE FEELING</WordReveal></p>
            <p className="TextPatternTwo"><WordReveal> OF YOU</WordReveal></p>
          </h1>

          <div className="hero__footer">
            <p className="hero__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <CommonButton
              buttonText="View Projects"
              route="/projects"
              padding="10px 28px"
              bgColor="#ffffff"
              hoverBgColor="#540B0E"
              fontSize="15px"
              textColor="#000"
              hoverTextColor="#ffffff"
            />
            {/* <Link href={"/projects"}>
          <button className="hero__button">View Projects</button></Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
