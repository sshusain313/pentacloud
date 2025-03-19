import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Header Section */}
      <div className="bg-yellow-500 w-[95%] h-[150px] flex flex-col items-center py-8 mb-10">
        <h2 className="text-3xl font-semibold text-center pt-3">PRIVACY POLICY</h2>
        <p className="mt-3 text-gray-700">Effective Date: [Insert Date]</p>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mt-6">INTRODUCTION</h2>
        <p className="text-gray-700 mt-3">
          Pentacloud Consulting ("we," "our," or "us") is committed to protecting your privacy. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, 
          <a href="https://pentacloudconsulting.com" className="text-blue-500 underline"> pentacloudconsulting.com</a>.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. INFORMATION WE COLLECT</h2>
        <ul className="list-disc pl-6 text-gray-700 mt-2">
          <li><span className="font-semibold">Personal Information:</span> Name, email, phone number, and business details.</li>
          <li><span className="font-semibold">Business and Service Data:</span> Related to Salesforce Consulting, Web Development, Digital Marketing, etc.</li>
          <li><span className="font-semibold">Non-Personal Information:</span> Browser type, IP address, usage data.</li>
          <li><span className="font-semibold">Cookies and Tracking:</span> Used for site analysis and functionality improvement.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">2. HOW WE USE YOUR INFORMATION</h2>
        <ul className="list-disc pl-6 text-gray-700 mt-2">
          <li>To provide and improve our consulting services.</li>
          <li>To analyze and optimize business operations.</li>
          <li>To respond to inquiries and service requests.</li>
          <li>To send promotional and marketing communications (with consent).</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">3. SHARING OF INFORMATION</h2>
        <p className="text-gray-700 mt-2">
          We do not sell or rent personal information. We may share data with:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-2">
          <li>Service providers like Salesforce, AWS, Google Cloud.</li>
          <li>Legal authorities if required by law.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">4. DATA SECURITY</h2>
        <p className="text-gray-700 mt-2">
          We implement security measures to protect data but cannot guarantee complete security. 
          If your data is stored on third-party platforms, their security policies apply.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. YOUR RIGHTS</h2>
        <p className="text-gray-700 mt-2">
          You may request access, correction, or deletion of your personal data by contacting us at <span className="font-semibold">[Insert Contact Email]</span>.
        </p>

        <h2 className="text-xl font-semibold mt-6">6. CHANGES TO THIS POLICY</h2>
        <p className="text-gray-700 mt-2">
          We may update this Privacy Policy periodically. Please review it regularly for changes.
        </p>

        <h2 className="text-xl font-semibold mt-6">7. CONTACT US</h2>
        <p className="text-gray-700 mt-2">
          If you have any questions or concerns regarding this Privacy Policy, please contact us at:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-2">
          <li>📌 Pentacloud Consulting Pvt Ltd</li>
          <li>🏢 #37, R.T Nagar, Bengaluru, Karnataka 560032, India</li>
          <li>📞 Phone: +91 9972026608</li>
          <li>📧 Email: contactus@pentacloudconsulting.com</li>
        </ul>

        {/* Footer */}
        <footer className="mt-8 border-t pt-4 text-center text-gray-600">
          <p>&copy; 2025 Pentacloud Consulting Pvt Ltd. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
