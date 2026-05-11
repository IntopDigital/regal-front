import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaNewspaper, 
  FaCalendarAlt, 
  FaUser, 
  FaTag, 
  FaShareAlt,
  FaSearch,
  FaArrowRight,
  FaRegClock,
  FaEye,
  FaThumbsUp,
  FaComment,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaGem,
  FaChevronLeft,
  FaChevronRight,
  FaAward,
  FaCertificate,
  FaTrophy,
  FaRegCalendar
} from 'react-icons/fa';
import { MdOutlineEvent } from 'react-icons/md';

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNews, setSelectedNews] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // News data
  const newsArticles = [
    {
      id: 1,
      title: "Regal Forklift Training School Expands to New Location in Brampton",
      slug: "regal-forklift-expands-new-location-brampton",
      excerpt: "We are excited to announce the opening of our new state-of-the-art training facility in Brampton, equipped with the latest forklift simulators and training equipment.",
      content: `
        <p>Regal Forklift Training School is proud to announce the expansion of our operations with a brand new training facility in Brampton, Ontario. This 10,000 sq. ft. facility represents a significant investment in forklift safety education and workforce development in the Greater Toronto Area.</p>
        
        <p>The new facility features:</p>
        <ul>
          <li>5 dedicated forklift training bays</li>
          <li>State-of-the-art forklift simulators</li>
          <li>Classroom space for 50+ students</li>
          <li>On-site certification testing center</li>
          <li>Fully accessible training environment</li>
        </ul>
        
        <p>"This expansion allows us to serve more students and provide even better training experiences," said the school's director. "We're committed to raising the standard of forklift safety training across Canada."</p>
        
        <p>The new facility is now open and accepting registrations for all courses. Contact us today to schedule your training.</p>
      `,
      category: "Company News",
      author: "John Smith",
      date: "2026-01-15",
      readTime: "3 min read",
      views: 1245,
      likes: 89,
      comments: 12,
      image: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/regal-about2.png",
      tags: ["Expansion", "New Facility", "Brampton"]
    },
    {
      id: 2,
      title: "New Forklift Safety Regulations Coming in 2026: What You Need to Know",
      slug: "new-forklift-safety-regulations-2026",
      excerpt: "Stay informed about the upcoming changes to forklift safety regulations and how they affect operators and employers across Canada.",
      content: `
        <p>The Canadian Centre for Occupational Health and Safety (CCOHS) has announced new forklift safety regulations set to take effect in mid-2026. These updates aim to further reduce workplace accidents and improve operator training standards.</p>
        
        <h4>Key Changes Include:</h4>
        <ul>
          <li>Mandatory refresher training every 2 years instead of 3</li>
          <li>New requirements for digital certification records</li>
          <li>Enhanced practical assessment criteria</li>
          <li>Stricter guidelines for forklift maintenance logs</li>
          <li>New safety technology requirements for newer equipment</li>
        </ul>
        
        <p>At Regal Forklift, we're already updating our curriculum to exceed these new standards. All our students will be fully prepared for these regulatory changes.</p>
        
        <p>Contact us to learn how these changes might affect your organization and to schedule updated training for your team.</p>
      `,
      category: "Industry News",
      author: "Sarah Johnson",
      date: "2026-01-10",
      readTime: "5 min read",
      views: 3421,
      likes: 156,
      comments: 34,
      image: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/walkei.png",
      tags: ["Safety", "Regulations", "Industry Updates"]
    },
    {
      id: 3,
      title: "Regal Forklift Named Top Training Provider in Ontario for 2025",
      slug: "regal-forklift-top-training-provider-ontario-2025",
      excerpt: "We are honored to receive the prestigious 'Top Training Provider' award for our commitment to excellence in forklift safety education.",
      content: `
        <p>Regal Forklift Training School has been recognized as the Top Training Provider in Ontario for 2025 by the Ontario Safety Council. This award celebrates our dedication to quality education, student success, and workplace safety.</p>
        
        <p>The award recognizes:</p>
        <ul>
          <li>98% student pass rate on certification exams</li>
          <li>Outstanding customer satisfaction ratings</li>
          <li>Innovative training methods and technology integration</li>
          <li>Commitment to accessibility and inclusive education</li>
          <li>Strong industry partnerships and job placement success</li>
        </ul>
        
        <p>"This recognition belongs to our incredible team of instructors and staff who work tirelessly to provide the best training possible," said the school's founder. "We're proud to serve Ontario's workforce and help build safer workplaces."</p>
        
        <p>We thank all our students and corporate partners for their continued trust and support.</p>
      `,
      category: "Awards",
      author: "Michael Chen",
      date: "2025-12-20",
      readTime: "4 min read",
      views: 2876,
      likes: 203,
      comments: 28,
      image: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=800&h=400&fit=crop",
      tags: ["Award", "Recognition", "Achievement"]
    },
    {
      id: 4,
      title: "New Online Course Launch: Advanced Forklift Operations",
      slug: "new-online-course-advanced-forklift-operations",
      excerpt: "Expand your skills with our new advanced online course covering specialized forklift operations and complex warehouse scenarios.",
      content: `
        <p>We're excited to announce the launch of our new Advanced Forklift Operations online course. This comprehensive program is designed for experienced operators looking to enhance their skills and advance their careers.</p>
        
        <h4>Course Highlights:</h4>
        <ul>
          <li>8 weeks of interactive online learning</li>
          <li>Virtual simulation exercises</li>
          <li>Expert-led video tutorials</li>
          <li>Real-world case studies</li>
          <li>Certificate of advanced proficiency upon completion</li>
        </ul>
        
        <p>The course covers specialized topics including:</p>
        <ul>
          <li>Narrow aisle operations</li>
          <li>Hazardous material handling</li>
          <li>Advanced load balancing techniques</li>
          <li>Emergency response procedures</li>
          <li>Fleet management basics</li>
        </ul>
        
        <p>Early registration discounts are available until February 15th. Secure your spot today!</p>
      `,
      category: "Courses",
      author: "Emily Rodriguez",
      date: "2026-01-05",
      readTime: "6 min read",
      views: 1892,
      likes: 112,
      comments: 19,
      image: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/dockstocker.png",
      tags: ["Online Course", "Advanced Training", "New Launch"]
    },
    {
      id: 5,
      title: "Annual Forklift Safety Summit 2026: Register Now",
      slug: "annual-forklift-safety-summit-2026",
      excerpt: "Join industry experts, safety professionals, and equipment manufacturers at our Annual Forklift Safety Summit in Toronto.",
      content: `
        <p>Mark your calendars! The Regal Forklift Annual Safety Summit returns on March 15-16, 2026, at the Toronto Convention Centre. This two-day event brings together the best minds in forklift safety and operations.</p>
        
        <h4>Event Highlights:</h4>
        <ul>
          <li>Keynote speeches from industry leaders</li>
          <li>Hands-on equipment demonstrations</li>
          <li>Networking sessions with safety professionals</li>
          <li>Workshops on latest safety technologies</li>
          <li>Certification renewal opportunities</li>
        </ul>
        
        <p>Early bird registration ends January 31st. Group discounts available for organizations sending 5+ attendees.</p>
        
        <p>Visit our events page to secure your spot and view the full agenda.</p>
      `,
      category: "Events",
      author: "David Wilson",
      date: "2026-01-08",
      readTime: "4 min read",
      views: 956,
      likes: 67,
      comments: 8,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
      tags: ["Event", "Summit", "Networking"]
    },
    {
      id: 6,
      title: "Student Success Story: From Trainee to Fleet Manager",
      slug: "student-success-story-trainee-to-fleet-manager",
      excerpt: "Meet James Thompson, who completed our training program and advanced to become a fleet manager within two years.",
      content: `
        <p>When James Thompson walked through our doors two years ago, he had zero forklift experience. Today, he manages a fleet of 25 forklifts at one of Toronto's largest distribution centers.</p>
        
        <p>"The training at Regal Forklift gave me more than just a license—it gave me confidence and a career path," says James. "The instructors were patient, knowledgeable, and truly invested in my success."</p>
        
        <p>After completing his certification, James was hired as an operator at a major logistics company. His dedication and the skills he learned helped him quickly advance to lead operator, then supervisor, and now fleet manager.</p>
        
        <p>"What I learned about safety procedures and equipment maintenance has been invaluable in my management role," James adds. "I'm now responsible for training new operators using the same methods I learned at Regal."</p>
        
        <p>Stories like James's inspire us every day. Ready to start your own success story? Contact us today.</p>
      `,
      category: "Student Stories",
      author: "Lisa Thompson",
      date: "2025-12-28",
      readTime: "5 min read",
      views: 2154,
      likes: 178,
      comments: 42,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=400&fit=crop",
      tags: ["Success Story", "Student", "Career Growth"]
    },
    {
      id: 7,
      title: "Holiday Safety Tips for Warehouse Operations",
      slug: "holiday-safety-tips-warehouse-operations",
      excerpt: "Keep your warehouse team safe during the busy holiday season with these essential forklift safety tips.",
      content: `
        <p>The holiday season brings increased warehouse activity and unique safety challenges. Follow these tips to keep your team safe during the busiest time of year.</p>
        
        <h4>Essential Holiday Safety Tips:</h4>
        <ul>
          <li>Conduct daily pre-shift equipment inspections</li>
          <li>Ensure clear visibility in all aisles and loading areas</li>
          <li>Implement traffic management plans for pedestrian zones</li>
          <li>Schedule regular breaks to prevent operator fatigue</li>
          <li>Review emergency procedures with all staff</li>
        </ul>
        
        <p>Remember that increased stress and workload can lead to mistakes. Encourage open communication about safety concerns and ensure all operators are properly rested.</p>
        
        <p>Need seasonal training for your team? Contact us about our holiday safety refresher courses.</p>
      `,
      category: "Safety Tips",
      author: "Robert Martinez",
      date: "2025-12-10",
      readTime: "4 min read",
      views: 1678,
      likes: 143,
      comments: 21,
      image: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/reachforklift.png",
      tags: ["Safety", "Holiday", "Tips"]
    },
    {
      id: 8,
      title: "Corporate Partnership Program Launched",
      slug: "corporate-partnership-program-launched",
      excerpt: "New partnership program offers customized training solutions and exclusive benefits for corporate clients.",
      content: `
        <p>Regal Forklift is proud to announce our new Corporate Partnership Program, designed to provide comprehensive training solutions for businesses of all sizes.</p>
        
        <h4>Program Benefits Include:</h4>
        <ul>
          <li>Customized training curriculum for your specific equipment</li>
          <li>On-site training available at your facility</li>
          <li>Volume discounts for multiple employees</li>
          <li>Priority scheduling and dedicated account manager</li>
          <li>Annual safety audits and compliance reviews</li>
          <li>Free refresher training for returning students</li>
        </ul>
        
        <p>Already, 15 companies have joined the program, including major retailers, logistics providers, and manufacturing firms.</p>
        
        <p>Contact our corporate sales team to discuss how we can support your workforce development goals.</p>
      `,
      category: "Partnerships",
      author: "Amanda Foster",
      date: "2025-12-15",
      readTime: "3 min read",
      views: 1123,
      likes: 94,
      comments: 15,
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=400&fit=crop",
      tags: ["Partnership", "Corporate", "Business"]
    }
  ];

  // Categories for filtering
  const categories = ['all', ...new Set(newsArticles.map(article => article.category))];

  // Filter articles based on category and search
  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredArticles.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredArticles.length / postsPerPage);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#f7942f]/20 backdrop-blur-sm mb-6">
            <FaNewspaper className="text-[#f7942f] text-sm" />
            <span className="text-[#f7942f] font-bold text-sm uppercase tracking-wider">Stay Updated</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4">
            News & <span className="text-[#f7942f]">Announcements</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#f7942f] to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Latest updates, industry news, and success stories from Regal Forklift
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Filters and Search */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-2xl shadow-lg p-6 mb-8"
          >
            <div className="flex flex-col md:flex-row justify-between gap-4">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
                    className={`px-4 py-2 rounded-full font-medium transition-all text-sm ${
                      selectedCategory === category
                        ? 'bg-[#f7942f] text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category === 'all' ? 'All News' : category}
                  </button>
                ))}
              </div>
              
              {/* Search Bar */}
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/4 transform -translate-y-1/4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f7942f] focus:border-transparent w-full md:w-64"
                />
              </div>
            </div>
          </motion.div>

          {/* Featured Article */}
          {filteredArticles.length > 0 && currentPage === 1 && !searchTerm && selectedCategory === 'all' && (
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="mb-12"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="h-64 md:h-full">
                    <img 
                      src={filteredArticles[0].image} 
                      alt={filteredArticles[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-[#f7942f]/10 text-[#f7942f] text-xs font-semibold rounded-full">
                        FEATURED
                      </span>
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <FaRegClock className="text-xs" />
                        {filteredArticles[0].readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 hover:text-[#f7942f] transition-colors">
                      <button onClick={() => setSelectedNews(filteredArticles[0])} className="text-left">
                        {filteredArticles[0].title}
                      </button>
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {filteredArticles[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt className="text-[#f7942f]" />
                          {formatDate(filteredArticles[0].date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaUser className="text-[#f7942f]" />
                          {filteredArticles[0].author}
                        </span>
                      </div>
                      <button
                        onClick={() => setSelectedNews(filteredArticles[0])}
                        className="text-[#f7942f] font-semibold hover:text-orange-600 flex items-center gap-1"
                      >
                        Read More <FaArrowRight className="text-sm" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* News Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          >
            {currentPosts.map((article, index) => (
              <motion.article
                key={article.id}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
                onClick={() => setSelectedNews(article)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-[#f7942f]/10 text-[#f7942f] text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <FaRegClock className="text-xs" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#f7942f] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3 text-gray-400">
                      <span className="flex items-center gap-1">
                        <FaEye className="text-xs" />
                        {article.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaThumbsUp className="text-xs" />
                        {article.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaComment className="text-xs" />
                        {article.comments}
                      </span>
                    </div>
                    <button className="text-[#f7942f] hover:text-orange-600 font-medium text-sm flex items-center gap-1">
                      Read More <FaArrowRight className="text-xs" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="flex justify-center items-center gap-2 mt-8"
            >
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <FaChevronLeft className="text-gray-600" />
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-10 h-10 rounded-xl font-medium transition-colors ${
                    currentPage === index + 1
                      ? 'bg-[#f7942f] text-white'
                      : 'border border-gray-300 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <FaChevronRight className="text-gray-600" />
              </button>
            </motion.div>
          )}

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-center py-12 bg-white rounded-2xl shadow-lg"
            >
              <FaNewspaper className="text-6xl text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-700 mb-2">No News Found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </div>
      {/* News Detail Modal */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedNews(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedNews.image} 
                  alt={selectedNews.title}
                  className="w-full h-64 md:h-96 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedNews(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#f7942f]/10 text-[#f7942f] text-sm font-semibold rounded-full">
                    {selectedNews.category}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    <FaCalendarAlt className="text-[#f7942f]" />
                    {formatDate(selectedNews.date)}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    <FaUser className="text-[#f7942f]" />
                    {selectedNews.author}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center gap-1">
                    <FaRegClock className="text-[#f7942f]" />
                    {selectedNews.readTime}
                  </span>
                </div>
                
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  {selectedNews.title}
                </h1>
                
                <div 
                  className="prose prose-lg max-w-none text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: selectedNews.content }}
                />
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {selectedNews.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#f7942f]/10 transition-colors">
                        <FaFacebook className="text-gray-600 hover:text-[#f7942f]" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#f7942f]/10 transition-colors">
                        <FaTwitter className="text-gray-600 hover:text-[#f7942f]" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#f7942f]/10 transition-colors">
                        <FaLinkedin className="text-gray-600 hover:text-[#f7942f]" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#f7942f]/10 transition-colors">
                        <FaEnvelope className="text-gray-600 hover:text-[#f7942f]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewsPage;