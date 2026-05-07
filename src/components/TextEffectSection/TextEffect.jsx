
import React from "react";
import ScrollFillText from "@/animations/ScrollTextFill";
import "./TextEffect.scss";

const TextEffect = ({ text }) => {
  if (!text) return null; // safety check
  const Htext =
    "Designing spaces that reflect your story";

  return (
    <section className="highlights">
      <div className="highlights-container">
        <header className="highlights-header">
          <ScrollFillText
           text={Htext}
              //text={text}
            pin />
        </header>
      </div>
    </section>
  );
};

export default TextEffect;
