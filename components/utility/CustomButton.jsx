import React from "react";

const CustomButton = ({ children, customClasses }) => {
  return (
    <button
      className={`px-6 py-2 hover:opacity-60 rounded-xl ${customClasses.map(
        (cls) => cls + " "
      )}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
