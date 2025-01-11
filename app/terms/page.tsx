"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div>
    <div className="min-h-screen bg-[#1b1b1b] text-white p-8">
      <Header />
      <div className="max-w-4xl mx-auto pt-20 pb-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms & Conditions</h1>
        <p className="mb-6">
          Welcome to our platform. By using our services, you agree to comply with and be bound by the following terms and conditions. Please review them carefully before using our platform.
        </p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-6">
          By accessing or using our platform, you acknowledge that you have read, understood, and agree to these Terms and Conditions. If you do not agree, you may not use our services.
        </p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">2. Description of Services</h2>
        <p className="mb-6">
          Our platform connects startups with investors, offering features like blockchain-based transactions, AI-driven matchmaking, and secure end-to-end communication. The platform also provides tools for mentorship, teammate selection, and project rating.
        </p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
        <ul className="list-disc list-inside mb-6">
          <li className="mb-2">Users must provide accurate and complete information during registration.</li>
          <li className="mb-2">Users are responsible for maintaining the confidentiality of their login credentials.</li>
          <li className="mb-2">Users must comply with all applicable laws and regulations while using the platform.</li>
          <li>Users must not engage in fraudulent activities or misuse the platform.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">4. Data Privacy</h2>
        <p className="mb-6">
          We prioritize your privacy. Our platform uses blockchain technology, end-to-end encryption, and advanced security measures to protect user data. Refer to our <span className="font-medium">Privacy Policy</span> for more details.
        </p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">5. Limitations of Liability</h2>
        <p className="mb-6">
          Our platform is provided on an "as-is" and "as-available" basis. We do not guarantee the accuracy, reliability, or availability of the services. Users agree that the platform is not liable for any loss or damages arising from the use of our services.
        </p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">6. Termination</h2>
        <p className="mb-6">
          We reserve the right to terminate or suspend access to the platform for users who violate these Terms and Conditions or engage in unauthorized activities.
        </p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">7. Amendments</h2>
        <p className="mb-6">
          We may update these Terms and Conditions periodically to reflect changes in our services or for legal compliance. Users are encouraged to review this page regularly for updates.
        </p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">8. Contact Us</h2>
        <p>
          For questions or concerns about these Terms and Conditions, please contact us at <span className="font-medium">support@startupconnect.com</span>.
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default TermsAndConditions;
