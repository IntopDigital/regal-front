import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaSitemap, 
  FaHome, 
  FaInfoCircle, 
  FaEnvelope, 
  FaNewspaper, 
  FaBriefcase,
  FaShieldAlt,
  FaQuestionCircle,
  FaCertificate,
  FaChalkboardTeacher,
  FaTruck,
  FaUsers,
  FaHandshake,
  FaGraduationCap,
  FaStar,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaChevronRight,
  FaExternalLinkAlt,
  FaLock,
  FaPhoneAlt,
  FaVideo,
  FaImage
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SitemapPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  // Sitemap structure based on actual routes
  const sitemapSections = [
    {
      title: "Main Pages",
      icon: FaHome,
      color: "from-blue-500 to-indigo-500",
      links: [
        { name: "Home", url: "/", description: "Welcome to Regal Forklift Training School" },
        { name: "About Us", url: "/about", description: "Learn about our history, mission, and team" },
        { name: "Our Services", url: "/services", description: "Forklift training and certification services" },
        { name: "Contact Us", url: "/contact", description: "Get in touch with our team" },
        { name: "News & Announcements", url: "/news", description: "Latest updates and industry news" },
        { name: "Careers", url: "/careers", description: "Join our team of professionals" },
        { name: "Sitemap", url: "/sitemap", description: "Site navigation guide" }
      ]
    },
    {
      title: "Training & Certification",
      icon: FaGraduationCap,
      color: "from-green-500 to-emerald-500",
      links: [
        { name: "Training Videos", url: "/training", description: "Educational training videos and resources" },
        { name: "License Check", url: "/check-license", description: "Verify your forklift license status" },
        { name: "FAQ", url: "/faq", description: "Frequently asked questions" }
      ]
    },
    {
      title: "Legal & Policies",
      icon: FaShieldAlt,
      color: "from-red-500 to-rose-500",
      links: [
        { name: "Privacy Policy", url: "/privacy-policy", description: "How we handle your personal information" },
        { name: "Terms of Use", url: "/terms-of-use", description: "Terms and conditions for using our services" }
      ]
    },
    {
      title: "Company",
      icon: FaUsers,
      color: "from-cyan-500 to-blue-500",
      links: [
        { name: "Our Partners", url: "/our-partners", description: "Our corporate partners and affiliates" },
        { name: "Gallery", url: "/gallery", description: "Photos and videos from training sessions" }
      ]
    }
  ];

  // Quick contact info
  const contactInfo = [
    { icon: FaPhoneAlt, label: "Phone", value: "+1 (647) 561-0046", href: "tel:+16475610046" },
    { icon: FaEnvelope, label: "Email", value: "info@regalforklifttrainingschool.com", href: "mailto:info@regalforklifttrainingschool.com" },
    { icon: FaMapMarkerAlt, label: "Address", value: "211 Wilkinson Road Unit #6, Brampton, ON", href: null },
    { icon: FaClock, label: "Hours", value: "Mon-Sun: 9:00 AM - 9:00 PM", href: null }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#f7942f]/20 backdrop-blur-sm mb-6">
            <FaSitemap className="text-[#f7942f] text-sm" />
            <span className="text-[#f7942f] font-bold text-sm uppercase tracking-wider">Site Navigation</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Site<span className="text-[#f7942f]">map</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#f7942f] to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Complete website navigation guide to help you find what you're looking for
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2 text-sm text-gray-500 mb-8"
          >
            <Link to="/" className="hover:text-[#f7942f] transition-colors">Home</Link>
            <FaChevronRight className="text-xs" />
            <span className="text-[#f7942f] font-medium">Sitemap</span>
          </motion.div>

          {/* Introduction */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#f7942f] to-orange-500 flex items-center justify-center flex-shrink-0">
                <FaSitemap className="text-white text-xl" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Sitemap Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  This sitemap provides a complete overview of all pages available on the Regal Forklift Training School website. 
                  Use this guide to navigate through our services, resources, and important information. Click on any link to be 
                  directed to the corresponding page.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sitemap Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {sitemapSections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                {/* Section Header */}
                <div className={`bg-gradient-to-r ${section.color} p-4 text-white`}>
                  <div className="flex items-center gap-3">
                    <section.icon className="text-2xl" />
                    <h3 className="text-lg font-bold">{section.title}</h3>
                  </div>
                </div>
                
                {/* Section Links */}
                <div className="p-4">
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.url}
                          className="group flex items-start gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <FaChevronRight className="text-[#f7942f] text-xs mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                          <div>
                            <span className="text-gray-800 font-medium hover:text-[#f7942f] transition-colors">
                              {link.name}
                            </span>
                            <p className="text-gray-500 text-xs mt-0.5">{link.description}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Contact Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mt-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                <FaPhoneAlt className="text-[#f7942f]" />
                Quick Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-[#f7942f]/20 flex items-center justify-center">
                      <info.icon className="text-[#f7942f] text-lg" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-white text-sm hover:text-[#f7942f] transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Popular Pages Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mt-8 bg-white rounded-2xl shadow-lg p-6 md:p-8"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaStar className="text-[#f7942f]" />
              Most Popular Pages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "Home", url: "/", icon: FaHome },
                { name: "Services", url: "/services", icon: FaTruck },
                { name: "Training Videos", url: "/training", icon: FaVideo },
                { name: "Gallery", url: "/gallery", icon: FaImage },
                { name: "License Check", url: "/check-license", icon: FaCertificate },
                { name: "Contact Us", url: "/contact", icon: FaEnvelope },
                { name: "About Us", url: "/about", icon: FaInfoCircle },
                { name: "FAQ", url: "/faq", icon: FaQuestionCircle },
                { name: "Privacy Policy", url: "/privacy-policy", icon: FaLock }
              ].map((page, index) => (
                <Link
                  key={index}
                  to={page.url}
                  className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 hover:bg-[#f7942f]/10 transition-colors group"
                >
                  <page.icon className="text-[#f7942f] text-sm" />
                  <span className="text-gray-700 group-hover:text-[#f7942f] transition-colors">
                    {page.name}
                  </span>
                  <FaExternalLinkAlt className="text-gray-400 text-xs ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Page Statistics */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md">
              <FaSitemap className="text-[#f7942f]" />
              <span className="text-gray-600 font-medium">
                Total Pages: <span className="text-[#f7942f] font-bold">16</span>
              </span>
              <span className="w-px h-4 bg-gray-300 mx-2"></span>
              <span className="text-gray-600 font-medium">
                Last Updated: <span className="text-[#f7942f] font-bold">January 2026</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;