import { FaPhoneAlt, FaMobileAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Navigation({ menuOpen, setMenuOpen }) {
  const location = useLocation();
  const [underlineLeft, setUnderlineLeft] = useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const linkRefs = useRef([]);

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "ADMISSION", path: "/admission" },
    { label: "SERVICES", path: "/services" },
    { label: "GALLERY", path: "/gallery" },
    { label: "CONTACT", path: "/contact" },
    { label: "LITERARIO", path: "/literario" },
  ];

  useEffect(() => {
    const index = navItems.findIndex((item) => item.path === location.pathname);
    const activeLink = linkRefs.current[index];

    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setUnderlineLeft(offsetLeft + offsetWidth / 2 - 90); // center fixed 180px line
      setUnderlineWidth(180); // fixed width
    }
  }, [location.pathname]);

  return (
    <>
      {/* Desktop Nav */}
      <nav className="relative items-center justify-between py-3 text-sm font-medium font-raleway text-gray-700 hidden md:flex max-w-[1500px] mx-auto px-4">
        <div className="flex flex-1 items-center justify-center relative">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-1 items-center justify-center relative"
              ref={(el) => (linkRefs.current[index] = el)}
            >
              <Link to={item.path} className="text-center">
                {item.label}
              </Link>
              {index < navItems.length - 1 && (
                <div className="absolute right-0 top-1/2 h-6 w-px -translate-y-1/2 bg-gray-300" />
              )}
            </div>
          ))}
        </div>

        {/* GIVE Button */}
        <div className="ml-8 flex-shrink-0">
          <button className="rounded-md bg-primary px-5 py-2 text-sm font-bold text-white hover:bg-[#c9981e]">
            GIVE
          </button>
        </div>

        {/* Orange underline (fixed width, centered) */}
        <div
          className="absolute -top-1  h-2 rounded-full bg-primary"
          style={{
            left: underlineLeft,
            width: underlineWidth,
          }}
        />
      </nav>

      {/* Mobile Nav */}
      <div
        className={`fixed top-[88px] left-0 right-0 h-[calc(100vh-88px)] bg-white transition-transform duration-300 ease-in-out z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center gap-6 mt-8 font-raleway text-gray-700">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`text-lg ${
                location.pathname === item.path ? "text-primary font-bold" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}

          <button className="rounded-md bg-primary px-6 py-2 text-sm font-bold text-white hover:bg-[#c9981e]">
            GIVE
          </button>

          {/* Contact Info */}
          <div className="flex flex-col items-center text-center text-sm text-black mt-4 gap-2">
            <div className="flex items-center gap-1">
              <FaPhoneAlt className="text-black" size={12} />
              <span>(049) 521-0732</span>
            </div>
            <div className="flex items-center gap-1">
              <FaMobileAlt className="text-black" size={12} />
              <span>(+63) 908-202-0749 | (+63) 926-363-9722</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 mt-4 w-full px-8">
            <button className="w-full rounded-md bg-myblue px-4 py-2 text-xs text-white hover:bg-[#2f4678]">
              Facebook
            </button>
            <button className="w-full rounded-md border border-black px-4 py-2 text-xs text-black hover:bg-gray-100">
              FAQ's
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
