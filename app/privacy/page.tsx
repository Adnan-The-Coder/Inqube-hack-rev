"use client";

import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <div className="min-h-screen bg-[#1b1b1b] p-8 text-white">
        <Header />
        <div className="mx-auto my-20 max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>
          <p className="mb-6">
            Welcome to our platform, a secure space connecting startups with investors. Your privacy is important to us, and we are committed to protecting your data. This Privacy Policy outlines how we collect, use, and safeguard your information.
          </p>
          <h2 className="mb-4 mt-8 text-3xl font-semibold">1. Information We Collect</h2>
          <ul className="mb-6 list-inside list-disc">
            <li className="mb-2">
              <strong>Personal Information:</strong> Name, email, and contact details for account creation and verification.
            </li>
            <li className="mb-2">
              <strong>Project Information:</strong> Details about your startup projects, including multimedia and funding requirements.
            </li>
            <li>
              <strong>Transaction Data:</strong> Blockchain-based transaction records for transparency and security.
            </li>
          </ul>
          <h2 className="mb-4 mt-8 text-3xl font-semibold">2. How We Use Your Information</h2>
          <ul className="mb-6 list-inside list-disc">
            <li className="mb-2">To connect startups with relevant investors using AI-based matchmaking.</li>
            <li className="mb-2">To facilitate secure blockchain-based transactions and communications.</li>
            <li className="mb-2">To improve our platform’s functionality based on user feedback and analytics.</li>
          </ul>
          <h2 className="mb-4 mt-8 text-3xl font-semibold">3. Data Protection</h2>
          <p className="mb-6">
            We implement advanced security measures, including end-to-end encryption and blockchain technologies, to ensure the safety of your personal and transactional data.
          </p>
          <h2 className="mb-4 mt-8 text-3xl font-semibold">4. User Rights</h2>
          <p className="mb-6">
            As a user, you have the right to access, update, or delete your personal information at any time. Contact us if you need assistance with data management.
          </p>
          <h2 className="mb-4 mt-8 text-3xl font-semibold">5. Changes to This Policy</h2>
          <p className="mb-6">
            We may update this Privacy Policy to reflect changes in our practices or for legal and regulatory compliance. Please check this page periodically for updates.
          </p>
          <h2 className="mb-4 mt-8 text-3xl font-semibold">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <span className="font-medium">support@startupconnect.com</span>.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
