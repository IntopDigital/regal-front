import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBriefcase, 
  FaMapMarkerAlt, 
  FaClock, 
  FaDollarSign,
  FaGraduationCap,
  FaRegBuilding,
  FaUsers,
  FaRocket,
  FaHeart,
  FaLeaf,
  FaHandshake,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaUserTie,
  FaWrench,
  FaHeadset,
  FaTruck,
  FaCheckCircle,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaArrowRight,
  FaFilter,
  FaTimes,
  FaSearch,
  FaStar,
  FaAward,
  FaChartLine
} from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Job openings data
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Forklift Instructor",
      department: "Training",
      location: "Brampton, ON",
      type: "Full-time",
      experience: "3-5 years",
      salary: "$55,000 - $70,000",
      posted: "2026-01-15",
      description: "We are seeking an experienced forklift instructor to lead our training programs. The ideal candidate will have extensive knowledge of forklift operations and safety regulations.",
      requirements: [
        "Valid forklift instructor certification",
        "3+ years of training experience",
        "Excellent communication skills",
        "Knowledge of OSHA/CSA standards",
        "First aid certification preferred"
      ],
      responsibilities: [
        "Conduct theoretical and practical training sessions",
        "Evaluate student performance and provide feedback",
        "Maintain training equipment and materials",
        "Update curriculum according to latest standards",
        "Prepare certification documentation"
      ],
      benefits: [
        "Competitive salary",
        "Health benefits",
        "Paid time off",
        "Professional development opportunities"
      ]
    },
    {
      id: 2,
      title: "Operations Manager",
      department: "Operations",
      location: "Brampton, ON",
      type: "Full-time",
      experience: "5-7 years",
      salary: "$70,000 - $90,000",
      posted: "2026-01-10",
      description: "Lead our daily operations and ensure smooth delivery of training services across all locations.",
      requirements: [
        "Bachelor's degree in Business Administration",
        "5+ years of operations management experience",
        "Strong leadership and organizational skills",
        "Experience in training industry preferred",
        "Excellent problem-solving abilities"
      ],
      responsibilities: [
        "Oversee daily operations of training centers",
        "Manage instructor schedules and resources",
        "Develop operational policies and procedures",
        "Monitor performance metrics and KPIs",
        "Coordinate with sales and marketing teams"
      ],
      benefits: [
        "Performance bonuses",
        "Health and dental insurance",
        "Retirement plan",
        "Company vehicle allowance"
      ]
    },
    {
      id: 3,
      title: "Customer Support Specialist",
      department: "Customer Service",
      location: "Brampton, ON",
      type: "Full-time",
      experience: "1-3 years",
      salary: "$35,000 - $45,000",
      posted: "2026-01-05",
      description: "Join our customer support team to assist students and clients with inquiries, registrations, and certification needs.",
      requirements: [
        "Excellent verbal and written communication",
        "Customer service experience",
        "Proficient in MS Office and CRM software",
        "Problem-solving skills",
        "Multilingual is a plus"
      ],
      responsibilities: [
        "Respond to customer inquiries via phone, email, and chat",
        "Process registrations and payments",
        "Maintain customer records",
        "Resolve complaints and issues",
        "Provide information about courses and certifications"
      ],
      benefits: [
        "Flexible work hours",
        "Health benefits after 3 months",
        "Paid training",
        "Career advancement opportunities"
      ]
    },
    {
      id: 4,
      title: "Marketing Coordinator",
      department: "Marketing",
      location: "Brampton, ON",
      type: "Full-time",
      experience: "2-4 years",
      salary: "$45,000 - $55,000",
      posted: "2026-01-08",
      description: "Drive our marketing efforts including social media, content creation, and campaign management.",
      requirements: [
        "Bachelor's degree in Marketing or related field",
        "2+ years of marketing experience",
        "Social media management skills",
        "Content creation abilities",
        "Analytical mindset"
      ],
      responsibilities: [
        "Manage social media accounts",
        "Create marketing content and materials",
        "Analyze campaign performance",
        "Coordinate with external agencies",
        "Organize promotional events"
      ],
      benefits: [
        "Creative work environment",
        "Professional development budget",
        "Flexible schedule",
        "Performance bonuses"
      ]
    },
    {
      id: 5,
      title: "Equipment Maintenance Technician",
      department: "Maintenance",
      location: "Brampton, ON",
      type: "Full-time",
      experience: "2-5 years",
      salary: "$45,000 - $60,000",
      posted: "2026-01-12",
      description: "Maintain and repair training forklifts and equipment to ensure safety and operational readiness.",
      requirements: [
        "Forklift maintenance certification",
        "Mechanical aptitude",
        "Knowledge of hydraulic and electrical systems",
        "Safety-first mindset",
        "Valid driver's license"
      ],
      responsibilities: [
        "Perform routine maintenance on training equipment",
        "Diagnose and repair mechanical issues",
        "Maintain maintenance records",
        "Ensure equipment safety compliance",
        "Order replacement parts when needed"
      ],
      benefits: [
        "Tool allowance",
        "Health benefits",
        "Overtime opportunities",
        "Training certification support"
      ]
    },
    {
      id: 6,
      title: "Administrative Assistant",
      department: "Administration",
      location: "Brampton, ON",
      type: "Part-time",
      experience: "1-2 years",
      salary: "$20 - $25 per hour",
      posted: "2026-01-14",
      description: "Support daily office operations including scheduling, documentation, and student coordination.",
      requirements: [
        "High school diploma required",
        "Office administration experience",
        "Proficient in Google Workspace/MS Office",
        "Organizational skills",
        "Professional demeanor"
      ],
      responsibilities: [
        "Answer phones and greet visitors",
        "Schedule classes and appointments",
        "Process documentation",
        "Maintain office supplies",
        "Assist with student registration"
      ],
      benefits: [
        "Flexible hours",
        "Skill development courses",
        "Friendly work environment",
        "Potential for full-time position"
      ]
    }
  ];

  // Filter jobs based on department and search
  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  const departments = ['all', 'Training', 'Operations', 'Customer Service', 'Marketing', 'Maintenance', 'Administration'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    // Handle form submission here (API call)
    console.log('Application submitted:', formData);
    setApplicationSubmitted(true);
    setTimeout(() => setApplicationSubmitted(false), 5000);
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      coverLetter: '',
      resume: null
    });
    setSelectedJob(null);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const stats = [
    { icon: FaUsers, value: "30000+", label: "Students Trained", color: "from-orange-400 to-orange-600" },
    { icon: FaAward, value: "98%", label: "Pass Rate", color: "from-green-400 to-green-600" },
    { icon: FaChartLine, value: "50+", label: "Corporate Clients", color: "from-blue-400 to-blue-600" },
    { icon: FaStar, value: "5", label: "Customer Rating", color: "from-yellow-400 to-yellow-600" }
  ];

  const values = [
    { icon: FaHandshake, title: "Integrity", description: "We operate with honesty and transparency in all our dealings." },
    { icon: FaRocket, title: "Excellence", description: "We strive for the highest standards in training and service." },
    { icon: FaUsers, title: "Respect", description: "We value diversity and treat everyone with dignity." },
    { icon: FaHeart, title: "Safety First", description: "Safety is at the core of everything we do." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#f7942f]/20 backdrop-blur-sm mb-6">
            <FaBriefcase className="text-[#f7942f] text-sm" />
            <span className="text-[#f7942f] font-bold text-sm uppercase tracking-wider">Join Our Team</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4">
            Careers at <span className="text-[#f7942f]">Regal Forklift</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#f7942f] to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Build your career with Canada's leading forklift training institution
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Join <span className="text-[#f7942f]">Regal Forklift?</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#f7942f] to-orange-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600">We're committed to creating an environment where our team members can grow, thrive, and make a meaningful impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <stat.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-3xl font-black text-gray-800">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#f7942f] to-orange-600 rounded-2xl p-8 text-white"
            >
              <FaRegBuilding className="text-4xl mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-3">Growth Opportunities</h3>
              <p className="opacity-90 leading-relaxed">
                We believe in investing in our people. From ongoing training programs to leadership development, 
                we provide the tools and support you need to advance your career.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white"
            >
              <FaHandshake className="text-4xl mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-3">Supportive Culture</h3>
              <p className="opacity-90 leading-relaxed">
                Join a team that celebrates diversity, encourages collaboration, and recognizes hard work. 
                Your ideas matter here, and your contributions make a difference.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-6xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core <span className="text-[#f7942f]">Values</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#f7942f] to-orange-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600">These principles guide everything we do at Regal Forklift</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 rounded-full bg-[#f7942f]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#f7942f]/20 transition-all">
                  <value.icon className="text-2xl text-[#f7942f]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-6xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Open <span className="text-[#f7942f]">Positions</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#f7942f] to-orange-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600">Find your perfect role and join our growing team</p>
          </div>

          {/* Filters */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="flex flex-wrap gap-3 justify-center mb-4">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedDepartment === dept
                      ? 'bg-[#f7942f] text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {dept === 'all' ? 'All Departments' : dept}
                </button>
              ))}
            </div>
            
            <div className="relative max-w-md mx-auto">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f7942f] focus:border-transparent"
              />
            </div>
          </div>

          {/* Job Listings */}
          <div className="max-w-6xl mx-auto space-y-4">
            <AnimatePresence>
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer group"
                    onClick={() => setSelectedJob(job)}
                  >
                    <div className="flex flex-wrap justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#f7942f] transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 mt-2">
                          <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                            <FaRegBuilding className="text-[#f7942f]" />
                            {job.department}
                          </span>
                          <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                            <FaMapMarkerAlt className="text-[#f7942f]" />
                            {job.location}
                          </span>
                          <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                            <FaClock className="text-[#f7942f]" />
                            {job.type}
                          </span>
                          <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                            <FaDollarSign className="text-[#f7942f]" />
                            {job.salary}
                          </span>
                        </div>
                        <p className="text-gray-600 mt-3 line-clamp-2">{job.description}</p>
                      </div>
                      <button className="px-6 py-2 bg-[#f7942f] text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors inline-flex items-center gap-2 group-hover:shadow-md">
                        Apply Now <FaArrowRight className="text-sm" />
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  className="text-center py-12"
                >
                  <p className="text-gray-500 text-lg">No positions found matching your criteria.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">Apply for {selectedJob.title}</h3>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="p-6">
                <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-2">Job Details</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div><span className="text-gray-500">Department:</span> {selectedJob.department}</div>
                    <div><span className="text-gray-500">Location:</span> {selectedJob.location}</div>
                    <div><span className="text-gray-500">Type:</span> {selectedJob.type}</div>
                    <div><span className="text-gray-500">Salary:</span> {selectedJob.salary}</div>
                  </div>
                </div>

                {applicationSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCheckCircle className="text-green-600 text-3xl" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Application Submitted!</h4>
                    <p className="text-gray-600">Thank you for your interest. We'll review your application and get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitApplication} className="space-y-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f7942f]"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f7942f]"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f7942f]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Years of Experience *</label>
                      <select
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f7942f]"
                      >
                        <option value="">Select experience</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5+">5+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Cover Letter</label>
                      <textarea
                        name="coverLetter"
                        rows="4"
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f7942f]"
                        placeholder="Tell us why you're interested in this position..."
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Resume/CV *</label>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        required
                        accept=".pdf,.doc,.docx"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f7942f] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#f7942f] file:text-white hover:file:bg-orange-600"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-[#f7942f] to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                    >
                      Submit Application
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CareersPage;