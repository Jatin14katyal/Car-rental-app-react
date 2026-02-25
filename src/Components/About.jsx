import React from "react";
import { Car, ShieldCheck, Clock, Users } from "lucide-react";

const About = () => {
  return (
    <section id="About" className="bg-white py-20 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-blue-500">CarDekho</span>
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            CarDekho is your trusted partner for reliable and affordable car
            rentals. Whether you need a car for daily travel, business trips,
            or weekend getaways, we provide a wide range of vehicles to suit
            every journey.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our mission is to make car rental simple, transparent, and
            accessible for everyone.
          </p>
        </div>

        {/* RIGHT FEATURES */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-xl text-center">
            <Car className="mx-auto text-blue-500 mb-3" size={36} />
            <h3 className="font-semibold">Wide Range</h3>
            <p className="text-sm text-gray-600">Cars for every need</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl text-center">
            <ShieldCheck className="mx-auto text-blue-500 mb-3" size={36} />
            <h3 className="font-semibold">Safe & Insured</h3>
            <p className="text-sm text-gray-600">Drive with confidence</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl text-center">
            <Clock className="mx-auto text-blue-500 mb-3" size={36} />
            <h3 className="font-semibold">24/7 Support</h3>
            <p className="text-sm text-gray-600">Always here to help</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl text-center">
            <Users className="mx-auto text-blue-500 mb-3" size={36} />
            <h3 className="font-semibold">Trusted by Users</h3>
            <p className="text-sm text-gray-600">Thousands of happy customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;