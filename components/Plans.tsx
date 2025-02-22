import React from "react";
import Image from "next/image";

const Plans: React.FC = () => {
  const pattern = "/assets/Images/pattern.png";

  return (
    <div
      className="relative flex size-full flex-col items-center justify-center bg-[#0a0a0a] pb-10 pt-[100px] text-white md:pt-[390px] lg:pt-[100px]"
      id="plans"
    >
      <Image
        src={pattern}
        alt="Pattern"
        width={500}
        height={500}
        className="floating pointer-events-none absolute bottom-[-70px] right-20 h-auto w-96 rotate-[20deg] scale-110 opacity-30 blur-md"
        priority
      />
      <Image
        src={pattern}
        alt="Pattern"
        width={500}
        height={500}
        className="floating-reverse pointer-events-none absolute left-10 top-[-50px] h-auto w-80 rotate-[60deg] scale-125 opacity-40 blur-sm"
        priority
      />
      <div className="z-10 flex flex-col gap-5 text-center">
        <h1 className="text-4xl font-semibold text-[#76b900] md:text-5xl">
          Elevate Your Business:
        </h1>
        <h2 className="text-xl font-medium text-[#858585] md:text-2xl">
          Flexible Plans For Every Business
        </h2>
      </div>
      <div className="relative z-10 grid grid-cols-1 items-center gap-10 p-5 pt-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex h-[450px] w-[320px] flex-col gap-4 rounded-lg border border-gray-900 bg-[rgba(30,30,30,0.85)] p-8 shadow-2xl transition-transform hover:scale-105">
          <h3 className="text-sm text-gray-400">Basic Plan</h3>
          <h1 className="text-5xl font-bold text-white">$2.00</h1>
          <h4 className="text-md text-gray-400">/service</h4>
          <hr className="border-gray-600" />
          <ul className="space-y-2 text-sm text-gray-300">
            <li>✔ Access to basic investor profiles</li>
            <li>✔ Submit one startup proposal per month</li>
            <li>✔ Access to general startup resources</li>
            <li>✔ Participate in community forums</li>
          </ul>
          <button className="mt-auto rounded-lg bg-[rgba(118,185,0,0.85)] px-4 py-2 text-white transition hover:bg-white hover:text-black">
            Select Plan
          </button>
        </div>
        <div className="flex h-[450px] w-[320px] flex-col gap-4 rounded-lg border border-gray-900 bg-[rgba(118,185,0,0.85)] p-8 shadow-2xl transition-transform hover:scale-105">
          <h3 className="text-sm text-gray-800">Professional Plan</h3>
          <h1 className="text-5xl font-bold text-black">$50.00</h1>
          <h4 className="text-md text-gray-800">/month</h4>
          <hr className="border-gray-500" />
          <ul className="space-y-2 text-sm text-black">
            <li>✔ Access to detailed investor insights</li>
            <li>✔ Unlimited startup proposal submissions</li>
            <li>✔ Customized pitch deck templates</li>
            <li>✔ Priority listing in investor searches</li>
          </ul>
          <button className="mt-auto rounded-lg bg-black px-4 py-2 text-[#76b900] transition hover:bg-[#76b900] hover:text-[#ffffff]">
            Select Plan
          </button>
        </div>
        <div className="flex h-[450px] w-[320px] flex-col gap-4 rounded-lg border border-gray-900 bg-[rgba(30,30,30,0.85)] p-8 shadow-2xl transition-transform hover:scale-105">
          <h3 className="text-sm text-gray-400">Premium Plan</h3>
          <h1 className="text-5xl font-bold text-white">$150.00</h1>
          <h4 className="text-md text-gray-400">/month</h4>
          <hr className="border-gray-600" />
          <ul className="space-y-2 text-sm text-gray-300">
            <li>✔ Full access to all investor profiles</li>
            <li>✔ Dedicated account manager</li>
            <li>✔ Personalized matchmaking with investors</li>
            <li>✔ Exclusive access to investor webinars</li>
            <li>✔ Round-the-clock support</li>
          </ul>
          <button className="mt-auto rounded-lg bg-[rgba(118,185,0,0.85)] px-4 py-2 text-black transition hover:bg-white">
            Select Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
