// MembershipPlans.jsx
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FaCheck,
//   FaTimes,
//   FaStar,
//   FaInfoCircle,
//   FaUsers,
//   FaBuilding,
//   FaStore,
//   FaCrown,
//   FaUserGraduate,
//   FaUserTie,
//   FaChartLine,
//   FaRupeeSign,
//   FaCalendarAlt,
//   FaExternalLinkAlt,
// } from "react-icons/fa";

// const membershipData = {
//   membershipPlans: [
//     {
//       name: "Students",
//       highlight: false,
//       features: {
//         personalMeetingInvitation: "Yes",
//         onlineMeeting: "Yes",
//         associateMembersGroup: "Yes",
//         mainMasmaGroup: "Yes",
//         websiteListing: "Yes",
//         officialGroupsAdvertisement: "No",
//         webinarHosting: "No",
//         websiteAdvertisement: "No",
//         eventSponsorshipDiscount: "No",
//         exhibitionStallDiscount: "No",
//       },
//       pricing: {
//         membershipFee: "₹2,500",
//         registrationCharges: "",
//         duration: "2 Years",
//       },
//     },
//     {
//       name: "EPC Classic",
//       highlight: true,
//       features: {
//         personalMeetingInvitation: "Yes",
//         onlineMeeting: "Yes",
//         associateMembersGroup: "Yes",
//         mainMasmaGroup: "Yes",
//         websiteListing: "Yes",
//         officialGroupsAdvertisement: "2 Month Free",
//         webinarHosting: "Yes",
//         websiteAdvertisement: "Add Charges",
//         eventSponsorshipDiscount: "10% Discount",
//         exhibitionStallDiscount: "5% Discount",
//       },
//       pricing: {
//         membershipFee: "₹10,000",
//         registrationCharges: "₹2,500",
//         duration: "1 Year",
//       },
//     },
//     {
//       name: "EPC Lifetime",
//       highlight: false,
//       features: {
//         personalMeetingInvitation: "Yes",
//         onlineMeeting: "Yes",
//         associateMembersGroup: "Yes",
//         mainMasmaGroup: "Yes",
//         websiteListing: "Yes",
//         officialGroupsAdvertisement: "1 year Free",
//         webinarHosting: "Yes",
//         websiteAdvertisement: "Add Charges",
//         eventSponsorshipDiscount: "20% Discount",
//         exhibitionStallDiscount: "10% Discount",
//       },
//       pricing: {
//         membershipFee: "₹75,000",
//         registrationCharges: "",
//         duration: "Lifetime",
//       },
//     },
//     {
//       name: "Dealer /Distributor",
//       highlight: false,
//       features: {
//         personalMeetingInvitation: "Yes",
//         onlineMeeting: "Yes",
//         associateMembersGroup: "Yes",
//         mainMasmaGroup: "Yes",
//         websiteListing: "Yes",
//         officialGroupsAdvertisement: "2 Month Free",
//         webinarHosting: "Add Charges",
//         websiteAdvertisement: "Add Charges",
//         eventSponsorshipDiscount: "10% Discount",
//         exhibitionStallDiscount: "5% Discount",
//       },
//       pricing: {
//         membershipFee: "₹25,000",
//         registrationCharges: "₹2,500",
//         duration: "1 Year",
//       },
//     },
//     {
//       name: "Corporate Silver",
//       highlight: false,
//       features: {
//         personalMeetingInvitation: "Yes",
//         onlineMeeting: "Yes",
//         associateMembersGroup: "Yes",
//         mainMasmaGroup: "Yes",
//         websiteListing: "Yes",
//         officialGroupsAdvertisement: "6 Month Free",
//         webinarHosting: "Yes",
//         websiteAdvertisement: "Add Charges",
//         eventSponsorshipDiscount: "15% Discount",
//         exhibitionStallDiscount: "10% Discount",
//       },
//       pricing: {
//         membershipFee: "₹50,000",
//         registrationCharges: "₹2,500",
//         duration: "1 Year",
//       },
//     },
//     {
//       name: "Corporate Gold",
//       highlight: false,
//       features: {
//         personalMeetingInvitation: "Yes",
//         onlineMeeting: "Yes",
//         associateMembersGroup: "Yes",
//         mainMasmaGroup: "Yes",
//         websiteListing: "Yes",
//         officialGroupsAdvertisement: "1 year Free",
//         webinarHosting: "Yes",
//         websiteAdvertisement: "Add Charges",
//         eventSponsorshipDiscount: "25% Discount",
//         exhibitionStallDiscount: "15% Discount",
//       },
//       pricing: {
//         membershipFee: "₹1,00,000",
//         registrationCharges: "₹2,500",
//         duration: "1 Year",
//       },
//     },
//   ],
//   featureLabels: [
//     "Personal Meeting Invitation",
//     "Online Meeting Access",
//     "Associate Members Group",
//     "Main MASMA Group",
//     "Website Listing",
//     "Official Groups Advertisement",
//     "Webinar Hosting",
//     "Website Advertisement",
//     "Event Sponsorship Discount",
//     "Exhibition Stall Discount",
//   ],
// };

