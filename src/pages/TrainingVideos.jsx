import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  FaPlay, 
  FaPause, 
  FaDownload, 
  FaFilePdf, 
  FaYoutube, 
  FaVideo,
  FaSearch,
  FaFilter,
  FaTimes,
  FaExpand,
  FaHeart,
  FaShare,
  FaBookmark,
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
  FaEye
} from "react-icons/fa";
import { MdSafetyDivider } from "react-icons/md";

const TrainingVideos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [likedVideos, setLikedVideos] = useState({});
  const [bookmarkedVideos, setBookmarkedVideos] = useState({});
  
  const videoData = [
    {
      id: 1,
      title: "Dock Stocker Safety",
      category: "safety",
      type: "youtube",
      embedId: "uw5sDADcRA4",
      duration: "5:23",
      views: "2.5K",
      description: "Learn essential safety protocols for operating dock stocker forklifts in warehouse environments.",
      tags: ["Safety", "Dock Stocker", "Warehouse"]
    },
    {
      id: 2,
      title: "Counterbalance Safety",
      category: "safety",
      type: "youtube",
      embedId: "DWQK-CK_GaI",
      duration: "6:45",
      views: "3.2K",
      description: "Comprehensive guide to counterbalance forklift operation and safety measures.",
      tags: ["Safety", "Counterbalance", "Operation"]
    },
    {
      id: 3,
      title: "Crowns Reach Safety",
      category: "safety",
      type: "youtube",
      embedId: "6rhpzJeANWs",
      duration: "4:52",
      views: "1.8K",
      description: "Crown reach forklift safety inspection and operational guidelines.",
      tags: ["Safety", "Reach", "Crown"]
    },
    {
      id: 4,
      title: "Inspection Guide",
      category: "inspection",
      type: "video",
      videoSrc: "assets/video/regalmachineinsepection.mp4",
      duration: "8:15",
      views: "4.1K",
      description: "Complete pre-operation inspection guide for all forklift types.",
      tags: ["Inspection", "Maintenance", "Pre-Operation"]
    },
    {
      id: 5,
      title: "Order Picker & Harness Inspection",
      category: "inspection",
      type: "youtube",
      embedId: "kzL6RMAb5vE",
      duration: "7:30",
      views: "3.5K",
      description: "Order picker safety protocols and proper harness inspection techniques.",
      tags: ["Order Picker", "Harness", "Safety"]
    }
  ];

  const pdfData = [
    {
      id: 1,
      title: "Regal Reach Inspection",
      fileName: "Regal Reach Inspection.pdf",
      path: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/pdf/Regal-Reach-Inspection.pdf",
      category: "reach"
    },
    {
      id: 2,
      title: "Regal Order Picker Inspection",
      fileName: "Regal Order Picker inspection.pdf",
      path: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/pdf/Regal-Order-Picker-inspection.pdf",
      category: "order-picker"
    },
    {
      id: 3,
      title: "Regal Counterbalance Inspection",
      fileName: "Regal Counterbalance inspection.pdf",
      path: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/pdf/Regal-Counterbalance-inspection.pdf",
      category: "counterbalance"
    },
    {
      id: 4,
      title: "Regal Walkie Inspection",
      fileName: "Regal Walkie Inspection.pdf",
      path: "https://pub-5c87d77e0678464ea969837b65768808.r2.dev/Regal/pdf/Regal-Walkie-Inspection.pdf",
      category: "walkie"
    }
  ];

  const categories = [
    { id: "all", name: "All Videos", icon: FaVideo, count: videoData.length },
    { id: "safety", name: "Safety Training", icon: FaShieldAlt, count: videoData.filter(v => v.category === "safety").length },
    { id: "inspection", name: "Inspection Guides", icon: FaCheckCircle, count: videoData.filter(v => v.category === "inspection").length }
  ];

  const filteredVideos = videoData.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          video.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "all" || video.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const handleLike = (id) => {
    setLikedVideos(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleBookmark = (id) => {
    setBookmarkedVideos(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const VideoCard = ({ video, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
      >
        {/* Video Thumbnail */}
        <div className="relative aspect-video bg-gray-900 cursor-pointer overflow-hidden">
          {video.type === "youtube" ? (
            <img 
              src={`https://img.youtube.com/vi/${video.embedId}/maxresdefault.jpg`}
              alt={video.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.target.src = `https://img.youtube.com/vi/${video.embedId}/hqdefault.jpg`;
              }}
            />
          ) : (
            <video 
              src={video.videoSrc}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              poster={video.poster}
            />
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedVideo(video)}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-[#f7942f] to-orange-500 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <FaPlay className="text-white text-2xl md:text-3xl ml-1" />
            </motion.button>
          </div>
          
          {/* Duration Badge */}
          <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg text-white text-xs font-semibold flex items-center gap-1">
            <FaClock className="text-[#f7942f] text-xs" />
            {video.duration}
          </div>
          
          {/* Views Badge */}
          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg text-white text-xs font-semibold flex items-center gap-1">
            <FaEye className="text-[#f7942f] text-xs" />
            {video.views} views
          </div>
        </div>
        
        {/* Video Info */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 flex-1 pr-2">
              {video.title}
            </h3>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleLike(video.id)}
                className={`text-sm transition-all ${likedVideos[video.id] ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
              >
                <FaHeart className="text-base" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleBookmark(video.id)}
                className={`text-sm transition-all ${bookmarkedVideos[video.id] ? 'text-[#f7942f]' : 'text-gray-400 hover:text-[#f7942f]'}`}
              >
                <FaBookmark className="text-base" />
              </motion.button>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {video.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {video.tags.map((tag, idx) => (
              <span key={idx} className="text-xs px-2 py-1 bg-orange-50 text-[#f7942f] rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
          
          <button
            onClick={() => setSelectedVideo(video)}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#f7942f] to-orange-500 text-white font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <FaPlay className="text-sm group-hover:scale-110 transition-transform" />
            Watch Now
          </button>
        </div>
      </motion.div>
    );
  };

  const PdfCard = ({ pdf, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-r from-white to-orange-50 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100 group"
      >
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <FaFilePdf className="text-white text-2xl" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">{pdf.title}</h3>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              
            </div>
          </div>
          <a
            href={pdf.path}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#f7942f] to-orange-500 text-white font-semibold text-sm hover:shadow-lg transition-all duration-300 flex items-center gap-2 group-hover:scale-105"
          >
            <FaDownload className="text-xs" />
            Download
          </a>
        </div>
      </motion.div>
    );
  };

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
              <FaVideo className="text-[#f7942f] text-sm" />
              <span className="text-[#f7942f] font-bold text-sm uppercase tracking-wider">Training Resources</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-4"
            >
              Training <span className="text-[#f7942f]">Videos</span> & Resources
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
              Access our comprehensive library of safety training videos and downloadable inspection guides
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#f7942f] focus:ring-2 focus:ring-[#f7942f]/20 transition-all bg-white"
              />
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                    activeFilter === category.id
                      ? "bg-gradient-to-r from-[#f7942f] to-orange-500 text-white shadow-md"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <category.icon className="text-sm" />
                  {category.name}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                    activeFilter === category.id ? "bg-white/20" : "bg-gray-100"
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Videos Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">Training Videos</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#f7942f] to-orange-500 rounded-full mt-2"></div>
            </div>
            <div className="text-sm text-gray-500">
              {filteredVideos.length} {filteredVideos.length === 1 ? 'video' : 'videos'} found
            </div>
          </div>
          
          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredVideos.map((video, index) => (
                <VideoCard key={video.id} video={video} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl">
              <FaVideo className="text-5xl text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No videos found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveFilter("all");
                }}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-[#f7942f] to-orange-500 text-white rounded-full font-semibold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* PDF Download Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">Downloadable PDFs</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#f7942f] to-orange-500 rounded-full mt-2"></div>
              <p className="text-gray-600 mt-2">Comprehensive inspection guides and safety manuals</p>
            </div>
            <div className="text-sm text-gray-500">
              {pdfData.length} resources available
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {pdfData.map((pdf, index) => (
              <PdfCard key={pdf.id} pdf={pdf} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-300"
              >
                <FaTimes className="text-lg" />
              </button>
              
              <div className="aspect-video">
                {selectedVideo.type === "youtube" ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.embedId}?autoplay=1`}
                    title={selectedVideo.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    src={selectedVideo.videoSrc}
                    controls
                    autoPlay
                    className="w-full h-full"
                  />
                )}
              </div>
              
              <div className="p-6 bg-white">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{selectedVideo.title}</h3>
                <p className="text-gray-600">{selectedVideo.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TrainingVideos;