"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="bg-[#0a0a0a] text-white min-h-screen p-6 mb-20">
        <Header />
        <div className="max-w-6xl mx-auto">
          <header className="mb-12 mt-20">
            <h1 className="text-3xl lg:text-4xl font-bold text-center text-[#76b900]">
              About Us
            </h1>
          </header>
          <section>
            <h2 className="text-3xl font-bold text-[#ffffff] mb-6">
              Welcome to Inqube
            </h2>
            <p className="text-gray-300 text-sm lg:text-base mb-6 leading-relaxed">
              At <strong>Inqube</strong>, we redefine the way innovation meets opportunity. As a dynamic startup, we are committed to bridging the gap between visionary developers and discerning investors. Our platform empowers developers to bring their ideas to life by showcasing their projects through immersive multimedia, detailed descriptions, and precise funding requirements. Simultaneously, we offer investors a curated portfolio of groundbreaking projects powered by AI-driven matchmaking, ensuring seamless collaboration and mutual growth.
            </p>
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
              Our mission is simple: to create a thriving ecosystem where technology, creativity, and investment come together to spark innovation and deliver real-world impact.
            </p>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-[#ffffff] mb-6">Our Vision</h2>
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
              We envision a future where innovative ideas are never constrained by resources or opportunities. <strong className="text-[#76b900]">Inqube</strong> serves as a launchpad for startups and developers to scale their ambitions and connect with investors who share their passion for transformative technology. By leveraging cutting-edge AI and blockchain technologies, we provide a secure, transparent, and scalable platform that fosters trust and builds enduring partnerships.
            </p>
          </section>
          <section className="mt-8">
            <h3 className="text-xl font-bold text-[#ffffff] mb-4">Why Choose Inqube?</h3>
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4">
              <strong className="text-[#76b900]">Inqube</strong> stands out with its:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-300 text-sm lg:text-base">
              <li>
                <strong className="text-[#76b900]">Innovative Solutions:</strong> AI-powered insights and blockchain technology ensure secure, efficient transactions and matchmaking.
              </li>
              <li>
                <strong className="text-[#76b900]">Scalable and Future-Proof:</strong> Built for rapid growth and long-term scalability, our platform supports a growing user base and expansion into new markets.
              </li>
              <li>
                <strong className="text-[#76b900]">Targeted Discoveries:</strong> Investors find projects tailored to their interests, while developers gain visibility among the right audience.
              </li>
              <li>
                <strong className="text-[#76b900]">Mentorship and Resources:</strong> Connecting developers with experts, advisors, and valuable resources to enhance their projects' potential.
              </li>
              <li>
                <strong className="text-[#76b900]">Trust and Security:</strong> Blockchain-based verification and end-to-end encryption ensure data security and authenticity for all users.
              </li>
            </ul>
          </section>
          <section className="mt-8">
            <h3 className="text-xl font-bold text-[#ffffff] mb-4">What We Offer</h3>
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4">
              At <strong className="text-[#76b900]">Inqube</strong>, we are more than just a platform – we are a community where innovators and investors thrive together. Here's how we make it happen:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-300 text-sm lg:text-base">
              <li>Comprehensive project listings with demo links, videos, and detailed descriptions.</li>
              <li>End-to-end encrypted communication channels for secure collaboration.</li>
              <li>Subscription-based revenue streams, premium services, and transaction fee structures that ensure sustainability.</li>
              <li>Partnerships with accelerators, business advisors, and investors to foster credibility and expand reach.</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
