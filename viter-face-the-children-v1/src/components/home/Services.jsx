import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex justify-between max-w-[90%] items-center">
        <div>
          <small className="text-sm font-semibold uppercase text-orange">
            Our Solutions
          </small>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-primary  mt-4">
            Services We Provide
          </h2>
          <p className="text-gray-500 mt-2 w-[400px]">
            Making a difference in the lives of children can be simplified into
            a few essential actions focused on their overall well-being. Here
            are the things we provide for our children
          </p>
          <button className="mt-4 px-6 py-2 bg-primary text-white rounded-md ">
            Learn More
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative">
            <img
              src="./src/image/h-service.webp"
              alt="Services"
              className="w-auto h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
