import React, { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQItem = ({ question, answer, initialOpen = false }) => {
  const [open, setOpen] = useState(initialOpen);

  useEffect(() => {
    setOpen(initialOpen);
  }, [initialOpen]);

  return (
    <div className="bg-[#f2f2f2] px-5 py-4 mb-3">
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center cursor-pointer"
      >
        <p className="text-base font-semibold md:text-lg">
          <span className="text-green-700 font-bold mr-2">Q:</span>
          {question}
        </p>
        <FiChevronDown
          size={30}
          className={`transition-transform duration-300 ${
            open ? "transform -rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {open && (
          <p className="mt-4 text-sm md:text-base leading-relaxed text-justify whitespace-pre-line">
            {answer}
          </p>
        )}
      </div>
    </div>
  );
};

export default FAQItem;
