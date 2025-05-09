import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const FloatingInput = ({
  label,
  type = "text",
  name,
  isTextArea = false,
  isSelect = false,
  options = [],
}) => (
  <div className="relative w-full">
    {isTextArea ? (
      <textarea
        id={name}
        name={name}
        className="w-full border border-primary-300 rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
        placeholder=" "
        rows="5"
      />
    ) : isSelect ? (
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full border border-primary-300 rounded-md px-3 pt-4 pb-2 text-sm bg-white text-black focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
      >
        <option value="" disabled hidden></option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        className="w-full border border-primary-300 rounded-md px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
        placeholder=" "
      />
    )}
    <label
      htmlFor={name}
      className="absolute left-3 -top-2 text-xs bg-white px-1 text-primary-600"
    >
      {label}
    </label>
  </div>
);

const DonateModal = ({ isOpen, closeModal, title }) => {
  const [showModal, setShowModal] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setTimeout(() => setAnimateIn(true), 50);
    } else {
      setAnimateIn(false);
      const timer = setTimeout(() => setShowModal(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className={`bg-white rounded-md shadow-lg w-full max-w-sm p-6 m-4 transform transition-all duration-300 ease-in-out ${
          animateIn ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="relative -m-[24px] overflow-hidden mb-4">
          <div className="bg-primary overflow px-4 py-5 rounded-t-md w-full">
            <h2 className="text-xl font-semibold text-white">
              {title || "Donation"}
            </h2>
          </div>
          <MdClose
            onClick={closeModal}
            className="text-white text-2xl cursor-pointer absolute top-4 right-4"
          />
        </div>

        <form>
          <div className="mb-4 text-primary">
            <FloatingInput
              label="*Designation"
              name="designation"
              isSelect
              options={["Meal for the Christmas"]}
            />
          </div>

          <div className="mb-4 text-primary">
            <FloatingInput label="Amount" name="amount" type="number" />
          </div>

          <div className="mb-4 text-primary">
            <FloatingInput
              label="*Frequency"
              name="frequency"
              isSelect
              options={["One-Time", "Monthly"]}
            />
          </div>

          <div className="mb-4 text-primary">
            <FloatingInput label="Remarks" name="remarks" isTextArea />
          </div>

          <div className="mb-4 text-primary">
            <FloatingInput label="Email" name="email" type="email" />
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-primary w-full text-white px-4 py-2 rounded hover:bg-primary-700 transition"
            >
              Proceed
            </button>
          </div>
        </form>

        <div className="mt-6">
          <p className="text-[10px] text-right mr-[56px] text-gray-700">
            Donate with your credit card.
          </p>
          <div className="flex justify-end gap-2 mt-2">
            <img src="/creditcards.png" alt="Credit Cards" className="w-25" />
          </div>
        </div>

        {title === "Children Sponsorship" && (
          <div className="mt-4 text-center">
            <Link
              to="/sponsor-section"
              className="text-primary hover:underline"
              onClick={closeModal}
            >
              Go to Sponsor Section
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonateModal;
