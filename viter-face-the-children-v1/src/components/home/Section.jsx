import React from "react";

const Section = () => {
  return (
    <section className="bg-white py-20 pt-10 sm:px-12 font-poppins">
      <div className="container flex flex-col mx-auto lg:flex-row items-center">
        {/* Left Image */}
        <div className="flex-1 flex justify-center mb-10 lg:mb-0">
          <img
            src="./src/image/h-about.webp"
            alt="Collage of children and bubbles"
            className="max-w-full h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-sm text-orange font-semibold uppercase mb-2">
            Who We Are
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-sky-600 mb-4 leading-tight">
            Let’s Share to Change a life today
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
            When we come together as a community, our collective efforts can
            lead to monumental changes. By fostering a culture of sharing, we
            not only help those in immediate need but also build a foundation of
            support and compassion that benefits everyone.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-y-8 gap-x-10 max-w-md mx-auto lg:mx-0">
            <div>
              <p className="text-orange text-4xl font-bold">20+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div>
              <p className="text-orange text-4xl font-bold">10+</p>
              <p className="text-sm text-gray-600">Volunteers</p>
            </div>
            <div>
              <p className="text-orange text-4xl font-bold">30+</p>
              <p className="text-sm text-gray-600">Resident Child</p>
            </div>
            <div>
              <p className="text-orange text-4xl font-bold">10+</p>
              <p className="text-sm text-gray-600">Non-Resident Child</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
