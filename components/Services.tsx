import React from "react";
import Image from "next/image";
import flowchart from "../Images/flowchart.png";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#0a0a0a] text-white p-6 md:p-12">
      {/* Image Section */}
      <div className="flex-1 w-full mb-8 md:mb-0 md:mr-8">
        <Image
          src={flowchart}
          alt="flowchart"
          className="w-full h-auto max-w-md mx-auto md:max-w-none"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 w-full px-4 md:px-12">
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center md:text-left">
            Our Services Include
          </h2>
          <ul className="space-y-8">
            {/* List Item */}
            <li className="flex justify-between items-center border-b border-gray-600 pb-6">
              <span className="text-base sm:text-lg text-[#858585]">
                AI-Based Matchmaking for Investors
              </span>
              <span className="text-[#76b900] font-bold text-lg sm:text-xl">
                →
              </span>
            </li>
            <li className="flex justify-between items-center border-b border-gray-600 pb-6">
              <span className="text-base sm:text-lg text-[#858585]">
                Community Forums (For Collaboration and Advice)
              </span>
              <span className="text-[#76b900] font-bold text-lg sm:text-xl">
                →
              </span>
            </li>
            <li className="flex justify-between items-center border-b border-gray-600 pb-6">
              <span className="text-base sm:text-lg text-[#858585]">
                End-to-End Encryption Between Investor and Developer
              </span>
              <span className="text-[#76b900] font-bold text-lg sm:text-xl">
                →
              </span>
            </li>
          </ul>
          <div className="text-center md:text-left">
            <button className="border-[#76b900] hover:bg-[#76b900] transition-all ease-out duration-300 border text-white px-5 py-2 rounded-md">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
