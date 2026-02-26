import React, { useState, useEffect } from "react";
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
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [showTerms, setShowTerms] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Terms & Conditions");

  const openTerms = (title) => {
    setModalTitle(title);
    setShowTerms(true);
    setTermsOpen(false);
    setTimeout(() => setTermsOpen(true), 10);
  };

  const closeTerms = () => {
    setTermsOpen(false);
    setTimeout(() => setShowTerms(false), 220);
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" && showTerms) closeTerms();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showTerms]);

  useEffect(() => {
    if (!showTerms) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showTerms]);

  return (
    <footer
      id="Footer"
      className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
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

          <button
            onClick={() => goToSection("Hero")}
            className="mt-6 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white"
          >
            <ArrowUp className="w-4 h-4" />
            Back to top
          </button>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => goToSection("Hero")}
                className="hover:underline"
              >
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
              <button
                onClick={() => goToSection("About")}
                className="hover:underline"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => goToSection("Footer")}
                className="hover:underline"
              >
                Contact
              </button>
            </li>
            <li>
              <button
                onClick={() => openTerms("Terms & Conditions")}
                className="hover:underline"
              >
                Terms &amp; Conditions
              </button>
            </li>
          </ul>
        </div>

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

      <div className="border-t border-gray-700 mt-10 py-6 text-sm flex flex-col sm:flex-row justify-between items-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} CarDekho. All rights reserved.</p>

        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>

          <button
            onClick={() => openTerms("Terms of Service")}
            className="hover:underline"
          >
            Terms of Service
          </button>
        </div>
      </div>
      {showTerms && (
        <div
          className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center px-4
          backdrop-blur-md bg-white/10 transition-opacity duration-200
          ${termsOpen ? "opacity-100" : "opacity-0"}`}
          onClick={closeTerms}
        >
          <div
            className={`w-full sm:max-w-2xl bg-white rounded-t-2xl sm:rounded-2xl shadow-xl
            transform transition-all duration-200
            ${termsOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                {modalTitle}
              </h2>
              <button
                className="text-gray-600 hover:text-black text-xl"
                onClick={closeTerms}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="px-6 py-4 max-h-[70vh] overflow-y-auto text-gray-600 space-y-3 text-sm leading-relaxed">
              <p>
                By using CarDekho, you agree to follow our rental policies.
                Please read these terms carefully before booking.
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>Valid driving license is required at pickup.</li>
                <li>Vehicle must be returned on time to avoid late charges.</li>
                <li>Any damage to the car may result in additional fees.</li>
                <li>Fuel policy: return with the same fuel level as pickup.</li>
                <li>Bookings are subject to availability and verification.</li>
              </ul>
            </div>

            <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded transition duration-300"
                onClick={closeTerms}
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
