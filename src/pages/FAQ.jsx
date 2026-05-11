import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPlus, 
  FaMinus, 
  FaSearch, 
  FaGraduationCap, 
  FaCertificate, 
  FaIdCard,
  FaRegClock,
  FaPhoneAlt,
  FaEnvelope,
  FaComments,
  FaCheckCircle,
  FaShieldAlt,
  FaUserFriends,
  FaGlobe,
  FaStar,
  FaHeadset,
  FaBookOpen,
  FaTruck,
  FaTools
} from "react-icons/fa";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqCategories = [
    { id: "all", name: "All Questions", icon: FaStar, color: "from-orange-500 to-red-500" },
    { id: "training", name: "Training", icon: FaGraduationCap, color: "from-blue-500 to-cyan-500" },
    { id: "certification", name: "Certification", icon: FaCertificate, color: "from-green-500 to-emerald-500" },
    { id: "requirements", name: "Requirements", icon: FaIdCard, color: "from-purple-500 to-pink-500" },
    { id: "employment", name: "Employment", icon: FaUserFriends, color: "from-teal-500 to-green-500" },
    { id: "standards", name: "Standards", icon: FaShieldAlt, color: "from-red-500 to-rose-500" },
    { id: "registration", name: "Registration", icon: FaRegClock, color: "from-indigo-500 to-purple-500" },
    { id: "government", name: "Government", icon: FaGlobe, color: "from-amber-500 to-orange-500" }
  ];

  const faqs = [
    {
      id: 1,
      category: "training",
      question: "What should I look for when calling around for training?",
      answer: "You should consider the calibre of the training you will receive. The majority of new operators think that all training institutions teach essentially the same thing and that the only reason prices vary is because institutions belong to various corporations. With regard to the training you are paying for, price comparisons alone only tell you a portion of the story. Do not forget to inquire about the training schedule!",
      longAnswer: "Additionally, ask about: instructor qualifications, hands-on practice time, equipment availability, class size limits, and post-training support. Quality training programs invest in modern equipment and experienced instructors."
    },
    {
      id: 2,
      category: "government",
      question: "Do you work with Social Services, E.I, WSIB, etc.?",
      answer: "Yes, we collaborate with all governmental bodies. For additional information, kindly contact us with your information. We have dedicated staff to help you navigate funding options and sponsorship programs."
    },
    {
      id: 3,
      category: "requirements",
      question: "Do I need a driver's licence or anything else to become a forklift operator?",
      answer: "No, there are no prerequisites to operating a forklift. No driving permit is required. However, we do demand that our students wear safety shoes when they are inside our facility. Steel-toed boots are recommended for the best protection during training."
    },
    {
      id: 4,
      category: "certification",
      question: "Does a forklift certificate expire?",
      answer: "Yes. A practical retraining date of 18 months was specified by the previous CSA Standard B335-04, but this is no longer necessary. Three years from the date of certification is the expiration term specified by the amended CSA Standard B335-15. We recommend recertification every 3 years to stay current with safety standards."
    },
    {
      id: 5,
      category: "employment",
      question: "Do you offer job assistance?",
      answer: "Yes, through our staffing service, we help people find jobs. We employ more new operators than anyone else, and we specialise in forklift operators and general labourers. We provide new operators with the instruction and real-world experience they need to land a job. Our job placement rate is over 85% within 3 months of certification."
    },
    {
      id: 6,
      category: "training",
      question: "What happens if I fail?",
      answer: "Everyone succeeds in Forklift Training! We provide additional training time if you do not successfully complete your practical evaluation on your first day. Until you are able to successfully complete our evaluation, you may plan as much practise time as you require. We offer unlimited retakes at no additional cost."
    },
    {
      id: 7,
      category: "certification",
      question: "Are all certificates and training centres the same?",
      answer: "No. Forklift truck credentials are available everywhere, but few institutions offer comprehensive, in-depth training programmes. Most 'schools' for forklifts simply require a few hours of instruction before issuing a certificate. Some so-called 'schools' don't even attempt to put students on forklifts! These locations are referred to as 'certificate mills' in the forklift industry. They don't follow the CSA Standards. Our company surpasses CSA Standards (B335-15). Keep in mind that while a certificate can help you land an interview, only adequate training and skills can land you a job."
    },
    {
      id: 8,
      category: "requirements",
      question: "What is the minimum age to be able to operate a forklift?",
      answer: "17 years old with parental or legal guardian consent; otherwise, 18 years old. Students under 18 must provide signed consent forms and be accompanied by a parent or guardian during registration."
    },
    {
      id: 9,
      category: "certification",
      question: "What is the difference between a licence and a certificate?",
      answer: "There is no such thing as a forklift licence in Canada or the US. Students who can demonstrate that they can operate a forklift safely are given a forklift certificate. Because it resembles a licence but is not one, it is sometimes called a 'forklift licence.' Government agencies do not grant licences for forklifts; instead, licences are issued by the government."
    },
    {
      id: 10,
      category: "standards",
      question: "What do the Canadian Standards Association (CSA) and Ministry of Labour (MOL) have to do with getting certified on a Forklift?",
      answer: "Forklift schools must adhere to the rules and regulations for training established by the CSA and MOL. The minimal amount of instruction time necessary to become qualified to operate a forklift is included in these guidelines. These standards are met and exceeded by Forklift Training. We make sure you understand safe forklift operation so you can safeguard not just yourself but also those around you."
    },
    {
      id: 11,
      category: "certification",
      question: "I am from another province/country. Is my certificate valid in Ontario?",
      answer: "No, Ontario would not recognise the certificate. Additionally, a forklift certificate you obtained in Ontario might not be recognised in other provinces or countries. We recommend checking with local employers and regulatory bodies about certificate acceptance."
    },
    {
      id: 12,
      category: "registration",
      question: "How can I register for the course?",
      answer: "You can sign up via phone, live chat, email, online, or in person. We offer multiple convenient registration options: Online through our website, Phone: +1 (647) 561-0046, Email: info@regalforklifttrainingschool.com, or Visit our Brampton or Mississauga locations."
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = searchTerm === "" || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { number: "12+", label: "Expert Answers", icon: FaBookOpen, color: "from-blue-500 to-cyan-500" },
    { number: "5000+", label: "Students Trained", icon: FaUserFriends, color: "from-green-500 to-emerald-500" },
    { number: "24/7", label: "Support Available", icon: FaHeadset, color: "from-purple-500 to-pink-500" },
    { number: "100%", label: "Satisfaction Rate", icon: FaCheckCircle, color: "from-orange-500 to-red-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f7942f]/20 backdrop-blur-sm mb-6"
            >
              <FaComments className="text-[#f7942f] text-sm" />
              <span className="text-[#f7942f] font-bold text-sm uppercase tracking-wider">Knowledge Base</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-4"
            >
              Frequently Asked <span className="text-[#f7942f]">Questions</span>
            </motion.h1>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-24 h-1 bg-gradient-to-r from-[#f7942f] to-orange-500 mx-auto rounded-full mb-6"
            ></motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-300 text-base md:text-lg"
            >
              Find answers to common questions about our training programs, certification, and more
            </motion.p>
          </div>
        </div>
    
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-4 md:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-3`}>
                <stat.icon className="text-white text-lg md:text-xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900">{stat.number}</h3>
              <p className="text-xs md:text-sm text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-10"
        >
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search your question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 md:py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#f7942f] focus:ring-2 focus:ring-[#f7942f]/20 transition-all text-sm md:text-base bg-white shadow-md"
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12"
        >
          {faqCategories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 rounded-full font-semibold text-xs md:text-sm transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${category.color} text-white shadow-md`
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <Icon className="text-sm" />
                <span>{category.name}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => {
                const category = faqCategories.find(c => c.id === faq.category);
                const isOpen = openItems[faq.id];
                
                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full text-left p-4 md:p-6 flex justify-between items-start gap-3 hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r ${category.color} text-white`}>
                            <category.icon className="text-xs" />
                            {category.name}
                          </span>
                        </div>
                        <h3 className="text-base md:text-lg font-bold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                      </div>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        isOpen ? 'rotate-45' : ''
                      }`}>
                        {isOpen ? (
                          <FaMinus className="text-white text-xs" />
                        ) : (
                          <FaPlus className="text-white text-xs" />
                        )}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 md:p-6 pt-0 border-t border-gray-100">
                            <div className="flex gap-3 md:gap-4">
                              <div className={`w-1 rounded-full bg-gradient-to-b ${category.color}`}></div>
                              <div className="flex-1 space-y-3">
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                  {faq.answer}
                                </p>
                                {faq.longAnswer && (
                                  <div className="mt-3 p-3 md:p-4 bg-gray-50 rounded-xl">
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                      <span className="font-semibold text-gray-800">💡 Pro Tip:</span> {faq.longAnswer}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <FaSearch className="text-gray-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-500">Try searching with different keywords or browse all categories</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("all");
                }}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-[#f7942f] to-orange-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </div>

        {/* Still Have Questions Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#f7942f] via-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <div className="max-w-3xl mx-auto">
            <FaHeadset className="text-4xl md:text-5xl mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl md:text-3xl font-black mb-3">Still Have Questions?</h2>
            <p className="text-white/90 mb-6 text-sm md:text-base">
              Can't find the answer you're looking for? Our support team is here to help you 24/7.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <a 
                href="tel:+16475610046" 
                className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-white text-[#f7942f] rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm md:text-base"
              >
                <FaPhoneAlt />
                Call Us Now
              </a>
              <a 
                href="mailto:info@regalforklifttrainingschool.com" 
                className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-bold hover:bg-white/30 transition-all duration-300 hover:scale-105 text-sm md:text-base"
              >
                <FaEnvelope />
                Email Support
              </a>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-bold hover:bg-white/30 transition-all duration-300 hover:scale-105 text-sm md:text-base"
              >
                <FaComments />
                Live Chat
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Quick Contact Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            Or visit us at our locations in Brampton & Mississauga | 
            <a href="tel:+16475610046" className="text-[#f7942f] font-semibold hover:underline ml-1"> +1 (647) 561-0046</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;