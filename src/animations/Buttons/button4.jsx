import React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <div>
      <button className="button4" role="button" type="submit">
        <span className="text">{props.button_text}</span>
      </button>
    </div>
  );
};

export default Button;
