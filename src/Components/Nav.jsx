import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Car, Menu, X, LogIn } from "lucide-react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={"/"} className="flex items-center space-x-2 text-gray-800">
            <Car className="h-8 w-8 " />
            <span className="text-xl font-bold">AutoRent</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {/* <Link to={"/"} className="text-gray-700 hover:text-blue-700 transition-colors duration-300">Home</Link> */}

            <button
              onClick={() => scrollToSection("Hero")}
              className="text-gray-700 hover:text-blue-700 transition-colors duration-300"
            >
              Hero
            </button>

            <button
              onClick={() => scrollToSection("FeaturedCars")}
              className="text-gray-700 hover:text-blue-700 transition-colors duration-300"
            >
              Cars
            </button>

            <button
              onClick={() => scrollToSection("Features")}
              className="text-gray-700 hover:text-blue-700 transition-colors duration-300"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("Footer")}
              className="text-gray-700 hover:text-blue-700 transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to={"/login"}
              className="py-1 px-2 flex items-center gap-2 rounded-sm transitin duration-300 hover:bg-gray-200"
            >
              <LogIn />
              Login
            </Link>
            <Link
              to={"/register"}
              className="rounded-sm py-1 px-3 transition duration-300 bg-blue-500 text-white hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobie menu button */}

          <div className="md:hidden">
            <button
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => {
                  scrollToSection("Hero");
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700"
              >
                Home
              </button>
              <button
                onClick={() => {
                  scrollToSection("FeaturedCars");
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700"
              >
                Cars
              </button>
              <button
                onClick={() => {
                  scrollToSection("Features");
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700"
              >
                About
              </button>
              <button
                onClick={() => {
                  scrollToSection("Footer");
                  setIsMenuOpen(false);
                }}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700"
              >
                Contact
              </button>
            </div>
            <div className="flex items-center space-x-4 pb-5">
              <Link
                to={"/login"}
                className="py-1 px-2 flex items-center gap-2 rounded-sm transitin duration-300 hover:bg-gray-200"
              >
                <LogIn />
                Login
              </Link>
              <Link
                to={"/register"}
                className="rounded-sm py-1 px-3 transition duration-300 bg-blue-500 text-white hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;