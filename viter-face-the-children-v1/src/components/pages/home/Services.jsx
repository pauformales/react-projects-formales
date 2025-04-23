import React from "react";

const Services = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 text-left">
          <p className="text-xs text-orange-500 uppercase mb-2">
            Our Solutions
          </p>
          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold text-primary mb-6">
            Services We Provide
          </h3>
          <p className="mb-10 text-sm md:max-w-[85%] lg:max-w-[70%] leading-[2] text-gray-700">
            Making a difference in the lives of children can be simplified into
            a few essential actions focused on their overall well-being. Here
            are the things we provide for our children
          </p>
          <button className="bg-primary text-white px-3 py-2 rounded hover:bg-hover text-xs">
            Learn More
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://facethechildren.org/images/website/h-service.webp"
            alt="Services"
            className="w-full max-w-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
