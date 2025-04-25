import React from "react";

const Affiliates = () => {
  return (
    <section className="mb-[70px] py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full text-center">
          <span className="text-xs uppercase text-textyellow block mb-2">
            Trusted Affiliates
          </span>
          <h4 className="text-primary font-semibold lg:text-3xl mb-6">
            Our Advocacy Associates
          </h4>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            <img
              src="./img/associates/logo-fwc.png"
              alt="FWC"
              className="h-15 w-auto object-contain"
            />
            <img
              src="./img/associates/logo-fbs.png"
              alt="FBS"
              className="h-15 w-auto object-contain"
            />
            <img
              src="./img/associates/logo-fca.png"
              alt="FCA"
              className="h-15 w-auto object-contain"
            />
            <img
              src="./img/associates/logo-ftw.png"
              alt="FTW"
              className="h-15 w-auto object-contain"
            />
            <img
              src="./img/associates/logo-pfm.png"
              alt="PFM"
              className="h-15 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Affiliates;
