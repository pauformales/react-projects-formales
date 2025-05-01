import React from "react";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-lightgray py-8 font-raleway">
      <div className="container px-4 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src=".//img/header/fca-logo.webp"
            alt="Frontline Christian Academy Logo"
            className="w-32 md:w-40"
          />
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-10">
          <div>
            <h4 className="font-semibold mb-2">Admission</h4>
            <ul className="space-y-1 text-sm">
              <li>Playschool</li>
              <li>Pre-Elementary</li>
              <li>Elementary</li>
              <li>Junior High</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Other Offers</h4>
            <ul className="space-y-1 text-sm">
              <li>Tutorial Services</li>
              <li>Arts</li>
              <li>Music Lessons</li>
              <li>Sports</li>
              <li>Transportation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quicklinks</h4>
            <ul className="space-y-1 text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Admission</li>
              <li>Services</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button className="bg-green-600 hover:bg-yellow-600 transition text-white font-semibold py-2 px-6 rounded-md">
            Give
          </button>
          <button className="border-2 border-green-600 text-mygreen hover:bg-yellow-600 hover:text-white transition font-semibold py-2 px-6 rounded-md">
            FAQ's
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-400 my-6"></div>

      {/* Bottom Info */}
      <div className="container px-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
        <p>© Frontline Christian Academy 2023</p>
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <span>Follow us:</span>
          <a href="#" className="text-gray-700 hover:text-primary">
            <div>
              <FaFacebook />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
