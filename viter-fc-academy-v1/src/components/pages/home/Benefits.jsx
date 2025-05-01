import React from "react";

const Benefits = () => {
  return (
    <section
      className="w-full py-24 px-4 mt-[390px]"
      style={{
        backgroundImage: "url('./img/home/fca-bg-grayscale.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1280px] mx-auto  flex flex-col md:flex-row items-center gap-24">
        <div className="w-full md:w-1/2 flex flex-col items-center relative gap-8">
          <img
            src="./img/home/FCA-Banner-ezgif.com-gif-to-webp-converter.webp"
            alt="Kids learning"
            className="w-[450px] h-[450px] rounded-full object-cover z-10"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-12">
          <div className="flex items-start gap-6">
            <img
              src="/img/home/fca-Check.png"
              alt="Checkmark"
              className="w-6 h-6 mt-1"
            />
            <span className="text-2xl font-semibold font-raleway">
              Beautiful, Spacious Facilities
            </span>
          </div>
          <div className="flex items-start gap-6">
            <img
              src="/img/home/fca-Check.png"
              alt="Checkmark"
              className="w-6 h-6 mt-1"
            />
            <span className="text-2xl font-semibold font-raleway">
              Social Emotional Learning
            </span>
          </div>
          <div className="flex items-start gap-6">
            <img
              src="/img/home/fca-Check.png"
              alt="Checkmark"
              className="w-6 h-6 mt-1"
            />
            <span className="text-2xl font-semibold font-raleway">
              Holistic Development
            </span>
          </div>
          <div className="flex items-start gap-6">
            <img
              src="/img/home/fca-Check.png"
              alt="Checkmark"
              className="w-6 h-6 mt-1"
            />
            <span className="text-2xl font-semibold font-raleway">
              Highly Skilled and Caring Faculty
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
