import React from "react";

const Testimonial = () => {
  return (
    <section className="w-full bg-[#f2f2f2]  py-16 md:py-20 px-4 md:px-0">
      <h2 className="text-3xl font-raleway font-semibold text-green-700 text-center mb-12">
        What Our Clients Have To Say
      </h2>

      <div className="flex flex-col md:flex-row w-full max-w-[1400px] ml-5">
        <div className="flex flex-col w-full md:max-w-[1100px]">
          <div className="relative mb-8 mt-[100px]">
            <img
              src="./img/home/qoute.svg"
              alt="quote"
              className="absolute left-0 -top-20 w-10 h-10"
            />
            <p className="text-gray-700 leading-relaxed font-raleway text-[16px] max-w-[920px]">
              Everyone has a smile on their faces and always greet people with a
              kind heart. The 5 day summer Playschool is a great experience for
              my Aebriel. She really enjoyed, learned and gained new friends!
              That’s why we registered again for the month <br />
              of September. See you again on September!
            </p>
            <img
              src="./img/home/qoute2.svg"
              alt="quote end"
              className="absolute right-[220px] top-[220px] w-10 h-10"
            />
          </div>

          <div className="flex items-center gap-4 mt-6">
            <img
              src="./img/home/testimony2.png"
              alt="Testimony2"
              className=" w-[100px] h-[100px] rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">Joanna Mae Briones-Alcantara</p>
              <p className="text-gray-500 text-sm">Mother of Aebriel</p>
            </div>
          </div>
        </div>

        {/* RIGHT Side (images) */}
        <div className="relative flex flex-1 justify-center mt-12 md:mt-0 mr-[120px]">
          <div className="flex flex-col gap-4">
            <img
              src="./img/home/fca-Studaent-receiving-certificate.webp"
              alt="Child 1"
              className="w-[240px] h-[220px] object-cover shadow-md"
            />
            <img
              src="./img/home/fca-Studaent-receiving-certificate-3.webp"
              alt="Child 2"
              className="w-[240px] h-[220px] object-cover shadow-md"
            />
          </div>
          <img
            src="./img/home/fca-Studaent-receiving-certificate-2.webp"
            alt="Child 3"
            className="w-[240px] h-[220px] object-cover shadow-md absolute left-[190px] top-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
