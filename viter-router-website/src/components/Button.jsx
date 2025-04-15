import React from "react";

const Button = ({ children }) => (
  <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
    {children}
  </button>
);

export default Button;
