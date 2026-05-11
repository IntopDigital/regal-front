import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FaArrowRight, 
  FaTruck, 
  FaWrench, 
  FaHeadset, 
  FaPhoneAlt,
  FaChalkboardTeacher,
  FaCertificate,
  FaShieldAlt,
  FaClock,
  FaHandsHelping,
  FaTrophy,
  FaRegGem,
  FaStar
} from "react-icons/fa";
import Hero from "../components/Hero.jsx";
import AboutShort from "../components/AboutShort.jsx";
import ShortService from "../components/ShortService.jsx";
import WhatYouLearn from "../components/WhatYouLearn.jsx";
import LogoMarquee from "../components/LogoMarquee.jsx";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);
  const reviewsRef = useRef(null);

  // Why Choose Us Data
  const whyChooseUs = [
    {
      icon: FaChalkboardTeacher,
      title: "Expert Instructors",
      description: "Certified professionals with 5+ years of hands-on industry experience",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: FaCertificate,
      title: "Official Certification",
      description: "Nationally recognized certification accepted by employers everywhere",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: FaShieldAlt,
      title: "Safety First Approach",
      description: "Comprehensive safety training meeting all workplace standards",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: FaTruck,
      title: "Modern Equipment",
      description: "Latest forklift models and state-of-the-art training facility",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: FaClock,
      title: "Flexible Schedule",
      description: "Weekend and evening classes to fit your busy lifestyle",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: FaHandsHelping,
      title: "Job Assistance",
      description: "Placement support and career guidance after certification",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50"
    }
  ];

  // Stats counter animation
  useEffect(() => {
    const statsData = [
      { id: "statHappyStudents", target: 30000, suffix: "+", element: null },
      { id: "statEquipmentSold", target: 1000, suffix: "+", element: null },
      { id: "statPassRate", target: 98, suffix: "%", element: null },
      { id: "statYearsExp", target: 10, suffix: "+", element: null }
    ];

    // Get elements
    statsData.forEach(stat => {
      stat.element = document.getElementById(stat.id);
    });

    // Create scroll trigger for counters
    statsData.forEach(stat => {
      if (stat.element) {
        ScrollTrigger.create({
          trigger: stat.element,
          start: "top 85%",
          once: true,
          onEnter: () => {
            let current = 0;
            const increment = stat.target / 50;
            const updateCounter = () => {
              current += increment;
              if (current < stat.target) {
                stat.element.innerText = Math.floor(current) + stat.suffix;
                requestAnimationFrame(updateCounter);
              } else {
                stat.element.innerText = stat.target + stat.suffix;
              }
            };
            updateCounter();
          }
        });
      }
    });

    // Header animation
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Cards staggered animation
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "back.out(0.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Stats section animation
    gsap.fromTo(statsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Reviews section animation
    gsap.fromTo(reviewsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: reviewsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // CTA section animation
    gsap.fromTo(ctaRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(0.5)",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Load Elfsight review script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const addToCardsRef = (el, index) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Slider Section */}
      <Hero />

      {/* About Short Section */}
      <AboutShort />

      {/* Short Service Section */}
      <ShortService />

      {/* What You Learn Section */}
      <WhatYouLearn />

      {/* Why Choose Us Section */}
      <section ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#f7942f]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <div ref={headerRef} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#f7942f]/10 to-orange-500/10 mb-4">
              <FaTrophy className="text-[#f7942f] text-sm" />
              <span className="text-[#f7942f] font-bold text-sm uppercase tracking-wider">Why Regal Forklift</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              The <span className="bg-gradient-to-r from-[#f7942f] to-orange-500 bg-clip-text text-transparent">Regal</span> Advantage
            </h2>
            
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#f7942f] to-orange-500 mx-auto rounded-full mb-6"></div>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Setting the standard of excellence in forklift training and certification across Canada
            </p>
          </div>

          {/* Why Choose Us Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {whyChooseUs.map((item, index) => {
    const IconComponent = item.icon;
    
    return (
      <div
        key={index}
        ref={(el) => addToCardsRef(el, index)}
        className="group relative cursor-pointer"
      >
        <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 overflow-hidden">
          {/* Number with Regal brand color */}
          <div className="absolute top-4 right-4 text-4xl md:text-4xl font-black text-amber-200 group-hover:text-amber-300 transition-all duration-300 select-none">
            {String(index + 1).padStart(2, '0')}
          </div>
          
          <div className={`w-16 h-16 rounded-xl ${item.bgColor} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 relative z-10`}>
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center shadow-md`}>
              <IconComponent className="text-white text-xl" />
            </div>
          </div>
          
          <h3 className="text-xl font-black text-gray-900 mb-3 relative z-10">{item.title}</h3>
          <p className="text-gray-600 leading-relaxed relative z-10">{item.description}</p>
          
          {/* Success color line using Tailwind gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>
      </div>
    );
  })}
</div>

          {/* Stats Section */}
          <div ref={statsRef} className="mt-20">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-10 md:p-12 relative overflow-hidden">
             
              <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div id="statHappyStudents" className="text-5xl md:text-6xl font-black text-[#f7942f] mb-2">0</div>
                  <div className="text-white/80 text-sm uppercase tracking-wide font-semibold">Happy Students</div>
                </div>
                
                <div className="text-center">
                  <div id="statEquipmentSold" className="text-5xl md:text-6xl font-black text-[#f7942f] mb-2">0</div>
                  <div className="text-white/80 text-sm uppercase tracking-wide font-semibold">Equipment Sold</div>
                </div>
                
                <div className="text-center">
                  <div id="statPassRate" className="text-5xl md:text-6xl font-black text-[#f7942f] mb-2">0</div>
                  <div className="text-white/80 text-sm uppercase tracking-wide font-semibold">Pass Rate</div>
                </div>
                
                <div className="text-center">
                  <div id="statYearsExp" className="text-5xl md:text-6xl font-black text-[#f7942f] mb-2">0</div>
                  <div className="text-white/80 text-sm uppercase tracking-wide font-semibold">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section - Elfsight Widget */}
      <section ref={reviewsRef} className="py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#f7942f]/10 mb-4">
              <FaStar className="text-[#f7942f] text-sm" />
              <span className="text-[#f7942f] font-bold text-sm uppercase tracking-wider">Testimonials</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              What Our <span className="text-[#f7942f]">Students Say</span>
            </h2>
            
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#f7942f] to-orange-500 mx-auto rounded-full mb-6"></div>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real stories from our certified forklift operators
            </p>
          </div>
          
          {/* Elfsight Reviews Widget */}
          <div className="elfsight-app-3b3ae0d1-2df5-401b-a67f-f3054eb43b40" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* Logo Marquee Section */}
      <LogoMarquee />


      {/* Tailwind CSS animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;