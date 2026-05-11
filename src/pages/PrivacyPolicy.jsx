import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLock,
  FaUserSecret,
  FaDatabase,
  FaShareAlt,
  FaCheckCircle,
  FaCookie,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaBuilding,
  FaChartLine,
  FaGavel,
  FaClock,
  FaGem,
  FaPhoneAlt,
} from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdDataUsage, MdOutlineSecurity } from "react-icons/md";
import { TbArrowsShuffle } from "react-icons/tb";
import { FaUserLock, FaRegBell } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroRef = useRef(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardHover = {
    rest: { scale: 1, y: 0, transition: { duration: 0.2 } },
    hover: { scale: 1.02, y: -4, transition: { duration: 0.2 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Hero Section - Exact styling from request */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800/90"></div>
        </div>
        
        <div ref={heroRef} className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#f7942f]/20 backdrop-blur-sm mb-6">
            <FaGem className="text-[#f7942f] text-sm" />
            <span className="text-[#f7942f] font-bold text-sm uppercase tracking-wider">Privacy Policy</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4">
            Privacy <span className="text-[#f7942f]">Policy</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#f7942f] to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Last Updated: January 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Introduction Card - Modern with gradient border */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="group relative bg-white rounded-3xl shadow-xl mb-12 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#f7942f]/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-0" />
            <div className="p-8 md:p-10">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f7942f] to-orange-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#f7942f]/20">
                  <HiOutlineDocumentText className="text-white text-2xl" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
                    Privacy Notice
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    We value your trust in us to use and disclose information about you wisely and
                    responsibly since we are aware that it is important to you. This Privacy Notice
                    explains how Regalforklift.com and its affiliates gather and use the personal
                    data you provide through Regal websites, mobile applications, gadgets, goods,
                    and services. You agree to the procedures outlined in this privacy notice by
                    using Regal Forklift Services.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-10">
            {/* Section 1 - Personal Information */}
            <motion.div
              variants={fadeInUp}
              whileHover="hover"
              initial="rest"
              animate="rest"
              custom={cardHover}
              className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f7942f] to-orange-600 flex items-center justify-center shadow-md shadow-[#f7942f]/20">
                    <FaUserSecret className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                    What Personal Information Does Regal Forklift Collect?
                  </h3>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  We collect your personal information in order to provide and continually improve
                  our products and services.
                </p>
                <div className="space-y-5">
                  <div className="bg-slate-50 rounded-2xl p-5">
                    <h4 className="font-bold text-lg text-slate-800 mb-3 flex items-center gap-2">
                      <FaCheckCircle className="text-[#f7942f] text-sm" />
                      Information You Give Us
                    </h4>
                    <p className="text-slate-600 leading-relaxed pl-6">
                      We receive and store any information you provide in relation to Regal Forklift
                      Services. You can choose not to provide certain information, but then you might
                      not be able to take advantage of many of our Regal Forklift Services.
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-5">
                    <h4 className="font-bold text-lg text-slate-800 mb-3 flex items-center gap-2">
                      <FaCookie className="text-[#f7942f] text-sm" />
                      Automatic Information
                    </h4>
                    <p className="text-slate-600 leading-relaxed pl-6">
                      We automatically collect and store certain types of information about your use
                      of Regal Forklift Services, including information about your interaction with
                      content and services. Like many websites, we use "cookies" and other unique
                      identifiers, and we obtain certain types of information when your web browser
                      accesses Regal Forklift Services.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 2 - Purposes - Modern Cards Grid */}
            <motion.div
              variants={fadeInUp}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-md shadow-indigo-500/20">
                    <MdDataUsage className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                    For What Purposes Does Regal Forklift Use Your Personal Information?
                  </h3>
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  We use your personal information to operate, provide, develop, and improve our
                  customers' products and services. These purposes include:
                </p>
                <div className="grid gap-4">
                  {[
                    {
                      icon: FaChartPie,
                      title: "Purchase and delivery of products and services",
                      desc: "We use your personal information to take and handle orders, deliver Services, process payments, and communicate with you about orders, products and services, and promotional offers.",
                      color: "from-orange-400 to-amber-500",
                    },
                    {
                      icon: MdOutlineSecurity,
                      title: "Provide, troubleshoot, and improve Regal Forklift Services",
                      desc: "We use your personal information to provide functionality, analyze performance, fix errors, and improve the usability and effectiveness of Regal Forklift Services.",
                      color: "from-blue-500 to-indigo-500",
                    },
                    {
                      icon: FaUserLock,
                      title: "Recommendations and personalization",
                      desc: "We use your personal information to recommend features, products, and services that might be of interest to you, identify your preferences and personalize your experience.",
                      color: "from-emerald-500 to-teal-500",
                    },
                    {
                      icon: FaGavel,
                      title: "Comply with legal obligations",
                      desc: "In certain cases, we collect and use your personal information to comply with laws. For instance, we collect from sellers information regarding place of establishment and bank account information for identity verification.",
                      color: "from-rose-500 to-pink-500",
                    },
                    {
                      icon: FaRegBell,
                      title: "Communicate with you",
                      desc: "We use your personal information to communicate with you in relation to Regal Forklift Services via different channels (e.g., by phone, email, chat).",
                      color: "from-violet-500 to-purple-500",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`bg-gradient-to-r ${item.color} rounded-xl p-1 group-hover:shadow-lg transition-all`}
                    >
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 transition-all group-hover:bg-white/80">
                        <div className="flex items-start gap-4">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                            <item.icon className="text-white text-base" />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Section 3 - Sharing Information */}
            <motion.div
              variants={fadeInUp}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md shadow-emerald-500/20">
                    <TbArrowsShuffle className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                    Does Regal Forklift Share Your Personal Information?
                  </h3>
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Information about our customers is an important part of our business, and we are
                  not in the business of selling our customers' personal information to others. We
                  share customers' personal information only as described below and with
                  subsidiaries that either are subject to this Privacy Notice or follow practices at
                  least as protective as those described in this Privacy Notice.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: FaBuilding, title: "Transactions involving Third Parties", desc: "In the event of a merger, acquisition, or asset sale, your personal information may be transferred.", gradient: "from-slate-700 to-slate-800" },
                    { icon: FaDatabase, title: "Third-Party Service Providers", desc: "We employ other companies and individuals to perform functions on our behalf.", gradient: "from-cyan-600 to-blue-700" },
                    { icon: FaChartLine, title: "Business Transfers", desc: "As we continue to develop our business, we might sell or buy other businesses or assets.", gradient: "from-indigo-600 to-purple-700" },
                    { icon: FaGavel, title: "Protection of Regal Forklift and Others", desc: "We release account and other personal information when we believe release is appropriate to comply with the law.", gradient: "from-rose-600 to-pink-700" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-br ${item.gradient} p-5 rounded-2xl text-white shadow-lg hover:shadow-xl transition-all group/card`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <item.icon className="text-2xl text-[#f7942f] group-hover/card:scale-110 transition-transform" />
                        <h4 className="font-bold">{item.title}</h4>
                      </div>
                      <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Section - Dark theme matching hero */}
            <motion.div
              variants={fadeInUp}
              className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 shadow-2xl"
            >
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800/90"></div>
              </div>

              <div className="relative p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3 text-white">
                  <FaLock className="text-[#f7942f]" />
                  Questions About Privacy?
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed max-w-2xl">
                  If you have any questions about this Privacy Policy or our privacy practices,
                  please contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { icon: FaEnvelope, label: "Email Us", value: "privacy@regalforklift.com", href: "mailto:privacy@regalforklift.com" },
                    { icon: FaPhoneAlt, label: "Call Us", value: "+1 (647) 561-0046", href: "tel:+16475610046" },
                    { icon: FaGlobe, label: "Visit Us", value: "211 Wilkinson Road Unit #6, Brampton, ON", href: null },
                    { icon: FaClock, label: "Business Hours", value: "Mon-Sun: 9:00 AM - 9:00 PM", href: null },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#f7942f]/20 flex items-center justify-center group-hover:bg-[#f7942f]/30 transition-all">
                        <item.icon className="text-[#f7942f] text-lg" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-white hover:text-[#f7942f] transition-colors font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;