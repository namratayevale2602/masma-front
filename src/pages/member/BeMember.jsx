import React, { useState } from "react";
import { motion } from "framer-motion";
import axiosInstance from "../../services/api"; // Adjust the path

const BeMember = () => {
  const [formData, setFormData] = useState({
    applicant_name: "",
    date_of_birth: "",
    organization: "",
    mobile: "",
    phone: "",
    whatsapp_no: "",
    office_email: "",
    city: "",
    town: "",
    village: "",
    website: "",
    organization_type: "",
    business_category: "",
    date_of_incorporation: "",
    pan_number: "",
    gst_number: "",
    about_service: "",
    membership_reference_1: "",
    membership_reference_2: "",
    registration_type: "",
    registration_amount: "",
    declaration: false, // Default to false
    applicant_photo: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const organizationTypes = [
    "sole_proprietorship",
    "partnership",
    "limited_liability_partnership",
    "private_limited_company",
    "public_limited_company",
    "one_person_company",
    "other",
  ];

  const businessCategories = [
    "student",
    "plumber",
    "electrician",
    "installer_solar_pv",
    "solar_water_heater",
    "supplier",
    "dealer",
    "distributor",
    "associate_member",
    "manufacturer",
  ];

  const registrationTypes = [
    { type: "renew_epc_classic", amount: "1000" },
    { type: "student", amount: "500" },
    { type: "installer", amount: "1500" },
    { type: "epc_classic", amount: "2000" },
    { type: "epc_lifetime", amount: "5000" },
    { type: "dealer_distributor", amount: "3000" },
    { type: "silver_corporate", amount: "4000" },
    { type: "gold_corporate", amount: "6000" },
    { type: "masma_associates", amount: "2500" },
  ];

  const getDisplayName = (value, type) => {
    if (type === "organization_type") {
      const names = {
        sole_proprietorship: "Sole Proprietorship",
        partnership: "Partnership",
        limited_liability_partnership: "Limited Liability Partnership (LLP)",
        private_limited_company: "Private Limited Company",
        public_limited_company: "Public Limited Company",
        one_person_company: "One Person Company (OPC)",
        other: "Other",
      };
      return names[value] || value;
    }

    if (type === "business_category") {
      const names = {
        student: "Student",
        plumber: "Plumber",
        electrician: "Electrician",
        installer_solar_pv: "Installer Solar PV",
        solar_water_heater: "Solar Water Heater",
        supplier: "Supplier",
        dealer: "Dealer",
        distributor: "Distributor",
        associate_member: "Associate Member",
        manufacturer: "Manufacturer",
      };
      return names[value] || value;
    }

    if (type === "registration_type") {
      const names = {
        renew_epc_classic: "Renew EPC Classic",
        student: "Student",
        installer: "Installer",
        epc_classic: "EPC Classic",
        epc_lifetime: "EPC Lifetime",
        dealer_distributor: "Dealer/Distributor",
        silver_corporate: "Silver Corporate",
        gold_corporate: "Gold Corporate",
        masma_associates: "MASMA Associates",
      };
      return names[value] || value;
    }

    return value;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else if (type === "checkbox") {
      // For checkboxes, use the checked value directly as boolean
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleRegistrationTypeChange = (e) => {
    const selectedType = registrationTypes.find(
      (rt) => rt.type === e.target.value
    );
    setFormData((prev) => ({
      ...prev,
      registration_type: e.target.value,
      registration_amount: selectedType ? selectedType.amount : "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    // Validate declaration is checked
    if (!formData.declaration) {
      setMessage({
        type: "error",
        text: "You must accept the declaration to proceed.",
      });
      setLoading(false);
      return;
    }

    try {
      // Create FormData for file upload
      const submitData = new FormData();

      // Append all form data
      Object.keys(formData).forEach((key) => {
        if (key === "applicant_photo" && formData[key]) {
          submitData.append(key, formData[key]);
        } else if (formData[key] !== null && formData[key] !== undefined) {
          // Ensure declaration is sent as proper boolean
          if (key === "declaration") {
            submitData.append(key, formData[key] ? "1" : "0");
          } else {
            submitData.append(key, formData[key]);
          }
        }
      });

      console.log("Submitting data:", Object.fromEntries(submitData));

      const response = await axiosInstance.post("/registrations", submitData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage({
        type: "success",
        text: "Registration submitted successfully!",
      });

      // Reset form
      setFormData({
        applicant_name: "",
        date_of_birth: "",
        organization: "",
        mobile: "",
        phone: "",
        whatsapp_no: "",
        office_email: "",
        city: "",
        town: "",
        village: "",
        website: "",
        organization_type: "",
        business_category: "",
        date_of_incorporation: "",
        pan_number: "",
        gst_number: "",
        about_service: "",
        membership_reference_1: "",
        membership_reference_2: "",
        registration_type: "",
        registration_amount: "",
        declaration: false, // Reset to false
        applicant_photo: null,
      });
    } catch (error) {
      console.error("Registration error:", error);
      let errorMessage = "Failed to submit registration. Please try again.";

      if (error.response?.data?.errors) {
        // Handle validation errors from Laravel
        const errors = error.response.data.errors;
        errorMessage = Object.values(errors).flat().join(", ");
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }

      setMessage({
        type: "error",
        text: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-40 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
      >
        {/* Header */}
        <div
          className="bg-[#005aa8] py-6 px-8 text-white"
          style={{
            background: "linear-gradient(135deg, #005aa8 0%, #003366 100%)",
          }}
        >
          <h1 className="text-3xl font-bold">Registration Form</h1>
          <p className="text-blue-100 mt-2">
            Please fill in all the required details
          </p>
        </div>

        {/* Message Alert */}
        {message.text && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mx-8 mt-4 p-4 rounded-md ${
              message.type === "success"
                ? "bg-green-50 border border-green-200 text-green-800"
                : "bg-red-50 border border-red-200 text-red-800"
            }`}
          >
            {message.text}
          </motion.div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Personal Information Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="border-b border-gray-200 pb-6"
          >
            <h2 className="text-xl font-semibold text-[#ed6605] mb-4">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Applicant Name *
                </label>
                <input
                  type="text"
                  name="applicant_name"
                  value={formData.applicant_name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005aa8] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005aa8] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Applicant Photo
                </label>
                <input
                  type="file"
                  name="applicant_photo"
                  onChange={handleInputChange}
                  accept="image/*"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005aa8] focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="border-b border-gray-200 pb-6"
          >
            <h2 className="text-xl font-semibold text-[#ed6605] mb-4">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005aa8] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005aa8] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  name="whatsapp_no"
                  value={formData.whatsapp_no}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005aa8] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Office Email *
                </label>
                <input
                  type="email"
                  name="office_email"
                  value={formData.office_email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005aa8] focus:border-transparent"
                  required
                />
              </div>
            </div>
          </motion.div>

          {/* Address Information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="border-b border-gray-200 pb-6"
          >
            <h2 className="text-xl font-semibold text-[#ed6605] mb-4">
              Address Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005aa8] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Town
                </label>
                <input
                  type="text"
                  name="town"
                  value={formData.town}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005aa8] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Village
                </label>
                <input
                  type="text"
                  name="village"
                  value={formData.village}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005aa8] focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>

          {/* Business Information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="border-b border-gray-200 pb-6"
          >
            <h2 className="text-xl font-semibold text-[#ed6605] mb-4">
              Business Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005aa8] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005aa8] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization Type
                </label>
                <select
                  name="organization_type"
                  value={formData.organization_type}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005aa8] focus:border-transparent"
                >
                  <option value="">Select Organization Type</option>
                  {organizationTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {getDisplayName(type, "organization_type")}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Category
                </label>
                <select
                  name="business_category"
                  value={formData.business_category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005aa8] focus:border-transparent"
                >
                  <option value="">Select Business Category</option>
                  {businessCategories.map((category, index) => (
                    <option key={index} value={category}>
                      {getDisplayName(category, "business_category")}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Incorporation
                </label>
                <input
                  type="date"
                  name="date_of_incorporation"
                  value={formData.date_of_incorporation}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005aa8] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  PAN Number
                </label>
                <input
                  type="text"
                  name="pan_number"
                  value={formData.pan_number}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005aa8] focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GST Number
                </label>
                <input
                  type="text"
                  name="gst_number"
                  value={formData.gst_number}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005aa8] focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  About Service
                </label>
                <textarea
                  name="about_service"
                  value={formData.about_service}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005aa8] focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>

          {/* Membership References */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="border-b border-gray-200 pb-6"
          >
            <h2 className="text-xl font-semibold text-[#ed6605] mb-4">
              Membership References
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Membership Reference 1 *
                </label>
                <input
                  type="text"
                  name="membership_reference_1"
                  value={formData.membership_reference_1}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005aa8] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Membership Reference 2 *
                </label>
                <input
                  type="text"
                  name="membership_reference_2"
                  value={formData.membership_reference_2}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005aa8] focus:border-transparent"
                  required
                />
              </div>
            </div>
          </motion.div>

          {/* Registration Type & Amount */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="border-b border-gray-200 pb-6"
          >
            <h2 className="text-xl font-semibold text-[#ed6605] mb-4">
              Registration Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Registration Type/Plan *
                </label>
                <select
                  name="registration_type"
                  value={formData.registration_type}
                  onChange={handleRegistrationTypeChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005aa8] focus:border-transparent"
                  required
                >
                  <option value="">Select Registration Type</option>
                  {registrationTypes.map((rt, index) => (
                    <option key={index} value={rt.type}>
                      {getDisplayName(rt.type, "registration_type")}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Registration Amount
                </label>
                <input
                  type="text"
                  name="registration_amount"
                  value={formData.registration_amount}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#005aa8] focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>

          {/* Declaration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-start space-x-3"
          >
            <input
              type="checkbox"
              name="declaration"
              checked={formData.declaration}
              onChange={handleInputChange}
              className="mt-1 rounded focus:ring-[#005aa8] text-[#005aa8]"
              required
            />
            <label className="text-sm text-gray-700">
              I hereby declare that the information provided above is true and
              correct to the best of my knowledge.
            </label>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex justify-end pt-6"
          >
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-[#ed6605] text-white font-semibold rounded-md hover:bg-[#d45a04] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#ed6605] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Registration"}
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default BeMember;
