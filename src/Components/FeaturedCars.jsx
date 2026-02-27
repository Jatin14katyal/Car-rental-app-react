import React from "react";
import cars from "../data/Cars";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Car } from "lucide-react";

const FeaturedCars = () => {
  const categoryCars = cars.slice(3, 6);

  return (
    <section id="FeaturedCars" className="bg-gray-100 py-20 sm:px-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12 head-reveal">
        <h2 className="sm:text-4xl text-3xl font-bold mb-2 flex justify-center items-center gap-2">
          <span className="text-blue-500">
            <Car className="w-12 h-12" />
          </span>
          <span className="text-gray-800">Our Cars</span>
        </h2>
        <p className="text-gray-900 text-lg font-medium">
          Step into a world of premium mobility with vehicles built for every
          occasion.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categoryCars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300 hover:-translate-y-3 reveal-y"
          >
            <div className="relative overflow-hidden">
              <img
                src={car.image}
                alt={car.type}
                className="rounded-md w-full h-56 sm:h-64 md:h-64 object-cover"
              />
            </div>

            <div className="mt-3">
              <h3 className="text-2xl font-bold tracking-wide text-blue-600 text-center">
                {car.type}
              </h3>
              <p className="text-sm text-center mt-1 text-gray-800 text-lg font-medium">
                Premium Selection
              </p>
            </div>
          </div>
        ))}
      </div>

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
