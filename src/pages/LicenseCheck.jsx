import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FaSearch, 
  FaInfoCircle, 
  FaExclamationTriangle, 
  FaLightbulb,
  FaEnvelope,
  FaCheckCircle,
  FaTimesCircle,
  FaIdCard,
  FaUser,
  FaCalendarAlt,
  FaIndustry,
  FaCertificate
} from 'react-icons/fa';

const LicenseCheck = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchInputRef = useRef(null);

  // Sample license data (replace with your actual API call)
  const licenseDatabase = [
    {
      id: 1,
      license_number: "RFL-2024-001",
      name: "John Smith",
      issue_date: "2024-01-15",
      expiry_date: "2026-01-14",
      machine_type: "Counterbalance Forklift",
      certificate_type: "Standard",
      status: "valid"
    },
    {
      id: 2,
      license_number: "RFL-2024-002",
      name: "Sarah Johnson",
      issue_date: "2024-02-20",
      expiry_date: "2026-02-19",
      machine_type: "Reach Truck",
      certificate_type: "Advanced",
      status: "valid"
    },
    {
      id: 3,
      license_number: "RFL-2023-089",
      name: "Michael Brown",
      issue_date: "2023-03-10",
      expiry_date: "2025-03-09",
      machine_type: "Walkie Pallet Jack",
      certificate_type: "Basic",
      status: "valid"
    },
    {
      id: 4,
      license_number: "RFL-2022-045",
      name: "Emily Davis",
      issue_date: "2022-05-05",
      expiry_date: "2024-05-04",
      machine_type: "Order Picker",
      certificate_type: "Standard",
      status: "expired"
    }
  ];

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsLoading(true);
    setSearchPerformed(true);

    // Simulate API call delay
    setTimeout(() => {
      // Search for exact match (case-insensitive)
      const results = licenseDatabase.filter(license => 
        license.license_number.toLowerCase() === searchTerm.trim().toLowerCase()
      );
      setSearchResults(results);
      setIsLoading(false);
    }, 500);
  };

  const checkExpiryStatus = (expiryDate) => {
    if (!expiryDate) return { status: "Unknown", isExpired: false, statusClass: "text-gray-500" };
    
    const today = new Date();
    const expiry = new Date(expiryDate);
    const isExpired = expiry < today;
    
    return {
      status: isExpired ? "Expired" : "Valid",
      isExpired: isExpired,
      statusClass: isExpired ? "text-red-600" : "text-green-600"
    };
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 md:py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#f7942f]/20 backdrop-blur-sm mb-6">
            <FaIdCard className="text-[#f7942f] text-sm" />
            <span className="text-[#f7942f] font-bold text-sm uppercase tracking-wider">License Verification</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            License <span className="text-[#f7942f]">Check</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#f7942f] to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Verify forklift operator licenses and certifications instantly
          </p>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            License verification system v2.0
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Important Notice Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-2xl shadow-xl mb-8 overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <FaExclamationTriangle className="text-red-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Important Notice</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      We are currently in the process of transitioning to a new portal and are diligently working to upload all relevant licenses. 
                      If you are unable to locate a specific license at this time, please contact us at:
                    </p>
                    <p>
                      <a href="mailto:regalforklifttrainingschool@gmail.com" className="text-[#f7942f] hover:text-orange-600 font-semibold inline-flex items-center gap-2">
                        <FaEnvelope className="text-sm" />
                        regalforklifttrainingschool@gmail.com
                      </a>
                    </p>
                    <p className="text-green-600">
                      A member of our team will respond promptly to verify and provide the necessary documentation.
                    </p>
                    <p className="text-green-600">We appreciate your patience and understanding during this transition.</p>
                    <p className="font-bold text-gray-800">Thank you for your continued trust and support.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Search Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-xl mb-8"
          >
            <div className="p-6 md:p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Search License Details</h2>
                <p className="text-gray-500">Enter the license number to verify certification status</p>
              </div>
              
              <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <input
                      ref={searchInputRef}
                      type="text"
                      className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f7942f] focus:border-transparent transition-all"
                      placeholder="Enter License Number (e.g., RFL-2024-001)"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-[#f7942f] to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Searching...
                      </>
                    ) : (
                      <>
                        <FaSearch />
                        Search
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Search Results */}
          {searchPerformed && (
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaSearch className="text-[#f7942f]" />
                  Search Results:
                </h3>
                
                {searchResults.length > 0 ? (
                  <>
                    {/* Results Table - Desktop */}
                    <div className="hidden md:block overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gradient-to-r from-[#f7942f] to-orange-500 text-white">
                            <th className="px-4 py-3 text-left rounded-tl-xl">License Number</th>
                            <th className="px-4 py-3 text-left">Name</th>
                            <th className="px-4 py-3 text-left">Issue Date</th>
                            <th className="px-4 py-3 text-left">Expiry Date</th>
                            <th className="px-4 py-3 text-left">Machine Type</th>
                            <th className="px-4 py-3 text-left">Certificate Type</th>
                            <th className="px-4 py-3 text-left rounded-tr-xl">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {searchResults.map((license, index) => {
                            const expiryInfo = checkExpiryStatus(license.expiry_date);
                            return (
                              <tr key={license.id} className={`border-b border-gray-200 hover:bg-gray-50 ${index === searchResults.length - 1 ? 'border-b-0' : ''}`}>
                                <td className="px-4 py-3 font-semibold text-gray-900">{license.license_number}</td>
                                <td className="px-4 py-3 text-gray-700">{license.name}</td>
                                <td className="px-4 py-3 text-gray-700">{formatDate(license.issue_date)}</td>
                                <td className={`px-4 py-3 font-medium ${expiryInfo.isExpired ? 'text-red-600' : 'text-gray-700'}`}>
                                  {formatDate(license.expiry_date)}
                                </td>
                                <td className="px-4 py-3 text-gray-700">{license.machine_type}</td>
                                <td className="px-4 py-3 text-gray-700">{license.certificate_type}</td>
                                <td className="px-4 py-3">
                                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${expiryInfo.isExpired ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                                    {expiryInfo.isExpired ? <FaTimesCircle /> : <FaCheckCircle />}
                                    {expiryInfo.status}
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    {/* Results Cards - Mobile */}
                    <div className="md:hidden space-y-4">
                      {searchResults.map((license) => {
                        const expiryInfo = checkExpiryStatus(license.expiry_date);
                        return (
                          <div key={license.id} className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <p className="text-xs text-gray-500">License Number</p>
                                <p className="font-bold text-gray-900">{license.license_number}</p>
                              </div>
                              <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${expiryInfo.isExpired ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                                {expiryInfo.isExpired ? <FaTimesCircle /> : <FaCheckCircle />}
                                {expiryInfo.status}
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                              <div>
                                <p className="text-gray-500">Name</p>
                                <p className="font-medium">{license.name}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Certificate Type</p>
                                <p className="font-medium">{license.certificate_type}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Issue Date</p>
                                <p className="font-medium">{formatDate(license.issue_date)}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Expiry Date</p>
                                <p className={`font-medium ${expiryInfo.isExpired ? 'text-red-600' : ''}`}>
                                  {formatDate(license.expiry_date)}
                                </p>
                              </div>
                              <div className="col-span-2">
                                <p className="text-gray-500">Machine Type</p>
                                <p className="font-medium">{license.machine_type}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Additional Information Card */}
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <h6 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                        <FaInfoCircle className="text-blue-600" />
                        License Information
                      </h6>
                      {searchResults.map((license) => {
                        const expiryInfo = checkExpiryStatus(license.expiry_date);
                        return (
                          <div key={license.id} className="space-y-1 text-sm">
                            <p className="text-gray-700">
                              License Number: <strong className="text-gray-900">{license.license_number}</strong>
                            </p>
                            <p className="text-gray-700">
                              Status: 
                              <span className={`ml-2 font-semibold ${expiryInfo.statusClass}`}>
                                {expiryInfo.status}
                                {expiryInfo.isExpired 
                                  ? ` (Expired on ${formatDate(license.expiry_date)})` 
                                  : ` (Valid until ${formatDate(license.expiry_date)})`}
                              </span>
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                      <div className="flex items-start gap-3">
                        <FaExclamationTriangle className="text-yellow-600 text-xl flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-yellow-800 font-medium">
                            No license records found for "<strong className="font-bold">{searchTerm}</strong>".
                          </p>
                          <p className="text-yellow-700 mt-1">Please check the license number and try again.</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
                      <h6 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <FaLightbulb className="text-yellow-500" />
                        Search Tips:
                      </h6>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#f7942f] rounded-full"></span>
                          Make sure you entered the correct license number
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#f7942f] rounded-full"></span>
                          Check for any typing errors
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#f7942f] rounded-full"></span>
                          License numbers are case-sensitive
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#f7942f] rounded-full"></span>
                          Example format: RFL-2024-001
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LicenseCheck;