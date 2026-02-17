import React from "react";
import "./button9.css";
import Image from "next/image";
import instaSvg from "@/svgs/instasvg.svg";

const Button = (props) => {
  const handleClick = () => {
    window.open("https://www.instagram.com/ekta_interior/", "_blank");
  };

  return (
    <div>
      <button onClick={handleClick} className="button2" role="button">
        <Image className="zIndex" src={instaSvg} alt="none" />
        <span className="text">{props.button_text}</span>
      </button>
    </div>
  );
};

export default Button;
