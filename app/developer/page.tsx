  "use client";

  import React, { useState } from "react";
  import logo from '@/Images/logo.png'
  import { FiSearch, FiMenu, FiX } from "react-icons/fi";
  import { MessageCircle } from "lucide-react";
  import Image from "next/image";
  import Link from "next/link";
import AddNewProject from "./AddNewProject";

  const Developers: React.FC = () => {
    const [selectedChat, setSelectedChat] = useState<number | null>(null);
    const [messageInput, setMessageInput] = useState("");
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const chats = [
      {
        id: 1,
        name: "Aman Gupta",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        lastMessage: "Hi, I'm interested in your AI blockchain project. Can we schedule a call?",
        time: "2h ago",
        unread: true,
        online: true
      },
      {
        id: 2,
        name: "Namita Thapad",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        lastMessage: "Great progress on the latest milestone! Looking forward to the next update.",
        time: "1d ago",
        unread: false,
        online: false
      },
      {
        id: 3,
        name: "Sarah Khan",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        lastMessage: "Let's discuss the investment terms.",
        time: "3d ago",
        unread: true,
        online: true
      }
    ];

    const investmentStats = [
      { label: "Total Funding", value: "$2.5M", growth: "+15%" },
      { label: "Investor Count", value: "78", growth: "+5" },
      { label: "Avg. Investment", value: "$32K", growth: "+8%" },
    ];

    return (
      <div className="flex flex-col h-screen bg-[#121212] text-white">
        <header className="bg-[#181818] p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
          <Link href="/">
            <Image src={logo} alt="Logo" className="w-28" />
          </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center absolute lg:static top-[70px] left-0 w-full lg:w-auto bg-[#181818] lg:bg-transparent lg:translate-y-0 transition-all`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 p-4 lg:p-0 text-center lg:text-left">
            <li>
              <Link
                href="/"
                className="text-white hover:text-[#76b900] font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white hover:text-[#76b900] font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/marketplace"
                className="text-white hover:text-[#76b900] font-medium"
              >
                Marketplace
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white hover:text-[#76b900] font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

        <div className="flex flex-1 overflow-hidden">
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="lg:hidden fixed bottom-4 right-4 z-50 bg-[#76b900] text-black p-3 rounded-full shadow-lg"
          >
            {isChatOpen ? <FiX size={24} /> : <MessageCircle size={24} />}
          </button>
          <div
            className={`${
              isChatOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0 fixed lg:static left-0 top-0 h-full w-80 border-r border-gray-800 bg-[#181818] flex flex-col transition-transform duration-300 ease-in-out z-40 mt-16 lg:mt-0`}
          >
            <div className="p-4 border-b border-gray-800">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search messages"
                  className="w-full bg-gray-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => {
                    setSelectedChat(chat.id);
                    if (window.innerWidth < 1024) setIsChatOpen(false);
                  }}
                  className={`flex items-center gap-3 p-4 hover:bg-gray-800 cursor-pointer ${
                    selectedChat === chat.id ? "bg-gray-800" : ""
                  }`}
                >
                  <div className="relative">
                    <img
                      src={chat.avatar}
                      alt={chat.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {chat.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#121212]"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-semibold truncate">{chat.name}</h3>
                      <span className="text-xs text-gray-400">{chat.time}</span>
                    </div>
                    <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
                  </div>
                  {chat.unread && (
                    <div className="w-2 h-2 bg-[#76b900] rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 overflow-y-auto bg-[#181818] p-4 lg:p-6 xl:p-10">
            <div className="mb-8">
              <h1 className="text-2xl lg:text-4xl font-bold tracking-wide text-white">
                Developer Dashboard
              </h1>
              <p className="text-gray-400 mt-2">
                Welcome back! Here's an overview of your projects and stats.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
              {[
                { title: "Total Projects", value: "12", growth: "+2 from last month" },
                { title: "Active Projects", value: "8", growth: "+1 from last month" },
                { title: "Funding Secured", value: "$1.2M", growth: "+300K from last month" },
                { title: "Milestones Achieved", value: "24", growth: "+3 from last month" },
              ].map((stat, index) => (
                <div key={index} className="bg-[#242424] p-4 lg:p-6 rounded-xl border border-gray-600">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-300">{stat.title}</h3>
                  <p className="text-2xl lg:text-4xl font-bold mt-2 text-white">{stat.value}</p>
                  <p className="text-gray-400 mt-1 text-sm">{stat.growth}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-4">My Projects</h2>
              <div className="flex items-center space-x-6 mb-4">
                <button className="text-white font-bold border-b-2 border-[#76b900]">Active</button>
                <button className="text-gray-400 hover:text-white">Completed</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Decentralized Identity Solution",
                    description: "Blockchain-based identity verification system.",
                    funding: "75%",
                  },
                  {
                    title: "Smart Contract Auditing Tool",
                    description: "AI-powered security analysis for smart contracts.",
                    funding: "40%",
                  },
                ].map((project, index) => (
                  <div key={index} className="bg-[#242424] p-6 rounded-xl border border-gray-600">
                    <h3 className="text-xl font-bold text-gray-300">{project.title}</h3>
                    <p className="text-gray-400 mt-2 text-sm">{project.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-gray-300">Funding: {project.funding}</p>
                      <div className="space-x-4">
                        <button className="px-4 py-2 bg-[#76b900] text-black font-bold rounded-xl">Edit</button>
                        <button className="px-4 py-2 bg-gray-600 text-gray-300 font-bold rounded-xl hover:bg-gray-700">Update</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <AddNewProject/>
            </div>
          <div className="mt-12 p-8 bg-[#121212] rounded-xl">
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-2">Milestones & Badges</h1>
              <p className="text-gray-400 text-xl">Track your progress and achievements</p>
            </div>
            <div className="space-y-8 mb-8">
              {[
                { name: "Project Verification", progress: "100%" },
                { name: "50% Funding Reached", progress: "75%" },
                { name: "Community Engagement", progress: "60%" },
              ].map((milestone, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-md">{milestone.name}</span>
                    <span className="text-md">{milestone.progress}</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full">
                    <div 
                      className="h-full bg-white rounded-full" 
                      style={{ width: milestone.progress }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mb-12">
              {[
                "💻 Verified Developer",
                "🏆 Top Performer",
                "🏅 Innovation Award"
              ].map((badge, index) => (
                <span key={index} className="text-[10px] md:text-sm text-center py-2 px-0 xl:px-2 bg-[#76b900] hover:translate-y-[-2px] cursor-pointer rounded-full text-black font-semibold">
                  {badge}
                </span>
              ))}
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
  };

  export default Developers;
