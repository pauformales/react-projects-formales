import React from "react";

const Banner = () => {
  return (
    <section className="bg-white mt-20 py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:max-w-xl text-left lg:text-left">
          <p className="text-xs text-orange-500 uppercase mb-2">
            Creating Opportunity
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-gray-800 sm:leading-[1.1] lg:leading-[1.2] mb-6">
            Making a difference for abandoned, abused, or dangerously
            <br className="hidden sm:inline" />
            neglected children
          </h1>

          <button className="bg-primary text-white px-6 py-2 rounded hover:bg-hover text-sm">
            Sponsor Now
          </button>
        </div>

        <div className="w-full flex justify-center lg:justify-end">
          <img
            src="https://facethechildren.org/images/website/h-banner.webp"
            alt="Children Image"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
