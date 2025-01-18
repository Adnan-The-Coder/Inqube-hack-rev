import React, { useState, useEffect } from "react";

const Services = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      title: "AI-Based Matchmaking",
      description: "Connect investors and startups with AI-powered matching.",
      icon: "https://img.icons8.com/ios/50/76b900/artificial-intelligence.png",
    },
    {
      title: "Community Forums",
      description: "Engage in collaborative forums for advice and partnerships.",
      icon: "https://img.icons8.com/?size=100&id=123786&format=png&color=76b900",
    },
    {
      title: "End-to-End Encryption",
      description: "Ensure secure communication between all stakeholders.",
      icon: "https://img.icons8.com/ios/50/76b900/lock.png",
    },
    {
      title: "Blockchain Transactions",
      description: "Enable secure and transparent financial transactions.",
      icon: "https://img.icons8.com/ios/50/76b900/bitcoin.png",
    },
    {
      title: "Mentoring Sessions",
      description: "Gain insights from experts to grow your startup.",
      icon: "https://img.icons8.com/?size=100&id=38HJBFwphJ3I&format=png&color=76b900",
    },
    {
      title: "Teammate Selection",
      description: "Find the perfect team members for your venture.",
      icon: "https://img.icons8.com/ios/50/76b900/teamwork.png",
    },
  ];

  if (!mounted) {
    return null; // Render nothing on the server side
  }

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center overflow-hidden mb-20">
      <div className="absolute text-center z-10 px-4 xl:px-0 pb-[670px] md:pb-60 xl:pb-0">
        <h2 className="text-4xl xl:text-5xl font-bold text-[#76b900]">
          Our Services
        </h2>
        <p className="text-gray-300 text-sm xl:text-xl mt-3 max-w-xl mx-auto">
          Discover innovative solutions designed to empower startups and
          investors.
        </p>
      </div>
      <div className="relative w-full h-full xl:w-[500px] xl:h-[500px] hidden xl:block">
        <div className="relative w-full h-full flex justify-center items-center">
          {services.map((service, index) => {
            const angle = (index / services.length) * 2 * Math.PI;
            const radius = 220;
            const x = radius * 2 * Math.cos(angle);
            const y = radius * 0.95 * Math.sin(angle);

            return (
              <div
                key={index}
                className="absolute group transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                }}
              >
                <div className="flex flex-col items-center group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 transform-gpu perspective-1000">
                  <div className="relative w-40 h-28 xl:w-60 xl:h-32 flex items-center justify-center group-hover:bg-[#1a1a1a] transition-all duration-300 rounded-xl">
                    <div className="absolute inset-0 bg-[#212121] border p-4 rounded-xl group-hover:bg-[#1a1a1a] transition-all duration-300">
                      <div className="text-center text-xs xl:text-sm font-semibold text-[#76b900]">
                        {service.title}
                      </div>
                      <p className="text-gray-400 text-xs text-center mt-2 w-32 xl:w-48">
                        {service.description}
                      </p>
                    </div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-all duration-500 rounded-xl z-0"></div>
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="absolute bottom-2 left-24 mt-2 p-1 w-10 h-10"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="xl:hidden grid grid-cols-1 md:grid-cols-3 gap-6 px-4 pt-40 pb-20 sm:pb-0">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[#212121] p-4 rounded-xl shadow-xl hover:shadow-2xl group"
          >
            <div className="text-center text-sm font-semibold text-[#76b900]">
              {service.title}
            </div>
            <p className="text-gray-400 text-xs text-center mt-2 w-full">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
