"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineDashboard, AiOutlineTeam, AiOutlineHome, AiOutlineInfoCircle, AiOutlineShop, AiOutlineContacts } from "react-icons/ai";
import { FaChalkboardTeacher, FaComments } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Dashboard = () => {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");

  const logo = "/assets/Images/logo.png";
  const links = [
    { name: "Home", icon: <AiOutlineHome size={22} />, category: "main", url: "/" },
    { name: "About", icon: <AiOutlineInfoCircle size={22} />, category: "main", url: "/about" },
    { name: "Marketplace", icon: <AiOutlineShop size={22} />, category: "main", url: "/marketplace" },
    { name: "Contact", icon: <AiOutlineContacts size={22} />, category: "main", url: "/contact" },
    { name: "Dashboard", icon: <AiOutlineDashboard size={22} />, category: "dashboard", url: "" },
    { name: "Mentorship", icon: <FaChalkboardTeacher size={22} />, category: "dashboard", url: "" },
    { name: "Community", icon: <FaComments size={22} />, category: "dashboard", url: "" },
    { name: "Find Teammates", icon: <AiOutlineTeam size={22} />, category: "dashboard", url: "" },
  ];

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <DashboardComponent />;
      case "Mentorship":
        return <MentorshipComponent />;
      case "Community":
        return <CommunityComponent />;
      case "Find Teammates":
        return <TeammatesComponent />;
      default:
        return <DashboardComponent />;
    }
  };

  return (
    <div className="flex h-screen bg-[#121212] text-white">
      <div
        className="fixed left-0 top-0 z-50 hidden h-full bg-[#1b1b1b] shadow-lg transition-all duration-300 lg:block"
        onMouseEnter={() => setIsSidebarHovered(true)}
        onMouseLeave={() => setIsSidebarHovered(false)}
        style={{ width: isSidebarHovered ? "240px" : "70px" }}
      >
        <div className="flex h-16 items-center justify-center border-b border-gray-700 px-4">
          {isSidebarHovered ? (
            <Image src={logo} width={500} height={500} alt="Logo" className="w-28" />
          ) : (
            <div className="flex size-8 items-center justify-center rounded-md bg-[#76b900] text-xl font-bold">
              I
            </div>
          )}
        </div>
        <div className="mt-6">
          <div className="mb-2 px-4">
            {isSidebarHovered && <p className="mb-2 text-xs font-medium uppercase text-gray-500">Main Navigation</p>}
          </div>
          {links
            .filter(link => link.category === "main")
            .map((item, index) => (
              <Link href={item.url} key={index}>
                <div
                  className={`flex cursor-pointer items-center px-4 py-3 transition duration-200 hover:bg-[#242424] ${
                    activeTab === item.name ? "border-l-2 border-[#76b900] bg-[#242424] text-[#76b900]" : "text-white"
                  }`}
                >
                  <div className="flex w-7 justify-center">{item.icon}</div>
                  <span
                    className={`ml-4 transition-opacity duration-300 ${
                      isSidebarHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
              </Link>
            ))}
          <div className="mb-2 mt-6 px-4">
            {isSidebarHovered && <p className="mb-2 text-xs font-medium uppercase text-gray-500">Dashboard</p>}
          </div>
          {links
            .filter(link => link.category === "dashboard")
            .map((item, index) => (
              <div
                key={index}
                className={`flex cursor-pointer items-center px-4 py-3 transition duration-200 hover:bg-[#242424] ${
                  activeTab === item.name ? "border-l-2 border-[#76b900] bg-[#242424] text-[#76b900]" : "text-white"
                }`}
                onClick={() => setActiveTab(item.name)}
              >
                <div className="flex w-7 justify-center">{item.icon}</div>
                <span
                  className={`ml-4 transition-opacity duration-300 ${
                    isSidebarHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.name}
                </span>
              </div>
            ))}
        </div>
      </div>
      <div
        className={`fixed left-0 top-0 z-50 h-full w-3/4 bg-[#1b1b1b] shadow-lg transition-transform duration-300 lg:hidden ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-gray-700 px-4">
          <Image src={logo} width={500} height={500} alt="Logo" className="w-24" />
          <button
            onClick={() => setIsMobileSidebarOpen(false)}
            className="rounded-md p-1 text-white hover:bg-[#242424]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="mt-4">
          {/* Main Navigation */}
          <p className="mb-2 px-4 text-xs font-medium uppercase text-gray-500">Main Navigation</p>
          {links
            .filter(link => link.category === "main")
            .map((item, index) => (
              <Link href={item.url} key={index}>
                <div
                  className={`flex cursor-pointer items-center px-4 py-3 transition duration-200 hover:bg-[#242424] ${
                    activeTab === item.name ? "border-l-2 border-[#76b900] bg-[#242424] text-[#76b900]" : "text-white"
                  }`}
                  onClick={() => setIsMobileSidebarOpen(false)}
                >
                  <div className="mr-3">{item.icon}</div>
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
          <p className="mb-2 mt-6 px-4 text-xs font-medium uppercase text-gray-500">Dashboard</p>
          {links
            .filter(link => link.category === "dashboard")
            .map((item, index) => (
              <div
                key={index}
                className={`flex cursor-pointer items-center px-4 py-3 transition duration-200 hover:bg-[#242424] ${
                  activeTab === item.name ? "border-l-2 border-[#76b900] bg-[#242424] text-[#76b900]" : "text-white"
                }`}
                onClick={() => {
                  setActiveTab(item.name);
                  setIsMobileSidebarOpen(false);
                }}
              >
                <div className="mr-3">{item.icon}</div>
                <span>{item.name}</span>
              </div>
            ))}
        </div>
      </div>
      <div className="fixed left-0 top-0 z-40 flex h-16 w-full items-center justify-between bg-[#181818] px-4 shadow-md lg:hidden">
        <button
          onClick={() => setIsMobileSidebarOpen(true)}
          className="rounded-md p-1 text-white hover:bg-[#242424]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <Image src={logo} width={500} height={500} alt="Logo" className="w-24" />
        <div className="w-8"></div> {/* Empty div for flex alignment */}
      </div>
      <div 
        className="w-full transition-all duration-300 lg:pl-[70px]" 
        style={{ 
          paddingLeft: isSidebarHovered ? "240px" : undefined,
          marginTop: "0px"
        }}
      >
        <main className="h-screen overflow-y-auto px-4 py-6 lg:p-8">
          {renderActiveComponent()}
        </main>
      </div>
    </div>
  );
};
const DashboardComponent = () => (
  <div>
    <h2 className="mb-8 text-3xl font-bold">Investor Dashboard</h2>
    <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {[
        { title: "Total Invested", value: "$1,234,567", change: "+20.1% from last month" },
        { title: "ROI", value: "18.2%", change: "+2.5% from last month" },
        { title: "Active Projects", value: "12", change: "+2 new this month" },
        { title: "Notifications", value: "5", change: "3 new updates, 2 milestones" },
      ].map((item, index) => (
        <div
          key={index}
          className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-5 shadow-xl transition hover:bg-[#242424]"
        >
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="mt-3 text-2xl">{item.value}</p>
          <p className="mt-2 text-sm text-gray-400">{item.change}</p>
        </div>
      ))}
    </div>
    <h3 className="mb-4 text-2xl font-bold">My Investments</h3>
    <div className="mb-10 rounded-lg border border-gray-600 bg-[#1b1b1b] p-6 shadow-xl">
      <h4 className="mb-4 text-xl font-bold">Active Investments</h4>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm lg:text-base">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="p-2">Project</th>
              <th className="p-2">Invested</th>
              <th className="p-2">Equity</th>
              <th className="p-2">ROI Progress</th>
            </tr>
          </thead>
          <tbody>
            {[
              { project: "Clt. A", amount: "$50,000", equity: "5%", roi: "12%" },
              { project: "Clt. B", amount: "$75,000", equity: "7.5%", roi: "15%" },
              { project: "Clt. C", amount: "$100,000", equity: "10%", roi: "18%" },
            ].map((row, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-3">{row.project}</td>
                <td className="py-3">{row.amount}</td>
                <td className="py-3">{row.equity}</td>
                <td className="py-3">{row.roi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <h3 className="mb-4 text-2xl font-bold">Transaction History</h3>
    <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-5 shadow-xl">
      <h4 className="mb-4 text-xl font-bold">Recent Transactions</h4>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm lg:text-base">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="py-2">Date</th>
              <th className="py-2">Type</th>
              <th className="py-2">Project</th>
              <th className="py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {[
              { date: "2024-05", type: "Investment", project: "Project A", amount: "$50,000" },
              { date: "2024-06", type: "Return", project: "Project B", amount: "$5,000" },
              { date: "2024-07", type: "Fee", project: "Platform Fee", amount: "-$500" },
            ].map((row, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-3">{row.date}</td>
                <td className="py-3">{row.type}</td>
                <td className="py-3">{row.project}</td>
                <td
                  className={`py-3 ${
                    row.amount.includes("-") ? "text-red-500" : "text-green-400"
                  }`}
                >
                  {row.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

// Mentorship Component
const MentorshipComponent = () => (
  <div>
    <h2 className="mb-8 text-3xl font-bold">Mentorship Hub</h2>
    <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-5 shadow-xl transition hover:bg-[#242424]">
        <h3 className="text-xl font-bold">Active Mentorships</h3>
        <p className="mt-3 text-4xl font-bold text-[#76b900]">8</p>
        <p className="mt-2 text-sm text-gray-400">2 sessions scheduled this week</p>
      </div>
      <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-5 shadow-xl transition hover:bg-[#242424]">
        <h3 className="text-xl font-bold">Hours Mentored</h3>
        <p className="mt-3 text-4xl font-bold text-[#76b900]">126</p>
        <p className="mt-2 text-sm text-gray-400">+12 hours from last month</p>
      </div>
      <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-5 shadow-xl transition hover:bg-[#242424]">
        <h3 className="text-xl font-bold">Average Rating</h3>
        <p className="mt-3 text-4xl font-bold text-[#76b900]">4.8/5</p>
        <p className="mt-2 text-sm text-gray-400">Based on 42 reviews</p>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-6 shadow-xl">
        <h3 className="mb-4 text-xl font-bold">Upcoming Sessions</h3>
        <ul className="space-y-4">
          {[
            { mentee: "John D.", date: "Feb 25, 2025", time: "2:00 PM", topic: "Investment Strategy" },
            { mentee: "Lisa M.", date: "Feb 26, 2025", time: "10:00 AM", topic: "Startup Valuation" },
            { mentee: "Mark P.", date: "Feb 27, 2025", time: "4:30 PM", topic: "Market Analysis" },
          ].map((session, index) => (
            <li key={index} className="rounded-md border border-gray-700 bg-[#232323] p-4">
              <div className="flex justify-between">
                <h4 className="font-bold text-[#76b900]">{session.mentee}</h4>
                <span className="text-sm text-gray-400">{session.date} at {session.time}</span>
              </div>
              <p className="mt-2">Topic: {session.topic}</p>
              <div className="mt-3 flex justify-end space-x-2">
                <button className="rounded-md bg-[#76b900] px-3 py-1 text-sm text-white hover:bg-[#5a8c00]">
                  Join
                </button>
                <button className="rounded-md border border-gray-500 px-3 py-1 text-sm hover:bg-gray-700">
                  Reschedule
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-6 shadow-xl">
        <h3 className="mb-4 text-xl font-bold">Your Mentorship Areas</h3>
        <div className="flex flex-wrap gap-2">
          {["Venture Capital", "Angel Investing", "Financial Analysis", "Due Diligence", "Startup Valuation", "Market Research", "Growth Strategies", "Exit Planning"].map((skill, index) => (
            <span key={index} className="rounded-full bg-[#333] px-3 py-1 text-sm">
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-6">
          <h4 className="mb-3 font-bold">Add New Area of Expertise</h4>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter skill or area"
              className="w-full rounded-l-md border border-gray-600 bg-[#232323] px-3 py-2 focus:outline-none"
            />
            <button className="rounded-r-md bg-[#76b900] px-4 text-white hover:bg-[#5a8c00]">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Community Component
const CommunityComponent = () => (
  <div>
    <h2 className="mb-8 text-3xl font-bold">Community Hub</h2>
    <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
      <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-5 shadow-xl">
        <h3 className="text-xl font-bold">Forum Activity</h3>
        <p className="mt-3 text-4xl font-bold text-[#76b900]">32</p>
        <p className="mt-2 text-sm text-gray-400">New posts this week</p>
      </div>
      <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-5 shadow-xl">
        <h3 className="text-xl font-bold">Direct Messages</h3>
        <p className="mt-3 text-4xl font-bold text-[#76b900]">7</p>
        <p className="mt-2 text-sm text-gray-400">Unread messages</p>
      </div>
      <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-5 shadow-xl">
        <h3 className="text-xl font-bold">Upcoming Events</h3>
        <p className="mt-3 text-4xl font-bold text-[#76b900]">4</p>
        <p className="mt-2 text-sm text-gray-400">Events this month</p>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-6 shadow-xl">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold">Latest Discussions</h3>
            <select className="rounded-md bg-[#232323] px-3 py-1 text-sm">
              <option>All Categories</option>
              <option>Investing</option>
              <option>Startups</option>
              <option>Technology</option>
            </select>
          </div>
          <ul className="space-y-4">
            {[
              { title: "Market trends in AI startups", author: "Tech Investor", replies: 15, views: 124, time: "2 hours ago" },
              { title: "Due diligence checklist for SaaS", author: "VC Associate", replies: 27, views: 203, time: "Yesterday" },
              { title: "Valuation methods comparison", author: "Financial Analyst", replies: 8, views: 97, time: "2 days ago" },
              { title: "Term sheet negotiation tips", author: "Angel Investor", replies: 19, views: 156, time: "3 days ago" },
            ].map((post, index) => (
              <li key={index} className="rounded-md border border-gray-700 bg-[#232323] p-4">
                <h4 className="text-lg font-bold text-[#76b900]">{post.title}</h4>
                <div className="mt-2 flex justify-between text-sm">
                  <span>Posted by: {post.author}</span>
                  <span className="text-gray-400">{post.time}</span>
                </div>
                <div className="mt-3 flex text-sm text-gray-400">
                  <span className="mr-4">{post.replies} replies</span>
                  <span>{post.views} views</span>
                </div>
              </li>
            ))}
          </ul>
          <button className="mt-4 w-full rounded-md bg-[#333] py-2 text-center hover:bg-[#444]">
            View All Discussions
          </button>
        </div>
      </div>
      <div>
        <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-6 shadow-xl">
          <h3 className="mb-4 text-xl font-bold">Upcoming Events</h3>
          <ul className="space-y-4">
            {[
              { name: "Investment Summit", date: "March 5, 2025", attendees: 42 },
              { name: "Startup Pitch Day", date: "March 12, 2025", attendees: 28 },
              { name: "Networking Mixer", date: "March 18, 2025", attendees: 35 },
              { name: "Tech Trends Webinar", date: "March 25, 2025", attendees: 67 },
            ].map((event, index) => (
              <li key={index} className="rounded-md border border-gray-700 bg-[#232323] p-3">
                <div className="flex justify-between">
                  <h4 className="font-bold">{event.name}</h4>
                  <span className="text-xs text-[#76b900]">{event.attendees} going</span>
                </div>
                <p className="mt-1 text-sm text-gray-400">{event.date}</p>
                <button className="mt-2 w-full rounded-sm bg-[#333] py-1 text-sm hover:bg-[#444]">
                  RSVP
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const TeammatesComponent = () => {
  // Extended profiles data with more people and diverse skills
  const allProfiles = [
    {
      name: "Sarah Johnson",
      title: "Senior Developer",
      skills: ["React", "Node.js", "AWS"],
      experience: "7 years",
      availability: "Full-time",
      image: "https://images.pexels.com/photos/30836923/pexels-photo-30836923/free-photo-of-professional-woman-portrait-against-green-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Software Dev"
    },
    {
      name: "Joshua Johnson",
      title: "UI/UX Designer",
      skills: ["Figma", "Adobe XD", "User Research"],
      experience: "5 years",
      availability: "Part-time",
      image: "https://images.pexels.com/photos/16597261/pexels-photo-16597261/free-photo-of-young-freelance-photographer-holding-professional-camera-in-his-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Design"
    },
    {
      name: "Priya Patel",
      title: "Product Manager",
      skills: ["Strategy", "Roadmapping", "Analytics"],
      experience: "4 years",
      availability: "Full-time",
      image: "https://images.pexels.com/photos/30822900/pexels-photo-30822900/free-photo-of-a-thoughtful-woman-with-dramatic-lighting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Software Dev"
    },
    {
      name: "David Kim",
      title: "Marketing Specialist",
      skills: ["SEO", "Content", "Analytics"],
      experience: "6 years",
      availability: "Contract",
      image: "https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Marketing"
    },
    {
      name: "Emma Garcia",
      title: "Financial Analyst",
      skills: ["Modeling", "Forecasting", "Valuation"],
      experience: "3 years",
      availability: "Full-time",
      image: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Finance"
    },
    {
      name: "James Wilson",
      title: "Full-stack Developer",
      skills: ["Python", "React", "Docker"],
      experience: "4 years",
      availability: "Part-time",
      image: "https://images.pexels.com/photos/936090/pexels-photo-936090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Software Dev"
    },
    {
      name: "Olivia Brown",
      title: "Cybersecurity Specialist",
      skills: ["Network Security", "Ethical Hacking", "Firewalls"],
      experience: "5 years",
      availability: "Full-time",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Software Dev"
    },
    {
      name: "Liam Martinez",
      title: "Data Scientist",
      skills: ["Machine Learning", "Python", "Big Data"],
      experience: "6 years",
      availability: "Contract",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Software Dev"
    },
    // Additional team members
    {
      name: "Sophia Chen",
      title: "Backend Developer",
      skills: ["Java", "Spring Boot", "Microservices"],
      experience: "8 years",
      availability: "Full-time",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Software Dev"
    },
    {
      name: "Miguel Rodriguez",
      title: "DevOps Engineer",
      skills: ["Kubernetes", "CI/CD", "Terraform"],
      experience: "5 years",
      availability: "Contract",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Software Dev"
    },
    {
      name: "Aisha Williams",
      title: "Graphic Designer",
      skills: ["Illustration", "Photoshop", "Branding"],
      experience: "4 years",
      availability: "Part-time",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Design"
    },
    {
      name: "Benjamin Lee",
      title: "Mobile Developer",
      skills: ["Swift", "Kotlin", "Flutter"],
      experience: "6 years",
      availability: "Full-time",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Software Dev"
    },
    {
      name: "Zoe Thompson",
      title: "Content Strategist",
      skills: ["Copywriting", "SEO", "Social Media"],
      experience: "3 years",
      availability: "Contract",
      image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Marketing"
    },
    {
      name: "Raj Patel",
      title: "Blockchain Developer",
      skills: ["Solidity", "Web3", "Smart Contracts"],
      experience: "4 years",
      availability: "Part-time",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Software Dev"
    },
    {
      name: "Hannah Schmidt",
      title: "Investment Analyst",
      skills: ["Portfolio Management", "Risk Analysis", "Financial Models"],
      experience: "7 years",
      availability: "Full-time",
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Finance"
    },
    {
      name: "Kai Nakamura",
      title: "3D Artist",
      skills: ["Blender", "Maya", "Substance Painter"],
      experience: "5 years",
      availability: "Contract",
      image: "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Design"
    }
  ];

  // State for filters and search
  const [skillsFilter, setSkillsFilter] = useState("Any");
  const [experienceFilter, setExperienceFilter] = useState("Any");
  const [availabilityFilter, setAvailabilityFilter] = useState("Any");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProfiles, setFilteredProfiles] = useState(allProfiles);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Apply filters whenever filter state changes
  useEffect(() => {
    applyFilters();
  }, [skillsFilter, experienceFilter, availabilityFilter, searchTerm]);

  // Filter profiles based on selected criteria
  const applyFilters = () => {
    let results = [...allProfiles];

    // Apply skills filter
    if (skillsFilter !== "Any") {
      results = results.filter(profile => profile.category === skillsFilter);
    }

    // Apply experience filter
    if (experienceFilter !== "Any") {
      const years = parseInt(experienceFilter);
      results = results.filter(profile => {
        const profileYears = parseInt(profile.experience);
        
return profileYears >= years;
      });
    }

    // Apply availability filter
    if (availabilityFilter !== "Any") {
      results = results.filter(profile => profile.availability === availabilityFilter);
    }

    // Apply search term
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      results = results.filter(profile => 
        profile.name.toLowerCase().includes(term) ||
        profile.title.toLowerCase().includes(term) ||
        profile.skills.some(skill => skill.toLowerCase().includes(term))
      );
    }

    setFilteredProfiles(results);
  };

  // Reset all filters
  const resetFilters = () => {
    setSkillsFilter("Any");
    setExperienceFilter("Any");
    setAvailabilityFilter("Any");
    setSearchTerm("");
  };

  // Handle profile view
  interface Profile {
    name: string;
    title: string;
    skills: string[];
    experience: string;
    availability: string;
    image: string;
    category: string;
  }

  const viewProfile = (profile: Profile) => {
    setSelectedProfile(profile);
    setShowModal(true);
  };

  // Modal for detailed profile view
  const ProfileModal = () => {
    if (!selectedProfile) return null;
    
    return (
      <div className="bg-opacity/70 fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="w-full max-w-2xl rounded-lg border border-gray-600 bg-[#1b1b1b] p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl font-bold">{selectedProfile.name}</h3>
            <button 
              onClick={() => setShowModal(false)}
              className="text-2xl text-gray-400 hover:text-white"
            >
              X
            </button>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="mb-4 md:mb-0 md:mr-6">
              <Image
                src={selectedProfile.image}
                alt={selectedProfile.name}
                width={150}
                height={150}
                className="rounded-lg border-2 border-[#76b900]"
              />
            </div>
            <div className="flex-1">
              <p className="mb-3 text-xl text-[#76b900]">{selectedProfile.title}</p>
              <p className="mb-2"><span className="font-bold text-gray-400">Experience:</span> {selectedProfile.experience}</p>
              <p className="mb-2"><span className="font-bold text-gray-400">Availability:</span> {selectedProfile.availability}</p>
              <p className="mb-2"><span className="font-bold text-gray-400">Category:</span> {selectedProfile.category}</p>
              <div className="mb-4">
                <p className="mb-2 font-bold text-gray-400">Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProfile.skills.map((skill, i) => (
                    <span key={i} className="rounded-full bg-[#333] px-3 py-1 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mb-4">
                <span className="font-bold text-gray-400">About:</span> {selectedProfile.name} is a talented {selectedProfile.title.toLowerCase()} with {selectedProfile.experience} of experience in the industry. They specialize in {selectedProfile.skills.join(", ")}.
              </p>
              <button className="w-full rounded-md bg-[#76b900] py-2 font-medium transition-all hover:bg-[#5a8c00]">
                Contact {selectedProfile.name.split(" ")[0]}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-8 text-3xl font-bold">Find Teammates</h2>
      <div className="mb-6 rounded-lg border border-gray-600 bg-[#1b1b1b] p-6 shadow-xl">
        <div className="mb-4">
          <label className="mb-1 block text-sm">Search by name, title or skill</label>
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="e.g. React, Designer, Sarah..."
            className="w-full rounded-md bg-[#232323] px-4 py-2"
          />
        </div>
        <div className="mb-4 flex flex-col space-y-4 lg:flex-row lg:items-end lg:space-x-4 lg:space-y-0">
          <div>
            <label className="mb-1 block text-sm">Category</label>
            <select 
              value={skillsFilter}
              onChange={(e) => setSkillsFilter(e.target.value)}
              className="w-full rounded-md bg-[#232323] px-4 py-2 lg:w-40"
            >
              <option>Any</option>
              <option>Software Dev</option>
              <option>Design</option>
              <option>Marketing</option>
              <option>Finance</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm">Experience</label>
            <select 
              value={experienceFilter}
              onChange={(e) => setExperienceFilter(e.target.value)}
              className="w-full rounded-md bg-[#232323] px-4 py-2 lg:w-40"
            >
              <option>Any</option>
              <option>1</option>
              <option>3</option>
              <option>5</option>
              <option>7</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm">Availability</label>
            <select 
              value={availabilityFilter}
              onChange={(e) => setAvailabilityFilter(e.target.value)}
              className="w-full rounded-md bg-[#232323] px-4 py-2 lg:w-40"
            >
              <option>Any</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
            </select>
          </div>
          <button 
            onClick={resetFilters}
            className="rounded-md border border-gray-600 px-6 py-2 font-medium transition-all hover:bg-[#333]"
          >
            Reset Filters
          </button>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm text-gray-400">
            Found {filteredProfiles.length} teammates matching your criteria
          </p>
        </div>
      </div>
      {filteredProfiles.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProfiles.map((profile, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-6 shadow-xl transition-all hover:border-gray-700"
            >
              <div className="flex items-center">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  width={100}
                  height={100}
                  className="size-16 rounded-full border-2 border-[#76b900] object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-bold">{profile.name}</h3>
                  <p className="text-[#76b900]">{profile.title}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="mb-2 text-sm">
                  <span className="text-gray-400">Experience:</span>{" "}
                  {profile.experience}
                </p>
                <p className="mb-2 text-sm">
                  <span className="text-gray-400">Availability:</span>{" "}
                  {profile.availability}
                </p>
                <div className="mb-4">
                  <p className="mb-1 text-sm text-gray-400">Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-[#333] px-3 py-1 text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="w-1/2 rounded-md bg-[#76b900] py-2 text-sm font-medium hover:bg-[#5a8c00]">
                    Contact
                  </button>
                  <button 
                    onClick={() => viewProfile(profile)}
                    className="w-1/2 rounded-md border border-gray-600 py-2 text-sm font-medium hover:bg-[#333]"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-8 text-center">
          <p className="text-xl">No teammates match your current filters</p>
          <button 
            onClick={resetFilters}
            className="mt-4 rounded-md bg-[#76b900] px-6 py-2 font-medium transition-all hover:bg-[#5a8c00]"
          >
            Reset All Filters
          </button>
        </div>
      )}
      {showModal && <ProfileModal />}
    </div>
  );
};

export default Dashboard;