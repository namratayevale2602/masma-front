import React, { useState } from "react";
import axiosInstance from "../../services/api";

const Visitors = () => {
  const [formData, setFormData] = useState({
    visitor_name: "",
    bussiness_name: "",
    mobile: "",
    phone: "",
    whatsapp_no: "",
    email: "",
    city: "",
    town: "",
    village: "",
    remark: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [qrCode, setQrCode] = useState(null);
  const [emailStatus, setEmailStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear field-specific error when user types
    if (error && error[name]) {
      setError((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    setQrCode(null);
    setEmailStatus(null);

    try {
      const response = await axiosInstance.post("/visitors", formData);

      console.log("API Response:", response.data); // Debug log

      if (response.data.success) {
        setSuccess(true);

        // Get web URL for scanning
        const webUrl =
          response.data.qr_code?.web_url ||
          `${window.location.origin}/visitor/${response.data.visitor?.id}/card`;

        // Check if qr_code exists in response
        if (response.data.qr_code) {
          setQrCode({
            url: response.data.qr_code.url,
            downloadUrl: response.data.qr_code.download_url,
            webUrl: webUrl, // Add web URL for scanning
            scanUrl: `${window.location.origin}/visitor/${response.data.visitor?.id}/card`,
          });
        }

        // Set email status (default to 'not_sent' if not present)
        setEmailStatus(response.data.email_status || "not_sent");

        // Reset form
        setFormData({
          visitor_name: "",
          bussiness_name: "",
          mobile: "",
          phone: "",
          whatsapp_no: "",
          email: "",
          city: "",
          town: "",
          village: "",
          remark: "",
        });

        // Auto-hide success message after 15 seconds
        setTimeout(() => {
          setSuccess(false);
          setQrCode(null);
          setEmailStatus(null);
        }, 15000);
      } else {
        setError({ general: [response.data.message || "Registration failed"] });
      }
    } catch (err) {
      console.error("API Error:", err.response || err); // Debug log

      if (err.response && err.response.data) {
        const data = err.response.data;

        if (data.errors) {
          setError(data.errors);
        } else if (data.message) {
          setError({ general: [data.message] });
        } else {
          setError({ general: ["An error occurred. Please try again."] });
        }
      } else {
        setError({
          general: [err.message || "An error occurred. Please try again."],
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md pt-40">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Visitor Registration Form
      </h2>

      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-green-700 font-medium">
              Registration successful!{" "}
              {emailStatus === "sent"
                ? "QR code has been generated and sent to your email."
                : emailStatus === "failed"
                ? "Registration successful but email notification failed."
                : "Registration successful. QR code generation skipped."}
            </span>
          </div>

          {qrCode && qrCode.url && (
            <div className="mt-4 p-4 bg-green-100 rounded">
              <p className="text-green-800 mb-2">
                Your QR code is ready. You can download it directly:
              </p>
              <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
                <div className="text-center">
                  <img
                    src={qrCode.url}
                    alt="Visitor QR Code"
                    className="w-32 h-32 mx-auto border border-gray-300 rounded"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/300x300?text=QR+Code";
                    }}
                  />
                  <p className="text-sm text-gray-600 mt-2">Your QR Code</p>
                </div>
                <div className="flex flex-col space-y-2">
                  {qrCode.downloadUrl && (
                    <a
                      href={qrCode.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-center"
                    >
                      Download QR Code
                    </a>
                  )}
                  <button
                    onClick={() => window.print()}
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
                  >
                    Print QR Code
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {error && error.general && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-red-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-red-700">{error.general[0]}</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="visitor_name"
              value={formData.visitor_name}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                error?.visitor_name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your full name"
            />
            {error?.visitor_name && (
              <p className="text-red-500 text-sm mt-1">
                {error.visitor_name[0]}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Business Name
            </label>
            <input
              type="text"
              name="bussiness_name"
              value={formData.bussiness_name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Optional"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number *
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                error?.mobile ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="e.g., +1234567890"
            />
            {error?.mobile && (
              <p className="text-red-500 text-sm mt-1">{error.mobile[0]}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                error?.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="your@email.com"
            />
            {error?.email && (
              <p className="text-red-500 text-sm mt-1">{error.email[0]}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Optional"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              WhatsApp Number
            </label>
            <input
              type="tel"
              name="whatsapp_no"
              value={formData.whatsapp_no}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Optional"
            />
          </div>
        </div>

        {/* Address Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="City"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Town
            </label>
            <input
              type="text"
              name="town"
              value={formData.town}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Town"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Village
            </label>
            <input
              type="text"
              name="village"
              value={formData.village}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Village"
            />
          </div>
        </div>

        {/* Remarks */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Remarks / Notes
          </label>
          <textarea
            name="remark"
            value={formData.remark}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Any additional information or notes..."
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white transition`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </span>
            ) : (
              "Register & Generate QR Code"
            )}
          </button>

          <p className="text-sm text-gray-500 mt-3 text-center">
            By submitting this form, you agree to receive your QR code via
            email. All information is kept confidential.
          </p>
        </div>
      </form>

      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-green-700 font-medium">
              Registration successful!{" "}
              {emailStatus === "sent"
                ? "QR code has been generated and sent to your email."
                : emailStatus === "failed"
                ? "Registration successful but email notification failed."
                : "Registration successful."}
            </span>
          </div>

          {qrCode && qrCode.url && (
            <div className="mt-4 p-4 bg-green-100 rounded">
              <p className="text-green-800 mb-2">
                Your QR code is ready. You can download it directly:
              </p>
              <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto border border-gray-300 rounded flex items-center justify-center bg-white p-2">
                    <img
                      src={qrCode.url}
                      alt="Visitor QR Code"
                      className="max-w-full max-h-full"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://via.placeholder.com/300x300?text=QR+Code";
                      }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Your QR Code</p>
                </div>
                <div className="flex flex-col space-y-2">
                  {qrCode.downloadUrl && (
                    <a
                      href={qrCode.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-center"
                    >
                      <i className="fas fa-download mr-2"></i>
                      Download QR Code
                    </a>
                  )}
                  {qrCode.scanUrl && (
                    <a
                      href={qrCode.scanUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition text-center"
                    >
                      <i className="fas fa-eye mr-2"></i>
                      View ID Card
                    </a>
                  )}
                  <button
                    onClick={() => window.print()}
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
                  >
                    <i className="fas fa-print mr-2"></i>
                    Print QR Code
                  </button>
                </div>
              </div>

              {/* Scan Information */}
              <div className="mt-4 p-3 bg-blue-50 rounded">
                <p className="text-blue-800 text-sm">
                  <i className="fas fa-info-circle mr-2"></i>
                  When scanned, this QR code will display your visitor ID card
                  with all your details.
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Additional Info */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-medium text-gray-700 mb-2">What happens next?</h3>
        <ul className="list-disc pl-5 text-gray-600 space-y-1">
          <li>Your information will be securely stored in our database</li>
          <li>A unique QR code will be generated for you</li>
          <li>The QR code will be sent to your email address</li>
          <li>You can use the QR code for check-in and verification</li>
          <li>You can also download the QR code from the success message</li>
        </ul>
      </div>
    </div>
  );
};

export default Visitors;
