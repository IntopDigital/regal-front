import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FaEnvelope, 
  FaLock, 
  FaEye, 
  FaEyeSlash, 
  FaArrowRight, 
  FaGoogle, 
  FaFacebook, 
  FaLinkedin,
  FaUserGraduate,
  FaShieldAlt,
  FaCheckCircle,
  FaTimes,
  FaPaperPlane
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const [resetError, setResetError] = useState("");
  const [isSendingReset, setIsSendingReset] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard or home
      navigate("/dashboard");
    }, 1500);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    
    // Validate email
    if (!resetEmail) {
      setResetError("Email is required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(resetEmail)) {
      setResetError("Please enter a valid email address");
      return;
    }

    setIsSendingReset(true);
    setResetError("");
    setResetMessage("");

    // Simulate API call to send reset email
    setTimeout(() => {
      setIsSendingReset(false);
      setResetMessage(`Password reset link has been sent to ${resetEmail} if the email exists in our system.`);
      
      // Clear the email after 2 seconds
      setTimeout(() => {
        setResetEmail("");
        // Close modal after 2 seconds
        setTimeout(() => {
          setShowForgotModal(false);
          setResetMessage("");
        }, 2000);
      }, 2000);
    }, 1500);
  };

  const openForgotModal = () => {
    setShowForgotModal(true);
    setResetEmail("");
    setResetMessage("");
    setResetError("");
  };

  const features = [
    { icon: FaUserGraduate, text: "Access your training records" },
    { icon: FaShieldAlt, text: "Secure & encrypted platform" },
    { icon: FaCheckCircle, text: "Track certification status" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f7942f]/10 backdrop-blur-sm mb-4">
              <FaUserGraduate className="text-[#f7942f] text-sm" />
              <span className="text-[#f7942f] font-bold text-sm uppercase tracking-wider">Welcome Back</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3">
              Sign In to Your Account
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#f7942f] to-orange-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Access your training courses, certifications, and account details
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Login Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl p-6 md:p-8 lg:p-10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400 text-sm" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all text-sm md:text-base ${
                        errors.email 
                          ? "border-red-500 focus:ring-red-200 focus:border-red-500" 
                          : "border-gray-200 focus:ring-[#f7942f]/20 focus:border-[#f7942f]"
                      }`}
                      placeholder="john@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                    Password *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400 text-sm" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all text-sm md:text-base ${
                        errors.password 
                          ? "border-red-500 focus:ring-red-200 focus:border-red-500" 
                          : "border-gray-200 focus:ring-[#f7942f]/20 focus:border-[#f7942f]"
                      }`}
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <FaEyeSlash className="text-gray-400 hover:text-gray-600 text-sm" />
                      ) : (
                        <FaEye className="text-gray-400 hover:text-gray-600 text-sm" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                  )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-gray-300 text-[#f7942f] focus:ring-[#f7942f]/20"
                    />
                    <span className="text-sm text-gray-600">Remember me</span>
                  </label>
                  <button 
                    type="button"
                    onClick={openForgotModal}
                    className="text-sm text-[#f7942f] hover:text-orange-600 font-semibold transition-colors"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-[#f7942f] to-orange-500 text-white py-3 rounded-xl font-black hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Signing In...
                    </>
                  ) : (
                    <>
                      Sign In
                      <FaArrowRight className="text-sm" />
                    </>
                  )}
                </button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-3 gap-3">
                  <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-300 group">
                    <FaGoogle className="text-red-500 text-sm group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline text-sm">Google</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-300 group">
                    <FaFacebook className="text-blue-600 text-sm group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline text-sm">Facebook</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-300 group">
                    <FaLinkedin className="text-blue-700 text-sm group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline text-sm">LinkedIn</span>
                  </button>
                </div>

                {/* Sign Up Link */}
                <p className="text-center text-gray-600 text-sm">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-[#f7942f] font-semibold hover:text-orange-600 transition-colors">
                    Create an account
                  </Link>
                </p>
              </form>
            </motion.div>

            {/* Right Side - Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-xl p-6 md:p-8 lg:p-10 text-white"
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#f7942f] to-orange-500 flex items-center justify-center mb-6">
                    <FaUserGraduate className="text-2xl text-white" />
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-black mb-4">
                    Welcome to Regal Forklift
                  </h2>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Access your personalized dashboard to track your training progress, download certificates, and manage your account.
                  </p>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#f7942f]/20 flex items-center justify-center flex-shrink-0">
                          <feature.icon className="text-[#f7942f] text-sm" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="border-t border-gray-700 pt-6 mt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">Trusted by 500+ students</span>
                  </div>
                  <p className="text-gray-300 text-sm italic">
                    "The training programs at Regal Forklift are exceptional. Easy to access and very comprehensive!"
                  </p>
                  <p className="text-amber-500 text-sm font-semibold mt-2">
                    — Michael Thompson
                  </p>
                </div>

                {/* Support Contact */}
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <p className="text-gray-400 text-xs text-center">
                    Need help? Contact our support team at{" "}
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

      {/* Forgot Password Modal */}
      <AnimatePresence>
        {showForgotModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => !isSendingReset && setShowForgotModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[#f7942f] to-orange-500 px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <FaLock className="text-white text-lg" />
                  </div>
                  <h3 className="text-white font-bold text-xl">Reset Password</h3>
                </div>
                <button
                  onClick={() => !isSendingReset && setShowForgotModal(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                {!resetMessage ? (
                  <>
                    <p className="text-gray-600 mb-6 text-sm">
                      Enter your registered email address and we'll send you a link to reset your password.
                    </p>
                    
                    <form onSubmit={handleForgotPassword}>
                      <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2 text-sm">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaEnvelope className="text-gray-400 text-sm" />
                          </div>
                          <input
                            type="email"
                            value={resetEmail}
                            onChange={(e) => {
                              setResetEmail(e.target.value);
                              setResetError("");
                            }}
                            className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                              resetError
                                ? "border-red-500 focus:ring-red-200"
                                : "border-gray-200 focus:ring-[#f7942f]/20 focus:border-[#f7942f]"
                            }`}
                            placeholder="your@email.com"
                            disabled={isSendingReset}
                          />
                        </div>
                        {resetError && (
                          <p className="text-red-500 text-xs mt-1">{resetError}</p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSendingReset}
                        className="w-full bg-gradient-to-r from-[#f7942f] to-orange-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSendingReset ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Reset Link
                            <FaPaperPlane className="text-sm" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <FaCheckCircle className="text-green-500 text-2xl" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">Email Sent!</h4>
                    <p className="text-gray-600 text-sm">{resetMessage}</p>
                    <p className="text-gray-500 text-xs mt-3">Redirecting you back to login...</p>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              {!resetMessage && (
                <div className="border-t border-gray-100 px-6 py-4 bg-gray-50">
                  <p className="text-xs text-center text-gray-500">
                    Remember your password?{" "}
                    <button
                      onClick={() => setShowForgotModal(false)}
                      className="text-[#f7942f] font-semibold hover:underline"
                    >
                      Back to Login
                    </button>
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Login;