// const MembershipPlans = () => {
//   const [expandedFeature, setExpandedFeature] = useState(null);

//   const handleRedirect = (planName) => {
//     const planUrls = {
//       Students: "bemember",
//       "EPC Classic": "bemember",
//       "EPC Lifetime": "bemember",
//       "Dealer /Distributor": "bemember",
//       "Corporate Silver": "bemember",
//       "Corporate Gold": "bemember",
//     };
//     const url = planUrls[planName] || "bemember";
//     window.open(url, "_blank");
//   };

//   const handleLearnMore = () => {
//     window.open("bemember", "_blank");
//   };

//   const getPlanIcon = (planName) => {
//     switch (planName) {
//       case "Students":
//         return <FaUserGraduate className="w-4 h-4 sm:w-5 sm:h-5" />;
//       case "EPC Classic":
//         return <FaUserTie className="w-4 h-4 sm:w-5 sm:h-5" />;
//       case "EPC Lifetime":
//         return <FaCrown className="w-4 h-4 sm:w-5 sm:h-5" />;
//       case "Dealer /Distributor":
//         return <FaStore className="w-4 h-4 sm:w-5 sm:h-5" />;
//       case "Corporate Silver":
//         return <FaBuilding className="w-4 h-4 sm:w-5 sm:h-5" />;
//       case "Corporate Gold":
//         return <FaChartLine className="w-4 h-4 sm:w-5 sm:h-5" />;
//       default:
//         return <FaUsers className="w-4 h-4 sm:w-5 sm:h-5" />;
//     }
//   };

//   const getFeatureIcon = (featureIndex) => {
//     const icons = [
//       <FaUsers className="w-3 h-3 sm:w-4 sm:h-4" />,
//       <FaUsers className="w-3 h-3 sm:w-4 sm:h-4" />,
//       <FaUserGraduate className="w-3 h-3 sm:w-4 sm:h-4" />,
//       <FaUsers className="w-3 h-3 sm:w-4 sm:h-4" />,
//       <FaInfoCircle className="w-3 h-3 sm:w-4 sm:h-4" />,
//       <FaInfoCircle className="w-3 h-3 sm:w-4 sm:h-4" />,
//       <FaInfoCircle className="w-3 h-3 sm:w-4 sm:h-4" />,
//       <FaInfoCircle className="w-3 h-3 sm:w-4 sm:h-4" />,
//       <FaInfoCircle className="w-3 h-3 sm:w-4 sm:h-4" />,
//       <FaInfoCircle className="w-3 h-3 sm:w-4 sm:h-4" />,
//     ];
//     return (
//       icons[featureIndex] || <FaInfoCircle className="w-3 h-3 sm:w-4 sm:h-4" />
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-28 sm:pt-32 md:pt-40 py-4 px-3 sm:px-4 md:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-6 sm:mb-8 md:mb-12 px-2"
//         >
//           <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#005aa8] mb-2 sm:mb-3 md:mb-4">
//             MASMA Membership
//           </h1>
//           <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-2">
//             Choose the membership plan that best fits your needs
//           </p>
//         </motion.div>

