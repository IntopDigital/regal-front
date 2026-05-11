import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LogoMarquee = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  // Base URL for logos
  const baseUrl = "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/patner-logo/";
  
  // Logo data array with website links
  const logos = [
    { name: "Rajdhani Sweets", url: "https://www.rajdhanisweets.ca/", imgSrc: `${baseUrl}logo_regal_client_1.webp` },
    { name: "Canadian Tire", url: "https://www.canadiantire.ca/", imgSrc: `${baseUrl}logo_regal_client_2.webp` },
    { name: "Extreme Abrasives", url: "https://www.extremeabrasives.com/", imgSrc: `${baseUrl}logo_regal_client_3.webp` },
    { name: "GN Logix", url: "https://www.gnlogix.com/", imgSrc: `${baseUrl}logo_regal_client_4.webp` },
    { name: "Protege Casual", url: "https://protegecasual.com/", imgSrc: `${baseUrl}logo_regal_client_5.webp` },
    { name: "Coca Cola", url: "https://www.coca-cola.com/ca/en", imgSrc: `${baseUrl}Regal_forklift_training_logo.png` },
    { name: "Adaptall", url: "https://www.adaptall.com/", imgSrc: `${baseUrl}adaptalllogo.png` },
    { name: "Amazing Kobotic", url: "https://www.amazingkobotic.com/", imgSrc: `${baseUrl}amazing.png` },
    { name: "Best Import", url: "https://www.bestimport.com/", imgSrc: `${baseUrl}bestimport.png` },
    { name: "BUM Outdoor", url: "https://bumoutdoor.ca/", imgSrc: `${baseUrl}bum.png` },
    { name: "FSP", url: "https://fspeel.org/", imgSrc: `${baseUrl}fsp.jpg` },
    { name: "Godspeed", url: "https://godspeedxp.com/", imgSrc: `${baseUrl}godspeed.png` },
    { name: "Handi Foods", url: "https://handifoods.com/", imgSrc: `${baseUrl}HandiFoodsLogo.png` },
    { name: "Magna", url: "https://www.magna.com/", imgSrc: `${baseUrl}magna.png` },
    { name: "MCL Green", url: "https://mclgreen.com/", imgSrc: `${baseUrl}MCL_Green_Logo.png` },
    { name: "Peel Career", url: "https://www.peelcareer.com/", imgSrc: `${baseUrl}pcas.jpg` },
    { name: "Quantrix", url: "https://quantrix.com/", imgSrc: `${baseUrl}quantrixlogo.png` },
    { name: "Remco", url: "https://www.remco.ca/", imgSrc: `${baseUrl}remko.JPG` },
    { name: "Westaff", url: "https://westaffcanada.com/", imgSrc: `${baseUrl}westaff.png` },
    { name: "YMCA", url: "https://www.ymcagta.org/", imgSrc: `${baseUrl}ygrater.png` },
    { name: "Hydraux", url: "https://www.hydraux.com/", imgSrc: `${baseUrl}hydraux.jpeg` },
    { name: "Telecor", url: "https://www.linkedin.com/company/telecor-inc-/?originalSubdomain=ca", imgSrc: `${baseUrl}telecor.jpeg` },
    { name: "Nationex", url: "https://nationex.com/en/", imgSrc: `${baseUrl}nationex.jpg` },
    { name: "Job Skills", url: "https://www.jobskills.org/", imgSrc: `${baseUrl}jobskills.png` },
    { name: "Achev", url: "https://achev.ca/", imgSrc: `${baseUrl}Achev.webp` },
    { name: "Career Foundation", url: "https://careerfoundation.com/", imgSrc: `${baseUrl}Career Foundation.png` },
    { name: "Metro linx", url: "https://www.metrolinx.com/en", imgSrc: `${baseUrl}metrolinx.png` },
    { name: "Orlando Furniture mart", url: "https://orlandofurnituremart.com/", imgSrc: `${baseUrl}orlando.png` },
    { name: "Real Aloy", url: "https://realalloy.com/", imgSrc: `${baseUrl}realaloy.jpg` },
    { name: "Sinca Inc", url: "https://sinca.ca/", imgSrc: `${baseUrl}sincainc.JPG` },
    { name: "Regal Forklift", url: "https://regalforklift.com/", imgSrc: `${baseUrl}regal-logo.png` }
  ];

  // Triple the array for smooth infinite scrolling
  const duplicatedLogos = [...logos, ...logos, ...logos];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={containerRef} className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-[#f7942f]/10 text-[#f7942f] font-bold text-sm uppercase tracking-wide mb-3">
            Our Trusted Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Brands That Trust <span className="text-[#f7942f]">Regal Forklift</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#f7942f] to-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* CSS Animation for Continuous Fast Movement */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24  z-10 pointer-events-none"></div>

          {/* CSS Animation - Faster and Continuous */}
          <style>
            {`
              @keyframes marqueeScroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              
              .marquee-track {
                display: flex;
                gap: 1rem;
                width: fit-content;
                animation: marqueeScroll 40s linear infinite;
              }
              
              .marquee-track:hover {
                animation-play-state: paused;
              }
              
              @media (min-width: 768px) {
                .marquee-track {
                  gap: 1.5rem;
                  animation-duration: 40s;
                }
              }
            `}
          </style>

          <div className="marquee-track">
            {duplicatedLogos.map((logo, index) => (
              <a
                key={`${logo.name}-${index}`}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 group"
              >
                <div className="w-28 h-20 md:w-32 md:h-24 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center p-3 hover:scale-105">
                  <img
                    src={logo.imgSrc}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/120x80/e2e8f0/64748b?text=Logo";
                    }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Instruction */}
        <p className="text-center text-xs text-gray-400 mt-6">
          🏃 Hover to pause • Click to visit website
        </p>
      </div>
    </section>
  );
};

export default LogoMarquee;