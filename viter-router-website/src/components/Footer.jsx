import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-900 text-white text-center py-4">
    <div className="flex justify-center space-x-4 mb-2">
      <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
      <FaTwitter className="hover:text-blue-400 cursor-pointer" />
      <FaInstagram className="hover:text-pink-500 cursor-pointer" />
    </div>
    <p className="text-sm">&copy; 2025 Mysite. All rights reserved.</p>
  </footer>
);
