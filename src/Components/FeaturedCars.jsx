import React, { useState } from "react";
import cars from "../data/Cars";
import { Car, MapPin, Users, Cog, Fuel, Star, ArrowRight } from "lucide-react";

const FeaturedCars = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedCar(null), 250);
  };

  return (
    <section id="FeaturedCars" className="bg-gray-100 py-20 sm:px-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12 head-reveal">
        <h2 className="sm:text-4xl text-3xl font-bold mb-2 flex justify-center items-center gap-2">
          <span className="text-blue-500">
            <Car className="w-12 h-12" />
          </span>
          <span className="text-gray-800">Featured Cars</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Discover our handpicked selection of premium vehicles, perfect for any
          journey.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300 hover:-translate-y-3 reveal-y"
          >
            <div className="relative overflow-hidden">
              <img
                src={car.image}
                alt={car.name}
                className="rounded-md w-full h-48 sm:h-56 md:h-60 object-cover"
              />
              <span className="absolute top-2 left-2 bg-white text-xs font-semibold px-2 py-1 rounded full-shadow">
                {car.type}
              </span>
              <span className="absolute top-2 text-white right-2 bg-green-500 text-xs font-semibold px-2 py-1 rounded full-shadow">
                {car.status}
              </span>
            </div>

            <div className="mt-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{car.name}</h3>
                <div className="text-yellow-500 text-sm flex items-center gap-1">
                  <Star className="w-5 h-5" />
                  {car.rating}
                </div>
              </div>

              <p className="text-sm text-gray-500">{car.year}</p>

              <div className="flex items-center text-sm text-gray-500 my-4 gap-1">
                <MapPin className="w-5 h-5" /> <span>{car.location}</span>
              </div>

              <div className="flex sm:items-center sm:flex-row flex-col sm:gap-10 gap-2 mt-2 text-gray-600 text-sm">
                <span className="inline-flex items-center gap-1">
                  <Users className="w-4 h-4 text-blue-500" /> {car.seats} seats
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

              <div className="flex sm:flex-row flex-col mt-4 gap-3">
                <button
                  onClick={() => {
                    setSelectedCar(car); // mount modal
                    setIsOpen(false); // start closed
                    setTimeout(() => setIsOpen(true), 10); // then open (triggers animation)
                  }}
                  className="sm:w-1/2 w-full border border-gray-300 px-3 py-2 rounded cursor-pointer transition duration-300 hover:bg-gray-300"
                >
                  View Details
                </button>

                <button className="sm:w-1/2 w-full bg-green-500 text-white border border-gray-300 px-3 py-2 rounded cursor-pointer transition duration-300 hover:bg-green-700">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="mx-auto flex items-center justify-center mt-12 bg-blue-500 py-3 px-5 text-white rounded cursor-pointer gap-1 transition duration-300 hover:bg-blue-700">
        View All Cars <ArrowRight className="h-5 w-5" />
      </button>

      {selectedCar && (
        <div
          className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center px-4
  backdrop-blur-md bg-white/10 transition-opacity duration-300
  ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={closeModal}
        >
          <div
            className={`w-full sm:max-w-2xl bg-white rounded-t-2xl sm:rounded-2xl shadow-xl p-6
            transform transition-all duration-300
            ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold">{selectedCar.name}</h2>
                <p className="text-gray-500">
                  {selectedCar.year} • {selectedCar.location}
                </p>
              </div>

              <button
                className="text-gray-600 hover:text-black text-xl"
                onClick={closeModal}
              >
                ✕
              </button>
            </div>

            <img
              src={selectedCar.image}
              alt={selectedCar.name}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-700 mb-4">
              <div>
                <b>Seats:</b> {selectedCar.seats}
              </div>
              <div>
                <b>Transmission:</b> {selectedCar.transmission}
              </div>
              <div>
                <b>Fuel:</b> {selectedCar.fuel}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedCar.badges.map((b, i) => (
                <span
                  key={i}
                  className="bg-gray-50 text-xs px-2 py-1 rounded-full font-semibold border border-gray-200"
                >
                  {b}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xl font-bold text-blue-500">
                ${selectedCar.price}{" "}
                <span className="text-sm font-normal text-gray-500">/day</span>
              </p>

              <button className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-700 transition duration-300">
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedCars;
