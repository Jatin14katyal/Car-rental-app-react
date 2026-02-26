import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Car,
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    // If not on Home page, navigate first and let Home.jsx handle the scroll
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }

    // If already on Home, scroll directly
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer
      id="Footer"
      className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <button
            onClick={() => goToSection("Hero")}
            className="flex items-center space-x-2"
          >
            <Car className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold text-white">CarDekho</span>
          </button>

          <p className="leading-relaxed my-4">
            Your trusted partner for premium car rentals. Experience the freedom
            of the road with our quality vehicles and exceptional service.
          </p>

          <div className="flex gap-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
              aria-label="Facebook"
            >
              <Facebook className="cursor-pointer" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
              aria-label="Instagram"
            >
              <Instagram className="cursor-pointer" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
              aria-label="Twitter"
            >
              <Twitter className="cursor-pointer" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={() => goToSection("Hero")}
            className="mt-6 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white"
          >
            <ArrowUp className="w-4 h-4" />
            Back to top
          </button>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <button onClick={() => goToSection("Hero")} className="hover:underline">
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => goToSection("FeaturedCars")}
                className="hover:underline"
              >
                Our Cars
              </button>
            </li>
            <li>
              <button onClick={() => goToSection("About")} className="hover:underline">
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => goToSection("Footer")} className="hover:underline">
                Contact
              </button>
            </li>
            <li>
              <Link to="/terms" className="hover:underline">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => goToSection("FeaturedCars")}
                className="hover:underline"
              >
                Economy Cars
              </button>
            </li>
            <li>
              <button
                onClick={() => goToSection("FeaturedCars")}
                className="hover:underline"
              >
                Luxury Vehicles
              </button>
            </li>
            <li>
              <button
                onClick={() => goToSection("FeaturedCars")}
                className="hover:underline"
              >
                SUV &amp; Trucks
              </button>
            </li>
            <li>
              <button
                onClick={() => goToSection("FeaturedCars")}
                className="hover:underline"
              >
                Electric Cars
              </button>
            </li>
            <li>
              <button
                onClick={() => goToSection("FeaturedCars")}
                className="hover:underline"
              >
                Long-term Rentals
              </button>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Phone className="text-blue-400 w-5 h-5" />
              <a href="tel:+919971170991" className="hover:underline">
                +91 997-117-0991
              </a>
            </li>

            <li className="flex items-center gap-2">
              <Mail className="text-blue-400 w-5 h-5" />
              <a
                href="mailto:katyajsaab496@gmail.com"
                className="hover:underline break-all"
              >
                katyajsaab496@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-2">
              <MapPin className="text-blue-400 w-5 h-5" />
              <a
                href="https://www.google.com/maps?q=Krishna+Nagar,+Delhi+110051"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Krishna Nagar, Delhi 110051
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 py-6 text-sm flex flex-col sm:flex-row justify-between items-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} CarDekho. All rights reserved.</p>

        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;