import React, { useState, useEffect } from "react";
import Image from "next/image";

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
    <div className="relative mb-20 flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a] text-white">
      <div className="absolute z-10 px-4 pb-[670px] text-center md:pb-60 xl:px-0 xl:pb-0">
        <h2 className="text-4xl font-bold text-[#76b900] xl:text-5xl">
          Our Services
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-gray-300 xl:text-xl">
          Discover innovative solutions designed to empower startups and
          investors.
        </p>
      </div>
      <div className="relative hidden size-full xl:block xl:size-[500px]">
        <div className="relative flex size-full items-center justify-center">
          {services.map((service, index) => {
            const angle = (index / services.length) * 2 * Math.PI;
            const radius = 220;
            const x = radius * 2 * Math.cos(angle);
            const y = radius * 0.95 * Math.sin(angle);

            return (
              <div
                key={index}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                }}
              >
                <div className="perspective-1000 flex transform-gpu flex-col items-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                  <div className="relative flex h-28 w-40 items-center justify-center rounded-xl transition-all duration-300 group-hover:bg-[#1a1a1a] xl:h-32 xl:w-60">
                    <div className="absolute inset-0 rounded-xl border bg-[#212121] p-4 transition-all duration-300 group-hover:bg-[#1a1a1a]">
                      <div className="text-center text-xs font-semibold text-[#76b900] xl:text-sm">
                        {service.title}
                      </div>
                      <p className="mt-2 w-32 text-center text-xs text-gray-400 xl:w-48">
                        {service.description}
                      </p>
                    </div>
                    <div className="absolute inset-0 z-0 rounded-xl opacity-0 transition-all duration-500 group-hover:opacity-60"></div>
                    <Image
                      width={40}
                      height={40}
                      src={service.icon}
                      alt={service.title}
                      className="absolute bottom-2 left-24 mt-2 size-10 p-1"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 px-4 pb-20 pt-40 sm:pb-0 md:grid-cols-3 xl:hidden">
        {services.map((service, index) => (
          <div
            key={index}
            className="group flex flex-col items-center rounded-xl bg-[#212121] p-4 shadow-xl hover:shadow-2xl"
          >
            <div className="text-center text-sm font-semibold text-[#76b900]">
              {service.title}
            </div>
            <p className="mt-2 w-full text-center text-xs text-gray-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
