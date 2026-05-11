import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaCalendarAlt, 
  FaVenusMars, 
  FaMapMarkerAlt, 
  FaIdCard, 
  FaUpload, 
  FaCheckCircle,
  FaArrowRight,
  FaGoogle,
  FaFacebook,
  FaLinkedin,
  FaEye,
  FaEyeSlash,
  FaCloudUploadAlt,
  FaFileUpload,
  FaRegCalendarAlt,
  FaUserCheck,
  FaShieldAlt,
  FaStar,
  FaPhoneAlt
} from "react-icons/fa";
import { motion } from "framer-motion";

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showLicenceFields, setShowLicenceFields] = useState(false);
  const [formData, setFormData] = useState({
    customer_fname: "",
    customer_lname: "",
    customer_email: "",
    customer_mobile: "",
    d_o_b: "",
    gender: "",
    customer_address1: "",
    know_about: "",
    licence: "",
    photo: null,
    licence_file: null,
    expiry: ""
  });
  const [photoPreview, setPhotoPreview] = useState(null);
  const [licencePreview, setLicencePreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === "file") {
      const file = files[0];
      if (file) {
        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          setErrors({ ...errors, [name]: "File size should be less than 5MB" });
          return;
        }
        // Validate file type
        if (!file.type.startsWith("image/")) {
          setErrors({ ...errors, [name]: "Please upload an image file" });
          return;
        }
        
        setFormData({ ...formData, [name]: file });
        
        // Create preview
        const reader = new FileReader();
        reader.onloadend = () => {
          if (name === "photo") {
            setPhotoPreview(reader.result);
          } else if (name === "licence_file") {
            setLicencePreview(reader.result);
          }
        };
        reader.readAsDataURL(file);
        
        // Clear error
        if (errors[name]) {
          const newErrors = { ...errors };
          delete newErrors[name];
          setErrors(newErrors);
        }
      }
    } else {
      setFormData({ ...formData, [name]: value });
      
      // Clear error when user types
      if (errors[name]) {
        const newErrors = { ...errors };
        delete newErrors[name];
        setErrors(newErrors);
      }
    }
  };

  const handleLicenceChange = (value) => {
    setFormData({ ...formData, licence: value });
    setShowLicenceFields(value === "yes");
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.customer_fname) newErrors.customer_fname = "First name is required";
    if (!formData.customer_lname) newErrors.customer_lname = "Last name is required";
    if (!formData.customer_email) {
      newErrors.customer_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.customer_email)) {
      newErrors.customer_email = "Email is invalid";
    }
    if (!formData.customer_mobile) {
      newErrors.customer_mobile = "Phone number is required";
    } else if (!/^[1-9][0-9]{9}$/.test(formData.customer_mobile)) {
      newErrors.customer_mobile = "Please enter a valid 10-digit phone number";
    }
    if (!formData.d_o_b) newErrors.d_o_b = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.customer_address1) newErrors.customer_address1 = "Address is required";
    if (!formData.know_about) newErrors.know_about = "Please tell us how you found us";
    if (!formData.licence) newErrors.licence = "Please specify if you have a licence";
    if (!formData.photo) newErrors.photo = "Photo ID is required";
    if (formData.licence === "yes") {
      if (!formData.licence_file) newErrors.licence_file = "Please upload your licence";
      if (!formData.expiry) newErrors.expiry = "Please enter licence expiry date";
    }
    if (!agreeTerms) newErrors.terms = "You must agree to the terms and privacy policy";
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to first error
      const firstError = document.querySelector(".error-message");
      if (firstError) firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    
    setIsLoading(true);
    
    // Create FormData for file upload
    const submitData = new FormData();
    Object.keys(formData).forEach(key => {
      if (formData[key] !== null) {
        submitData.append(key, formData[key]);
      }
    });
    submitData.append("registor", true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log("Form submitted:", Object.fromEntries(submitData));
      // Navigate to login or dashboard
      navigate("/login");
    }, 2000);
  };

  const inputClasses = "w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all text-sm md:text-base bg-gray-50/50";
  const errorClasses = "text-red-500 text-xs mt-1 error-message";

  const knowAboutOptions = [
    { value: "Google", label: "Google Search" },
    { value: "Social Media Ads", label: "Social Media Ads" },
    { value: "Reference", label: "Friend/Family Reference" },
    { value: "Other", label: "Other" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f7942f]/10 backdrop-blur-sm mb-4">
              <FaUserCheck className="text-[#f7942f] text-sm" />
              <span className="text-[#f7942f] font-bold text-sm uppercase tracking-wider">Join Us Today</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3">
              Create an Account
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#f7942f] to-orange-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Register to access our training programs, track your progress, and get certified
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Registration Form - Main Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2"
            >
              <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* First Name */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaUser className="text-gray-400 text-sm" />
                        </div>
                        <input
                          type="text"
                          name="customer_fname"
                          value={formData.customer_fname}
                          onChange={handleChange}
                          className={`${inputClasses} pl-10 ${errors.customer_fname ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:ring-[#f7942f]/20 focus:border-[#f7942f]"}`}
                          placeholder="First Name"
                        />
                      </div>
                      {errors.customer_fname && <p className={errorClasses}>{errors.customer_fname}</p>}
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaUser className="text-gray-400 text-sm" />
                        </div>
                        <input
                          type="text"
                          name="customer_lname"
                          value={formData.customer_lname}
                          onChange={handleChange}
                          className={`${inputClasses} pl-10 ${errors.customer_lname ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:ring-[#f7942f]/20 focus:border-[#f7942f]"}`}
                          placeholder="Last Name"
                        />
                      </div>
                      {errors.customer_lname && <p className={errorClasses}>{errors.customer_lname}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaEnvelope className="text-gray-400 text-sm" />
                        </div>
                        <input
                          type="email"
                          name="customer_email"
                          value={formData.customer_email}
                          onChange={handleChange}
                          className={`${inputClasses} pl-10 ${errors.customer_email ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:ring-[#f7942f]/20 focus:border-[#f7942f]"}`}
                          placeholder="Email Address"
                        />
                      </div>
                      {errors.customer_email && <p className={errorClasses}>{errors.customer_email}</p>}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaPhoneAlt className="text-gray-400 text-sm" />
                        </div>
                        <input
                          type="tel"
                          name="customer_mobile"
                          value={formData.customer_mobile}
                          onChange={handleChange}
                          className={`${inputClasses} pl-10 ${errors.customer_mobile ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:ring-[#f7942f]/20 focus:border-[#f7942f]"}`}
                          placeholder="Phone Number"
                        />
                      </div>
                      {errors.customer_mobile && <p className={errorClasses}>{errors.customer_mobile}</p>}
                    </div>

                    {/* Date of Birth */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaCalendarAlt className="text-gray-400 text-sm" />
                        </div>
                        <input
                          type="date"
                          name="d_o_b"
                          value={formData.d_o_b}
                          onChange={handleChange}
                          className={`${inputClasses} pl-10 ${errors.d_o_b ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:ring-[#f7942f]/20 focus:border-[#f7942f]"}`}
                        />
                      </div>
                      {errors.d_o_b && <p className={errorClasses}>{errors.d_o_b}</p>}
                    </div>

                    {/* Gender */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">
                        Gender <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaVenusMars className="text-gray-400 text-sm" />
                        </div>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className={`${inputClasses} pl-10 appearance-none ${errors.gender ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:ring-[#f7942f]/20 focus:border-[#f7942f]"}`}
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      {errors.gender && <p className={errorClasses}>{errors.gender}</p>}
                    </div>

                    {/* Address - Full Width */}
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">
                        Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaMapMarkerAlt className="text-gray-400 text-sm" />
                        </div>
                        <input
                          type="text"
                          name="customer_address1"
                          value={formData.customer_address1}
                          onChange={handleChange}
                          className={`${inputClasses} pl-10 ${errors.customer_address1 ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:ring-[#f7942f]/20 focus:border-[#f7942f]"}`}
                          placeholder="Your Address"
                        />
                      </div>
                      {errors.customer_address1 && <p className={errorClasses}>{errors.customer_address1}</p>}
                    </div>

                    {/* Photo ID Upload */}
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">
                        Upload Your Photo ID <span className="text-red-500">*</span>
                      </label>
                      <div className={`border-2 border-dashed rounded-xl p-4 text-center transition-all ${errors.photo ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-[#f7942f]"}`}>
                        <input
                          type="file"
                          name="photo"
                          accept="image/*"
                          onChange={handleChange}
                          className="hidden"
                          id="photo-upload"
                        />
                        <label htmlFor="photo-upload" className="cursor-pointer block">
                          {photoPreview ? (
                            <div className="relative">
                              <img src={photoPreview} alt="Preview" className="max-h-32 mx-auto rounded-lg" />
                              <p className="text-sm text-green-600 mt-2">✓ Photo uploaded successfully</p>
                            </div>
                          ) : (
                            <div>
                              <FaCloudUploadAlt className="text-4xl text-gray-400 mx-auto mb-2" />
                              <p className="text-gray-500">Click to upload your Photo ID</p>
                              <p className="text-xs text-gray-400 mt-1">JPG, PNG (Max 5MB)</p>
                            </div>
                          )}
                        </label>
                      </div>
                      {errors.photo && <p className={errorClasses}>{errors.photo}</p>}
                    </div>

                    {/* Know About */}
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">
                        How did you hear about us? <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="know_about"
                        value={formData.know_about}
                        onChange={handleChange}
                        className={`${inputClasses} ${errors.know_about ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:ring-[#f7942f]/20 focus:border-[#f7942f]"}`}
                      >
                        <option value="">Select Source</option>
                        {knowAboutOptions.map(option => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                      {errors.know_about && <p className={errorClasses}>{errors.know_about}</p>}
                    </div>

                    {/* Forklift Licence */}
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 font-semibold mb-3 text-sm">
                        Do you have a Forklift Licence? <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="licence"
                            value="yes"
                            checked={formData.licence === "yes"}
                            onChange={() => handleLicenceChange("yes")}
                            className="w-4 h-4 text-[#f7942f] focus:ring-[#f7942f]/20"
                          />
                          <span>Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="licence"
                            value="no"
                            checked={formData.licence === "no"}
                            onChange={() => handleLicenceChange("no")}
                            className="w-4 h-4 text-[#f7942f] focus:ring-[#f7942f]/20"
                          />
                          <span>No</span>
                        </label>
                      </div>
                      {errors.licence && <p className={errorClasses}>{errors.licence}</p>}
                    </div>

                    {/* Conditional Licence Fields */}
                    {showLicenceFields && (
                      <>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2 text-sm">
                            Upload Your Licence <span className="text-red-500">*</span>
                          </label>
                          <div className={`border-2 border-dashed rounded-xl p-3 text-center transition-all ${errors.licence_file ? "border-red-500" : "border-gray-300 hover:border-[#f7942f]"}`}>
                            <input
                              type="file"
                              name="licence_file"
                              accept="image/*"
                              onChange={handleChange}
                              className="hidden"
                              id="licence-upload"
                            />
                            <label htmlFor="licence-upload" className="cursor-pointer block">
                              {licencePreview ? (
                                <div>
                                  <img src={licencePreview} alt="Licence Preview" className="max-h-24 mx-auto rounded-lg" />
                                  <p className="text-xs text-green-600 mt-1">Licence uploaded</p>
                                </div>
                              ) : (
                                <div>
                                  <FaFileUpload className="text-2xl text-gray-400 mx-auto mb-1" />
                                  <p className="text-xs text-gray-500">Click to upload</p>
                                </div>
                              )}
                            </label>
                          </div>
                          {errors.licence_file && <p className={errorClasses}>{errors.licence_file}</p>}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-semibold mb-2 text-sm">
                            Licence Expiry Date <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FaRegCalendarAlt className="text-gray-400 text-sm" />
                            </div>
                            <input
                              type="date"
                              name="expiry"
                              value={formData.expiry}
                              onChange={handleChange}
                              className={`${inputClasses} pl-10 ${errors.expiry ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:ring-[#f7942f]/20 focus:border-[#f7942f]"}`}
                            />
                          </div>
                          {errors.expiry && <p className={errorClasses}>{errors.expiry}</p>}
                        </div>
                      </>
                    )}

                    {/* Terms and Conditions */}
                    <div className="md:col-span-2">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={agreeTerms}
                          onChange={(e) => setAgreeTerms(e.target.checked)}
                          className="mt-1 w-4 h-4 text-[#f7942f] focus:ring-[#f7942f]/20 rounded"
                        />
                        <span className="text-sm text-gray-600">
                          I agree to the <Link to="/terms" className="text-[#f7942f] hover:underline">Terms of Use</Link> and{' '}
                          <Link to="/privacy" className="text-[#f7942f] hover:underline">Privacy Policy</Link>
                          <span className="text-red-500">*</span>
                        </span>
                      </label>
                      {errors.terms && <p className={errorClasses}>{errors.terms}</p>}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    name="registor"
                    disabled={isLoading}
                    className="w-full mt-8 bg-gradient-to-r from-[#f7942f] to-orange-500 text-white py-3 rounded-xl font-black hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Creating Account...
                      </>
                    ) : (
                      <>
                        Sign Up
                        <FaArrowRight className="text-sm" />
                      </>
                    )}
                  </button>

                  {/* Login Link */}
                  <div className="text-center mt-6">
                    <p className="text-gray-600">
                      Already have an account?{' '}
                      <Link to="/login" className="text-[#f7942f] font-semibold hover:text-orange-600 transition-colors">
                        Log in here
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Right Side - Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-xl p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#f7942f] to-orange-500 flex items-center justify-center mx-auto mb-4">
                    <FaUserCheck className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Why Register?</h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-[#f7942f] to-orange-500 mx-auto"></div>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: FaStar, text: "Access to online training courses" },
                    { icon: FaIdCard, text: "Get certified & download certificates" },
                    { icon: FaShieldAlt, text: "Track your training progress" },
                    { icon: FaCheckCircle, text: "Receive updates on new courses" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#f7942f]/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-[#f7942f] text-sm" />
                      </div>
                      <p className="text-gray-300 text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-700 mt-6 pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-xs" />
                      ))}
                    </div>
                    <span className="text-gray-400 text-xs">500+ Active Students</span>
                  </div>
                  <p className="text-gray-400 text-xs text-center">
                    Join our community of certified forklift operators
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-gray-400 text-xs text-center">
                    Need help?{' '}
                    <a href="tel:+16475610046" className="text-[#f7942f] hover:underline">
                      +1 (647) 561-0046
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;