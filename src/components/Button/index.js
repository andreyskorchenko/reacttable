import React from "react";
import "./style.scss";

const Button = ({ className, disabled, onClick, text }) => {
  return (
    <button
      className={`btn ${className ? className : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
