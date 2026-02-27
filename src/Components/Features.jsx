import React from "react";
import {  Shield,  Clock4,  CreditCard,  MapPin,  Headphones,  FileBadge,  Users,  Zap,} from "lucide-react";

const features = [
  {
    title: "Fully Insured Vehicles",
    description:
      "Drive with peace of mind knowing every vehicle includes comprehensive insurance.",
    icon: <Shield className="w-8 h-8" />,
  },
  {
    title: "24/7 Customer Support",
    description:
      "Our support team is always ready to assist you anytime, anywhere.",
    icon: <Headphones className="w-8 h-8" />,
  },
  {
    title: "Easy Online Booking",
    description:
      "Book your car in minutes with our quick and hassle-free process.",
    icon: <CreditCard className="w-8 h-8" />,
  },
  {
    title: "Multiple Pickup Locations",
    description:
      "Pick up your vehicle from convenient locations near you.",
    icon: <MapPin className="w-8 h-8" />,
  },
  {
    title: "Verified & Clean Cars",
    description:
      "Every vehicle is inspected and sanitized before every ride.",
    icon: <FileBadge className="w-8 h-8" />,
  },
  {
    title: "Flexible Rental Plans",
    description:
      "Hourly, daily, or long-term rentals to match your needs.",
    icon: <Clock4 className="w-8 h-8" />,
  },
  {
    title: "Affordable Pricing",
    description:
      "Transparent pricing with no hidden charges.",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: "Trusted by Thousands",
    description:
      "Join thousands of satisfied customers across multiple cities.",
    icon: <Users className="w-8 h-8" />,
  },
];
const Features = () => {
  return (
    <section id="Features" className="py-16 bg-gray-100 px-4 sm:px-6 lg:px-28">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="sm:text-4xl text-3xl font-bold text-gray-800 mb-4 hero-reveal">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg hero-reveal">
          We're committed to providing you with the best car rental experience
          through our premium service and customer first approach.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col bg-white items-center text-center border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-lg hover:shadow-md transform hover:-translate-y-2 hover:border-blue-500 transition duration-300 reveal-y"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 mb-4 text-white">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
