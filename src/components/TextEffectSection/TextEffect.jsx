
import React from "react";
import ScrollFillText from "@/animations/ScrollTextFill";
import "./TextEffect.scss";

const TextEffect = ({ text }) => {
  if (!text) return null; // safety check
  const Htext =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";

  return (
    <section className="highlights">
      <div className="highlights-container">
        <header className="highlights-header">
          <ScrollFillText
            // text={Htext}
            text={text}
            pin />
        </header>
      </div>
    </section>
  );
};

export default TextEffect;
