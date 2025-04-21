import React from "react";

const FloatingInput = ({ label, type = "text", name }) => (
  <div className="relative w-full">
    <input
      type={type}
      id={name}
      name={name}
      className="w-full border border-gray-300 rounded-md px-3 pt-4 pb-2  bg-gray-100 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-ring-primary"
      placeholder=" "
    />
    <label
      htmlFor={name}
      className="absolute left-3 -top-2 text-xs  px-1 bg-gray-100 text-primary"
    >
      {label}
    </label>
  </div>
);

const ContactForm = () => {
  return (
    <section className="py-16 bg-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 justify-center">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex justify-center sm:justify-start">
          <div>
            <p className="text-textyellow uppercase text-xs  mb-1">
              Frequently Asked Question
            </p>
            <h2 className="text-primary lg:max-w-[70%] lg:text-3xl text-lg sm:text-3xl font-semibold mb-3">
              Can't find what you are looking for?
            </h2>
            <p className="text-gray-800 text-sm lg:max-w-[60%]">
              If your question is not listed above, you can use the form to send
              directly to us your questions.
            </p>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="w-full lg:w-1/2">
          <form className="flex flex-col gap-4 text-sm">
            <FloatingInput label="Name" name="name" />
            <FloatingInput label="Email" name="email" type="email" />
            <FloatingInput label="Phone" name="phone" type="tel" />
            <FloatingInput label="Subject" name="subject" />

            {/* Message textarea */}
            <div className="relative w-full">
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border border-gray-300 bg-gray-100 rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-ring-primary resize-none"
                placeholder=" "
              />
              <label
                htmlFor="message"
                className="absolute left-3 -top-2 text-xs bg-gray-100 px-1 text-primary"
              >
                Message
              </label>
            </div>

            <button
              type="submit"
              className="bg-lightyellow text-white text-xs font-medium py-1.5 px-3 rounded-md hover:opacity-90 transition self-start"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
