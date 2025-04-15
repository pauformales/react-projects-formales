import React, { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow w-full fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-xl font-bold text-blue-600">MySite</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a
            href="#home"
            className="flex items-center gap-1 cursor-pointer hover:text-blue-600 hover:bg-blue-200 p-1 transition duration-200 rounded-lg"
          >
            <FaHome />
            <span>Home</span>
          </a>
          <a
            href="#about"
            className="flex items-center gap-1 cursor-pointer hover:text-blue-600 hover:bg-blue-200 p-1 transition duration-200 rounded-lg"
          >
            <FaInfoCircle />
            <span>About</span>
          </a>

          {/* Desktop Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
              className="hover:text-blue-600 flex items-center gap-1 hover:bg-blue-200 p-1 transition duration-200 rounded-lg"
            >
              <span>More</span>
              {desktopDropdownOpen ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </button>

            {desktopDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-left shadow rounded py-2 z-50">
                <a
                  href="#services"
                  className="px-4 py-2 hover:bg-gray-100 block"
                >
                  Services
                </a>
                <a
                  href="#portfolio"
                  className="px-4 py-2 hover:bg-gray-100 block"
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                >
                  <FaEnvelope />
                  <span>Contact</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-gray-800 text-left">
          <a href="#home" className="flex items-center gap-2">
            <FaHome />
            <span>Home</span>
          </a>
          <a href="#about" className="flex items-center gap-2">
            <FaInfoCircle />
            <span>About</span>
          </a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact" className="flex items-center gap-2">
            <FaEnvelope />
            <span>Contact</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
