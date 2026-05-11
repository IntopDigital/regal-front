import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaBalanceScale,
  FaArrowRight,
  FaWarehouse,
  FaBoxes,
  FaClipboardList,
  FaShieldAlt,
  FaTachometerAlt,
  FaCogs,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "COUNTER BALANCE",
      tagline: "Power & Stability for Heavy Loads",
      description:
        "Counterbalance forklifts – also called a counterbalance forklift truck – operate much like a crane does. The name comes from the weight on the back end of the vehicle that acts as a counterweight for any loads picked up with the front forks. This balancing method allows the machine to pick up and move heavier loads than if the weight wasn't there.",
      description2:
        "Counterbalance forklifts are often used for heavy operational purposes because of this additional measure. The cabs are fitted for sit down or stand up operation and are often used in loading docks and warehouses.",
      features: [
        "Load capacity up to 50,000 lbs",
        "Sit-down or stand-up operation options",
        "Ideal for loading docks and warehouses",
        "Excellent stability for heavy loads",
      ],
      imageUrl:
        "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/servise/service-counter-balance.png",
      icon: FaBalanceScale,
      bgGradient: "from-gray-900 via-gray-800 to-gray-900",
      textColor: "white",
      accentColor: "from-orange-500 to-red-500",
    },
    {
      id: 2,
      title: "REACH FORKLIFT",
      tagline: "Navigate Narrow Aisles with Ease",
      description:
        "Reach Forklifts are forklifts used in narrow aisle applications, such as warehouses. They are designed to have two outer legs that help distribute the load and a single set of wheels in the back. The wheels are located below the operator, which helps create a tighter turn radius. This allows operators to navigate smaller spaces, and still be able to reach higher racking.",
      description2:
        "Making your aisles taller and more narrow is a good way to create more space when your warehouse becomes cramped, but it can also make navigation and material handling difficult. Reach forklifts solve this challenge with their unique design.",
      features: [
        "Tighter turn radius for narrow aisles",
        "Extended reach up to 40 feet high",
        "Excellent visibility for operator",
        "Reduced aisle width requirements",
      ],
      imageUrl:
        "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/servise/service-reach-forklift.png",
      icon: FaArrowRight,
      bgGradient: "from-white via-gray-50 to-white",
      textColor: "gray-900",
      accentColor: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "DOCK STOCKER",
      tagline: "Quick Unloading & Efficient Transport",
      description:
        "Dock stockers are a type of stand-up electric counterbalanced forklifts that are well-suited for quickly unloading trailers and transporting pallets to a loading stage where sit-down counterbalanced forklifts or reach trucks can place them onto racks or transport them wherever they are needed.",
      description2:
        "A Dock stocker is a type of counterbalanced truck in which the operator can either sit down or stand up while operating the machine. This lift is weighed down in the same fashion as the Counterbalance with weight in the back of the lift to counter the load on the forks at the front.",
      features: [
        "Electric operation for indoor use",
        "Quick trailer unloading capability",
        "Stand-up or sit-down options",
        "Ideal for loading dock operations",
      ],
      imageUrl:
        "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/servise/service-dock-stocker.png",
      icon: FaWarehouse,
      bgGradient: "from-slate-900 via-slate-800 to-slate-900",
      textColor: "white",
      accentColor: "from-teal-500 to-green-500",
    },
    {
      id: 4,
      title: "ORDER PICKER",
      tagline: "Precision Picking at Any Height",
      description:
        "An order picker is an appropriate lift truck for any operation that deals with many SKUs and not a lot of quantity of any particular SKU number. The order picker is not suited for tasks such as: unit load picking, or right angle stacking, and transportation for long travel distances.",
      description2:
        "As order pickers are mostly operated at elevated heights, all operators are required to wear a harness while operating any order picker at any height and it is important that operators are properly trained on maneuvering of these trucks. Safety is our top priority.",
      features: [
        "Operator platform elevates with load",
        "Safety harness required for operation",
        "Perfect for multi-SKU warehouses",
        "Ergonomic controls for all-day use",
      ],
      imageUrl:
        "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/servise/service-order-picker.png",
      icon: FaClipboardList,
      bgGradient: "from-white via-gray-50 to-white",
      textColor: "gray-900",
      accentColor: "from-purple-500 to-pink-500",
    },
    {
      id: 5,
      title: "WALKIE",
      tagline: "Efficient Pallet Transportation Electric Pallet Truck",
      description:
        "Also known as an Electric Pallet Truck, Walkies are designed to have the operator walk behind the truck. The machine is motorized and is therefore able to lift heavier pallets, maneuver in small spaces, and move all pallets more efficiently.",
      description2:
        "These lifts are controlled using a hand throttle giving the operator the ability to move them forward and backward, as well as stop the machine quickly. There are a variety of different types of walkies, some of which have a platform for the operator to stand on. There are also Double Walkie trucks which have extended forks allowing operators to transport two pallets at once.",
      features: [
        "Walk-behind or ride-on options",
        "Double walkie available for two pallets",
        "Compact design for tight spaces",
        "Battery-powered for indoor use",
      ],
      imageUrl:
        "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/servise/service-walkei.png",
      icon: FaBoxes,
      bgGradient: "from-gray-900 via-gray-800 to-gray-900",
      textColor: "white",
      accentColor: "from-amber-500 to-orange-500",
    },
    {
      id: 6,
      title: "FALL PROTECTION",
      tagline: "Safety First - Comprehensive Training",
      description:
        "This course is designed for participants who work, plan, or supervise work areas where fall protection is required. Participants will learn the different types of fall protection, how to identify and control fall hazards, how to complete fall protection safe work plans, and how to select, inspect, and fit full body harnesses.",
      description2:
        "The course includes hands-on training and certification that meets all regulatory requirements for workplace safety. Our certified instructors provide real-world scenarios and practical demonstrations to ensure complete understanding of fall protection systems.",
      features: [
        "OSHA-compliant certification",
        "Hands-on harness fitting training",
        "Hazard identification workshop",
        "Annual recertification available",
      ],
      imageUrl:
        "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/servise/service-fall-protection.png",
      icon: FaShieldAlt,
      bgGradient: "from-white via-gray-50 to-white",
      textColor: "gray-900",
      accentColor: "from-red-500 to-rose-500",
    },
  ];

  // Fade-up animation variant
  const fadeUpVariant = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  // Stagger children animation
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Image zoom animation
  const imageZoomVariant = {
    hidden: {
      opacity: 0,
      scale: 0.7,
      rotate: -5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const ServiceCard = ({ service, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    // Alternate direction - left side images on odd, right side on even
    const isImageLeft = index % 2 === 0;

    return (
      <motion.div
        ref={ref}
        variants={fadeUpVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`mb-24 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl ${
          service.textColor === "white"
            ? `bg-gradient-to-br ${service.bgGradient}`
            : `bg-gradient-to-br ${service.bgGradient} border border-gray-200`
        }`}
      >
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div
            className={`flex flex-col ${isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
          >
            {/* Image Section with Zoom Animation */}
            <motion.div
              variants={imageZoomVariant}
              className="w-full lg:w-1/2 group relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <div className="h-[28rem] overflow-hidden rounded-2xl">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>

                {/* Floating Icon Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                  className={`absolute -bottom-5 -right-5 w-20 h-20 rounded-2xl bg-gradient-to-r ${service.accentColor} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 group-hover:rotate-12`}
                >
                  <service.icon className="text-white text-3xl" />
                </motion.div>

                {/* Stats Badge */}
                
              </div>
            </motion.div>

            {/* Text Section with Stagger Animation */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="w-full lg:w-1/2 space-y-5 p-4 md:p-6"
            >
              {/* Tagline */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: isImageLeft ? 30 : -30 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
                className="inline-flex items-center gap-2"
              >
                <div
                  className={`w-8 h-1 rounded-full bg-gradient-to-r ${service.accentColor}`}
                ></div>
                <p
                  className={`text-sm font-bold uppercase tracking-wider ${service.textColor === "white" ? "text-orange-400" : "text-orange-500"}`}
                >
                  {service.tagline}
                </p>
              </motion.div>

              {/* Title */}
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.1 },
                  },
                }}
                className={`text-3xl md:text-4xl lg:text-5xl font-black ${
                  service.textColor === "white" ? "text-white" : "text-gray-900"
                } relative inline-block`}
              >
                {service.title}
                <div
                  className={`absolute -bottom-3 left-0 w-16 h-1 bg-gradient-to-r ${service.accentColor} rounded-full`}
                ></div>
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.2 },
                  },
                }}
                className={`text-base md:text-lg leading-relaxed ${
                  service.textColor === "white"
                    ? "text-gray-300"
                    : "text-gray-600"
                }`}
              >
                {service.description}
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: 0.3 },
                  },
                }}
                className={`text-base md:text-lg leading-relaxed ${
                  service.textColor === "white"
                    ? "text-gray-300"
                    : "text-gray-600"
                }`}
              >
                {service.description2}
              </motion.p>

              {/* Features List */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
                  },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4"
              >
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="flex items-center gap-2"
                  >
                    <FaCheckCircle
                      className={`text-sm ${service.textColor === "white" ? "text-orange-400" : "text-orange-500"} flex-shrink-0`}
                    />
                    <span
                      className={`text-sm ${service.textColor === "white" ? "text-gray-300" : "text-gray-600"}`}
                    >
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Rating Badge */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 0.7 } },
                }}
                className="flex items-center gap-3 pt-2"
              >
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section with Parallax Effect */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-32 mb-8">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f7942f]/20 backdrop-blur-sm mb-6">
              <FaCogs className="text-[#f7942f] text-sm" />
              <span className="text-[#f7942f] font-bold text-sm uppercase tracking-wider">
                Premium Services
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4">
              Our <span className="text-[#f7942f]">Services</span>
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#f7942f] to-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto px-4">
              Comprehensive material handling solutions tailored to your needs.
              From equipment sales to safety training, we've got you covered.
            </p>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 opacity-20 hidden lg:block"
        >
          <FaTachometerAlt className="text-6xl text-white" />
        </motion.div>
      </div>

      {/* Services Sections */}
      <div className="container mx-auto px-4">
        {servicesData.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
