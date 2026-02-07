import React from "react";
import bmw from "../assets/bmw.jpg";
import tesla from "../assets/tesla.jpg";
import audi from "../assets/audi.jpg";
import toyota from "../assets/toyota.jpg";
import kia from "../assets/kia.jpg";
import ford from "../assets/ford.jpg";
import { Car, MapPin, Users, Cog, Fuel, Star, ArrowRight } from "lucide-react";

const cars = [
  {
    id: 1,
    name: "Tesla Model 3",
    year: 2023,
    location: "San Francisco",
    seats: 5,
    transmission: "Automatic",
    fuel: "Electric",
    price: 89,
    rating: 4.8,
    badges: ["Autopilot", "Premium Audio", "+2 more"],
    type: "Electric",
    status: "Available",
    image: tesla,
  },
  {
    id: 2,
    name: "BMW X5",
    year: 2023,
    location: "New York",
    seats: 7,
    transmission: "Automatic",
    fuel: "Gasoline",
    price: 149,
    rating: 4.7,
    badges: ["Leather Seats", "Navigation", "+2 more"],
    type: "Luxury SUV",
    status: "Available",
    image: bmw,
  },
  {
    id: 3,
    name: "Audi A4",
    year: 2023,
    location: "Los Angeles",
    seats: 5,
    transmission: "Automatic",
    fuel: "Gasoline",
    price: 79,
    rating: 4.6,
    badges: ["Virtual Cockpit", "Heated Seats", "+2 more"],
    type: "Sedan",
    status: "Available",
    image: audi,
  },
  {
    id: 4,
    name: "Toyota Auris",
    year: 2022,
    location: "New York",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    price: 49,
    rating: 4.4,
    badges: ["Reliable", "Fuel Efficient", "+1 more"],
    type: "Sedan",
    status: "Available",
    image: toyota,
  },
  {
    id: 5,
    name: "Ford Explorer",
    year: 2021,
    location: "Phoenix",
    seats: 7,
    transmission: "Automatic",
    fuel: "Petrol",
    price: 69,
    rating: 4.5,
    badges: ["Spacious", "All-wheel drive"],
    type: "SUV",
    status: "Available",
    image: ford,
  },
  {
    id: 6,
    name: "Kia Sportage",
    year: 2022,
    location: "London",
    seats: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    price: 65,
    rating: 4.3,
    badges: ["Hybrid", "Modern Interior"],
    type: "Crossover",
    status: "Available",
    image: kia,
  },
];

const FeaturedCars = () => {
  return (
    <section className="bg-gray-100 py-20 sm:px-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="sm:text-4xl text-3xl font-bold mb-2 flex justify-center"><span> <Car className="w-12 h-12" /></span>
          <span>Featured Cars</span></h2>
        <p>
          Discover our handpicked selection of premium vehicles, perfect for any
          journey.
        </p>
      </div>
    </section>
  );
};

export default FeaturedCars;
