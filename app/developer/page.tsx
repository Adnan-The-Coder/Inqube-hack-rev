"use client";

import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import logo from '@/Images/logo.png';

import AddNewProject from "./AddNewProject";
import ChatSection from "./ChatSection";

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
      online: true,
      messages: [
        { from: "Aman Gupta", text: "Hi, I'm interested in your AI blockchain project. Can we schedule a call?", time: "2h ago" },
        { from: "You", text: "Sure! Let me know a time.", time: "1h ago" },
      ],
    },
    {
      id: 2,
      name: "Namita Thapad",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastMessage: "Great progress on the latest milestone! Looking forward to the next update.",
      time: "1d ago",
      unread: false,
      online: false,
      messages: [
        { from: "Namita Thapad", text: "Great progress on the latest milestone! Looking forward to the next update.", time: "1d ago" },
        { from: "You", text: "Thanks! I'll be updating soon.", time: "12h ago" },
      ],
    },
    {
      id: 3,
      name: "Sarah Khan",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastMessage: "Let's discuss the investment terms.",
      time: "3d ago",
      unread: true,
      online: true,
      messages: [
        { from: "Sarah Khan", text: "Let's discuss the investment terms.", time: "3d ago" },
        { from: "You", text: "Sure, I’ll set up a meeting.", time: "2d ago" },
      ],
    },
  ];

  // eslint-disable-next-line no-unused-vars
  const hansdleSendMessage = () => {
    if (selectedChat !== null) {
      const newMessage = { from: "You", text: messageInput, time: "Just now" };
      // eslint-disable-next-line no-unused-vars
      const updatedChats = chats.map(chat => {
        if (chat.id === selectedChat) {
          chat.messages.push(newMessage);
        }
        
return chat;
      });
      setMessageInput("");
      // Update the chats state to reflect the new message
      // (You can integrate a state management solution here for a more complex setup)
    }
  };

  return (
    <div className="flex h-screen flex-col bg-[#121212] text-white">
      <header className="sticky top-0 z-50 flex items-center justify-between bg-[#181818] p-4 shadow-md">
        <Link href="/">
          <Image src={logo} alt="Logo" width={120} height={120} />
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none lg:hidden"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute left-0 top-[70px] w-full bg-[#181818] transition-all lg:static lg:flex lg:w-auto lg:translate-y-0 lg:items-center lg:bg-transparent`}
        >
          <ul className="flex flex-col gap-4 p-4 text-center lg:flex-row lg:p-0 lg:text-left">
            <li>
              <Link href="/" className="font-medium text-white hover:text-[#76b900]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="font-medium text-white hover:text-[#76b900]">
                About
              </Link>
            </li>
            <li>
              <Link href="/marketplace" className="font-medium text-white hover:text-[#76b900]">
                Marketplace
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-medium text-white hover:text-[#76b900]">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="fixed bottom-4 right-4 z-50 rounded-full bg-[#76b900] p-3 text-black shadow-lg lg:hidden"
        >
          {isChatOpen ? <FiX size={24} /> : <MessageCircle size={24} />}
        </button>
        <div
          className={`${
            isChatOpen ? "translate-x-0" : "-translate-x-full"
          } fixed left-0 top-0 z-40 mt-16 flex h-full w-80 flex-col border-r border-gray-800 bg-[#181818] transition-transform duration-300 ease-in-out lg:static lg:mt-0 lg:translate-x-0`}
        >
          <div className="border-b border-gray-800 p-4">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search messages"
                className="w-full rounded-lg bg-gray-800 py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
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
                className={`flex cursor-pointer items-center gap-3 p-4 hover:bg-gray-800 ${
                  selectedChat === chat.id ? "bg-gray-800" : ""
                }`}
              >
                <div className="relative">
                  <Image
                    src={chat.avatar}
                    alt={chat.name}
                    className="rounded-full object-cover"
                    width={50}
                    height={50}
                  />
                  {chat.online && (
                    <div className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-[#121212] bg-green-500"></div>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center justify-between">
                    <h3 className="truncate font-semibold">{chat.name}</h3>
                    <span className="text-xs text-gray-400">{chat.time}</span>
                  </div>
                  <p className="truncate text-sm text-gray-400">{chat.lastMessage}</p>
                </div>
                {chat.unread && <div className="size-2 rounded-full bg-[#76b900]"></div>}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto bg-[#181818] p-4 lg:p-6 xl:p-10">
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-wide text-white lg:text-4xl">Developer Dashboard</h1>
            <p className="mt-2 text-gray-400">Welcome back! Here's an overview of your projects and stats.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
            {[ 
              { title: "Total Projects", value: "12", growth: "+2 from last month" }, 
              { title: "Active Projects", value: "8", growth: "+1 from last month" }, 
              { title: "Funding Secured", value: "$1.2M", growth: "+300K from last month" }, 
              { title: "Milestones Achieved", value: "24", growth: "+3 from last month" },
            ].map((stat, index) => (
              <div key={index} className="rounded-xl border border-gray-600 bg-[#242424] p-4 lg:p-6">
                <h3 className="text-lg font-semibold text-gray-300 lg:text-xl">{stat.title}</h3>
                <p className="mt-2 text-2xl font-bold text-white lg:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-400">{stat.growth}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-white">My Projects</h2>
            <div className="mb-4 flex items-center space-x-6">
              <button className="border-b-2 border-[#76b900] font-bold text-white">Active</button>
              <button className="text-gray-400 hover:text-white">Completed</button>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[ 
                { title: "Decentralized Identity Solution", description: "Blockchain-based identity verification system.", funding: "75%" },
                { title: "Smart Contract Auditing Tool", description: "AI-powered security analysis for smart contracts.", funding: "40%" },
              ].map((project, index) => (
                <div key={index} className="rounded-xl border border-gray-600 bg-[#242424] p-6">
                  <h3 className="text-xl font-bold text-gray-300">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-400">{project.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-gray-300">Funding: {project.funding}</p>
                    <div className="space-x-4">
                      <button className="rounded-xl bg-[#76b900] px-4 py-2 font-bold text-black">Edit</button>
                      <button className="rounded-xl bg-gray-600 px-4 py-2 font-bold text-gray-300 hover:bg-gray-700">Update</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <AddNewProject />
          </div>
          <div className="mt-12 rounded-xl bg-[#121212] p-8">
            <div className="mb-12">
              <h1 className="mb-2 text-4xl font-bold">Milestones & Badges</h1>
              <p className="text-xl text-gray-400">Track your progress and achievements</p>
            </div>
            <div className="mb-8 space-y-8">
              {[ 
                { name: "Project Verification", progress: "100%" }, 
                { name: "50% Funding Reached", progress: "75%" }, 
                { name: "Community Engagement", progress: "60%" },
              ].map((milestone, index) => (
                <div key={index}>
                  <div className="mb-2 flex justify-between">
                    <span className="text-md">{milestone.name}</span>
                    <span className="text-md">{milestone.progress}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-700">
                    <div className="h-full bg-[#76b900]" style={{ width: milestone.progress }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ChatSection/>
        </div>
      </div>
    </div>
  );
};

export default Developers;
