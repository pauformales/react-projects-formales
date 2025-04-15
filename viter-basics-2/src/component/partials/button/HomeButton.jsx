import React from "react";

const HomeButton = ({ buttonText, buttonFunction }) => {
  return (
    <button
      onClick={() => {
        buttonFunction();
      }}
      className="border-2 px-4 py-3 rounded-md hover:bg-red-600 hover:text-white transition-all ease-in-out"
    >
      {buttonText}
    </button>
  );
};

export default HomeButton;
