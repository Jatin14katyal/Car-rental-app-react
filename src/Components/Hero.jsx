import React from "react";
import { MapPin, Calendar, Clock, Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-500 to-blue-700 text-white sm:py-28 py-16 text-center">
      <h1 className="text-4xl sm:tet-5xl font-bold mb-4">
        Find Your Perfect <span className="text-yellow-400">Rental Car</span>
      </h1>
      <p className="text-lg sm:text-xl mb-12 text-gray-200">
        Discover amazing deals on quality vehicles, Book now and drive away with
        confidecne
      </p>
      <div className="bg-white rounded shadow-lg p-4 sm:p-6 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-5 gap-4 items-end text-black">
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <MapPin className="w-5 h-5" />
            <span>Pickup Location</span>
          </label>
          <select className="w-full p-2 border-gray-300 rounded cursor-pointer">
            <option disabled>Select city</option>
            <option>New Delhi</option>
            <option>Gurugram</option>
            <option>Mumbai</option>
          </select>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <Calendar className="w-5 h-5" />
            <span>Pickup Date</span>
          </label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded cursor-pointer"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <Clock className="w-5 h-5" />
            <span>Pickup Time</span>
          </label>
          <input
            type="time"
            className="w-full p-2 border border-gray-300 rounded cursor-pointer"
          />
        </div>

       <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <Calendar className="w-5 h-5" />
            <span>Return Date</span>
          </label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded cursor-pointer"
          />
        </div>

        <div>
            <button className="flex items-center justify-center gap-2 w-full cursor-pointer bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300">
                <Search className="w-5 h-5"/> <span>Search Cars</span>
            </button>
        </div>

        

      </div>

      {/* stats */}

      <div className="">
        <div>
            <h2>500+</h2>
            <p>Premium Cars</p>
        </div>
        <div>
            <h2>50+</h2>
            <p>Locations</p>
        </div>
        <div>
            <h2>24/7</h2>
            <p>Support</p>
        </div>
        <div>
            <h2>99%</h2>
            <p>Satisfaction</p>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
