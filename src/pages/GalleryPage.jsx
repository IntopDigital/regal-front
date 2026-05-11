import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaImages, 
  FaCamera, 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight,
  FaSearch,
  FaFilter,
  FaGem,
  FaTruck,
  FaChalkboardTeacher,
  FaCertificate,
  FaAward,
  FaPlay,
  FaDownload
} from 'react-icons/fa';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/servise/service-counter-balance.png",
      title: "Counterbalance Forklift Training",
      category: "training",
      description: "Hands-on training with counterbalance forklifts",
      date: "2026-01-15",
      tags: ["Forklift", "Training", "Counterbalance"]
    },
    {
      id: 2,
      src: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/servise/service-reach-forklift.png",
      title: "Reach Truck Operation",
      category: "training",
      description: "Specialized reach truck training session",
      date: "2026-01-10",
      tags: ["Reach Truck", "Training", "Warehouse"]
    },
    {
      id: 3,
      src: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/servise/service-dock-stocker.png",
      title: "Dock Stocker Training",
      category: "training",
      description: "Dock stocker equipment operation",
      date: "2026-01-08",
      tags: ["Dock Stocker", "Loading Dock", "Training"]
    },
    {
      id: 4,
      src: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/servise/service-order-picker.png",
      title: "Order Picker Certification",
      category: "training",
      description: "Order picker training and certification",
      date: "2026-01-05",
      tags: ["Order Picker", "Warehouse", "Certification"]
    },
    {
      id: 5,
      src: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/servise/service-walkei.png",
      title: "Walkie Pallet Jack Training",
      category: "training",
      description: "Walkie pallet jack operation",
      date: "2026-01-03",
      tags: ["Walkie", "Pallet Jack", "Training"]
    },
    {
      id: 6,
      src: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/servise/service-fall-protection.png",
      title: "Fall Protection Safety Course",
      category: "safety",
      description: "Comprehensive fall protection training",
      date: "2025-12-28",
      tags: ["Safety", "Fall Protection", "Certification"]
    },
    {
      id: 7,
      src: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/regal-about2.png",
      title: "State-of-the-Art Training Facility",
      category: "facility",
      description: "Modern training facility with latest equipment",
      date: "2025-12-20",
      tags: ["Facility", "Training Center", "Equipment"]
    },
    {
      id: 8,
      src: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/regal-about1.png",
      title: "Classroom Instruction",
      category: "classroom",
      description: "Interactive classroom learning environment",
      date: "2025-12-15",
      tags: ["Classroom", "Theory", "Learning"]
    },
    {
      id: 9,
      src: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/regal-certificate.png",
      title: "Certification Ceremony",
      category: "events",
      description: "Students receiving their certifications",
      date: "2025-12-10",
      tags: ["Certification", "Graduation", "Award"]
    },
    {
      id: 10,
      src: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/regal-slider1.png",
      title: "Practical Training Session",
      category: "training",
      description: "Hands-on practical training",
      date: "2025-12-05",
      tags: ["Practical", "Hands-on", "Training"]
    },
    {
      id: 11,
      src: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/regal-slider2.png",
      title: "Fleet of Training Forklifts",
      category: "facility",
      description: "Modern fleet of training equipment",
      date: "2025-12-01",
      tags: ["Fleet", "Equipment", "Forklifts"]
    },
    {
      id: 12,
      src: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/regal-slider3.png",
      title: "Student Success Story",
      category: "students",
      description: "Proud graduate of our program",
      date: "2025-11-28",
      tags: ["Student", "Success", "Graduate"]
    },
    {
      id: 13,
      src: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/regal-slider4.png",
      title: "Warehouse Simulation",
      category: "training",
      description: "Realistic warehouse environment training",
      date: "2025-11-25",
      tags: ["Simulation", "Warehouse", "Practical"]
    },
    {
      id: 14,
      src: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/regal-slider5.png",
      title: "Safety First Approach",
      category: "safety",
      description: "Emphasizing safety in every session",
      date: "2025-11-20",
      tags: ["Safety", "Training", "Awareness"]
    }
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', label: 'All Photos', icon: FaImages },
    { id: 'training', label: 'Training Sessions', icon: FaTruck },
    { id: 'classroom', label: 'Classroom', icon: FaChalkboardTeacher },
    { id: 'safety', label: 'Safety Training', icon: FaCertificate },
    { id: 'facility', label: 'Our Facility', icon: FaCamera },
    { id: 'events', label: 'Events', icon: FaAward },
    { id: 'students', label: 'Students', icon: FaGem }
  ];

  // Filter images based on category and search
  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = filter === 'all' || image.category === filter;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          image.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (index) => {
    const actualIndex = galleryImages.findIndex(img => img.id === filteredImages[index].id);
    setCurrentIndex(actualIndex);
    setSelectedImage(galleryImages[actualIndex]);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    setSelectedImage(galleryImages[(currentIndex + 1) % galleryImages.length]);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setSelectedImage(galleryImages[(currentIndex - 1 + galleryImages.length) % galleryImages.length]);
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#f7942f]/20 backdrop-blur-sm mb-6">
            <FaImages className="text-[#f7942f] text-sm" />
            <span className="text-[#f7942f] font-bold text-sm uppercase tracking-wider">Moments Captured</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Our <span className="text-[#f7942f]">Gallery</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#f7942f] to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Explore moments from our training sessions, facility, and student achievements
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Filter and Search Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mb-10"
          >
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setFilter(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                      filter === cat.id
                        ? 'bg-[#f7942f] text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    <Icon className="text-sm" />
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search gallery..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f7942f] focus:border-transparent bg-white"
              />
            </div>
          </motion.div>

          {/* Gallery Grid */}
          {filteredImages.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-bold text-sm mb-1 line-clamp-1">{image.title}</h3>
                        <p className="text-white/80 text-xs line-clamp-1">{image.description}</p>
                      </div>
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-[#f7942f]/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                        {categories.find(c => c.id === image.category)?.label || image.category}
                      </span>
                    </div>
                    {/* Search Icon */}
                    <div className="absolute top-3 right-3 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <FaSearch className="text-white text-sm" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-center py-16 bg-white rounded-2xl shadow-lg"
            >
              <FaImages className="text-6xl text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-700 mb-2">No Images Found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}

          {/* Lightbox Modal */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
                
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <FaChevronLeft className="text-2xl" />
                </button>
                
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <FaChevronRight className="text-2xl" />
                </button>
                
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="max-w-5xl w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="w-full h-auto rounded-2xl max-h-[80vh] object-contain"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-white text-xl font-bold mb-2">{selectedImage.title}</h3>
                    <p className="text-gray-300">{selectedImage.description}</p>
                    <div className="flex flex-wrap justify-center gap-2 mt-3">
                      {selectedImage.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-white text-sm">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Training?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join hundreds of successful graduates who have trained with us. Contact us today to begin your journey.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/register"
                  className="px-6 py-3 bg-[#f7942f] text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors"
                >
                  Enroll Now
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3 border border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                >
                  Explore Courses
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;