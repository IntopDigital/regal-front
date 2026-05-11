import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { 
  FaBook, 
  FaGavel, 
  FaExclamationTriangle, 
  FaShieldAlt, 
  FaUserCheck, 
  FaWalking,
  FaTruck,
  FaBalanceScale,
  FaCubes,
  FaBoxes,
  FaBatteryFull,
  FaFireAlt,
  FaClipboardList,
  FaHands,
  FaShip,
  FaPlug,
  FaRuler,
  FaChartLine,
  FaWrench,
  FaParking,
  FaGraduationCap,
  FaCheckCircle
} from "react-icons/fa";

const WhatYouLearn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const theoryTopics = [
    { icon: FaGavel, title: "Applicable legislation and guidelines", color: "from-blue-500 to-blue-600" },
    { icon: FaExclamationTriangle, title: "Causes of accidents", color: "from-red-500 to-red-600" },
    { icon: FaShieldAlt, title: "Safety awareness", color: "from-green-500 to-green-600" },
    { icon: FaUserCheck, title: "Operator responsibility", color: "from-purple-500 to-purple-600" },
    { icon: FaWalking, title: "Pedestrian awareness", color: "from-yellow-500 to-orange-500" },
    { icon: FaTruck, title: "Types of trucks", color: "from-indigo-500 to-indigo-600" },
    { icon: FaBalanceScale, title: "Stability principles", color: "from-cyan-500 to-cyan-600" },
    { icon: FaChartLine, title: "Capacity principles", color: "from-emerald-500 to-emerald-600" },
    { icon: FaRuler, title: "Load centers", color: "from-pink-500 to-pink-600" },
    { icon: FaCubes, title: "Attachments", color: "from-teal-500 to-teal-600" },
    { icon: FaBatteryFull, title: "Power sources (battery and propane)", color: "from-lime-500 to-lime-600" },
    { icon: FaClipboardList, title: "Preoperational inspection", color: "from-amber-500 to-amber-600" },
    { icon: FaHands, title: "Safe operating procedures", color: "from-sky-500 to-sky-600" },
    { icon: FaShip, title: "Dock safety", color: "from-violet-500 to-violet-600" }
  ];

  const practicalTopics = [
    { icon: FaClipboardList, title: "Preoperational inspection", color: "from-blue-500 to-blue-600" },
    { icon: FaBatteryFull, title: "Battery charging and maintenance / propane exchange", color: "from-green-500 to-green-600" },
    { icon: FaUserCheck, title: "Harness donning (for order pickers and turret trucks)", color: "from-purple-500 to-purple-600" },
    { icon: FaTruck, title: "Maneuvering", color: "from-orange-500 to-orange-600" },
    { icon: FaBoxes, title: "Stacking / unstacking", color: "from-red-500 to-red-600" },
    { icon: FaCubes, title: "Load handling", color: "from-teal-500 to-teal-600" },
    { icon: FaShip, title: "Dock safety", color: "from-cyan-500 to-cyan-600" },
    { icon: FaParking, title: "Parking / shut-down", color: "from-amber-500 to-amber-600" }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({ 
      opacity: 1, 
      x: 0, 
      transition: { delay: i * 0.05, duration: 0.4 } 
    })
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#f7942f]/10 text-[#f7942f] font-bold text-sm uppercase tracking-wide mb-4">
            <FaGraduationCap className="text-sm" />
            <span>Learning Path</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            What You'll <span className="text-[#f7942f]">Learn</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#f7942f] to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive training program covering theoretical knowledge and practical skills
          </p>
        </div>

        {/* Theory Section */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
              <FaBook className="text-white text-xl" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-gray-900">Theory</h3>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-200 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {theoryTopics.map((topic, index) => {
              const IconComponent = topic.icon;
              return (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${topic.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-white text-sm" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm flex-1">{topic.title}</span>
                    <FaCheckCircle className="text-[#f7942f] text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Practical Section */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center shadow-lg">
              <FaWrench className="text-white text-xl" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-gray-900">Practical</h3>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-green-200 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {practicalTopics.map((topic, index) => {
              const IconComponent = topic.icon;
              return (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={itemVariants}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="group"
                >
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${topic.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-white text-sm" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm flex-1">{topic.title}</span>
                    <FaCheckCircle className="text-[#f7942f] text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#f7942f]/10 to-orange-500/10 rounded-full">
            <span className="text-[#f7942f] font-bold">✓</span>
            <span className="text-gray-700 font-medium">Industry-recognized certification upon completion</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouLearn;