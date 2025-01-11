import React from "react";
import Image from "next/image";
import pattern from "../Images/pattern.png"; 

const Plans: React.FC = () => {
  return (
    <div
      className="h-full w-full flex flex-col items-center justify-center pb-10 pt-[900px] md:pt-[390px] lg:pt-[100px] bg-[#0a0a0a] text-white relative"
      id="plans"
    >
      <Image
        src={pattern}
        alt="Pattern"
        className="absolute bottom-[-70px] right-20 w-96 h-auto opacity-30 blur-md rotate-[20deg] scale-110 pointer-events-none floating"
        priority
      />
      <Image
        src={pattern}
        alt="Pattern"
        className="absolute top-[-50px] left-10 w-80 h-auto opacity-40 blur-sm rotate-[60deg] scale-125 pointer-events-none floating-reverse"
        priority
      />
      <div className="text-center flex flex-col gap-5 z-10">
        <h1 className="text-[#76b900] text-4xl md:text-5xl font-semibold">
          Elevate Your Business:
        </h1>
        <h2 className="text-white text-xl md:text-2xl font-medium">
          Flexible Plans For Every Business
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 pt-10 gap-10 items-center z-10 relative">
        <div className="p-8 h-[450px] w-[320px] bg-[rgba(30,30,30,0.85)] rounded-lg flex flex-col gap-4 shadow-2xl border border-gray-900 hover:scale-105 transition-transform">
          <h3 className="text-gray-400 text-sm">Starter Plan</h3>
          <h1 className="text-5xl font-bold text-white">$85.45</h1>
          <h4 className="text-gray-400 text-md">/service</h4>
          <hr className="border-gray-600" />
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>✔ Access essential tools & digital marketing</li>
            <li>✔ Create & manage email campaigns</li>
            <li>✔ Basic management of social media</li>
            <li>✔ Monitor performance of your campaigns</li>
          </ul>
          <button className="mt-auto bg-[rgba(118,185,0,0.85)] text-black py-2 px-4 rounded-lg hover:bg-white transition">
            Select Plan
          </button>
        </div>
        <div className="p-8 h-[450px] w-[320px] bg-[rgba(118,185,0,0.85)] rounded-lg flex flex-col gap-4 shadow-2xl border border-gray-900 hover:scale-105 transition-transform">
          <h3 className="text-gray-800 text-sm">Professional Plan</h3>
          <h1 className="text-5xl font-bold text-black">$100</h1>
          <h4 className="text-gray-800 text-md">/service</h4>
          <hr className="border-gray-500" />
          <ul className="text-black space-y-2 text-sm">
            <li>✔ Utilize a broader range of tools</li>
            <li>✔ Send customized marketing strategies</li>
            <li>✔ Advanced management and scheduling</li>
            <li>✔ AI-driven analytics & expert support</li>
          </ul>
          <button className="mt-auto bg-black text-[#76b900] py-2 px-4 rounded-lg hover:bg-[#76b900] hover:text-[#ffffff] transition">
            Select Plan
          </button>
        </div>
        <div className="p-8 h-[450px] w-[320px] bg-[rgba(30,30,30,0.85)] rounded-lg flex flex-col gap-4 shadow-2xl border border-gray-900 hover:scale-105 transition-transform">
          <h3 className="text-gray-400 text-sm">Expert Plan</h3>
          <h1 className="text-5xl font-bold text-white">$155.80</h1>
          <h4 className="text-gray-400 text-md">/service</h4>
          <hr className="border-gray-600" />
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>✔ Access to all marketing tools</li>
            <li>✔ Personalized support from a dedicated team</li>
            <li>✔ Tailored marketing strategies</li>
            <li>✔ Comprehensive management of campaigns</li>
            <li>✔ Round-the-clock support</li>
          </ul>
          <button className="mt-auto bg-[rgba(118,185,0,0.85)] text-black py-2 px-4 rounded-lg hover:bg-white transition">
            Select Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
