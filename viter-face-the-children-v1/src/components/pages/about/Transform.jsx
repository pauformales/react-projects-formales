import React from "react";

const Transform = () => {
  return (
    <section className="py-2 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col mt-[100px] md:mt-[225px] lg:mt-[150px] md:flex-row items-center gap-10 md:gap-[80px] lg:gap-[150px] justify-between">

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="./img/about/about-banner.webp"
            alt="About Banner"
            className="w-auto h-auto md:max-w-[500px] lg:max-w-[600px]"
          />
        </div>


        <div className="w-full md:w-1/2 text-left">
          <p className="text-xs text-textyellow uppercase mb-1">
            from street to smiles
          </p>
          <h2
            className="text-2xl sm:text-3xl  md:text-[34px] lg:text-[46px] font-semibold text-[#3a3b36] mb-8 md:mb-10"
            style={{ lineHeight: "1.4" }}
          >
            Transform lives from <br />
            the harsh reality of the streets to the warmth and comfort of
            genuine smiles
          </h2>
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-hover text-xs">
            Sponsor Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Transform;
