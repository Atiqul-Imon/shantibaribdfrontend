import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-base font-bold">
            <img
              src="https://res.cloudinary.com/db5yniogx/image/upload/v1735327489/shantibarilogocloud_a8h82d.png"
              alt="Shantibari Logo"
              className="w-16 h-auto" // Adjusted logo size
            />
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
          <div className="hidden lg:flex space-x-6 font-roboto text-sm">
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
            </NavLink> {/* Updated to Gallery Frida Kahlo */}
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
              href="tel:+1234567890"
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-400"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-4 py-2 space-y-4 bg-white">
          <NavLink to="/" className="block text-black text-sm">
            Home
          </NavLink>
          <NavLink to="/about" className="block text-black text-sm">
            About Us
          </NavLink>
          <NavLink to="/services" className="block text-black text-sm">
            Services
          </NavLink>
          <NavLink to="/events" className="block text-black text-sm">
            Events
          </NavLink>
          <NavLink to="/gallery-frida-kahlo" className="block text-black text-sm">
            Gallery Frida Kahlo
          </NavLink> {/* Updated to Gallery Frida Kahlo */}
          <NavLink to="/contact" className="block text-black text-sm">
            Contact Us
          </NavLink>
          <NavLink to="/audio-visual" className="block text-black text-sm">
            Audio Visual
          </NavLink>
          <NavLink to="/media-coverage" className="block text-black text-sm">
            Media Coverage
          </NavLink>
          <NavLink to="/brochure" className="block text-black text-sm">
            Download Brochure
          </NavLink>
          <div className="mt-4">
            <a
              href="tel:+1234567890"
              className="block bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-400"
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
