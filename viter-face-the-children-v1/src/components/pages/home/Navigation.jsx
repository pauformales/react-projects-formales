import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 right-0 z-50 mt-5">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <img src="./src/assets/ftc_svg_logo.svg" alt="Logo" className="h-8" />

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm text-gray-800 items-center">
          <li>
            <Link to="/" className="text-textyellow">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-orange-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-orange-500">
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/strategy" className="hover:text-orange-500">
              Strategy
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-500">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/sponsor" className="hover:text-orange-500">
              Sponsor child
            </Link>
          </li>
          <li>
            <Link to="/donate">
              <button className="bg-primary text-white text-sm px-4 py-1 rounded hover:bg-hover">
                Donate
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button with Smooth Transition */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-primary"
        >
          <span className="transition-all duration-300 ease-in-out transform">
            {isOpen ? (
              <X
                size={24}
                className="transition-all duration-300 ease-in-out scale-100 opacity-100"
              />
            ) : (
              <Menu
                size={24}
                className="transition-all duration-300 ease-in-out scale-100 opacity-100"
              />
            )}
          </span>
        </button>
      </div>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-30 left-0 right-0 h-[calc(100vh-4rem)] w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center justify-center space-y-4 mt-8 text-sm text-gray-800">
          <li>
            <Link
              to="/"
              className="text-orange-500 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className="hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="/strategy"
              className="hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              Strategy
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/sponsor"
              className="hover:text-orange-500"
              onClick={() => setIsOpen(false)}
            >
              Sponsor child
            </Link>
          </li>
          <li>
            <Link to="/donate">
              <button className="bg-blue-500 text-white text-sm px-4 py-1 w-32 rounded hover:bg-blue-600">
                Donate
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
