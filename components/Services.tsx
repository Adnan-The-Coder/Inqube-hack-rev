import React from "react";
import Image from "next/image";
import flowchart from "../Images/flowchart.png";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center bg-[#0a0a0a] text-white px-6 sm:px-10 lg:px-16 py-10 gap-10">
      {/* Left Section: Text */}
      <div className="flex-1 w-full text-center lg:text-left px-4 md:px-8">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Our Services Include
          </h2>
          <ul className="space-y-6">
            <li className="flex justify-between items-center border-b border-gray-600 pb-4">
              <span className="text-sm md:text-base lg:text-lg text-gray-400">
                AI-Based Matchmaking for Investors
              </span>
              <span className="text-[#76b900] font-bold text-lg md:text-xl">
                →
              </span>
            </li>
            <li className="flex justify-between items-center border-b border-gray-600 pb-4">
              <span className="text-sm md:text-base lg:text-lg text-gray-400">
                Community Forums (For Collaboration and Advice)
              </span>
              <span className="text-[#76b900] font-bold text-lg md:text-xl">
                →
              </span>
            </li>
            <li className="flex justify-between items-center border-b border-gray-600 pb-4">
              <span className="text-sm md:text-base lg:text-lg text-gray-400">
                End-to-End Encryption Between Investor and Developer
              </span>
              <span className="text-[#76b900] font-bold text-lg md:text-xl">
                →
              </span>
            </li>
          </ul>
          <div>
            <button className="border border-[#76b900] hover:bg-[#76b900] transition-all ease-out duration-300 text-white px-6 py-3 rounded-md">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 w-full flex items-center justify-center">
        <Image
          src={flowchart}
          alt="flowchart"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
        />
      </div>
    </div>
  );
};

export default Services;
