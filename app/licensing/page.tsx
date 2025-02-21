"use client";

import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Licensing: React.FC = () => {
  return (
    <div>
      <div className="min-h-screen bg-[#1b1b1b] p-8 text-white">
        <Header />
        <div className="mx-auto my-20 max-w-4xl">
          <h1 className="mb-8 text-2xl font-bold md:text-4xl">Licensing Information</h1>
          <p className="mb-6">
            Welcome to our platform, a dedicated space connecting startups and investors. Below, we outline the licensing terms and information governing the use of our platform.
          </p>
          <h2 className="mb-4 mt-8 text-3xl font-semibold">1. Licensing Overview</h2>
          <p className="mb-6">
            Our platform operates under a proprietary license designed to protect the intellectual property, technology, and features that power our services. By using our platform, you agree to comply with the terms outlined in this Licensing Information.
          </p>
          <h2 className="mb-4 mt-8 text-3xl font-semibold">2. Authorized Use</h2>
          <ul className="mb-6 list-inside list-disc">
            <li className="mb-2">Access and use of the platform are strictly for connecting startups with investors and vice versa.</li>
            <li className="mb-2">Users are granted a non-exclusive, non-transferable license to use the platform’s features for their intended purposes.</li>
            <li>No part of the platform may be reproduced, copied, or reverse-engineered without prior consent.</li>
          </ul>
          <h2 className="mb-4 mt-8 text-3xl font-semibold">3. Intellectual Property Rights</h2>
          <p className="mb-6">
            All technology, trademarks, logos, and content on the platform are the exclusive property of the platform’s owners. Unauthorized use of these elements is strictly prohibited and may result in legal action.
          </p>
          <h2 className="mb-4 mt-8 text-3xl font-semibold">4. Compliance and Restrictions</h2>
          <ul className="mb-6 list-inside list-disc">
            <li className="mb-2">Users must comply with all applicable laws and regulations while using the platform.</li>
            <li className="mb-2">Any misuse of the platform’s services, including fraudulent activities or attempts to exploit its features, will result in immediate termination of access.</li>
          </ul>
          <h2 className="mb-4 mt-8 text-3xl font-semibold">5. License Termination</h2>
          <p className="mb-6">
            The platform reserves the right to terminate or revoke the user’s license if they are found in violation of the terms outlined in this policy. Termination may occur without prior notice.
          </p>
          <h2 className="mb-4 mt-8 text-3xl font-semibold">6. Updates to Licensing Terms</h2>
          <p className="mb-6">
            The platform may update its licensing terms periodically to adapt to new legal, technological, or business developments. Users are encouraged to review this section regularly to stay informed about any changes.
          </p>
          <h2 className="mb-4 mt-8 text-3xl font-semibold">7. Contact Us</h2>
          <p>
            For any questions or clarifications about our licensing terms, please contact us at <span className="font-medium">legal@startupconnect.com</span>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Licensing;
