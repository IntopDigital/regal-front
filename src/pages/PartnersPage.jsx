import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHandshake, 
  FaBuilding, 
  FaUsers, 
  FaTrophy,
  FaStar,
  FaChartLine,
  FaShieldAlt,
  FaGem,
  FaExternalLinkAlt,
  FaSearch,
  FaFilter,
  FaTimes,
  FaIndustry,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBriefcase,
  FaAward,
  FaCheckCircle,
  FaChalkboardTeacher 
} from 'react-icons/fa';

const PartnersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredPartners, setFilteredPartners] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Base URL for logos
  const baseUrl = "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/patner-logo/";
  
  // Partner data array with detailed information
  const partners = [
    { 
      name: "Rajdhani Sweets", 
      url: "https://www.rajdhanisweets.ca/", 
      imgSrc: `${baseUrl}logo_regal_client_1.webp`,
      category: "Food & Beverage",
      description: "Premium Indian sweets and snacks manufacturer with multiple locations across Canada.",
      partnershipSince: "2022",
      trainingCompleted: 45,
      employeesTrained: 120,
      industry: "Food Manufacturing"
    },
    { 
      name: "Canadian Tire", 
      url: "https://www.canadiantire.ca/", 
      imgSrc: `${baseUrl}logo_regal_client_2.webp`,
      category: "Retail",
      description: "One of Canada's largest retail companies offering automotive, hardware, and home goods.",
      partnershipSince: "2021",
      trainingCompleted: 120,
      employeesTrained: 350,
      industry: "Retail & Distribution"
    },
    { 
      name: "Extreme Abrasives", 
      url: "https://www.extremeabrasives.com/", 
      imgSrc: `${baseUrl}logo_regal_client_3.webp`,
      category: "Manufacturing",
      description: "Leading manufacturer of abrasive products and cutting tools.",
      partnershipSince: "2023",
      trainingCompleted: 28,
      employeesTrained: 75,
      industry: "Industrial Manufacturing"
    },
    { 
      name: "GN Logix", 
      url: "https://www.gnlogix.com/", 
      imgSrc: `${baseUrl}logo_regal_client_4.webp`,
      category: "Logistics",
      description: "Supply chain and logistics solutions provider.",
      partnershipSince: "2022",
      trainingCompleted: 35,
      employeesTrained: 95,
      industry: "Logistics & Transportation"
    },
    { 
      name: "Protege Casual", 
      url: "https://protegecasual.com/", 
      imgSrc: `${baseUrl}logo_regal_client_5.webp`,
      category: "Retail",
      description: "Fashion retailer specializing in casual wear and accessories.",
      partnershipSince: "2023",
      trainingCompleted: 18,
      employeesTrained: 45,
      industry: "Retail"
    },
    { 
      name: "Coca Cola", 
      url: "https://www.coca-cola.com/ca/en", 
      imgSrc: `${baseUrl}Regal_forklift_training_logo.png`,
      category: "Beverage",
      description: "Global leader in beverage manufacturing and distribution.",
      partnershipSince: "2020",
      trainingCompleted: 200,
      employeesTrained: 500,
      industry: "Beverage Manufacturing"
    },
    { 
      name: "Adaptall", 
      url: "https://www.adaptall.com/", 
      imgSrc: `${baseUrl}adaptalllogo.png`,
      category: "Manufacturing",
      description: "Manufacturer of hydraulic adapters and fittings.",
      partnershipSince: "2021",
      trainingCompleted: 42,
      employeesTrained: 110,
      industry: "Hydraulic Manufacturing"
    },
    { 
      name: "Amazing Kobotic", 
      url: "https://www.amazingkobotic.com/", 
      imgSrc: `${baseUrl}amazing.png`,
      category: "Technology",
      description: "Innovative robotics and automation solutions provider.",
      partnershipSince: "2023",
      trainingCompleted: 15,
      employeesTrained: 40,
      industry: "Robotics & Automation"
    },
    { 
      name: "Best Import", 
      url: "https://www.bestimport.com/", 
      imgSrc: `${baseUrl}bestimport.png`,
      category: "Import/Export",
      description: "Leading import/export company specializing in global trade.",
      partnershipSince: "2022",
      trainingCompleted: 32,
      employeesTrained: 85,
      industry: "International Trade"
    },
    { 
      name: "BUM Outdoor", 
      url: "https://bumoutdoor.ca/", 
      imgSrc: `${baseUrl}bum.png`,
      category: "Retail",
      description: "Outdoor equipment and apparel retailer.",
      partnershipSince: "2023",
      trainingCompleted: 12,
      employeesTrained: 30,
      industry: "Retail"
    },
    { 
      name: "FSP", 
      url: "https://fspeel.org/", 
      imgSrc: `${baseUrl}fsp.jpg`,
      category: "Education",
      description: "Educational institution focused on skills development.",
      partnershipSince: "2022",
      trainingCompleted: 25,
      employeesTrained: 65,
      industry: "Education"
    },
    { 
      name: "Godspeed", 
      url: "https://godspeedxp.com/", 
      imgSrc: `${baseUrl}godspeed.png`,
      category: "Logistics",
      description: "Express courier and logistics services provider.",
      partnershipSince: "2021",
      trainingCompleted: 38,
      employeesTrained: 100,
      industry: "Logistics"
    },
    { 
      name: "Handi Foods", 
      url: "https://handifoods.com/", 
      imgSrc: `${baseUrl}HandiFoodsLogo.png`,
      category: "Food & Beverage",
      description: "Manufacturer of traditional Indian snacks and sweets.",
      partnershipSince: "2022",
      trainingCompleted: 30,
      employeesTrained: 80,
      industry: "Food Manufacturing"
    },
    { 
      name: "Magna", 
      url: "https://www.magna.com/", 
      imgSrc: `${baseUrl}magna.png`,
      category: "Automotive",
      description: "Global automotive supplier and manufacturer.",
      partnershipSince: "2020",
      trainingCompleted: 150,
      employeesTrained: 400,
      industry: "Automotive Manufacturing"
    },
    { 
      name: "MCL Green", 
      url: "https://mclgreen.com/", 
      imgSrc: `${baseUrl}MCL_Green_Logo.png`,
      category: "Environmental",
      description: "Sustainable solutions and green technology provider.",
      partnershipSince: "2023",
      trainingCompleted: 20,
      employeesTrained: 55,
      industry: "Environmental Services"
    },
    { 
      name: "Peel Career", 
      url: "https://www.peelcareer.com/", 
      imgSrc: `${baseUrl}pcas.jpg`,
      category: "Education",
      description: "Career counseling and employment services organization.",
      partnershipSince: "2021",
      trainingCompleted: 55,
      employeesTrained: 140,
      industry: "Employment Services"
    },
    { 
      name: "Quantrix", 
      url: "https://quantrix.com/", 
      imgSrc: `${baseUrl}quantrixlogo.png`,
      category: "Technology",
      description: "Financial modeling and analytics software company.",
      partnershipSince: "2023",
      trainingCompleted: 10,
      employeesTrained: 25,
      industry: "Software"
    },
    { 
      name: "Remco", 
      url: "https://www.remco.ca/", 
      imgSrc: `${baseUrl}remko.JPG`,
      category: "Manufacturing",
      description: "Manufacturer of industrial equipment and machinery.",
      partnershipSince: "2021",
      trainingCompleted: 48,
      employeesTrained: 125,
      industry: "Industrial Equipment"
    },
    { 
      name: "Westaff", 
      url: "https://westaffcanada.com/", 
      imgSrc: `${baseUrl}westaff.png`,
      category: "Staffing",
      description: "Staffing and recruitment agency specializing in industrial placements.",
      partnershipSince: "2022",
      trainingCompleted: 65,
      employeesTrained: 170,
      industry: "Staffing & Recruitment"
    },
    { 
      name: "YMCA", 
      url: "https://www.ymcagta.org/", 
      imgSrc: `${baseUrl}ygrater.png`,
      category: "Non-Profit",
      description: "Community service organization focused on youth development and employment.",
      partnershipSince: "2021",
      trainingCompleted: 40,
      employeesTrained: 100,
      industry: "Community Services"
    },
    { 
      name: "Hydraux", 
      url: "https://www.hydraux.com/", 
      imgSrc: `${baseUrl}hydraux.jpeg`,
      category: "Manufacturing",
      description: "Hydraulic systems and components manufacturer.",
      partnershipSince: "2022",
      trainingCompleted: 22,
      employeesTrained: 60,
      industry: "Hydraulic Systems"
    },
    { 
      name: "Telecor", 
      url: "https://www.linkedin.com/company/telecor-inc-/?originalSubdomain=ca", 
      imgSrc: `${baseUrl}telecor.jpeg`,
      category: "Telecommunications",
      description: "Telecommunications equipment and solutions provider.",
      partnershipSince: "2023",
      trainingCompleted: 15,
      employeesTrained: 40,
      industry: "Telecommunications"
    },
    { 
      name: "Nationex", 
      url: "https://nationex.com/en/", 
      imgSrc: `${baseUrl}nationex.jpg`,
      category: "Logistics",
      description: "Courier and logistics services across Canada.",
      partnershipSince: "2022",
      trainingCompleted: 35,
      employeesTrained: 90,
      industry: "Courier Services"
    },
    { 
      name: "Job Skills", 
      url: "https://www.jobskills.org/", 
      imgSrc: `${baseUrl}jobskills.png`,
      category: "Education",
      description: "Employment and skills training organization.",
      partnershipSince: "2021",
      trainingCompleted: 50,
      employeesTrained: 130,
      industry: "Employment Training"
    },
    { 
      name: "Achev", 
      url: "https://achev.ca/", 
      imgSrc: `${baseUrl}Achev.webp`,
      category: "Education",
      description: "Career and employment support services.",
      partnershipSince: "2022",
      trainingCompleted: 38,
      employeesTrained: 95,
      industry: "Employment Services"
    },
    { 
      name: "Career Foundation", 
      url: "https://careerfoundation.com/", 
      imgSrc: `${baseUrl}Career Foundation.png`,
      category: "Non-Profit",
      description: "Non-profit organization connecting job seekers with employers.",
      partnershipSince: "2021",
      trainingCompleted: 45,
      employeesTrained: 120,
      industry: "Employment Services"
    },
    { 
      name: "Metro linx", 
      url: "https://www.metrolinx.com/en", 
      imgSrc: `${baseUrl}metrolinx.png`,
      category: "Transportation",
      description: "Regional transportation authority for the Greater Toronto Area.",
      partnershipSince: "2020",
      trainingCompleted: 80,
      employeesTrained: 200,
      industry: "Public Transportation"
    },
    { 
      name: "Orlando Furniture mart", 
      url: "https://orlandofurnituremart.com/", 
      imgSrc: `${baseUrl}orlando.png`,
      category: "Retail",
      description: "Furniture retail store with warehouse operations.",
      partnershipSince: "2023",
      trainingCompleted: 12,
      employeesTrained: 35,
      industry: "Retail Furniture"
    },
    { 
      name: "Real Aloy", 
      url: "https://realalloy.com/", 
      imgSrc: `${baseUrl}realaloy.jpg`,
      category: "Manufacturing",
      description: "Aluminum recycling and specialty alloys manufacturer.",
      partnershipSince: "2022",
      trainingCompleted: 28,
      employeesTrained: 75,
      industry: "Metal Manufacturing"
    },
    { 
      name: "Sinca Inc", 
      url: "https://sinca.ca/", 
      imgSrc: `${baseUrl}sincainc.JPG`,
      category: "Manufacturing",
      description: "Industrial manufacturing and engineering services.",
      partnershipSince: "2023",
      trainingCompleted: 18,
      employeesTrained: 50,
      industry: "Industrial Manufacturing"
    }
  ];

  // Get unique categories
  const categories = ['all', ...new Set(partners.map(p => p.category))];

  // Filter partners based on search and category
  useEffect(() => {
    let filtered = partners;
    
    if (searchTerm) {
      filtered = filtered.filter(partner =>
        partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        partner.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        partner.industry.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(partner => partner.category === selectedCategory);
    }
    
    setFilteredPartners(filtered);
  }, [searchTerm, selectedCategory]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  // Stats
  const totalPartners = partners.length;
  const totalTrained = partners.reduce((sum, p) => sum + p.trainingCompleted, 0);
  const totalEmployees = partners.reduce((sum, p) => sum + p.employeesTrained, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#f7942f]/20 backdrop-blur-sm mb-6">
            <FaHandshake className="text-[#f7942f] text-sm" />
            <span className="text-[#f7942f] font-bold text-sm uppercase tracking-wider">Our Partners</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Our Trusted <span className="text-[#f7942f]">Partners</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#f7942f] to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            We're proud to partner with leading organizations across Canada for in-house forklift training
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-center p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl"
            >
              <FaBuilding className="text-4xl text-[#f7942f] mx-auto mb-3" />
              <div className="text-3xl font-black text-gray-800">{totalPartners}+</div>
              <div className="text-gray-600 font-medium">Corporate Partners</div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl"
            >
              <FaUsers className="text-4xl text-[#f7942f] mx-auto mb-3" />
              <div className="text-3xl font-black text-gray-800">{totalEmployees}+</div>
              <div className="text-gray-600 font-medium">Employees Trained</div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl"
            >
              <FaTrophy className="text-4xl text-[#f7942f] mx-auto mb-3" />
              <div className="text-3xl font-black text-gray-800">{totalTrained}+</div>
              <div className="text-gray-600 font-medium">Training Programs</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* In-House Training Explanation */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#f7942f] to-orange-500 flex items-center justify-center flex-shrink-0">
                <FaChalkboardTeacher className="text-white text-xl" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Our In-House Training Partners</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Regal Forklift Training School is proud to partner with these industry-leading organizations to provide 
                  comprehensive, on-site forklift training and certification programs. Our in-house training solutions are 
                  customized to meet the specific needs of each partner, ensuring safety compliance and operational excellence.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From manufacturing facilities to distribution centers, we've helped hundreds of organizations train 
                  thousands of forklift operators across Canada. Click on any partner to learn more about our collaboration.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-2xl shadow-lg p-6 mb-8"
          >
            <div className="flex flex-col md:flex-row justify-between gap-4">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all text-sm whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-[#f7942f] text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category === 'all' ? 'All Partners' : category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Partners Grid */}
          {filteredPartners.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  variants={fadeInUp}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  {/* Logo Container */}
                  <div className="h-36 bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-center p-6 border-b border-gray-100">
                    <img
                      src={partner.imgSrc}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = "https://placehold.co/200x120/e2e8f0/64748b?text=Logo";
                      }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#f7942f] transition-colors">
                        {partner.name}
                      </h3>
                      <span className="px-2 py-1 bg-[#f7942f]/10 text-[#f7942f] text-xs font-semibold rounded-full">
                        {partner.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {partner.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <FaCalendarAlt className="text-[#f7942f]" />
                        <span>Partner Since: {partner.partnershipSince}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <FaBriefcase className="text-[#f7942f]" />
                        <span>Industry: {partner.industry}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <FaUsers className="text-[#f7942f]" />
                        <span>{partner.employeesTrained}+ Employees Trained</span>
                      </div>
                    </div>
                    
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#f7942f] font-semibold text-sm hover:text-orange-600 transition-colors group-hover:gap-3"
                    >
                      Visit Website <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-center py-12 bg-white rounded-2xl shadow-lg"
            >
              <FaSearch className="text-5xl text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-700 mb-2">No Partners Found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}

          {/* Why Partner With Us Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                <FaHandshake className="text-[#f7942f]" />
                Why Organizations Choose Regal Forklift
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#f7942f] text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Certified Instructors</h4>
                    <p className="text-gray-300 text-sm">All our trainers are fully certified with years of industry experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#f7942f] text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Flexible Scheduling</h4>
                    <p className="text-gray-300 text-sm">On-site training at your convenience, 7 days a week</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#f7942f] text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Compliance Guaranteed</h4>
                    <p className="text-gray-300 text-sm">Training meets all CSA and OHSA standards</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mt-8 text-center"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Become a Partner</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Interested in providing forklift training for your organization? Contact us to discuss customized training solutions.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-6 py-3 bg-[#f7942f] text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors inline-flex items-center gap-2"
                >
                  <FaHandshake /> Contact Our Partnership Team
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3 border border-[#f7942f] text-[#f7942f] font-semibold rounded-xl hover:bg-[#f7942f]/10 transition-colors"
                >
                  Learn About Corporate Training
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;