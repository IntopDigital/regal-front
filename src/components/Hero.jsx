import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  // 5 Regal Forklift High-Quality Images
  const slides = [
    {
      title: "Regal Forklift Training",
      subtitle: "Get Certified & Start Your Career",
      description: "Canada's leading forklift training school with Regal equipment. Get hands-on experience and official certification.",
      buttonText: "Enroll Now",
      buttonLink: "/services",
      bgImage: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/regal-slider1.png",
      color: "from-amber-600 to-orange-600",
      accent: "#f7942f"
    },
    {
      title: "Regal Equipment Mastery",
      subtitle: "Precision & Performance",
      description: "Master Regal forklifts with our expert instructors. Advanced training for maximum efficiency and safety.",
      buttonText: "Learn More",
      buttonLink: "/services",
      bgImage: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/regal-slider2.png",
      color: "from-orange-600 to-amber-600",
      accent: "#f7942f"
    },
    {
      title: "Regal Maintenance Pro",
      subtitle: "24/7 Service & Support",
      description: "Professional maintenance and repair services for all Regal forklift models. Quick response, guaranteed satisfaction.",
      buttonText: "Book Service",
      buttonLink: "/services",
      bgImage: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/regal-slider3.png",
      color: "from-amber-600 to-orange-600",
      accent: "#f7942f"
    },
    {
      title: "Regal Fleet Solutions",
      subtitle: "Sales & Leasing",
      description: "Wide range of quality Regal forklifts for sale or lease. Best prices with warranty and after-sales support.",
      buttonText: "View Inventory",
      buttonLink: "/services",
      bgImage: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/regal-slider4.png",
      color: "from-orange-600 to-amber-600",
      accent: "#f7942f"
    },
    {
      title: "Regal Safety First",
      subtitle: "Certified Training Programs",
      description: "Industry-leading safety certification for Regal forklift operators. Comprehensive training for workplace excellence.",
      buttonText: "Get Certified",
      buttonLink: "/services",
      bgImage: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/regal-slider5.png",
      color: "from-amber-600 to-orange-600",
      accent: "#f7942f"
    }
  ];

  useEffect(() => {
    let interval;
    let progressInterval;

    const startTimer = () => {
      setProgress(0);
      
      // Progress bar animation
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + (100 / 50); // 5 seconds = 5000ms, update every 100ms = 50 steps
        });
      }, 100);

      // Slide change timer
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);

      return { interval, progressInterval };
    };

    const timers = startTimer();

    return () => {
      clearInterval(timers.interval);
      clearInterval(timers.progressInterval);
    };
  }, [slides.length]);

  // Reset timers when slide changes manually
  useEffect(() => {
    let progressInterval;
    
    setProgress(0);
    progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + (100 / 50);
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.3 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Motion Line Loader - Top */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="relative h-[5px] bg-white/20 backdrop-blur-sm">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#f7942f] to-[#ffb347] shadow-lg"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
            style={{ 
              boxShadow: "0 0 5px #f7942f, 0 0 5px #f7942f"
            }}
          />
          {/* Glow effect on loader */}
          <div 
            className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-[#f7942f]/50 to-transparent blur-md"
            style={{ left: `calc(${progress}% - 40px)` }}
          />
        </div>
      </div>

      {/* Background Images with Parallax Effect */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40"></div>
          </div>
        </div>
      ))}

      {/* Animated Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`subtitle-${currentSlide}`}
                variants={subtitleVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="inline-block px-5 py-1.5 rounded-full bg-gradient-to-r from-[#f7942f]/30 to-[#f7942f]/10 backdrop-blur-md mb-5 border border-[#f7942f]/30 shadow-lg"
              >
                <span className="text-[#f7942f] font-bold text-sm uppercase tracking-wider">
                  {slides[currentSlide].subtitle}
                </span>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${currentSlide}`}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-5 leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${currentSlide}`}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: 0.15 }}
                className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-xl"
              >
                {slides[currentSlide].description}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`button-${currentSlide}`}
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <Link
                  to={slides[currentSlide].buttonLink}
                  className={`inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r ${slides[currentSlide].color} hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group relative overflow-hidden`}
                >
                  <span className="relative z-10">{slides[currentSlide].buttonText}</span>
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slider Controls - Enhanced */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-[#f7942f] hover:scale-110 transition-all duration-300 flex items-center justify-center z-10 border border-white/20"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-[#f7942f] hover:scale-110 transition-all duration-300 flex items-center justify-center z-10 border border-white/20"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator with Animation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-10 h-2.5 bg-[#f7942f] shadow-lg shadow-[#f7942f]/50"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;