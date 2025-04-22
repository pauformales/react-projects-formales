import React from "react";

const ChangingLives = () => {
  return (
    <section className="bg-white mt-20 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-start gap-20">
        {/* Left Column: Text Content */}
        <div className="w-full md:w-1/2 space-y-8 text-gray-700">
          {/* Problem */}
          <div className="my-10">
            <p className="text-sm text-textyellow uppercase mb-1">
              The Problem
            </p>
            <h2 className="lg:text-3xl text-lg font-semibold text-primary mb-2">
              Rescuing Lives from Poverty and Abuse
            </h2>
            <p className=" lg:max-w-[90%] text-sm" style={{ lineHeight: "2" }}>
              Historically in the Philippines, due to widespread poverty, the
              problem of abandoned, abused, or dangerously neglected (AADN)
              children has been remarkably large. Many hundreds of thousands of
              children, perhaps millions, have grown up living mostly on the
              streets. There is very minimal governmental protection or
              assistance for what are often termed “street children,” and in
              class-segregated social systems these children are not only viewed
              as a nuisance, but are the target of a wide variety of evils.
            </p>
          </div>

          {/* Action */}
          <div className="my-10">
            <p className="text-sm text-textyellow uppercase mb-1">Our Action</p>
            <h2 className="lg:text-3xl text-lg text-primary max-w-[70%] font-semibold lg:max-w-[80%] mb-2">
              Creating Lasting Change through Our Intervention
            </h2>
            <p className="lg:max-w-[85%] text-sm" style={{ lineHeight: "2" }}>
              The Face the Children (FTC) program is established to serve AADN
              children through a program that provides protection, care,
              nurture, education, and spiritual development that affords them a
              genuinely greater opportunity for a dignified and meaningful adult
              life.
            </p>

            <ul className=" space-y-4 py-5 lg:max-w-[80%]">
              <strong className="text-primary text-lg font-semibold`">
                Protect
              </strong>
              <li className="pb-5 text-sm" style={{ lineHeight: "2" }}>
                We provide a safe environment and place for those living in our
                children’s homes, who are provided full-time care.
              </li>
              <strong className="text-primary text-lg font-semibold">
                Care
              </strong>
              <li className="pb-5 text-sm" style={{ lineHeight: "2" }}>
                We meet the basic physical and material needs for the children
                in the FTC program.
              </li>
              <strong className="text-primary text-lg font-semibold">
                Nurture
              </strong>
              <li className="pb-5 text-sm" style={{ lineHeight: "2" }}>
                We provide loving oversight that involves listening, counseling,
                and prayer. We do our best to be a parent figure in the lives of
                the children.
              </li>
              <strong className="text-primary text-lg font-semibold">
                Education
              </strong>
              <li className="pb-5 text-sm" style={{ lineHeight: "2" }}>
                We provide K-12 educational services for all the children in our
                program, as well as opportunities for University for the higher
                achievers.
              </li>
              <strong className="text-primary text-lg font-semibold">
                Spiritual Development
              </strong>
              <li className="pb-5 text-sm" style={{ lineHeight: "2" }}>
                As Christians we believe spiritual well-being comes through a
                meaningful relationship with God. The Bible is our main source
                of spiritual direction and guidance.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="w-full lg:mt-10 md:w-1/2">
          <img
            src="https://facethechildren.org/images/website/s-banner.webp"
            alt="Face the Children program"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ChangingLives;
