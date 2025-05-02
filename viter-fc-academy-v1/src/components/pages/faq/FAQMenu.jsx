import React from "react";

const FAQMenu = ({ selected, onSelect }) => {
  const items = [
    "About Our School",
    "Excellent Learning and Facilities",
    "Job Opportunities",
  ];

  return (
    <nav className="space-y-4 text-base md:text-lg text-gray-600">
      {items.map((item) => (
        <div
          key={item}
          onClick={() => onSelect(item)}
          className={`cursor-pointer transition-colors duration-200 ${
            selected === item ? "text-green-700 underline font-medium" : ""
          }`}
        >
          {item}
        </div>
      ))}
    </nav>
  );
};

export default FAQMenu;
