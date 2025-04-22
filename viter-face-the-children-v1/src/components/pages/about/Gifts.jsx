import React from "react";

const Gifts = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
        <span className="text-xs text-textyellow uppercase mb-2">
          Every Gift Counts
        </span>
        <h4 className="text-[#3a3b36] font-semibold text-lg md:text-2xl lg:text-3xl mb-4">
          Together, We Make a Difference
        </h4>
        <p className="text-sm md:text-base lg:text-sm max-w-sm md:max-w-lg lg:max-w-xl text-gray-600">
          Together, we lend a helping hand to those in need, offering hope and
          support where it's needed most. From volunteering our time to donating
          resources, each act of kindness strengthens our community fabric.
        </p>
      </div>
    </section>
  );
};

export default Gifts;
