import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Programs", path: "/programs" },
    { label: "Staff", path: "/staff" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white fixed top-0 w-full shadow z-50">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo + Title */}
          <Link to="/" className="flex items-center gap-3">
            
            <img
              src="logo.jpg"
              alt="Shivapuri Logo"
              className="h-12 w-12 rounded-full object-cover"
            />

            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-blue-700">
                Shivapuri College
              </span>
             
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                className="text-gray-800 font-semibold hover:text-blue-700 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded hover:bg-gray-100 focus:outline-none"
          >
            {!isOpen ? (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fadeIn">
          <ul className="flex flex-col px-4 py-2 space-y-2">
            {navLinks.map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  className="block py-2 text-gray-800 font-medium hover:text-blue-700"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
