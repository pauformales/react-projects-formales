import React from "react";
import socialLinks from "./socialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6 text-center text-sm">
      <div className="flex justify-center space-x-6 mb-2">
        {socialLinks.map(({ icon: Icon, url, hoverColor }, index) => (
          <a
            key={index}
            href={url}
            className={`${hoverColor} transition`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon />
          </a>
        ))}
      </div>
      <p>© {currentYear} MySite. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
