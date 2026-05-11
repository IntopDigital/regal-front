import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaFileAlt, 
  FaShieldAlt, 
  FaLaptopCode, 
  FaCreditCard,
  FaUserCheck,
  FaGavel,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaClock,
  FaGem,
  FaPhoneAlt
} from 'react-icons/fa';

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#f7942f]/20 backdrop-blur-sm mb-6">
            <FaGem className="text-[#f7942f] text-sm" />
            <span className="text-[#f7942f] font-bold text-sm uppercase tracking-wider">Legal Information</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Terms of <span className="text-[#f7942f]">Use</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#f7942f] to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Please read these terms carefully before using our services
          </p><br></br>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Introduction Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-2xl shadow-xl mb-8 overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#f7942f] to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FaFileAlt className="text-white text-xl" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Terms of Use</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p className="text-lg md:text-xl font-medium text-gray-700">
                      Welcome to the terms of use for Regal Forklift School.
                    </p>
                    <p>
                      These terms are between you and the entity providing the Regal Forklift School service to you,
                      which may be, depending on your location. Your Regal Forklift School service provider may change
                      from time to time, with or without prior notice (unless required by applicable law).
                    </p>
                    <p>
                      Please read these terms, along with the Privacy Policy, Return Policy applicable to you,
                      and all other rules and policies related to the Regal Forklift School service
                      (including, but not limited to, any rules or usage provisions specified on any
                      product detail page or on any help or other informational page for the Regal
                      Forklift School service) (collectively, this "Agreement").
                    </p>
                    <p>
                      The versions of these policies and notices applicable to you are available for your review to
                      understand how we handle your personal information. Each time you visit, browse or use the
                      Regal Forklift School service, you accept this Agreement on behalf of yourself, all members
                      of your household, and others who use the Service under your account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 1 - The Service */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg mb-6 overflow-hidden hover:shadow-xl transition-all"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                  <FaShieldAlt className="text-white text-lg" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">1. THE SERVICE</h3>
              </div>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  Regal Forklift School (the "Service") is a personalized service that recommends and helps you
                  learn how to drive forklift machines. There are several ways to access the Service, including
                  through <a href="mailto:www.regalforklift.com" className="text-[#f7942f] hover:text-orange-600 font-medium">
                    www.regalforklift.com
                  </a> and your use of other Subscription Benefits.
                </p>
                <p>
                  Regal Forklift services are governed by separate terms made available on the website or devices
                  you use to access those services.
                </p>
                <p>
                  If you are under 18 years of age, or the age of majority in your location, you may use the
                  Service only with the involvement of a parent or guardian.
                </p>
                <p>
                  We also endeavour to continuously improve the Regal Forklift software and services and your
                  experience with them.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 2 - Software */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg mb-6 overflow-hidden hover:shadow-xl transition-all"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                  <FaLaptopCode className="text-white text-lg" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">2. SOFTWARE</h3>
              </div>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  We may make available software for your use in connection with the Service ("Software").
                  Terms contained in the Terms of Use of your Subscription apply to your use of Software.
                </p>
                <p>
                  For additional terms that apply to certain third-party Software, contact us at
                  <a href="mailto:www.regalforklift.com" className="text-[#f7942f] hover:text-orange-600 font-medium ml-1">
                    www.regalforklift.com
                  </a>.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 3 - Subscriptions/Memberships */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg mb-8 overflow-hidden hover:shadow-xl transition-all"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <FaCreditCard className="text-white text-lg" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">3. Subscriptions/Memberships</h3>
              </div>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>
                  Offers and pricing for subscriptions (also referred to at times as memberships), the subscription
                  services, the extent of available Subscription, and the specific titles available through
                  subscription services, may change over time and by location without notice (except as may be
                  required by applicable law).
                </p>
                <p>
                  Unless otherwise indicated, any price changes are effective as of the beginning of the next
                  subscription period. If you do not agree to a subscription change, you may cancel your
                  subscription per your opinion.
                </p>
                <p>
                  The pricing for subscriptions or memberships may include VAT and/or other taxes. Where applicable,
                  such taxes will be collected by the party with whom you transact for the service, which may be
                  Regal Forklift or a third party.
                </p>
                <p>
                  Additional terms applicable to a subscription (such as the applicable cancellation and refund
                  policy) will be indicated on the informational pages for that subscription on the primary Service
                  website for your location.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Information Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                <FaUserCheck className="text-[#f7942f]" />
                Have Questions?
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f7942f]/20 flex items-center justify-center">
                    <FaEnvelope className="text-[#f7942f] text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email Us</p>
                    <a href="mailto:info@regalforklift.com" className="text-white hover:text-[#f7942f] transition-colors">
                      info@regalforklift.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f7942f]/20 flex items-center justify-center">
                    <FaPhoneAlt className="text-[#f7942f] text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call Us</p>
                    <a href="tel:+16475610046" className="text-white hover:text-[#f7942f] transition-colors">
                      +1 (647) 561-0046
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f7942f]/20 flex items-center justify-center">
                    <FaGlobe className="text-[#f7942f] text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Visit Website</p>
                    <a href="https://www.regalforklift.com" className="text-white hover:text-[#f7942f] transition-colors">
                      www.regalforklift.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f7942f]/20 flex items-center justify-center">
                    <FaClock className="text-[#f7942f] text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Business Hours</p>
                    <p className="text-white text-sm">Mon-Sun: 9:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;