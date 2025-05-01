import { useState } from "react";
import { FaPhoneAlt, FaMobileAlt } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Navigation from "./Navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="top-0 left-0 right-0 z-50 bg-white">
      <div className="mx-auto w-full max-w-[1500px] px-4">
        {/* Top Row */}
        <div className="flex items-center justify-between gap-4 py-2 md:flex-row">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="./img/header/fca-logo.webp"
              alt="FCA Logo"
              className="h-16 object-contain"
            />
          </div>

          {/* Desktop Contact Info and Buttons */}
          <div className="hidden md:flex flex-col items-center gap-2 text-xs text-black md:flex-row md:gap-6">
            {/* Contact Info */}
            <div className="flex flex-col items-center gap-1 md:flex-row md:gap-4 font-raleway text-[15px]">
              <div className="flex items-center gap-1">
                <FaPhoneAlt className="text-black" size={12} />
                <span>(049) 521-0732</span>
              </div>
              <div className="flex items-center gap-1">
                <FaMobileAlt className="text-black" size={12} />
                <span>(+63) 908-202-0749 | (+63) 926-363-9722</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2">
              <button className="rounded-md bg-myblue px-4 py-2 text-xs text-white hover:bg-[#2f4678]">
                Facebook
              </button>
              <button className="rounded-md border border-black px-4 py-2 text-xs text-black hover:bg-gray-100">
                FAQ's
              </button>
            </div>
          </div>

          {/* Mobile Burger Button (Right Side) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center justify-center p-2 transition-transform duration-300"
            >
              <div
                className={`transition-transform duration-300 ${
                  menuOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                {menuOpen ? (
                  <HiOutlineArrowNarrowLeft className="text-3xl text-black" />
                ) : (
                  <HiOutlineMenu className="text-3xl text-black" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-500" />

        {/* Conditionally render Navigation on mobile */}
        <div className="md:hidden">
          <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </div>
    </header>
  );
}
