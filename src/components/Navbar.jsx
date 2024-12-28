import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white text-black sticky top-0 z-50 shadow-md">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="text-base font-bold">
            <NavLink to="/" onClick={closeMenu}>
              <img
                src="https://res.cloudinary.com/db5yniogx/image/upload/v1735327489/shantibarilogocloud_a8h82d.png"
                alt="Shantibari Logo"
                className="w-20 h-auto cursor-pointer"
              />
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navbar Links */}
          <div className="hidden lg:flex space-x-8 font-roboto text-base">
            <NavLink to="/" className="hover:text-gray-400">
              Home
            </NavLink>
            <NavLink to="/about" className="hover:text-gray-400">
              About Us
            </NavLink>
            <NavLink to="/services" className="hover:text-gray-400">
              Services
            </NavLink>
            <NavLink to="/events" className="hover:text-gray-400">
              Events
            </NavLink>
            <NavLink to="/gallery-frida-kahlo" className="hover:text-gray-400">
              Gallery Frida Kahlo
            </NavLink>
            <NavLink to="/contact" className="hover:text-gray-400">
              Contact Us
            </NavLink>
            <NavLink to="/audio-visual" className="hover:text-gray-400">
              Audio Visual
            </NavLink>
            <NavLink to="/media-coverage" className="hover:text-gray-400">
              Media Coverage
            </NavLink>
            <NavLink to="/brochure" className="hover:text-gray-400">
              Download Brochure
            </NavLink>
          </div>

          {/* Call Us Button */}
          <div className="hidden lg:block">
            <a
              href="tel:+8801325167271"
              className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-400 text-sm"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-6 py-4 space-y-6 bg-white">
          <NavLink to="/" onClick={closeMenu} className="block text-black text-base">
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMenu} className="block text-black text-base">
            About Us
          </NavLink>
          <NavLink to="/services" onClick={closeMenu} className="block text-black text-base">
            Services
          </NavLink>
          <NavLink to="/events" onClick={closeMenu} className="block text-black text-base">
            Events
          </NavLink>
          <NavLink
            to="/gallery-frida-kahlo"
            onClick={closeMenu}
            className="block text-black text-base"
          >
            Gallery Frida Kahlo
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu} className="block text-black text-base">
            Contact Us
          </NavLink>
          <NavLink to="/audio-visual" onClick={closeMenu} className="block text-black text-base">
            Audio Visual
          </NavLink>
          <NavLink to="/media-coverage" onClick={closeMenu} className="block text-black text-base">
            Media Coverage
          </NavLink>
          <NavLink to="/brochure" onClick={closeMenu} className="block text-black text-base">
            Download Brochure
          </NavLink>
          <div className="mt-6">
            <a
              href="tel:+8801325167271"
              className="block bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-400 text-base"
            >
              Call Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
