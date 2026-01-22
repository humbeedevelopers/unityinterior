import React from "react";
import ScrollFillText from "@/animations/ScrollTextFill";
import "./TextEffect.scss";

const TextEffect = () => {
  const Htext =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";

  return (
    <section className="highlights">
      <div className="highlights-container">
        <header className="highlights-header">
          <ScrollFillText text={Htext} pin />
        </header>
      </div>
    </section>
  );
};

export default TextEffect;
