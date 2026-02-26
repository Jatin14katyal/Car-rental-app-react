import React from "react";
import { Link } from "react-router-dom";
import cars from "../data/Cars";
import { Car, MapPin, Star, ArrowRight } from "lucide-react";

const FeaturedCars = () => {
  return (
    <section id="FeaturedCars" className="bg-gray-100 py-20 sm:px-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="sm:text-4xl text-3xl font-bold mb-2 flex justify-center items-center gap-2">
          <Car className="w-12 h-12 text-blue-500" />
          <span className="text-gray-800">Featured Cars</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Discover our handpicked selection of premium vehicles.
        </p>
      </div>

      {/* Show only first 3 cars */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cars.slice(0, 3).map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300 hover:-translate-y-2"
          >
            <img
              src={car.image}
              alt={car.name}
              className="rounded-md w-full h-48 object-cover"
            />

            <div className="mt-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{car.name}</h3>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4" />
                  {car.rating}
                </div>
              </div>

              <div className="flex items-center text-sm text-gray-500 mt-2 gap-1">
                <MapPin className="w-4 h-4" />
                {car.location}
              </div>

              <div className="flex mt-4 gap-3">
                {/* Navigate to CarDetails page */}
                <Link
                  to={`/cars/${car.id}`}
                  className="w-1/2 border border-gray-300 py-2 rounded hover:bg-gray-200 text-center transition"
                >
                  View Details
                </Link>

                <button className="w-1/2 bg-green-500 text-white py-2 rounded hover:bg-green-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigate to All Cars Page */}
      <div className="text-center mt-12">
        <Link
          to="/cars"
          className="inline-flex items-center gap-2 bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-700 transition"
        >
          View All Cars <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedCars;