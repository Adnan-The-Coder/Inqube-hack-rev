"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { AiOutlineDashboard, AiOutlineTeam } from "react-icons/ai";
import { FaChalkboardTeacher, FaComments } from "react-icons/fa";

const Developers: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Dashboard", icon: <AiOutlineDashboard /> },
    { name: "Mentorship", icon: <FaChalkboardTeacher /> },
    { name: "Community", icon: <FaComments /> },
    { name: "Find Teammates", icon: <AiOutlineTeam /> },
  ];

  const investorMessages = [
    {
      id: "S",
      name: "Aman Gupta",
      message:
        "Hi, I'm interested in your AI blockchain project. Can we schedule a call?",
      timeAgo: "2h ago",
    },
    {
      id: "J",
      name: "Namita Thapad",
      message:
        "Great progress on the latest milestone! Looking forward to the next update.",
      timeAgo: "1d ago",
    },
  ];

  const investmentStats = [
    { label: "Total Funding", value: "$2.5M", growth: "+15%" },
    { label: "Investor Count", value: "78", growth: "+5" },
    { label: "Avg. Investment", value: "$32K", growth: "+8%" },
  ];

  return (
    <div className="flex h-screen bg-[#121212] text-white">
      <div
        className={`fixed top-0 left-0 h-screen bg-[#76b900] text-white p-6 flex flex-col justify-between transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } xl:static xl:translate-x-0 w-3/5 xl:w-1/5 z-50`}
      >
        <Link
          href="/"
          className="text-3xl font-extrabold mb-8 text-center xl:text-left text-white"
        >
          INQUBE
        </Link>
        <ul className="space-y-8 text-center xl:text-left">
          {links.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-center xl:justify-start gap-3 hover:text-black cursor-pointer text-md font-medium tracking-wide transition duration-200"
            >
              {item.icon}
              {item.name}
            </li>
          ))}
        </ul>
        <div className="mt-16 xl:mt-auto text-center xl:text-left border-t border-gray-600 pt-6">
          <p className="text-white text-xl mb-4 font-semibold">Afzal Hashmi</p>
          <button className="bg-white text-black py-2 px-6 rounded-xl font-bold shadow-xl tracking-wide transition hover:bg-green-500">
            Logout
          </button>
        </div>
      </div>
      <div className="w-full xl:w-4/5 bg-[#181818] p-6 xl:p-10 overflow-y-auto">
        <div className="xl:hidden mb-6">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl focus:outline-none z-50 relative"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-wide text-white">
            Developer Dashboard
          </h1>
          <p className="text-gray-400 mt-2">
            Welcome back! Here's an overview of your projects and stats.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            {
              title: "Total Projects",
              value: "12",
              growth: "+2 from last month",
            },
            {
              title: "Active Projects",
              value: "8",
              growth: "+1 from last month",
            },
            {
              title: "Funding Secured",
              value: "$1.2M",
              growth: "+300K from last month",
            },
            {
              title: "Milestones Achieved",
              value: "24",
              growth: "+3 from last month",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-[#242424] p-6 rounded-xl border border-gray-600"
            >
              <h3 className="text-xl font-semibold text-gray-300">
                {stat.title}
              </h3>
              <p className="text-4xl font-bold mt-2 text-white">
                {stat.value}
              </p>
              <p className="text-gray-400 mt-1 text-sm">{stat.growth}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button className="w-full bg-[#76b900] text-black py-3 rounded-xl font-bold shadow-xl tracking-wide hover:bg-[#83be1d]">
            + Add New Project
          </button>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">My Projects</h2>
          <div className="flex items-center space-x-6 mb-4">
            <button className="text-white font-bold border-b-2 border-[#76b900]">
              Active
            </button>
            <button className="text-gray-400 hover:text-white">
              Completed
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Decentralized Identity Solution",
                description:
                  "Blockchain-based identity verification system.",
                funding: "75%",
              },
              {
                title: "Smart Contract Auditing Tool",
                description:
                  "AI-powered security analysis for smart contracts.",
                funding: "40%",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-[#242424] p-6 rounded-xl border border-gray-600"
              >
                <h3 className="text-xl font-bold text-gray-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-2 text-sm">
                  {project.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-gray-300">Funding: {project.funding}</p>
                  <div className="space-x-4">
                    <button className="px-4 py-2 bg-[#76b900] text-black font-bold rounded-xl">
                      Edit
                    </button>
                    <button className="px-4 py-2 bg-gray-600 text-gray-300 font-bold rounded-xl hover:bg-gray-700">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 p-8 bg-[#121212] rounded-xl">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-2">Milestones & Badges</h1>
            <p className="text-gray-400 text-xl">Track your progress and achievements</p>
          </div>
          <div className="space-y-8 mb-8">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-md">Project Verification</span>
                <span className="text-md">100%</span>
              </div>
              <div className="h-2 w-full bg-gray-700 rounded-full">
                <div className="h-full bg-white rounded-full w-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-md">50% Funding Reached</span>
                <span className="text-md">75%</span>
              </div>
              <div className="h-2 w-full bg-gray-700 rounded-full">
                <div className="h-full bg-white rounded-full w-3/4"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-md">Community Engagement</span>
                <span className="text-md">60%</span>
              </div>
              <div className="h-2 w-full bg-gray-700 rounded-full">
                <div className="h-full bg-white rounded-full w-3/5"></div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mb-12">
            <span className=" text-[10px] md:text-sm text-center py-2 px-0 xl:px-2 bg-[#76b900] hover:translate-y-[-2px] cursor-pointer rounded-full text-black font-semibold">
                💻 Verified Developer
            </span>
            <span className=" text-[10px] md:text-sm text-center py-2 px-0 xl:px-2 bg-[#76b900] hover:translate-y-[-2px] cursor-pointer rounded-full text-black font-semibold">
                🏆 Top Performer
            </span>
            <span className=" text-[10px] md:text-sm text-center py-2 px-0 xl:px-2 bg-[#76b900] hover:translate-y-[-2px] cursor-pointer rounded-full text-black font-semibold">
                🏅 Innovation Award
            </span>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div className="bg-[#181818] rounded-xl p-4">
              <h2 className="text-2xl font-bold mb-2">Chat with Investors</h2>
              <p className="text-gray-400 mb-6">
                Secure messaging system for direct communication
              </p>
              <div className="space-y-6 mb-6">
                {investorMessages.map((msg, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-7 rounded-full bg-gray-700 flex items-center justify-center">
                      {msg.id}
                    </div>
                    <div>
                      <h3 className="font-semibold">{msg.name}</h3>
                      <p className="text-gray-400">{msg.message}</p>
                  <span className="text-sm text-gray-500">{msg.timeAgo}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link href="https://www.linkedin.com/in/bysarahkhan/" target="_blank" className="text-[#76b900] hover:underline hover:underline-offset-1">To: @Sarah Khan</Link>
            <div className="flex gap-4 mt-2">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 bg-gray-200 rounded-xl px-4 py-2 w-10"
              />
              <button className="bg-white hidden md:flex text-black px-4 py-2 rounded-xl font-semibold">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#181818] rounded-xl p-3">
          <h2 className="text-xl font-bold mb-2">Investment Insights</h2>
          <p className="text-gray-400 mb-6">Analyze funding trends and investor engagement</p>
          
          <div className="space-y-6 mb-6">
            {investmentStats.map((stat, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-400">{stat.label}</span>
                <div className="text-right">
                  <span className="text-xl font-bold mr-2">{stat.value}</span>
                  <span className="text-green-400">{stat.growth}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full bg-white text-black py-3 rounded-xl font-semibold mt-4">
            View Detailed Analytics
          </button>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Developers;