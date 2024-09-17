import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-zinc-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Project-1</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link to="/services" className="text-white hover:text-gray-300">
            Services
          </Link>
          {/* Conditionally render Login/Signup or Logout */}
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="text-white hover:text-gray-300">
                Login
              </Link>
              <Link to="/signup" className="text-white hover:text-gray-300">
                Signup
              </Link>
            </>
          ) : (
            <button
              onClick={onLogout}
              className="text-white hover:text-gray-300"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden">
          <Link to="/" className="block text-white py-2 px-4 hover:bg-gray-700">
            Home
          </Link>
          <Link to="/about" className="block text-white py-2 px-4 hover:bg-gray-700">
            About
          </Link>
          <Link to="/services" className="block text-white py-2 px-4 hover:bg-gray-700">
            Services
          </Link>
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="block text-white py-2 px-4 hover:bg-gray-700">
                Login
              </Link>
              <Link to="/signup" className="block text-white py-2 px-4 hover:bg-gray-700">
                Signup
              </Link>
            </>
          ) : (
            <button
              onClick={onLogout}
              className="block text-white py-2 px-4 hover:bg-gray-700"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