//         {/* Table View - No horizontal scroll on mobile */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg overflow-hidden"
//         >
//           {/* Mobile View - Stacked Cards */}
//           <div className="block md:hidden">
//             {membershipData.featureLabels.map((featureLabel, featureIndex) => (
//               <div key={featureIndex} className="border-b border-gray-200">
//                 <div className="p-3 border-b border-gray-100 bg-gray-50">
//                   <div className="flex items-center">
//                     <div className="shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mr-2">
//                       {getFeatureIcon(featureIndex)}
//                     </div>
//                     <span className="font-medium text-gray-700 text-sm">
//                       {featureLabel}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-1 p-2">
//                   {membershipData.membershipPlans.map((plan, planIndex) => {
//                     const featureKey = Object.keys(plan.features)[featureIndex];
//                     const value = plan.features[featureKey];
//                     return (
//                       <div
//                         key={planIndex}
//                         className="text-center p-2 hover:bg-gray-50 rounded-lg"
//                         onClick={() => handleRedirect(plan.name)}
//                       >
//                         <div className="text-xs font-medium text-gray-600 mb-1 truncate">
//                           {plan.name}
//                         </div>
//                         <div className="flex justify-center">
//                           {value ? (
//                             value === "Yes" ? (
//                               <FaCheck className="w-4 h-4 text-green-500" />
//                             ) : (
//                               <span
//                                 className="text-[10px] font-medium px-1.5 py-0.5 rounded-full whitespace-nowrap"
//                                 style={{
//                                   backgroundColor:
//                                     value.includes("Month") ||
//                                     value.includes("year") ||
//                                     value.includes("Free")
//                                       ? "#ffedd5"
//                                       : value === "Add Charges"
//                                         ? "#dbeafe"
//                                         : "#dcfce7",
//                                   color:
//                                     value.includes("Month") ||
//                                     value.includes("year") ||
//                                     value.includes("Free")
//                                       ? "#ed6605"
//                                       : value === "Add Charges"
//                                         ? "#005aa8"
//                                         : "#166534",
//                                 }}
//                               >
//                                 {value}
//                               </span>
//                             )
//                           ) : (
//                             <FaTimes className="w-4 h-4 text-gray-300" />
//                           )}
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             ))}

