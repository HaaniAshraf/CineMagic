import React from "react";

function Button({ children, onClick, className, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`xxs:py-1 rounded-md font-bold ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
