import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";
import {
  MdLocationOn,
  MdPhone,
  MdEmail,
  MdAccessTime,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { motion, useAnimation, useInView } from "framer-motion";

// Logo component with your image
const RegalLogo = () => (
  <div className="flex items-center">
    <img
      src="https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/regal-logo-white.png"
      alt="Regal Forklift Logo"
      className="h-16 md:h-20 w-auto object-contain"
    />
  </div>
);

const Footer = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="p-5" style={{ backgroundColor: "#f7942f" }}>
      <footer
        ref={ref}
        className="relative bg-[#111827] text-gray-900 mt-auto rounded-[20px] overflow-hidden"
        style={{ borderRadius: "20px" }}
      >
        {/* Inner border with #f7942f color */}
        <div
          className="absolute inset-0 pointer-events-none rounded-[20px]"
          style={{
            border: "3px solid #f7942f",
            borderRadius: "20px",
            zIndex: 20,
          }}
        />

        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 gap-y-10">
            {/* Column 1: Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <RegalLogo />
              <p className="text-white mt-4 mb-6 leading-relaxed font-medium text-sm md:text-base">
                Canada's leading forklift training and certification provider.
                Committed to excellence in industrial safety education since
                2010.
              </p>

              {/* Social Media */}
              <div className="flex space-x-3">
                {[
                  { icon: FaFacebookF, link: "#", label: "Facebook" },
                  { icon: FaTwitter, link: "#", label: "Twitter" },
                  { icon: FaLinkedinIn, link: "#", label: "LinkedIn" },
                  { icon: FaInstagram, link: "#", label: "Instagram" },
                  { icon: FaYoutube, link: "#", label: "YouTube" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 md:w-10 md:h-10 bg-white text-[#f7942f] rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
                    aria-label={social.label}
                  >
                    <social.icon className="text-base md:text-lg" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Column 2: Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-base md:text-lg font-black text-white mb-5 uppercase tracking-wide border-l-4 border-white pl-3">
                Quick Links
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/about" },
                  { name: "FAQ's", path: "/faq" },
                  { name: "Services", path: "/services" },
                  { name: "Our Partners" ,path: "/our-partners" },
                  { name: "Gallery" ,path: "/gallery" },
                  { name: "Contact Us", path: "/contact" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-white/90 font-medium hover:text-white transition-all duration-300 flex items-center group text-sm md:text-base"
                    >
                      <MdKeyboardArrowRight className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 mr-0 group-hover:mr-2" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Resources */}
            <motion.div variants={itemVariants}>
              <h3 className="text-base md:text-lg font-black text-white mb-5 uppercase tracking-wide border-l-4 border-white pl-3">
                Resources
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  { name: "Licences Check", path: "/check-license" },
                  { name: "Training Videos", path: "/training" },
                  { name: "Our Partners", path: "/our-partners" },
                  { name: "Careers", path: "/careers" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-white/90 font-medium hover:text-white transition-all duration-300 flex items-center group text-sm md:text-base"
                    >
                      <MdKeyboardArrowRight className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 mr-0 group-hover:mr-2" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4: Information */}
            <motion.div variants={itemVariants}>
              <h3 className="text-base md:text-lg font-black text-white mb-5 uppercase tracking-wide border-l-4 border-white pl-3">
                Information
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  { name: "News", path: "/news" },
                  { name: "Privacy & Policy", path: "/privacy-policy" },
                  { name: "Terms of Use", path: "/terms-of-use" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-white/90 font-medium hover:text-white transition-all duration-300 flex items-center group text-sm md:text-base"
                    >
                      <MdKeyboardArrowRight className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 mr-0 group-hover:mr-2" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 5: Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-base md:text-lg font-black text-white mb-5 uppercase tracking-wide border-l-4 border-white pl-3">
                Contact Us
              </h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start space-x-3 group">
                  <MdLocationOn className="text-white text-lg md:text-xl mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div className="space-y-2">
                    <p className="text-white/90 font-medium text-xs md:text-sm leading-relaxed">
                      211 Wilkinson Road Unit #6, <br />
                      Brampton, ON Canada L6T 4M2
                    </p>
                    <p className="text-white/90 font-medium text-xs md:text-sm leading-relaxed">
                      5511 Tomken Rd Unit 8, <br />
                      Mississauga, ON L4W 3Y3
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group">
                  <MdEmail className="text-white text-lg md:text-xl group-hover:scale-110 transition-transform duration-300" />
                  <a
                    href="mailto:info@regalforklifttrainingschool.com"
                    className="text-white/90 font-medium hover:text-white transition-colors duration-300 text-xs md:text-sm break-all"
                  >
                    info@regalforklift
                    <br />
                    trainingschool.com
                  </a>
                </div>

                <div className="flex items-center space-x-3 group">
                  <MdPhone className="text-white text-lg md:text-xl group-hover:scale-110 transition-transform duration-300" />
                  <a
                    href="tel:+16475610046"
                    className="text-white font-bold hover:text-white transition-colors duration-300 text-base md:text-lg"
                  >
                    +1 (647) 561-0046
                  </a>
                </div>

                <div className="flex items-center space-x-3 group">
                  <MdAccessTime className="text-white text-lg md:text-xl group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="text-white font-bold text-sm md:text-base">
                      9:00 AM - 9:00 PM
                    </p>
                    <p className="text-white/70 text-xs md:text-sm">
                      Monday - Sunday
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            variants={itemVariants}
            className="mt-12 md:mt-16 pt-6 md:pt-8 border-t-2 border-white/20"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <h4 className="text-lg md:text-xl font-black text-white mb-2">
                    Subscribe to Our Newsletter
                  </h4>
                  <p className="text-white/80 font-medium text-sm md:text-base">
                    Get the latest updates on courses, safety tips, and industry
                    news.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-2 md:py-3 rounded-lg border-2 border-white/30 bg-white/10 text-white placeholder-white/60 focus:border-white focus:outline-none transition-all duration-300 font-medium text-sm md:text-base"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-5 md:px-6 py-2 md:py-3 bg-white text-[#f7942f] font-bold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            variants={itemVariants}
            className="mt-10 md:mt-12 pt-5 md:pt-6 border-t border-white/20"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/80 font-medium text-xs md:text-sm">
                © 2026 Regal Forklift Training School. All rights reserved.
              </p>
              <div className="flex space-x-4 md:space-x-6">
                <Link
                  to="/privacy-policy"
                  className="text-white/80 font-medium hover:text-white transition-colors duration-300 text-xs md:text-sm"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-of-use"
                  className="text-white/80 font-medium hover:text-white transition-colors duration-300 text-xs md:text-sm"
                >
                  Terms of Use
                </Link>
                <Link
                  to="/sitemap"
                  className="text-white/80 font-medium hover:text-white transition-colors duration-300 text-xs md:text-sm"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-10 h-10 md:w-12 md:h-12 bg-white text-[#f7942f] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-base md:text-xl" />
        </motion.button>
      </footer>
    </div>
  );
};

export default Footer;
