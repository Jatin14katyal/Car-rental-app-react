import React from "react";
import { Link } from "react-router-dom";
import cars from "../data/Cars";
import { Star, MapPin } from "lucide-react";

const Cars = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            All Available Cars
          </h1>
          <p className="text-gray-600">
            Choose from our complete collection of premium vehicles.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover rounded-md"
              />

              {/* Info */}
              <div className="mt-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{car.name}</h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4" />
                    {car.rating}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-sm text-gray-500 mt-2">
                  <MapPin className="w-4 h-4" />
                  {car.location}
                </div>

                <div className="mt-3 text-blue-500 font-bold">
                  ${car.price}{" "}
                  <span className="text-sm text-gray-500 font-normal">
                    /day
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-4">
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
      </div>
    </section>
  );
};

export default Cars;