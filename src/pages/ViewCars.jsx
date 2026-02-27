import React from "react";
import cars from "../data/Cars";
import { Star, MapPin, Users, Cog, Fuel } from "lucide-react";

const Cars = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            All Available Cars
          </h1>
          <p className="text-gray-600">
            Choose from our complete collection of premium vehicles.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover rounded-md"
                />

                <span className="absolute top-2 left-2 bg-white text-xs font-semibold px-2 py-1 rounded full-shadow">
                  {car.type}
                </span>

                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded full-shadow">
                  {car.status}
                </span>
              </div>

              <div className="mt-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{car.name}</h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4" />
                    {car.rating}
                  </div>
                </div>

                <p className="text-sm text-gray-500">{car.year}</p>

                <div className="flex items-center gap-1 text-sm text-gray-500 mt-2">
                  <MapPin className="w-4 h-4" />
                  {car.location}
                </div>

                <div className="flex sm:items-center sm:flex-row flex-col sm:gap-6 gap-2 mt-4 text-gray-600 text-sm">
                  <span className="inline-flex items-center gap-1">
                    <Users className="w-4 h-4 text-blue-500" /> {car.seats}{" "}
                    seats
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Cog className="w-4 h-4 text-blue-500" /> {car.transmission}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Fuel className="w-4 h-4 text-blue-500" /> {car.fuel}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {car.badges.map((badge, i) => (
                    <span
                      key={i}
                      className="bg-gray-50 text-xs px-2 py-1 rounded-full font-semibold border border-gray-200"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <p className="text-lg font-bold text-blue-500">
                    ${car.price}{" "}
                    <span className="text-sm font-normal text-gray-500">
                      /day
                    </span>
                  </p>
                </div>

                <div className="mt-4">
                  <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-700 transition">
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
