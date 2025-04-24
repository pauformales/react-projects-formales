import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Strategy", path: "/strategy" },
    { name: "Contact", path: "/contact" },
    { name: "Sponsor child", path: "/sponsor" },
  ];

  return (
    <nav className="bg-[#fafafa] border-b border-gray-200  fixed top-0 left-0 right-0 z-50 mt-7">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <img src="/src/assets/ftc_svg_logo.svg" alt="Logo" className="h-10" />

        <ul className="hidden md:flex space-x-6 text-sm text-gray-800 items-center">
          {navLinks.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`${
                  currentPath === item.path
                    ? "text-orange-500 "
                    : "hover:text-orange-500"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}

          <li>
            <Link to="/donate">
              <button
                className={`${
                  currentPath === "/donate"
                    ? "bg-textyellow"
                    : "bg-primary hover:bg-[#2877a4]"
                } text-white text-xs  px-3 py-2 rounded`}
              >
                Donate
              </button>
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-primary"
        >
          <span className="transition-all duration-300 ease-in-out transform">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </span>
        </button>
      </div>

      <div
        className={`fixed top-30 left-0 right-0 h-[calc(100vh-4rem)] w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center justify-center space-y-4 mt-8 text-sm text-gray-800 uppercase">
          {navLinks.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  currentPath === item.path
                    ? "text-orange-500 "
                    : "hover:text-orange-500"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}

          <li>
            <Link to="/donate" onClick={() => setIsOpen(false)}>
              <button
                className={`${
                  currentPath === "/donate" ? "bg-textyellow  " : "bg-primary"
                } text-white text-xs py-2  px-3 w-27 rounded`}
              >
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
