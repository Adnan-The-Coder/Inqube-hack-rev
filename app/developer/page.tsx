"use client";

import React, { useState, useEffect } from "react";
import {FiX, FiHome, FiGrid, FiBarChart2, FiSettings, FiLock, FiMenu } from "react-icons/fi";
import { MessageCircle, Calendar, ChevronDown, Landmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import nazish from "./nazish.jpg";
import CalendarView from "./CalendarView";
import AddNewProject from "./AddNewProject";
import SettingsView from "./SettingsView";
import MessagesView from "./MessagesView";
import AnalyticsView from "./AnalyticsView";
import MentorshipCourses from "./MentorshipCourses";

const Developers: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeDashboardTab, setActiveDashboardTab] = useState("overview");
  const [activeProjectsTab, setActiveProjectsTab] = useState("active");
  const [expandedSections, setExpandedSections] = useState({
    projects: true,
    analytics: false,
    settings: false
  });
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const logo = "/assets/Images/logo.png";

  // Check if mobile on mount and when window resizes
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // Auto-close sidebar on small screens
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    // Set initial state
    checkMobile();

    // Add event listener
    window.addEventListener('resize', checkMobile);

    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Sample data
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
        { from: "You", text: "Sure, I'll set up a meeting.", time: "2d ago" },
      ],
    },
  ];

  const projects = {
    active: [
      { 
        id: 1,
        title: "Decentralized Identity Solution", 
        description: "Blockchain-based identity verification system.", 
        funding: "75%",
        team: 4,
        deadline: "Mar 15, 2025",
        milestones: [
          { name: "Research Phase", complete: true },
          { name: "Prototype", complete: true },
          { name: "MVP Development", complete: false },
          { name: "Testing", complete: false }
        ]
      },
      { 
        id: 2,
        title: "Smart Contract Auditing Tool", 
        description: "AI-powered security analysis for smart contracts.", 
        funding: "40%",
        team: 3,
        deadline: "Apr 10, 2025",
        milestones: [
          { name: "Research Phase", complete: true },
          { name: "Algorithm Design", complete: false },
          { name: "Implementation", complete: false },
          { name: "Testing", complete: false }
        ]
      },
      { 
        id: 3,
        title: "NFT Marketplace", 
        description: "Platform for creators to mint and sell digital assets.", 
        funding: "60%",
        team: 5,
        deadline: "May 5, 2025",
        milestones: [
          { name: "UI/UX Design", complete: true },
          { name: "Smart Contract Development", complete: false },
          { name: "Frontend Integration", complete: false },
          { name: "Testing & Launch", complete: false }
        ]
      },
    ],
    completed: [
      { 
        id: 4,
        title: "DeFi Yield Aggregator", 
        description: "Automated yield optimization across multiple protocols.", 
        funding: "100%",
        team: 6,
        completedDate: "Jan 20, 2025",
        roi: "+22%"
      },
      { 
        id: 5,
        title: "Blockchain Explorer", 
        description: "Visualize and explore blockchain transactions and smart contracts.", 
        funding: "100%",
        team: 3,
        completedDate: "Dec 12, 2024",
        roi: "+15%"
      },
    ]
  };

  const upcomingEvents = [
    { id: 1, title: "Team Standup", date: "Today, 10:00 AM", participants: 5 },
    { id: 2, title: "Investor Pitch", date: "Tomorrow, 2:00 PM", participants: 8 },
    { id: 3, title: "Code Review", date: "Feb 27, 11:00 AM", participants: 3 },
  ];

  // Toggle section expansion
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  // Handle sending messages in chat
  const handleSendMessage = () => {
    if (selectedChat !== null && messageInput.trim() !== "") {
      const newMessage = { from: "You", text: messageInput, time: "Just now" };
      const chatIndex = chats.findIndex(chat => chat.id === selectedChat);
      
      if (chatIndex !== -1) {
        // Create a new array with the updated chat
        const updatedChats = [...chats];
        updatedChats[chatIndex] = {
          ...updatedChats[chatIndex],
          messages: [...updatedChats[chatIndex].messages, newMessage],
          lastMessage: messageInput
        };
        
        // In a real app, you would update state here and send to API
        console.log("Message sent:", messageInput);
        console.log("Updated chats:", updatedChats);
      }
      
      setMessageInput("");
    }
  };

  // Handle key press in message input
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Handle clicking on a tab - close sidebar on mobile
  const handleTabClick = (tab: string) => {
    setActiveDashboardTab(tab);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  // Components for different dashboard sections
  const DashboardOverview = () => (
    <>
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
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-gray-600 bg-[#242424] p-6">
            <h3 className="mb-4 text-xl font-bold">Project Activity</h3>
            <div className="h-64 w-full rounded-lg bg-[#1e1e1e] p-4">
              <p className="text-center text-gray-400">Activity chart will render here</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-gray-600 bg-[#242424] p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold">Upcoming</h3>
            <h1 onClick={() => handleTabClick("calendar")} className="text-sm text-[#76b900] hover:underline">View All</h1>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map(event => (
              <div key={event.id} className="rounded-lg bg-[#1e1e1e] p-4">
                <h4 className="font-medium">{event.title}</h4>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-gray-400">{event.date}</span>
                  <span className="text-sm text-gray-400">{event.participants} participants</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="mb-4 text-2xl font-bold text-white">My Projects</h2>
        <div className="mb-4 flex items-center space-x-6">
          <button 
            className={`border-b-2 ${activeProjectsTab === "active" ? "border-[#76b900] font-bold text-white" : "border-transparent text-gray-400"}`}
            onClick={() => setActiveProjectsTab("active")}
          >
            Active
          </button>
          <button 
            className={`border-b-2 ${activeProjectsTab === "completed" ? "border-[#76b900] font-bold text-white" : "border-transparent text-gray-400"}`}
            onClick={() => setActiveProjectsTab("completed")}
          >
            Completed
          </button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects[activeProjectsTab === "active" ? "active" : "completed"].map((project) => (
            <div key={project.id} className="rounded-xl border border-gray-600 bg-[#242424] p-6">
              <h3 className="text-xl font-bold text-gray-300">{project.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{project.description}</p>
              {activeProjectsTab === "active" ? (
                <>
                  <div className="mt-4">
                    <div className="mb-1 flex justify-between">
                      <span className="text-sm text-gray-400">Funding Progress</span>
                      <span className="text-sm text-gray-300">{project.funding}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-700">
                      <div 
                        className="h-full rounded-full bg-[#76b900]" 
                        style={{ width: project.funding }}
                      ></div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">Team: {project.team} members</p>
                      {'deadline' in project && (
                        <p className="text-sm text-gray-400">Deadline: {project.deadline}</p>
                      )}
                    </div>
                    <div className="space-x-2">
                      <button className="rounded-xl bg-[#76b900] px-3 py-1 text-sm font-bold text-black">Edit</button>
                      <button className="rounded-xl bg-gray-600 px-3 py-1 text-sm font-bold text-gray-300 hover:bg-gray-700">Update</button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="mt-4">
                  {'completedDate' in project && (
                    <p className="text-sm text-gray-400">Completed: {project.completedDate}</p>
                  )}
                  <p className="text-sm text-gray-400">Team size: {project.team} members</p>
                  {'roi' in project && (
                    <p className="mt-2 text-sm font-semibold text-[#76b900]">ROI: {project.roi}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        {activeProjectsTab === "active" && <AddNewProject />}
      </div>
      <div className="mt-12 rounded-xl bg-[#121212] p-8">
        <div className="mb-8">
          <h1 className="mb-2 text-2xl font-bold lg:text-3xl">Milestones & Badges</h1>
          <p className="text-lg text-gray-400">Track your progress and achievements</p>
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
                <div className="h-full rounded-full bg-[#76b900]" style={{ width: milestone.progress }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const ProjectsView = () => (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-wide text-white lg:text-4xl">My Projects</h1>
        <p className="mt-2 text-gray-400">Manage and track all your blockchain projects</p>
      </div>
      <div className="mb-6 flex items-center space-x-6">
        <button 
          className={`border-b-2 ${activeProjectsTab === "active" ? "border-[#76b900] font-bold text-white" : "border-transparent text-gray-400"}`}
          onClick={() => setActiveProjectsTab("active")}
        >
          Active Projects
        </button>
        <button 
          className={`border-b-2 ${activeProjectsTab === "completed" ? "border-[#76b900] font-bold text-white" : "border-transparent text-gray-400"}`}
          onClick={() => setActiveProjectsTab("completed")}
        >
          Completed Projects
        </button>
      </div>
      {activeProjectsTab === "active" ? (
        projects.active.map(project => (
          <div key={project.id} className="mb-6 rounded-xl border border-gray-600 bg-[#242424] p-6">
            <div className="mb-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-300">{project.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{project.description}</p>
              </div>
              <div className="flex space-x-2">
                <button className="rounded-xl bg-[#76b900] px-4 py-2 font-bold text-black">Edit</button>
                <button className="rounded-xl bg-gray-600 px-4 py-2 font-bold text-gray-300 hover:bg-gray-700">Update</button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-[#1e1e1e] p-4">
                <h4 className="mb-2 font-medium">Funding Progress</h4>
                <div className="mb-1 flex justify-between">
                  <span className="text-sm text-gray-400">Progress</span>
                  <span className="text-sm text-gray-300">{project.funding}</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-700">
                  <div 
                    className="h-full rounded-full bg-[#76b900]" 
                    style={{ width: project.funding }}
                  ></div>
                </div>
              </div>
              <div className="rounded-lg bg-[#1e1e1e] p-4">
                <h4 className="mb-2 font-medium">Team & Timeline</h4>
                <p className="text-sm text-gray-400">Team Members: <span className="text-white">{project.team}</span></p>
                <p className="text-sm text-gray-400">Deadline: <span className="text-white">{project.deadline}</span></p>
              </div>
              <div className="rounded-lg bg-[#1e1e1e] p-4">
                <h4 className="mb-2 font-medium">Milestones</h4>
                <div className="space-y-2">
                  {project.milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`mr-2 size-4 rounded-full ${milestone.complete ? 'bg-[#76b900]' : 'bg-gray-600'}`}></div>
                      <span className={`text-sm ${milestone.complete ? 'text-white' : 'text-gray-400'}`}>
                        {milestone.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        projects.completed.map(project => (
          <div key={project.id} className="mb-6 rounded-xl border border-gray-600 bg-[#242424] p-6">
            <div className="mb-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-300">{project.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{project.description}</p>
              </div>
              <div>
                <span className="rounded-lg bg-green-800 px-3 py-1 text-sm text-white">Completed</span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-[#1e1e1e] p-4">
                <h4 className="mb-2 font-medium">Performance</h4>
                <p className="text-sm text-gray-400">ROI: <span className="font-semibold text-[#76b900]">{project.roi}</span></p>
              </div>
              <div className="rounded-lg bg-[#1e1e1e] p-4">
                <h4 className="mb-2 font-medium">Team & Timeline</h4>
                <p className="text-sm text-gray-400">Team Members: <span className="text-white">{project.team}</span></p>
                <p className="text-sm text-gray-400">Completed On: <span className="text-white">{project.completedDate}</span></p>
              </div>
              <div className="rounded-lg bg-[#1e1e1e] p-4">
                <h4 className="mb-2 font-medium">Status</h4>
                <p className="text-sm text-gray-400">All milestones completed</p>
                <p className="mt-2 text-sm text-gray-400">
                  <a href="#" className="text-[#76b900] hover:underline">View Project Documentation</a>
                </p>
              </div>
            </div>
          </div>
        ))
      )}
      {activeProjectsTab === "active" && <AddNewProject />}
    </>
  );

  return (
    <div className="flex h-screen bg-[#121212] text-white">
      <button 
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="fixed left-4 top-4 z-50 rounded-lg bg-[#242424] p-2 md:hidden"
      >
        <FiMenu size={24} className="text-white" />
      </button>
      {isSidebarOpen && isMobile && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden" 
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      <div className={`
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        fixed z-50 h-full w-64 shrink-0 bg-[#181818] transition-transform duration-300 ease-in-out md:relative md:translate-x-0
      `}>
        <div className="flex h-16 items-center justify-between border-b border-gray-800 px-4">
          <Link href="/">
            <Image src={logo} alt="Logo" width={120} height={40} />
          </Link>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="text-gray-400 md:hidden"
          >
            <FiX size={24} />
          </button>
        </div>
        <div className="flex h-[calc(100%-64px)] flex-col justify-between overflow-y-auto p-4">
          <nav>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleTabClick("overview")}
                  className={`flex w-full items-center rounded-lg px-4 py-2 ${
                    activeDashboardTab === "overview" 
                      ? "bg-[#242424] text-[#76b900]" 
                      : "text-gray-300 hover:bg-[#242424]"
                  }`}
                >
                  <FiHome className="mr-3" size={18} />
                  Dashboard
                </button>
              </li>
              <li>
                <div>
                  <button 
                    onClick={() => toggleSection("projects")}
                    className="flex w-full items-center justify-between rounded-lg px-4 py-2 text-gray-300 hover:bg-[#242424]"
                  >
                    <div className="flex items-center">
                      <FiGrid className="mr-3" size={18} />
                      Projects
                    </div>
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform ${expandedSections.projects ? "rotate-180" : ""}`} 
                    />
                  </button>
                  {expandedSections.projects && (
                    <ul className="mt-2 space-y-1 pl-10">
                      <li>
                        <button 
                          onClick={() => handleTabClick("projects")}
                          className={`w-full rounded-lg px-3 py-1 text-left text-sm ${
                            activeDashboardTab === "projects" 
                              ? "bg-[#242424] text-[#76b900]" 
                              : "text-gray-300 hover:bg-[#242424]"
                          }`}
                        >
                          View All
                        </button>
                      </li>
                      <li>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <div>
                  <button 
                    onClick={() => toggleSection("analytics")}
                    className="flex w-full items-center justify-between rounded-lg px-4 py-2 text-gray-300 hover:bg-[#242424]"
                  >
                    <div className="flex items-center">
                      <FiBarChart2 className="mr-3" size={18} />
                      Analytics
                    </div>
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform ${expandedSections.analytics ? "rotate-180" : ""}`} 
                    />
                  </button>
                  {expandedSections.analytics && (
                    <ul className="mt-2 space-y-1 pl-10">
                      <li>
                        <button 
                          onClick={() => handleTabClick("analytics")}
                          className={`w-full rounded-lg px-3 py-1 text-left text-sm ${
                            activeDashboardTab === "analytics" 
                              ? "bg-[#242424] text-[#76b900]" 
                              : "text-gray-300 hover:bg-[#242424]"
                          }`}
                        >
                          Overview
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <button 
                  onClick={() => setActiveDashboardTab("calendar")}
                  className={`flex w-full items-center rounded-lg px-4 py-2 ${
                    activeDashboardTab === "calendar" 
                      ? "bg-[#242424] text-[#76b900]" 
                      : "text-gray-300 hover:bg-[#242424]"
                  }`}
                >
                  <Calendar className="mr-3" size={18} />
                  Calendar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveDashboardTab("mentorship")}
                  className={`flex w-full items-center rounded-lg px-4 py-2 ${
                    activeDashboardTab === "mentorship" 
                      ? "bg-[#242424] text-[#76b900]" 
                      : "text-gray-300 hover:bg-[#242424]"
                  }`}
                >
                  <Landmark className="mr-3" size={18} />
                  Mentorship
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveDashboardTab("messages")}
                  className={`flex w-full items-center justify-between rounded-lg px-4 py-2 ${
                    activeDashboardTab === "messages" 
                      ? "bg-[#242424] text-[#76b900]" 
                      : "text-gray-300 hover:bg-[#242424]"
                  }`}
                >
                  <div className="flex items-center">
                    <MessageCircle className="mr-3" size={18} />
                    Messages
                  </div>
                  <div className="flex size-5 items-center justify-center rounded-full bg-[#76b900] text-xs font-medium text-black">
                    2
                  </div>
                </button>
              </li>
              <li>
                <div>
                  <button 
                    onClick={() => toggleSection("settings")}
                    className="flex w-full items-center justify-between rounded-lg px-4 py-2 text-gray-300 hover:bg-[#242424]"
                  >
                    <div className="flex items-center">
                      <FiSettings className="mr-3" size={18} />
                      Settings
                    </div>
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform ${expandedSections.settings ? "rotate-180" : ""}`} 
                    />
                  </button>
                  {expandedSections.settings && (
                    <ul className="mt-2 space-y-1 pl-10">
                      <li>
                        <button 
                          onClick={() => setActiveDashboardTab("settings")}
                          className={`w-full rounded-lg px-3 py-1 text-left text-sm ${
                            activeDashboardTab === "settings" 
                              ? "bg-[#242424] text-[#76b900]" 
                              : "text-gray-300 hover:bg-[#242424]"
                          }`}
                        >
                          Account
                        </button>
                      </li>
                      <li>
                        <button 
                          className="w-full rounded-lg px-3 py-1 text-left text-sm text-gray-300 hover:bg-[#242424]"
                        >
                          Security
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
            </ul>
          </nav>
          <div onClick={() => setActiveDashboardTab("settings")} className="mt-6 cursor-pointer rounded-lg bg-[#242424] p-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src={nazish}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="absolute bottom-0 right-0 size-2 rounded-full border border-[#242424] bg-green-500"></div>
              </div>
              <div className="min-w-0">
                <h3 className="truncate text-sm font-medium">Nazish Ahmed</h3>
                <p className="truncate text-xs text-gray-400">realnazishahmed@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-6 lg:p-8">
        {activeDashboardTab === "overview" && <DashboardOverview />}
        {activeDashboardTab === "projects" && <ProjectsView />}
        {activeDashboardTab === "analytics" && <AnalyticsView />}
        {activeDashboardTab === "calendar" && <CalendarView />}
        {activeDashboardTab === "mentorship" && <MentorshipCourses />}
        {activeDashboardTab === "messages" && <MessagesView />}
        {activeDashboardTab === "settings" && <SettingsView />}
      </div>
      <div className={`
        fixed bottom-0 right-0 z-50 w-full overflow-hidden rounded-t-xl bg-[#242424] shadow-lg transition-transform duration-300 ease-in-out
        ${isChatOpen ? 'h-96 translate-y-0' : 'h-0 translate-y-full'}
        md:w-96
      `}>
        <div className="flex h-12 items-center justify-between border-b border-gray-700 bg-[#1e1e1e] px-4">
          <div className="flex items-center space-x-2">
            <MessageCircle size={18} />
            <h3 className="font-medium">
              {selectedChat ? chats.find(c => c.id === selectedChat)?.name : 'Messages'}
            </h3>
          </div>
          <div className="flex items-center">
            <FiLock size={14} className="mr-2 text-[#76b900]" title="End-to-end encrypted" />
            <button onClick={() => setIsChatOpen(false)}>
              <FiX size={20} />
            </button>
          </div>
        </div>
        {selectedChat ? (
          <div className="flex h-[calc(100%-48px)] flex-col">
            <div className="flex-1 overflow-y-auto p-4">
              {chats.find(c => c.id === selectedChat)?.messages.map((message, idx) => (
                <div 
                  key={idx} 
                  className={`mb-4 flex ${message.from === "You" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.from === "You" 
                        ? "bg-[#242424] text-[#76b900]" 
                        : "bg-[#1e1e1e] text-white"
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className="mt-1 text-right text-xs opacity-70">{message.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-700 p-4">
              <div className="flex items-center rounded-lg bg-[#1e1e1e] p-2">
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent px-2 py-1 text-white focus:outline-none"
                />
                <button 
                  onClick={handleSendMessage}
                  disabled={!messageInput.trim()}
                  className={`rounded-lg px-4 py-1 ${
                    messageInput.trim() 
                      ? "bg-[#242424] text-[#76b900]" 
                      : "bg-gray-700 text-gray-400"
                  }`}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4">
            <p className="mb-4 text-gray-400">Select a conversation to start chatting</p>
            <div className="space-y-2">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setSelectedChat(chat.id)}
                  className="flex cursor-pointer items-center gap-3 rounded-lg p-3 hover:bg-[#1e1e1e]"
                >
                  <div className="relative">
                    <Image
                      src={chat.avatar}
                      alt={chat.name}
                      className="rounded-full object-cover"
                      width={40}
                      height={40}
                    />
                    {chat.online && (
                      <div className="absolute bottom-0 right-0 size-2 rounded-full border-2 border-[#242424] bg-green-500"></div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-semibold">{chat.name}</h3>
                    <p className="truncate text-sm text-gray-400">{chat.lastMessage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-4 right-4 z-40 flex size-14 items-center justify-center rounded-full bg-[#76b900] shadow-lg md:hidden"
      >
        {isChatOpen ? <FiX size={24} /> : <MessageCircle size={24} />}
        {!isChatOpen && (
          <div className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
            2
          </div>
        )}
      </button>
    </div>
  );
};

export default Developers;