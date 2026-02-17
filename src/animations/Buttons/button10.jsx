import React from "react";
import "./button10.css";
import Image from "next/image";
import youtubeSvg from "@/svgs/youtubesvg.svg";

const Button = (props) => {
  const handleClick = () => {
    window.open("https://www.youtube.com/", "_blank");
  };

  return (
    <div>
      <button onClick={handleClick} className="button2" role="button">
        <Image className="zIndex" src={youtubeSvg} alt="none" />
        <span className="text">{props.button_text}</span>
      </button>
    </div>
  );
};

export default Button;
