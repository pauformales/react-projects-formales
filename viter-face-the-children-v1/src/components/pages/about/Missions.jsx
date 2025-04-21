import React from "react";

const Missions = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center sm:justify-start">
          <img
            src="https://facethechildren.org/images/website/about-banner.webp"
            alt="About Banner"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-left sm:text-left">
          <p className="text-xs text-textyellow uppercase mb-2">Mission</p>
          <h2 className="text-[20px] lg:text-3xl font-semibold text-primary leading-snug mb-6">
            Transforming Dreams into Reality
          </h2>
          <p className="text-sm lg:max-w-[90%] max-w-[95%] lg:leading-[2]">
            FTC mission is to make a difference in the lives of street children
            by rescuing, protecting, and caring for those that are abandoned,
            abused, or dangerously neglected (AADN). We are making a difference
            in the lives of children in need through child care programs and
            centers that provide full time protection and care, academic and
            spiritual development, and dedicated staff committed to the long
            term welfare and development of AADN children. We are committed to
            doing all that is necessary to guide them into adulthood as young
            men and women who may lead successful adult lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Missions;
