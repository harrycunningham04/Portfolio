import React from "react";
import { navLinks } from "../constants/index.js";

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentSection, setCurrentSection] = React.useState(0);
  const sections = [
    "Welcome to our site! This is the Home section.",
    "Check out our Features section for details.",
    "Learn more about us in the About section.",
    "Explore our Pricing plans here.",
    "Get in touch with us through the Contact section.",
  ];

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  const NavItems = () => (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a">
            {name}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 px-4 sm:px-8">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Harry Cunningham
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white transition-colors focus:outline-none sm:hidden"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.png"}
              alt={isOpen ? "Close menu" : "Open menu"}
              className="w-6 h-6"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="p-5 bg-black sm:hidden">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
