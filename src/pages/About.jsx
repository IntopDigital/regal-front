import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt, FaCheckCircle, FaEye, FaBullseye, FaGem, FaChalkboardTeacher, FaCertificate, FaShieldAlt, FaUsers, FaTrophy, FaClock } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const qualityRef = useRef(null);
  const statsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Hero animation
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    // Image animation
    gsap.fromTo(imageRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(0.5)" }
    );

    // Mission, Vision, Quality animations
    const sections = [missionRef, visionRef, qualityRef];
    sections.forEach((section, index) => {
      gsap.fromTo(section.current,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: section.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Stats animation
    gsap.fromTo(statsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const stats = [
    { number: "10+", label: "Years Experience", icon: FaTrophy },
    { number: "30000+", label: "Students Trained", icon: FaUsers },
    { number: "98%", label: "Pass Rate", icon: FaCheckCircle },
    { number: "24/7", label: "Support Available", icon: FaClock }
  ];

  // Image URLs
  const images = {
    hero: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/regal-about2.png",
    training: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/regal-about2.png",
    classroom: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/regal-about1.png",
    certification: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/regal-certificate.png"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800/90"></div>
        </div>
        
        <div ref={heroRef} className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#f7942f]/20 backdrop-blur-sm mb-6">
            <FaGem className="text-[#f7942f] text-sm" />
            <span className="text-[#f7942f] font-bold text-sm uppercase tracking-wider">About Us</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4">
            About <span className="text-[#f7942f]">Regal Forklift</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#f7942f] to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Your trusted partner for professional forklift training and certification across Canada
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* About Short Description with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Content */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f7942f]/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl"></div>
              
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-[#f7942f] rounded-full"></span>
                Who We Are
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                At <span className="font-bold text-[#f7942f]">Regal Forklift Training School</span>, you will get the best learning experience of different types of forklifts. Our expert instructors are in this industry from <span className="font-bold text-[#f7942f]">10+ years</span>. Their experience will help you in getting the best practice of operating forklifts with complete safety.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We also provide certifications after training which will be valid to get a job as a forklift operator.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-[#f7942f] text-xl" />
                  <div>
                    <p className="text-sm text-gray-500">Call us for more info</p>
                    <a href="tel:+16475610046" className="text-xl font-black text-gray-900 hover:text-[#f7942f] transition-colors">
                      +1 647-561-0046
                    </a>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-white bg-gradient-to-r from-[#f7942f] to-orange-500 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </div>

            {/* Image */}
            <div ref={imageRef} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-full min-h-[400px]">
                <img 
                  src={images.training}
                  alt="Forklift Training Session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-white">
                    <FaCheckCircle className="text-[#f7942f]" />
                    <span className="font-semibold">Hands-on Practical Training</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Quality Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <div ref={missionRef} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full blur-2xl"></div>
                <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
                    <FaBullseye className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  We leverage our national presence and competence in the forklift machine training by collaborating with our customers to unlock value in their training.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div ref={visionRef} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/5 rounded-full blur-2xl"></div>
                <div className="w-16 h-16 rounded-xl bg-purple-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center shadow-md">
                    <FaEye className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  We want to be the most customer-focused training course provider of the forklift machines – a trusted, valued, and respected provider and partner to our customers.
                </p>
              </div>
            </div>

            {/* Quality */}
            <div ref={qualityRef} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 rounded-full blur-2xl"></div>
                <div className="w-16 h-16 rounded-xl bg-emerald-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center shadow-md">
                    <FaGem className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Our Quality</h3>
                <p className="text-gray-600 leading-relaxed">
                  Direct Training values are more than just words and definitions; they are the core of our daily business. We always aim to keep our customers as the first priority.
                </p>
              </div>
            </div>
          </div>

          {/* Image Gallery Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group h-64">
              <img 
                src={images.classroom}
                alt="Classroom Training"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Expert Classroom Training</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg group h-64">
              <img 
                src={images.certification}
                alt="Certification"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Official Certification</p>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div ref={statsRef}>
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-10 md:p-12 relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center group">
                      <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="text-[#f7942f] text-2xl" />
                        </div>
                      </div>
                      <div className="text-4xl md:text-5xl font-black text-[#f7942f] mb-2">{stat.number}</div>
                      <div className="text-white/80 text-sm uppercase tracking-wide font-semibold">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-10 md:p-12">
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                Ready to Start Your Forklift Career?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join thousands of successful graduates who started their journey with Regal Forklift Training School
              </p>
              <Link
                to="/register"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r from-[#f7942f] to-orange-500 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Enroll Today
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;