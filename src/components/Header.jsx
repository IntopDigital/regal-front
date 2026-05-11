import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaUser, 
  FaIdCard, 
  FaBars, 
  FaTimes, 
  FaArrowRight, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube,
  FaPhoneAlt
} from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About Us" },
    { path: "/services", name: "Services" },
    { path: "/careers", name: "Careers" },
    { path: "/our-partners", name: "Our Partners" },
    { path: "/gallery", name: "Gallery" },
    { path: "/contact", name: "Contact Us" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, link: "https://facebook.com", label: "Facebook", color: "hover:bg-[#1877f2]" },
    { icon: FaTwitter, link: "https://twitter.com", label: "Twitter", color: "hover:bg-[#1da1f2]" },
    { icon: FaLinkedinIn, link: "https://linkedin.com", label: "LinkedIn", color: "hover:bg-[#0077b5]" },
    { icon: FaInstagram, link: "https://instagram.com", label: "Instagram", color: "hover:bg-[#e4405f]" },
    { icon: FaYoutube, link: "https://youtube.com", label: "YouTube", color: "hover:bg-[#ff0000]" }
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className={`relative overflow-hidden transition-all duration-300 ${
        scrolled ? "shadow-xl" : "shadow-2xl"
      }`}>
        
        {/* Top Bar - Contact Information */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
          <div className="container mx-auto px-4 md:px-6 py-2.5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs md:text-sm">
              {/* Contact Info - Left */}
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
                <a 
                  href="tel:+16475610046" 
                  className="flex items-center gap-2 hover:text-amber-500 transition-colors duration-300 group"
                >
                  <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                    <FaPhoneAlt className="text-amber-500 text-xs group-hover:text-white" />
                  </div>
                  <span className="font-medium">+1 (647) 561-0046</span>
                </a>
                
                <div className="hidden md:block w-px h-4 bg-gray-600"></div>
                
                <a 
                  href="mailto:info@regalforklift.com" 
                  className="flex items-center gap-2 hover:text-amber-500 transition-colors duration-300 group"
                >
                  <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                    <FaEnvelope className="text-amber-500 text-xs group-hover:text-white" />
                  </div>
                  <span className="font-medium">info@regalforklifttrainingschool.com</span>
                </a>
                
                <div className="hidden md:block w-px h-4 bg-gray-600"></div>
                
                <div className="flex items-center gap-2 group">
                  <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                    <FaClock className="text-amber-500 text-xs group-hover:text-white" />
                  </div>
                  <span className="font-medium">9:00 AM - 9:00 PM</span>
                  <span className="hidden md:inline text-gray-400 text-xs">(Mon-Sun)</span>
                </div>
              </div>
              
              {/* Social Media Icons */}
              <div className="hidden lg:flex items-center gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-7 h-7 rounded-full bg-white/10 flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    <social.icon className="text-white text-xs" />
                  </a>
                ))}
                
                {/* Divider */}
                <div className="w-px h-4 bg-gray-600 mx-1"></div>
                
                {/* 24/7 Support Badge */}
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-gray-300 text-xs">24/7 Support Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation - White Background */}
        <div className={`bg-white transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center">
              {/* Logo Section - Left */}
              <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
                <div className="relative">
                  <img 
                    src="https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/regal-dark-logo.png" 
                    alt="Regal Forklift" 
                    className={`h-10 md:h-12 w-auto object-contain transition-all duration-300 ${
                      scrolled ? "md:h-10" : "md:h-12"
                    }`}
                  />
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-500"></div>
                </div>
              </Link>

              {/* Desktop Navigation - Centered Menu with Orange Background */}
              <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
                <div className="flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-1 shadow-sm">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) => `
                        relative px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300
                        ${isActive 
                          ? "bg-white text-orange-600 shadow-md" 
                          : "text-white hover:bg-white/20 hover:text-white"
                        }
                      `}
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>
              
              {/* Right Side Actions - Login & Check License */}
              <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
                <NavLink
                  to="/login"
                  className={({ isActive }) => `
                    flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300
                    ${isActive 
                      ? "bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-md" 
                      : "bg-gray-900 text-white hover:shadow-lg hover:scale-105 hover:bg-gray-800"
                    }
                  `}
                >
                  <FaUser className="text-sm" />
                  Login
                </NavLink>
                
                <NavLink
                  to="/check-license"
                  className={({ isActive }) => `
                    flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300
                    ${isActive 
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md" 
                      : "border-2 border-amber-500 bg-transparent text-amber-600 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:text-white hover:shadow-lg hover:scale-105"
                    }
                  `}
                >
                  <FaIdCard className="text-sm" />
                  Check License
                </NavLink>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative w-10 h-10 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 text-gray-700 hover:from-amber-500 hover:to-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center group"
              >
                {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
              isMobileMenuOpen ? 'max-h-[600px] opacity-100 py-4' : 'max-h-0 opacity-0'
            }`}>
              <div className="border-t border-gray-100 pt-4 space-y-2">
                {/* Mobile Nav Links with Orange Background */}
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-1">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) => `
                        flex items-center justify-between px-4 py-3 rounded-xl font-semibold transition-all duration-300
                        ${isActive 
                          ? "bg-white text-orange-600 shadow-md" 
                          : "text-white hover:bg-white/20"
                        }
                      `}
                    >
                      <span>{link.name}</span>
                      <FaArrowRight className={`text-sm transition-all duration-300 ${
                        location.pathname === link.path ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                      }`} />
                    </NavLink>
                  ))}
                </div>
                
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-3"></div>
                
                {/* Mobile Action Buttons */}
                <NavLink
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-gray-900 to-gray-800 text-white"
                >
                  <FaUser className="text-base" />
                  Login
                </NavLink>
                
                <NavLink
                  to="/check-license"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all duration-300 border-2 border-amber-500 text-amber-600 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:text-white"
                >
                  <FaIdCard className="text-base" />
                  Check License
                </NavLink>
                
                {/* Mobile Social Links */}
                <div className="pt-4 mt-2 border-t border-gray-100">
                  <p className="text-gray-500 text-xs mb-3">Follow Us</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-amber-500 hover:scale-110 transition-all duration-300"
                        aria-label={social.label}
                      >
                        <social.icon className="text-gray-600 text-xs hover:text-white" />
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Mobile Support Badge */}
                <div className="pt-4">
                  <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-xl w-fit">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-gray-600 text-xs font-medium">24/7 Support Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="h-0.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500"></div>
      </div>
    </header>
  );
};

export default Header;