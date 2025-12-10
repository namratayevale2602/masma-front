// MembershipPlans.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheck,
  FaTimes,
  FaStar,
  FaInfoCircle,
  FaUsers,
  FaBuilding,
  FaStore,
  FaCrown,
  FaGraduationCap,
  FaRupeeSign,
  FaCalendarAlt,
  FaRegCreditCard,
  FaEnvelope,
  FaGlobe,
  FaChevronDown,
  FaChevronUp,
  FaVideo,
  FaBullhorn,
  FaTags,
  FaUserGraduate,
  FaUserTie,
  FaChartLine,
  FaHandshake,
  FaFileContract,
  FaPercent,
  FaChair,
} from "react-icons/fa";
import membershipData from "../../data/membershipData.json";

const MembershipPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const [expandedFeature, setExpandedFeature] = useState(null);

  const getPlanIcon = (planName) => {
    switch (planName) {
      case "Students":
        return <FaUserGraduate className="w-6 h-6" />;
      case "EPC Classic":
        return <FaUserTie className="w-6 h-6" />;
      case "EPC Lifetime":
        return <FaCrown className="w-6 h-6" />;
      case "Dealer /Distributor":
        return <FaStore className="w-6 h-6" />;
      case "Corporate Silver":
        return <FaBuilding className="w-6 h-6" />;
      case "Corporate Gold":
        return <FaChartLine className="w-6 h-6" />;
      default:
        return <FaUsers className="w-6 h-6" />;
    }
  };

  const getFeatureIcon = (featureIndex) => {
    const icons = [
      <FaUsers className="w-4 h-4" />,
      <FaVideo className="w-4 h-4" />,
      <FaUserGraduate className="w-4 h-4" />,
      <FaHandshake className="w-4 h-4" />,
      <FaGlobe className="w-4 h-4" />,
      <FaBullhorn className="w-4 h-4" />,
      <FaVideo className="w-4 h-4" />,
      <FaBullhorn className="w-4 h-4" />,
      <FaPercent className="w-4 h-4" />,
      <FaChair className="w-4 h-4" />,
    ];
    return icons[featureIndex] || <FaInfoCircle className="w-4 h-4" />;
  };

  const formatFeatureValue = (value) => {
    if (!value) return null;
    if (value === "Yes") return <FaCheck className="w-4 h-4 text-green-500" />;
    if (
      value === "Selective Events" ||
      value.includes("Month") ||
      value.includes("year") ||
      value.includes("Free") ||
      value.includes("Discount")
    ) {
      return (
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-orange-100 text-[#ed6605]">
          {value}
        </span>
      );
    }
    if (value === "Add Charges") {
      return (
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-[#005aa8]">
          {value}
        </span>
      );
    }
    return value;
  };

  const isFeatureAvailable = (value) => {
    return value && value !== "No";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 pt-40 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-[#005aa8] mr-4"></div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              MASMA Membership
            </h1>
            <div className="w-12 h-1 bg-[#ed6605] ml-4"></div>
          </div>
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: "#005aa8" }}
          >
            Plan for 2023-24
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose the membership plan that best fits your needs and take your
            business to the next level
          </p>

          {/* View Mode Toggle */}
          <div className="inline-flex bg-white rounded-full p-1 shadow-md mb-8">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode("grid")}
              className={`flex items-center px-6 py-2 rounded-full font-medium transition-all ${
                viewMode === "grid"
                  ? "bg-linear-to-r from-[#005aa8] to-[#004080] text-white"
                  : "text-gray-600 hover:text-[#005aa8]"
              }`}
            >
              <FaUsers className="mr-2" />
              Grid View
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode("table")}
              className={`flex items-center px-6 py-2 rounded-full font-medium transition-all ${
                viewMode === "table"
                  ? "bg-linear-to-r from-[#005aa8] to-[#004080] text-white"
                  : "text-gray-600 hover:text-[#005aa8]"
              }`}
            >
              <FaBuilding className="mr-2" />
              Table View
            </motion.button>
          </div>
        </motion.div>

        {/* Grid View */}
        {viewMode === "grid" && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {membershipData.membershipPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={cardVariants}
                whileHover="hover"
                className={`relative rounded-2xl overflow-hidden shadow-lg ${
                  plan.highlight ? "ring-2 ring-[#ed6605]" : ""
                }`}
                style={{
                  background: plan.highlight
                    ? "linear-linear(135deg, #ffffff 0%, #fff9f5 100%)"
                    : "white",
                }}
              >
                {/* Highlight Badge */}
                {plan.highlight && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center bg-linear-to-r from-[#ed6605] to-[#ff8c42] text-white px-4 py-2 rounded-full shadow-lg">
                      <FaStar className="mr-2" />
                      <span className="font-bold text-sm">MOST POPULAR</span>
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div
                  className="relative h-32"
                  style={{
                    background:
                      "linear-linear(135deg, #005aa8 0%, #004080 100%)",
                  }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-black p-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-100 bg-opacity-20 rounded-full mb-3">
                      {getPlanIcon(plan.name)}
                    </div>
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                  </div>
                </div>

                {/* Pricing */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-end justify-between mb-2">
                    <div>
                      <span
                        className="text-3xl font-bold"
                        style={{ color: "#005aa8" }}
                      >
                        {plan.pricing.membershipFee}
                      </span>
                      <span className="text-gray-500 ml-2">
                        / {plan.pricing.duration}
                      </span>
                    </div>
                    {plan.pricing.registrationCharges && (
                      <div
                        className="text-sm flex items-center"
                        style={{ color: "#ed6605" }}
                      >
                        <FaInfoCircle className="mr-1" />+{" "}
                        {plan.pricing.registrationCharges} registration
                      </div>
                    )}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <FaCalendarAlt className="mr-2" />
                    <span>Duration: {plan.pricing.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="p-6">
                  <h4 className="font-bold text-gray-700 mb-4 flex items-center">
                    <FaCheck className="mr-2 text-green-500" />
                    Key Benefits
                  </h4>
                  <div className="space-y-3">
                    {Object.entries(plan.features).map(
                      ([key, value], idx) =>
                        isFeatureAvailable(value) && (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start"
                          >
                            <div className="shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mr-3 mt-0.5">
                              {getFeatureIcon(idx)}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-gray-700 font-medium">
                                {membershipData.featureLabels[idx]}
                              </p>
                              <div className="mt-1">
                                {formatFeatureValue(value)}
                              </div>
                            </div>
                          </motion.div>
                        )
                    )}
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedPlan(index)}
                    className={`w-full mt-8 py-3 rounded-lg font-bold flex items-center justify-center transition-all ${
                      plan.highlight
                        ? "bg-linear-to-r from-[#ed6605] to-[#ff8c42]"
                        : "bg-linear-to-r from-[#005aa8] to-[#004080]"
                    } text-white shadow-md hover:shadow-lg`}
                  >
                    <FaRegCreditCard className="mr-2" />
                    Select Plan
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Table View */}
        {viewMode === "table" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-linear-to-r from-[#005aa8] to-[#004080] text-white">
                    <th className="text-left p-6 font-bold text-lg">
                      <div className="flex items-center">
                        <FaInfoCircle className="mr-2" />
                        Benefits
                      </div>
                    </th>
                    {membershipData.membershipPlans.map((plan) => (
                      <th key={plan.name} className="p-6 text-center">
                        <div className="flex flex-col items-center">
                          <div className="flex items-center mb-2">
                            {getPlanIcon(plan.name)}
                            <span className="ml-2 font-bold">{plan.name}</span>
                          </div>
                          {plan.highlight && (
                            <div className="inline-flex items-center bg-[#ed6605] px-3 py-1 rounded-full text-xs">
                              <FaStar className="mr-1" />
                              Popular
                            </div>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {membershipData.featureLabels.map(
                    (featureLabel, featureIndex) => (
                      <React.Fragment key={featureIndex}>
                        <tr
                          className={`hover:bg-gray-50 cursor-pointer ${
                            expandedFeature === featureIndex ? "bg-gray-50" : ""
                          }`}
                          onClick={() =>
                            setExpandedFeature(
                              expandedFeature === featureIndex
                                ? null
                                : featureIndex
                            )
                          }
                        >
                          <td className="p-4 border-t border-gray-200">
                            <div className="flex items-center">
                              <div className="shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                                {getFeatureIcon(featureIndex)}
                              </div>
                              <span className="font-medium text-gray-700">
                                {featureLabel}
                              </span>
                              <button className="ml-auto">
                                {expandedFeature === featureIndex ? (
                                  <FaChevronUp className="text-gray-400" />
                                ) : (
                                  <FaChevronDown className="text-gray-400" />
                                )}
                              </button>
                            </div>
                          </td>
                          {membershipData.membershipPlans.map(
                            (plan, planIndex) => {
                              const featureKey = Object.keys(plan.features)[
                                featureIndex
                              ];
                              const value = plan.features[featureKey];
                              return (
                                <td
                                  key={planIndex}
                                  className="p-4 border-t border-gray-200 text-center"
                                >
                                  <div className="flex justify-center">
                                    {value ? (
                                      <div className="flex flex-col items-center">
                                        <div className="mb-1">
                                          {value === "Yes" ? (
                                            <FaCheck className="w-5 h-5 text-green-500" />
                                          ) : (
                                            <div
                                              className="text-xs font-medium px-2 py-1 rounded-full"
                                              style={{
                                                backgroundColor:
                                                  value.includes("Month") ||
                                                  value.includes("year") ||
                                                  value.includes("Free")
                                                    ? "#ffedd5"
                                                    : value === "Add Charges"
                                                    ? "#dbeafe"
                                                    : "#dcfce7",
                                                color:
                                                  value.includes("Month") ||
                                                  value.includes("year") ||
                                                  value.includes("Free")
                                                    ? "#ed6605"
                                                    : value === "Add Charges"
                                                    ? "#005aa8"
                                                    : "#166534",
                                              }}
                                            >
                                              {value}
                                            </div>
                                          )}
                                        </div>
                                        {expandedFeature === featureIndex &&
                                          value !== "Yes" && (
                                            <div className="text-xs text-gray-500 mt-1 max-w-xs">
                                              {featureIndex === 0 &&
                                                "Personal meeting invitations"}
                                              {featureIndex === 1 &&
                                                "Online meeting access"}
                                              {featureIndex === 2 &&
                                                "Associate members group"}
                                              {featureIndex === 3 &&
                                                "Main MASMA group access"}
                                              {featureIndex === 4 &&
                                                "Website listing"}
                                              {featureIndex === 5 &&
                                                "Official groups advertisement"}
                                              {featureIndex === 6 &&
                                                "Webinar hosting capabilities"}
                                              {featureIndex === 7 &&
                                                "Website advertisement space"}
                                              {featureIndex === 8 &&
                                                "Event sponsorship discounts"}
                                              {featureIndex === 9 &&
                                                "Exhibition stall discounts"}
                                            </div>
                                          )}
                                      </div>
                                    ) : (
                                      <FaTimes className="w-5 h-5 text-gray-300" />
                                    )}
                                  </div>
                                </td>
                              );
                            }
                          )}
                        </tr>
                      </React.Fragment>
                    )
                  )}

                  {/* Membership Fees Row */}
                  <tr className="bg-linear-to-r from-gray-50 to-gray-100">
                    <td className="p-6 border-t border-gray-300">
                      <div
                        className="flex items-center font-bold text-lg"
                        style={{ color: "#005aa8" }}
                      >
                        <FaRupeeSign className="mr-2" />
                        Membership Fees
                      </div>
                    </td>
                    {membershipData.membershipPlans.map((plan, index) => (
                      <td
                        key={index}
                        className="p-6 border-t border-gray-300 text-center"
                      >
                        <div className="flex flex-col items-center">
                          <div
                            className="text-2xl font-bold mb-1"
                            style={{ color: "#005aa8" }}
                          >
                            {plan.pricing.membershipFee}
                          </div>
                          <div className="text-sm text-gray-600 mb-1 flex items-center">
                            <FaCalendarAlt className="mr-1" />
                            {plan.pricing.duration}
                          </div>
                          {plan.pricing.registrationCharges && (
                            <div className="text-xs font-medium px-2 py-1 rounded-full bg-orange-100 text-[#ed6605] flex items-center">
                              <FaInfoCircle className="mr-1" />+
                              {plan.pricing.registrationCharges} registration
                            </div>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Duration Row */}
                  <tr className="bg-white">
                    <td className="p-6 border-t border-gray-200">
                      <div
                        className="flex items-center font-bold text-lg"
                        style={{ color: "#005aa8" }}
                      >
                        <FaCalendarAlt className="mr-2" />
                        Duration of Membership
                      </div>
                    </td>
                    {membershipData.membershipPlans.map((plan, index) => (
                      <td
                        key={index}
                        className="p-6 border-t border-gray-200 text-center"
                      >
                        <div
                          className="font-medium"
                          style={{ color: "#005aa8" }}
                        >
                          {plan.pricing.duration}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Contact Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-8 md:mb-0 md:mr-8">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-1 bg-[#005aa8] mr-3"></div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: "#005aa8" }}
                  >
                    Ready to Join MASMA?
                  </h3>
                  <div className="w-8 h-1 bg-[#ed6605] ml-3"></div>
                </div>
                <p className="text-gray-600 mb-4 max-w-md">
                  Become part of India's leading business community and unlock
                  exclusive benefits for your growth.
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <FaCalendarAlt className="mr-2" />
                  <span>Membership valid for Economic Year 2023-24</span>
                </div>
              </div>

              <div className="text-center md:text-right">
                <div className="mb-6">
                  <a
                    href="mailto:info@masma.in"
                    className="group flex items-center justify-center md:justify-end text-lg font-bold mb-2 hover:text-[#ed6605] transition-colors"
                    style={{ color: "#005aa8" }}
                  >
                    <FaEnvelope className="mr-2 group-hover:scale-110 transition-transform" />
                    info@masma.in
                  </a>
                  <a
                    href="https://www.masma.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center md:justify-end text-lg font-medium hover:text-[#005aa8] transition-colors"
                    style={{ color: "#ed6605" }}
                  >
                    <FaGlobe className="mr-2 group-hover:scale-110 transition-transform" />
                    www.masma.in
                  </a>
                </div>
                <div
                  className="text-sm font-bold tracking-wider uppercase border-t pt-4 flex items-center justify-center md:justify-end"
                  style={{ color: "#005aa8" }}
                >
                  <FaHandshake className="mr-2" />
                  Only Business, Nothing Else...
                </div>
              </div>
            </div>
          </div>

          {/* linear Border Bottom */}
          <div className="h-2 bg-linear-to-r from-[#005aa8] via-[#ed6605] to-[#005aa8]"></div>
        </motion.div>

        {/* Selected Plan Modal */}
        <AnimatePresence>
          {selectedPlan !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedPlan(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-2xl p-8 max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center mb-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-linear-to-r from-[#005aa8] to-[#004080] flex items-center justify-center text-white mr-4">
                    {getPlanIcon(
                      membershipData.membershipPlans[selectedPlan].name
                    )}
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold"
                      style={{ color: "#005aa8" }}
                    >
                      {membershipData.membershipPlans[selectedPlan].name}
                    </h3>
                    <p className="text-gray-600">Plan Selected</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <FaRupeeSign className="mr-2 text-gray-600" />
                      <span className="font-medium">Membership Fee</span>
                    </div>
                    <span
                      className="text-2xl font-bold"
                      style={{ color: "#005aa8" }}
                    >
                      {
                        membershipData.membershipPlans[selectedPlan].pricing
                          .membershipFee
                      }
                    </span>
                  </div>

                  {membershipData.membershipPlans[selectedPlan].pricing
                    .registrationCharges && (
                    <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                      <div className="flex items-center">
                        <FaFileContract
                          className="mr-2"
                          style={{ color: "#ed6605" }}
                        />
                        <span className="font-medium">
                          Registration Charges
                        </span>
                      </div>
                      <span
                        className="text-xl font-bold"
                        style={{ color: "#ed6605" }}
                      >
                        {
                          membershipData.membershipPlans[selectedPlan].pricing
                            .registrationCharges
                        }
                      </span>
                    </div>
                  )}

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2 text-blue-600" />
                        <span className="font-medium">Duration</span>
                      </div>
                      <span className="font-bold" style={{ color: "#005aa8" }}>
                        {
                          membershipData.membershipPlans[selectedPlan].pricing
                            .duration
                        }
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Valid for Economic Year 2023-24
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedPlan(null)}
                    className="flex-1 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                  >
                    <FaTimes className="mr-2" />
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-3 font-bold rounded-lg text-white shadow-md flex items-center justify-center"
                    style={{
                      background:
                        "linear-linear(135deg, #005aa8 0%, #ed6605 100%)",
                    }}
                  >
                    <FaRegCreditCard className="mr-2" />
                    Proceed to Payment
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MembershipPlans;
