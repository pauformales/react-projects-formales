import React from "react";

const Header = () => {
  return (
    <header className="fixed  w-full z-50">
      <div className="bg-primary text-white text-xs sm:text-sm">
        <div className="container mx-auto flex justify-end gap-4 py-2 px-2">
          <a href="#">Visit Philippine Frontline Ministries</a>
          <a href="#">Login</a>
        </div>
      </div>

      <div className="bg-[#FAFAFA] shadow border-gray-200">
        <div className="container mx-auto flex items-center justify-between py-4 sm:px-10">
          <div className="flex items-center gap-2">
            <img
              src="./src/image/ftc_svg_logo.svg"
              alt="Face the Children Logo"
              className="h-8 sm:h-10"
            />
          </div>

          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-700">
              Home
            </a>
            <a href="#" className="text-gray-700">
              About
            </a>
            <a href="#" className="text-gray-700">
              FAQ
            </a>
            <a href="#" className="text-gray-700">
              Strategy
            </a>
            <a href="#" className="text-gray-700">
              Contact
            </a>
            <a href="#" className="text-gray-700">
              Sponsor child
            </a>
            <button
              href="#"
              className="bg-primary text-white text-xs px-4 py-2 rounded"
            >
              Donate
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
