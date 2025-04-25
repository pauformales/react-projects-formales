import React from "react";

const Vision = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-12 md:gap-10">
        {/* Image */}
        <div className="md:w-3/4 flex justify-center md:justify-start">
          <img
            src="./img/about/about-vision.webp"
            alt="About Banner"
            className="w-full h-auto lg:max-w-lg mx-auto"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-left">
          <p className="text-xs text-textyellow uppercase mb-2">Vision</p>
          <h2 className="text-lg md:text-[28px] lg:text-[30px]  lg:max-w-[70%] font-semibold text-primary mb-6 leading-normal">
            Empowering Change, Inspiring Purpose
          </h2>
          <p
            className="text-[#3a3b36] text-sm md:text-sm max-w-[90%] md:max-w-[350px] lg:max-w-[95%]"
            style={{ lineHeight: "2" }}
          >
            A nationwide network of child care centers committed to the
            advocacy, protection, care and development of abandoned, abused, or
            dangerously neglected children.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
