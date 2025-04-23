import React from "react";

const Stats = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:gap-16 lg:gap-60">
        <div className="w-full md:w-1/2 flex justify-center sm:justify-start">
          <img
            src="https://facethechildren.org/images/website/h-about.webp"
            alt="Children Graphic"
            className="w-full max-w-md mx-auto"
          />
        </div>

        <div className="w-full md:w-1/2 text-left">
          <p className="text-xs text-orange-500 uppercase mb-2">Who we are</p>
          <h2 className="text-lg md:text-[30px] lg:text-[28px] md:w-[75%] text-primary font-semibold leading-snug mb-2">
            Let's Share to Change a Life Today
          </h2>
          <p className="text-gray-700 text-sm w-full md:w-[95%] leading-[2]">
            When we come together as a community, our collective efforts can
            lead to monumental changes. By fostering a culture of sharing, we
            not only help those in immediate need but also build a foundation of
            support and compassion that benefits everyone.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div>
              <h3 className="text-textyellow text-3xl md:text-4xl font-semibold">
                20+
              </h3>
              <small className="text-xs text-gray-600">Years Experience</small>
            </div>
            <div>
              <h3 className="text-textyellow text-3xl md:text-4xl font-semibold">
                10+
              </h3>
              <small className="text-xs text-gray-600">Volunteers</small>
            </div>
            <div>
              <h3 className="text-textyellow text-3xl md:text-4xl font-semibold">
                30+
              </h3>
              <small className="text-xs text-gray-600">Resident Child</small>
            </div>
            <div>
              <h3 className="text-textyellow text-3xl md:text-4xl font-semibold">
                10+
              </h3>
              <small className="text-xs text-gray-600">
                Non-resident Child
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
