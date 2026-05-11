import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const ShortService = () => {
  const services = [
    {
      id: 1,
      name: "COUNTER BALANCE",
      image: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/counterbalance.png",
      description: "Professional counter balance forklift training and operation"
    },
    {
      id: 2,
      name: "REACH FORKLIFT",
      image: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/reachforklift.png",
      description: "Expert reach forklift operation and certification"
    },
    {
      id: 3,
      name: "DOCK STOCKER",
      image: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/dockstocker.png",
      description: "Professional dock stocker handling and safety training"
    },
    {
      id: 4,
      name: "ORDER PICKER",
      image: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/orderpicker.png",
      description: "Specialized order picker operation and safety protocols"
    },
    {
      id: 5,
      name: "WALKIE",
      image: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/walkei.png",
      description: "Walkie pallet truck training and certification"
    },
    {
      id: 6,
      name: "FALL PROTECTION",
      image: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/fall-protection.png",
      description: "Comprehensive fall protection safety training"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 rounded-full bg-[#f7942f]/10 text-[#f7942f] font-bold text-sm uppercase tracking-wide mb-3">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Professional Forklift <span className="text-[#f7942f]">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#f7942f] to-orange-500 mx-auto rounded-full mb-6"></div>
        </div>

        {/* Description Text */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-gray-700 text-lg leading-relaxed">
            Expert professionals provide our services, and these professionals also work closely with clients to understand their unique wants and needs for their devices. We also offer services in Pallet Trucks, Stackers, and a variety of other goods to meet the needs of the industry.
          </p>
        </div>

        {/* Services Grid - 6 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-black text-gray-900 mb-2 text-center">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm text-center mb-4">
                  {service.description}
                </p>
                <div className="flex justify-center">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-[#f7942f] font-semibold text-sm hover:gap-2 transition-all"
                  >
                    Learn More
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Services
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShortService;