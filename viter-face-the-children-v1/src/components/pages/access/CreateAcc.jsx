import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateAcc() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering:", form);
  };

  const isButtonDisabled = Object.values(form).some((val) => !val.trim());

  return (
    <section className="bg-white min-h-screen flex justify-center px-6 pt-[54px]">
      <div className="w-full max-w-2xl flex flex-col items-center justify-start">
        <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col items-center">
          <img
            src="/src/assets/ftc_svg_logo.svg"
            alt="Logo"
            className="w-[300px] h-[89px] mb-8"
          />

          <div className="w-full max-w-[400px]">
            <h2 className="text-lg font-semibold text-[#3a3b36] mb-4">
              Create a Donor Account
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full max-w-[400px] text-sm"
          >
            {/* Name */}
            <div className="relative w-full">
              <label
                htmlFor="name"
                className="absolute left-2 -top-2 bg-white px-1 text-xs text-primary z-10"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full h-[38px] border border-gray-300 rounded-lg px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
            </div>

            {/* Email */}
            <div className="relative w-full">
              <label
                htmlFor="email"
                className="absolute left-2 -top-2 bg-white px-1 text-xs text-primary z-10"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full h-[38px] border border-gray-300 rounded-lg px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
            </div>

            {/* Address */}
            <div className="relative w-full">
              <label
                htmlFor="address"
                className="absolute left-2 -top-2 bg-white px-1 text-xs text-primary z-10"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                rows={3}
                value={form.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 pt-4 pb-8 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
            </div>

            {/* Other fields */}
            {[
              { name: "city", label: "City", type: "text" },
              { name: "state", label: "State/Province", type: "text" },
              { name: "country", label: "Country", type: "text" },
              { name: "zip", label: "Zip Code", type: "text" },
            ].map(({ name, label, type }) => (
              <div key={name} className="relative w-full">
                <label
                  htmlFor={name}
                  className="absolute left-2 -top-2 bg-white px-1 text-xs text-primary z-10"
                >
                  {label}
                </label>
                <input
                  id={name}
                  name={name}
                  type={type}
                  value={form[name]}
                  onChange={handleChange}
                  className="w-full h-[38px] border border-gray-300 rounded-lg px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
              </div>
            ))}

            <button
              type="submit"
              disabled={isButtonDisabled}
              className={`w-full mt-2 ${
                isButtonDisabled
                  ? "bg-[#3e9bd0] opacity-50 cursor-not-allowed"
                  : "bg-primary hover:opacity-90"
              } text-white text-[12px] font-medium py-2 px-4 rounded-md transition`}
            >
              Register
            </button>

            <div className="text-xs text-gray-600 text-left">
              <Link to="/access">
                Back to <span className="text-primary underline">login</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
