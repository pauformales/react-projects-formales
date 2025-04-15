import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";

const navLinks = [
  {
    label: "Home",
    href: "#home",
    icon: FaHome,
  },
  {
    label: "About",
    href: "#about",
    icon: FaInfoCircle,
  },
];

const dropdownLinks = [
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Portfolio",
    href: "#portfolio",
  },
  {
    label: "Contact",
    href: "#contact",
    icon: FaEnvelope,
  },
];

export { navLinks, dropdownLinks };
