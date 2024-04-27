import React from "react";

function Button({ children, onClick, className, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-2 px-4 rounded-md text-white font-bold ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
