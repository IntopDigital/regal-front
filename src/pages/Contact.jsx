import React, { useState, useRef, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPaperPlane, FaCheckCircle, FaRegGem, FaBuilding } from "react-icons/fa";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    // Responsive animations - only run on desktop to avoid issues
    if (window.innerWidth > 768) {
      gsap.fromTo(formRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
      );

      gsap.fromTo(infoRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
      );

      gsap.fromTo(mapRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    } else {
      // Mobile - just show with opacity
      if (formRef.current) formRef.current.style.opacity = 1;
      if (infoRef.current) infoRef.current.style.opacity = 1;
      if (mapRef.current) mapRef.current.style.opacity = 1;
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FaPhoneAlt,
      title: "Phone Number",
      details: ["+1 (647) 561-0046"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: FaEnvelope,
      title: "Email Address",
      details: ["info@regalforklifttrainingschool.com"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: FaClock,
      title: "Business Hours",
      details: ["Monday - Sunday: 9:00 AM - 9:00 PM", "Open 7 Days a Week"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const locations = [
    {
      icon: FaBuilding,
      title: "Brampton Location",
      address: "211 Wilkinson Road Unit #6, Brampton, ON Canada L6T 4M2",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: FaBuilding,
      title: "Mississauga Location",
      address: "5511 Tomken Rd Unit 8, Mississauga, ON L4W 3Y3",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50"
    }
  ];

  const socialLinks = [
    { icon: FaFacebook, url: "https://facebook.com", color: "bg-blue-600" },
    { icon: FaTwitter, url: "https://twitter.com", color: "bg-sky-500" },
    { icon: FaLinkedin, url: "https://linkedin.com", color: "bg-blue-700" },
    { icon: FaInstagram, url: "https://instagram.com", color: "bg-pink-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section - Fully Responsive */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1 rounded-full bg-[#f7942f]/20 backdrop-blur-sm mb-4 sm:mb-6">
            <FaRegGem className="text-[#f7942f] text-xs sm:text-sm" />
            <span className="text-[#f7942f] font-bold text-xs sm:text-sm uppercase tracking-wider">Get in Touch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-3 sm:mb-4">
            Contact <span className="text-[#f7942f]">Us</span>
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#f7942f] to-orange-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 pb-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop: 2 columns, Tablet/Mobile: 1 column */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            
            {/* Contact Form */}
            <div ref={formRef} className="w-full">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-[#f7942f]/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-orange-500/5 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7942f]/10 mb-4 sm:mb-6">
                    <FaPaperPlane className="text-[#f7942f] text-xs sm:text-sm" />
                    <span className="text-[#f7942f] font-bold text-xs sm:text-sm uppercase tracking-wider">Send Message</span>
                  </div>
                  
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-2">Get in Touch</h2>
                  <p className="text-gray-500 text-sm sm:text-base mb-4 sm:mb-6">Fill out the form below and we'll get back to you shortly</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#f7942f] focus:ring-2 focus:ring-[#f7942f]/20 transition-all text-sm sm:text-base"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#f7942f] focus:ring-2 focus:ring-[#f7942f]/20 transition-all text-sm sm:text-base"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#f7942f] focus:ring-2 focus:ring-[#f7942f]/20 transition-all text-sm sm:text-base"
                        placeholder="+1 (647) 561-0046"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Your Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#f7942f] focus:ring-2 focus:ring-[#f7942f]/20 transition-all resize-none text-sm sm:text-base"
                        placeholder="Tell us about your inquiry..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#f7942f] to-orange-500 text-white py-3 rounded-xl font-black hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 group text-sm sm:text-base"
                    >
                      {isSubmitted ? (
                        <>
                          <FaCheckCircle className="text-base sm:text-lg" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          Send Message
                          <FaPaperPlane className="text-sm group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Information & Locations */}
            <div ref={infoRef} className="w-full">
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Contact Info Cards */}
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${info.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center shadow-md`}>
                            <IconComponent className="text-white text-sm sm:text-base md:text-lg" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg md:text-xl font-black text-gray-900 mb-1 sm:mb-2">{info.title}</h3>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-gray-600 text-xs sm:text-sm md:text-base break-words">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Location Cards - New Section */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 flex items-center gap-2 px-1">
                    <FaMapMarkerAlt className="text-[#f7942f]" />
                    Our Locations
                  </h3>
                  {locations.map((location, index) => {
                    const IconComponent = location.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (contactInfo.length + index) * 0.1 }}
                        className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                      >
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${location.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r ${location.color} flex items-center justify-center shadow-md`}>
                              <IconComponent className="text-white text-sm sm:text-base md:text-lg" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg md:text-xl font-black text-gray-900 mb-1 sm:mb-2">{location.title}</h3>
                            <p className="text-gray-600 text-xs sm:text-sm md:text-base break-words leading-relaxed">
                              {location.address}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Map Section - Responsive */}
      <section className="py-0 sm:py-2">
        <div ref={mapRef} className="w-full">
          <div className="relative overflow-hidden shadow-xl">
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10 bg-white/90 backdrop-blur-md rounded-lg sm:rounded-xl px-2 py-1.5 sm:px-3 sm:py-2 shadow-lg">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <FaMapMarkerAlt className="text-[#f7942f] text-sm sm:text-base md:text-lg" />
                <span className="font-semibold text-gray-800 text-xs sm:text-sm">Our Locations</span>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11550.697541959184!2d-79.7624316!3d43.684375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3f2b2f5b7e2d%3A0x8e5f9b3c2a1d4e6f!2sBrampton%2C%20ON!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Regal Forklift Training School Locations"
              className="w-full hover:grayscale-0 transition-all duration-500 sm:h-[350px] md:h-[400px] lg:h-[450px]"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;