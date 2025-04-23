import React from "react";

const Banner = () => {
  return (
    <section className="bg-white mt-[110px] lg:mt-[135px] py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="w-full md:max-w-xl text-left">
          <p className="text-xs text-orange-500 uppercase mb-2">
            Creating Opportunity
          </p>
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-semibold text-[#3a3b36]  mb-6"
            style={{ lineHeight: "1.4" }}
          >
            Making a difference for abandoned, abused, or dangerously
            <br className="hidden sm:inline" /> neglected children
          </h1>

          <button className="bg-primary text-white px-3 py-2 rounded hover:bg-hover text-xs">
            Sponsor Now
          </button>
        </div>

        <div className="w-full flex justify-center md:justify-end">
          <img
            src="https://facethechildren.org/images/website/h-banner.webp"
            alt="Children Image"
            className="max-w-md md:max-w-[800px] lg:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
