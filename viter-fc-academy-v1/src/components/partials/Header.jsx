import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Make sure this is imported
import { FaPhoneAlt, FaMobileAlt } from "react-icons/fa";

import { HiOutlineMenu, HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Navigation from "./Navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="top-0 left-0 right-0 z-50 bg-white w-full">
      <div className="max-w-[1500px] mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3 border-b border-black">
          {/* Logo */}
          <div className="w-[200px] md:w-[150px] py-2">
            <a href="https://fca.edu.ph/">
              <img
                src="./img/header/fca-logo.webp"
                alt="Frontline Christian Academy"
                className="w-full h-auto"
              />
            </a>
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center gap-6 text-base text-black font-raleway">
            <div className="flex items-center gap-2">
              <FaPhoneAlt size={14} />
              <span>(049) 521-0732</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMobileAlt size={14} />
              <span>(+63) 908-202-0749 | (+63) 926-363-9722</span>
            </div>
            <a
              href="https://www.facebook.com/frontlinechristianacademy"
              className="block rounded-md py-2 px-6 bg-[#3b5897] hover:bg-[#1573e5] text-white"
            >
              Facebook
            </a>
            <Link
              to="/faq"
              className="block rounded-md py-2 px-6 border border-black hover:bg-[#28941e] hover:text-white text-black"
            >
              FAQ's
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div
              className={`transition-transform duration-300 ${
                menuOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              {menuOpen ? (
                <HiOutlineArrowNarrowLeft className="text-3xl" />
              ) : (
                <HiOutlineMenu className="text-3xl" />
              )}
            </div>
          </button>
        </div>

        {/* Navigation */}
        <div className="md:hidden">
          <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </div>
    </header>
  );
}
