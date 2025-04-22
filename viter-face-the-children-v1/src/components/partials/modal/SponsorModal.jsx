import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";

const SponsorModal = ({ isOpen, closeModal, selectedChild }) => {
  const [showModal, setShowModal] = useState(isOpen);
  const [selectedAmount, setSelectedAmount] = useState(null);

  const presetAmounts = [20, 40, 50, 80, 100, 200];

  const handleAmountChange = (amount) => {
    setSelectedAmount(amount);
  };

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      const timer = setTimeout(() => setShowModal(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!showModal || !selectedChild) return null;

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
          rows="4"
        />
      ) : isSelect ? (
        <select
          id={name}
          name={name}
          className="w-full border border-primary-300 rounded-md px-3 pt-4 pb-2 text-sm bg-white text-black focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="" disabled selected hidden></option>
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className={`bg-white rounded shadow-lg w-full max-w-sm p-6 transform transition-all duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-full "
        }`}
      >
        <div className="relative overflow-hidden -m-[24px] mb-6">
          <div className="bg-primary px-4 py-5 rounded-t w-full">
            <h2 className="text-xl font-semibold text-white">
              Sponsor {selectedChild.name}
            </h2>
          </div>
          <MdClose
            onClick={closeModal}
            className="text-white text-2xl cursor-pointer absolute top-4 right-4"
          />
        </div>

        {/* Sponsorship options */}
        <div className="mb-6">
          <h3 className="text-gray-700 font-semibold mb-3">Choose Amount</h3>
          <div className="grid grid-cols-2 gap-4">
            {presetAmounts.map((amount) => (
              <label
                key={amount}
                htmlFor={`amount-${amount}`}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <span className="relative flex items-center justify-center">
                  <input
                    type="radio"
                    id={`amount-${amount}`}
                    name="amount"
                    value={amount}
                    checked={selectedAmount === amount}
                    onChange={() => handleAmountChange(amount)}
                    className="peer hidden"
                  />
                  <span className="h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 peer-checked:bg-textyellow group-hover:bg-textyellow">
                    <svg
                      className="w-3 h-3 text-white transition-opacity duration-200  peer-checked:opacity-100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                </span>
                <span className="text-sm text-gray-700">${amount}.00</span>
              </label>
            ))}
          </div>

          <div className="mt-4">
            <label
              htmlFor="fully-sponsor"
              className="flex items-center gap-2 cursor-pointer group"
            >
              <span className="relative flex items-center justify-center">
                <input
                  type="radio"
                  id="fully-sponsor"
                  name="amount"
                  value={380}
                  checked={selectedAmount === 380}
                  onChange={() => handleAmountChange(380)}
                  className="peer hidden"
                />
                <span className="h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 peer-checked:bg-textyellow group-hover:bg-textyellow">
                  <svg
                    className="w-3 h-3 text-white transition-opacity duration-200  peer-checked:opacity-100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              </span>
              <span className="text-sm text-gray-700">
                $380.00 to Fully Sponsor
              </span>
            </label>
          </div>
        </div>

        <form>
          <div className="mb-4 text-primary">
            <FloatingInput
              label="*Frequency"
              name="frequency"
              isSelect={true}
              options={["One-time", "Monthly"]}
            />
          </div>

          <div className="mb-4 text-primary">
            <FloatingInput label="Remarks" name="remarks" isTextArea={true} />
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
            <img src="/creditcards.png" alt="Credit Cards" className="w-30" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorModal;
