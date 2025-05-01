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
      <div className="max-w-[auto] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="text-base font-bold">
          <NavLink
  to="/"
  onClick={() => {
    closeMenu();
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  }}
>
  <img
    src="https://res.cloudinary.com/db5yniogx/image/upload/t_Media%20Coverage/v1736871887/shantibarilogocloud_j5gt3p.jpg"
    alt="Shantibari Logo"
    className="w-28 h-auto cursor-pointer"
   
    
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
                className="w-7 h-7"
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

          {/* Navbar Links (Desktop View) */}
          <div className="hidden lg:flex space-x-8 font-roboto text-lg justify-center w-full">
            <NavLink to="/" className="hover:text-gray-400">
              Home
            </NavLink>
            <NavLink to="/about-us" className="hover:text-gray-400">
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
            <NavLink to="/contact-us" className="hover:text-gray-400">
              Contact Us
            </NavLink>
            <NavLink to="/audiovisual" className="hover:text-gray-400">
              Audio Visual
            </NavLink>
            <NavLink to="/media-coverage" className="hover:text-gray-400">
              Media Coverage
            </NavLink>
            <NavLink to="/brochure" className="hover:text-gray-400">
              Download Brochure
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-6 py-4 space-y-6 bg-white justify-center w-full transition-all duration-300 ease-in-out transform">
          <NavLink
            to="/"
            onClick={closeMenu}
            className="block text-black text-lg text-center py-2 hover:text-gray-400"
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            onClick={closeMenu}
            className="block text-black text-lg text-center py-2 hover:text-gray-400"
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            onClick={closeMenu}
            className="block text-black text-lg text-center py-2 hover:text-gray-400"
          >
            Services
          </NavLink>
          <NavLink
            to="/events"
            onClick={closeMenu}
            className="block text-black text-lg text-center py-2 hover:text-gray-400"
          >
            Events
          </NavLink>
          <NavLink
            to="/gallery-frida-kahlo"
            onClick={closeMenu}
            className="block text-black text-lg text-center py-2 hover:text-gray-400"
          >
            Gallery Frida Kahlo
          </NavLink>
          <NavLink
            to="/contact-us"
            onClick={closeMenu}
            className="block text-black text-lg text-center py-2 hover:text-gray-400"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/audiovisual"
            onClick={closeMenu}
            className="block text-black text-lg text-center py-2 hover:text-gray-400"
          >
            Audio Visual
          </NavLink>
          <NavLink
            to="/media-coverage"
            onClick={closeMenu}
            className="block text-black text-lg text-center py-2 hover:text-gray-400"
          >
            Media Coverage
          </NavLink>
          <NavLink
            to="/brochure"
            onClick={closeMenu}
            className="block text-black text-lg text-center py-2 hover:text-gray-400"
          >
            Download Brochure
          </NavLink>
          <div className="mt-6 flex justify-center">
            <a
              href="tel:+8801325167271"
              className="block bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-400 text-lg"
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