//             {/* Pricing Section - Mobile */}
//             <div className="border-t border-gray-300 p-4">
//               <div className="grid grid-cols-2 gap-3">
//                 {membershipData.membershipPlans.map((plan, index) => (
//                   <div
//                     key={index}
//                     className="text-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
//                     onClick={() => handleRedirect(plan.name)}
//                   >
//                     <div className="flex items-center justify-center mb-2">
//                       {getPlanIcon(plan.name)}
//                       <span className="ml-2 text-sm font-bold text-[#005aa8] truncate">
//                         {plan.name}
//                       </span>
//                     </div>
//                     <div className="text-lg font-bold text-[#005aa8] mb-1">
//                       {plan.pricing.membershipFee}
//                     </div>
//                     <div className="text-xs text-gray-600 mb-1 flex items-center justify-center">
//                       <FaCalendarAlt className="mr-1 w-3 h-3" />
//                       {plan.pricing.duration}
//                     </div>
//                     {plan.pricing.registrationCharges && (
//                       <div className="text-[10px] font-medium px-2 py-1 rounded-full bg-orange-100 text-[#ed6605]">
//                         +{plan.pricing.registrationCharges}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Desktop View - Table */}
//           <div className="hidden md:block">
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gradient-to-r from-[#005aa8] to-[#004080] text-white">
//                     <th className="text-left p-4 md:p-6 font-bold">
//                       <div className="flex items-center">
//                         <FaInfoCircle className="mr-2" />
//                         Benefits
//                       </div>
//                     </th>
//                     {membershipData.membershipPlans.map((plan) => (
//                       <th
//                         key={plan.name}
//                         className="p-4 md:p-6 text-center cursor-pointer hover:opacity-90 transition-opacity"
//                         onClick={() => handleRedirect(plan.name)}
//                       >
//                         <div className="flex flex-col items-center">
//                           <div className="flex items-center mb-2">
//                             {getPlanIcon(plan.name)}
//                             <span className="ml-2 font-bold text-sm md:text-base">
//                               {plan.name}
//                             </span>
//                           </div>
//                           {plan.highlight && (
//                             <div className="inline-flex items-center bg-[#ed6605] px-3 py-1 rounded-full text-xs">
//                               <FaStar className="mr-1 w-3 h-3" />
//                               Popular
//                             </div>
//                           )}
//                         </div>
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {membershipData.featureLabels.map(
//                     (featureLabel, featureIndex) => (
//                       <tr
//                         key={featureIndex}
//                         className="hover:bg-gray-50 border-t border-gray-200"
//                       >
//                         <td className="p-4 md:p-6">
//                           <div className="flex items-center">
//                             <div className="shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
//                               {getFeatureIcon(featureIndex)}
//                             </div>
//                             <span className="font-medium text-gray-700">
//                               {featureLabel}
//                             </span>
//                           </div>
//                         </td>
//                         {membershipData.membershipPlans.map(
//                           (plan, planIndex) => {
//                             const featureKey = Object.keys(plan.features)[
//                               featureIndex
//                             ];
//                             const value = plan.features[featureKey];
//                             return (
//                               <td
//                                 key={planIndex}
//                                 className="p-4 md:p-6 text-center cursor-pointer hover:bg-blue-50 transition-colors"
//                                 onClick={() => handleRedirect(plan.name)}
//                               >
//                                 <div className="flex justify-center">
//                                   {value ? (
//                                     value === "Yes" ? (
//                                       <FaCheck className="w-5 h-5 text-green-500" />
//                                     ) : (
//                                       <span
//                                         className="text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap"
//                                         style={{
//                                           backgroundColor:
//                                             value.includes("Month") ||
//                                             value.includes("year") ||
//                                             value.includes("Free")
//                                               ? "#ffedd5"
//                                               : value === "Add Charges"
//                                                 ? "#dbeafe"
//                                                 : "#dcfce7",
//                                           color:
//                                             value.includes("Month") ||
//                                             value.includes("year") ||
//                                             value.includes("Free")
//                                               ? "#ed6605"
//                                               : value === "Add Charges"
//                                                 ? "#005aa8"
//                                                 : "#166534",
//                                         }}
//                                       >
//                                         {value}
//                                       </span>
//                                     )
//                                   ) : (
//                                     <FaTimes className="w-5 h-5 text-gray-300" />
//                                   )}
//                                 </div>
//                               </td>
//                             );
//                           },
//                         )}
//                       </tr>
//                     ),
//                   )}

//                   <tr className="border-t border-gray-300">
//                     <td className="p-4 md:p-6">
//                       <div
//                         className="flex items-center font-bold text-lg"
//                         style={{ color: "#005aa8" }}
//                       >
//                         <FaRupeeSign className="mr-2" />
//                         Membership Fees
//                       </div>
//                     </td>
//                     {membershipData.membershipPlans.map((plan, index) => (
//                       <td
//                         key={index}
//                         className="p-4 md:p-6 text-center cursor-pointer hover:bg-blue-50 transition-colors"
//                         onClick={() => handleRedirect(plan.name)}
//                       >
//                         <div className="flex flex-col items-center">
//                           <div
//                             className="text-xl md:text-2xl font-bold mb-1"
//                             style={{ color: "#005aa8" }}
//                           >
//                             {plan.pricing.membershipFee}
//                           </div>
//                           <div className="text-sm text-gray-600 mb-1 flex items-center">
//                             <FaCalendarAlt className="mr-1" />
//                             {plan.pricing.duration}
//                           </div>
//                           {plan.pricing.registrationCharges && (
//                             <div className="text-xs font-medium px-2 py-1 rounded-full bg-orange-100 text-[#ed6605] flex items-center">
//                               <FaInfoCircle className="mr-1" />+
//                               {plan.pricing.registrationCharges}
//                             </div>
//                           )}
//                         </div>
//                       </td>
//                     ))}
//                   </tr>

//                   <tr className="border-t border-gray-200">
//                     <td className="p-4 md:p-6">
//                       <div
//                         className="flex items-center font-bold text-lg"
//                         style={{ color: "#005aa8" }}
//                       >
//                         <FaCalendarAlt className="mr-2" />
//                         Duration
//                       </div>
//                     </td>
//                     {membershipData.membershipPlans.map((plan, index) => (
//                       <td
//                         key={index}
//                         className="p-4 md:p-6 text-center cursor-pointer hover:bg-blue-50 transition-colors"
//                         onClick={() => handleRedirect(plan.name)}
//                       >
//                         <div
//                           className="font-medium"
//                           style={{ color: "#005aa8" }}
//                         >
//                           {plan.pricing.duration}
//                         </div>
//                       </td>
//                     ))}
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </motion.div>

//         {/* CTA Button */}
//         <div className="mt-6 sm:mt-8 md:mt-10 px-3">
//           <div className="flex justify-center">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleLearnMore}
//               className="
//                 inline-flex items-center justify-center
//                 px-5 py-3 sm:px-6 sm:py-3.5
//                 rounded-lg font-medium text-white
//                 shadow-md hover:shadow-lg transition-all
//                 text-sm sm:text-base
//                 w-full max-w-xs sm:max-w-sm
//               "
//               style={{
//                 background: "linear-gradient(135deg, #005aa8 0%, #ed6605 100%)",
//               }}
//             >
//               <FaExternalLinkAlt className="mr-2 w-4 h-4" />
//               Be A Member
//             </motion.button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MembershipPlans;

// // // MembershipPlans.jsx
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
  FaExternalLinkAlt,
} from "react-icons/fa";
import membershipData from "../../data/membershipData.json";

const MembershipPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [viewMode, setViewMode] = useState("table");
  const [expandedFeature, setExpandedFeature] = useState(null);

  // Function to handle redirect
  const handleRedirect = (planName) => {
    // Plan-specific URLs
    const planUrls = {
      Students: "bemember",
      "EPC Classic": "bemember",
      "EPC Lifetime": "bemember",
      "Dealer /Distributor": "bemember",
      "Corporate Silver": "bemember",
      "Corporate Gold": "bemember",
    };

    const url = planUrls[planName] || "bemember";
    window.open(url, "_blank");
  };

  // Function to handle redirect to another link
  const handleLearnMore = () => {
    // Replace with your actual URL
    window.open("bemember", "_blank");
    // OR use window.location.href = "your-url" for same tab navigation
  };
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-40 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[#005aa8] mb-4">
              MASMA Membership
            </h1>
          </div>

          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose the membership plan that best fits your needs and take your
            business to the next level
          </p>
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
                    ? "linear-gradient(135deg, #ffffff 0%, #fff9f5 100%)"
                    : "white",
                }}
              >
                {/* Highlight Badge */}
                {plan.highlight && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center bg-gradient-to-r from-[#ed6605] to-[#ff8c42] text-white px-4 py-2 rounded-full shadow-lg">
                      <FaStar className="mr-2" />
                      <span className="font-bold text-sm">MOST POPULAR</span>
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div
                  className="relative h-32 cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(135deg, #005aa8 0%, #004080 100%)",
                  }}
                  onClick={() => handleRedirect(plan.name)}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-3">
                      {getPlanIcon(plan.name)}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {plan.name}
                    </h3>
                    <div className="flex items-center text-white text-xs opacity-80 mt-1">
                      <FaExternalLinkAlt className="mr-1" />
                      Click to learn more
                    </div>
                  </div>
                </div>

                {/* Rest of the grid view code remains the same... */}
                {/* ... */}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Table View - with clickable rows */}
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
                  <tr className="bg-gradient-to-r from-[#005aa8] to-[#004080] text-white">
                    <th className="text-left p-6 font-bold text-lg">
                      <div className="flex items-center">
                        <FaInfoCircle className="mr-2" />
                        Benefits
                      </div>
                    </th>
                    {membershipData.membershipPlans.map((plan) => (
                      <th
                        key={plan.name}
                        className="p-6 text-center cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => handleRedirect(plan.name)}
                      >
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
                          {/* <div className="mt-1 flex items-center text-xs opacity-80">
                            <FaExternalLinkAlt className="w-3 h-3 mr-1" />
                            Click to learn more
                          </div> */}
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
                          className={`hover:bg-gray-50 ${
                            expandedFeature === featureIndex ? "bg-gray-50" : ""
                          }`}
                        >
                          <td className="p-4 border-t border-gray-200">
                            <div
                              className="flex items-center cursor-pointer"
                              onClick={() =>
                                setExpandedFeature(
                                  expandedFeature === featureIndex
                                    ? null
                                    : featureIndex,
                                )
                              }
                            >
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
                                  className="p-4 border-t border-gray-200 text-center cursor-pointer hover:bg-blue-50 transition-colors"
                                  onClick={() => handleRedirect(plan.name)}
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
                            },
                          )}
                        </tr>
                      </React.Fragment>
                    ),
                  )}

                  {/* Membership Fees Row - Clickable */}
                  <tr>
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
                        className="p-6 border-t border-gray-300 text-center cursor-pointer hover:bg-blue-50 transition-colors"
                        onClick={() => handleRedirect(plan.name)}
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

                  {/* Duration Row - Clickable */}
                  <tr>
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
                        className="p-6 border-t border-gray-200 text-center cursor-pointer hover:bg-blue-50 transition-colors"
                        onClick={() => handleRedirect(plan.name)}
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
                  <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#005aa8] to-[#004080] flex items-center justify-center text-white mr-4">
                    {getPlanIcon(
                      membershipData.membershipPlans[selectedPlan].name,
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
                        "linear-gradient(135deg, #005aa8 0%, #ed6605 100%)",
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

      {/* Click Instructions Row */}

      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-3 sm:p-4">
        <div className="flex justify-center items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center text-center w-full"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLearnMore}
              className="
          inline-flex items-center justify-center
          px-4 py-2 sm:px-6 sm:py-3
          rounded-lg font-medium text-white
          shadow-md hover:shadow-lg transition-all
          text-sm sm:text-base
          w-full sm:w-auto
        "
              style={{
                background: "linear-gradient(135deg, #005aa8 0%, #ed6605 100%)",
              }}
            >
              <FaExternalLinkAlt className="mr-2 text-xs sm:text-sm" />
              Be A Member
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MembershipPlans;
