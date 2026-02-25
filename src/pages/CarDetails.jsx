import React from "react";
import { useParams, Link } from "react-router-dom";
import cars from "../data/Cars";
import { ArrowLeft, MapPin, Users, Cog, Fuel, Star } from "lucide-react";

const CarDetails = () => {
  const { id } = useParams();

  const car = cars.find((car) => car.id === parseInt(id));

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Car Not Found</h2>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">

        <Link
          to="/"
          className="flex items-center gap-2 text-blue-500 mb-6 hover:underline"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </Link>

        <img
          src={car.image}
          alt={car.name}
          className="w-full h-80 object-cover rounded-lg mb-6"
        />

        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">{car.name}</h1>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-5 h-5" />
            {car.rating}
          </div>
        </div>

        <p className="text-gray-500 mb-4">{car.year}</p>

        <div className="flex items-center gap-2 text-gray-600 mb-6">
          <MapPin className="w-5 h-5" />
          {car.location}
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-6">
          <div className="flex items-center gap-2">
            <Users className="text-blue-500" />
            {car.seats} Seats
          </div>
          <div className="flex items-center gap-2">
            <Cog className="text-blue-500" />
            {car.transmission}
          </div>
          <div className="flex items-center gap-2">
            <Fuel className="text-blue-500" />
            {car.fuel}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {car.badges.map((badge, index) => (
            <span
              key={index}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm border"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="text-2xl font-bold text-blue-500">
          ${car.price}
          <span className="text-gray-500 text-sm font-normal"> /day</span>
        </div>

        <button className="mt-6 bg-green-500 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition duration-300">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default CarDetails;