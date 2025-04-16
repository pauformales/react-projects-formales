import React from "react";

const Banner = () => {
  return (
    <section className="bg-white py-20 pt-40 sm:px-12 font-poppins">
      <div className="container flex flex-col mx-auto lg:flex-row items-center">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left lg:mb-0">
          <p className="text-sm text-orange font-semibold uppercase mb-2">
            Creating Opportunity
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-800 mb-6">
            Making a difference for <br />
            abandoned, abused, or <br />
            dangerously <br />
            neglected children
          </h1>
          <button className="bg-primary text-white text-sm font-semibold px-5 py-2 rounded">
            Sponsor Now
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="./src/image/h-banner.webp"
            alt="Banner circular collage"
            className="max-w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
