"use client";
import "./Hero.scss";
// import { useState, useEffect } from "react";
// import ParagraphTextReveal from "@/animations/ParagraphTextReveal";
import WordReveal from "@/animations/WordReveal";
import CommonButton from "@/animations/Buttons/CommonButton";
import { motion } from "framer-motion";

const Hero = ({ title, description, imageHero, buttonText, buttonLink }) => {
  //   const [heroData, setHeroData] = useState(null);

  //  useEffect(() => {
  //   const fetchHero = async () => {  
  //     const res = await fetch(
  //       "https://unityinteriorsadmin.humbeestudio.xyz/wp-json/wp/v2/pages?slug=home"
  //     );

  //     const data = await res.json();
  //     console.log("FULL DATA:", data[0]);
  //     console.log("ACF DATA:", data[0].acf);

  //     // setHeroData(data[0].acf);
  //     setHeroData(data?.[0]?.acf || {});

  //   };

  //   fetchHero();
  // }, []);

  //   if (!heroData) return <div>Loading...</div>;

  return (
    <section className="HeroSection">
      <div className="hero"
      //   style={{
      //   backgroundImage: imageHero ? `url(${imageHero})` : "none",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
      >
        <div className="hero__overlay" />

        <div className="hero__content">
          <h1 className="hero__title">
            <WordReveal>
              WE DESIGN <br /></WordReveal>
            <p className="TextPattern"><WordReveal> THE FEELING</WordReveal></p>
            <p className="TextPatternTwo"><WordReveal> OF YOU</WordReveal></p>
          </h1>

          <div className="hero__footer">
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0 }}
              viewport={{ once: true }}
              className="hero__description">
              {/* Lorem Ipsum is simply dummy text of the printing and typesetting
              industry */}
              {description}
            </motion.p>
            <CommonButton
              buttonText={buttonText || "View Projects"}
              route={buttonLink || "/projects"}
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
