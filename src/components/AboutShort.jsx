import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt, FaCheckCircle } from "react-icons/fa";

const AboutShort = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 5 Images that slide every 2 seconds
  const aboutImages = [
    {
      url: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/servise/service-counter-balance.png",
      alt: "Forklift Training"
    },
    {
      url: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/regal-about1.png",
      alt: "Forklift Operator"
    },
    {
      url: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/servise/service-fall-protection.png",
      alt: "Forklift Maintenance"
    },
    {
      url: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/regal-slider3.png",
      alt: "Forklift Fleet"
    },
    {
      url: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/servise/service-walkei.png",
      alt: "Safety Training"
    }
  ];

  // Auto-slide images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % aboutImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [aboutImages.length]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Side - Sliding Images (col-6 size) */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[350px] md:h-[400px]">
              {aboutImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              ))}
              
              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {aboutImages.map((_, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentImageIndex
                        ? "w-6 h-1.5 bg-[#f7942f]"
                        : "w-1.5 h-1.5 bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Content (col-6 size) */}
          <div className="w-full md:w-1/2">
            <div className="mb-3">
              <span className="inline-block px-3 py-0.5 rounded-full bg-[#f7942f]/10 text-[#f7942f] font-bold text-xs uppercase tracking-wide">
                About Us In Short
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
              <span className="text-[#f7942f]">Regal Forklift</span> Training School
            </h2>
            
            <p className="text-gray-700 text-base leading-relaxed mb-3">
              At <span className="font-black text-[#f7942f]">Regal Forklift Training School</span>, you will get best learning experience of different types of forklifts. Our expert instructors are in this industry from <span className="font-black">5+ years</span>. Their experience will help you in getting best practice of operating forklifts with fully safety.
            </p>
            
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              We also provide certifications after training which will be valid to get a job as forklift operator.
            </p>

            {/* Quick Highlights */}
            <div className="flex flex-wrap gap-3 mb-5">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#f7942f] text-sm" />
                <span className="text-sm font-medium text-gray-700">5+ Years Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#f7942f] text-sm" />
                <span className="text-sm font-medium text-gray-700">Certified Training</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#f7942f] text-sm" />
                <span className="text-sm font-medium text-gray-700">Job Assistance</span>
              </div>
            </div>

            {/* Call Info & Button */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:+16475610046"
                className="flex items-center gap-2 text-[#f7942f] font-black text-lg hover:scale-105 transition-transform"
              >
                <FaPhoneAlt className="text-sm" />
                +1 647-561-0046
              </a>
              <Link
                to="/about"
                className="inline-flex items-center gap-1 text-[#f7942f] font-semibold text-sm hover:gap-2 transition-all"
              >
                More Info
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutShort;