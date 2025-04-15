import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-center text-white p-4">
      <p>Movie data provided by The Movie Database (TMDb) API</p>
      <span>&copy; {currentYear} Movie Explorer App</span>
    </footer>
  );
};

export default Footer;
