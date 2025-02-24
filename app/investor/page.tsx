"use client";

import React, { useState } from "react";
import { AiOutlineDashboard, AiOutlineTeam, AiOutlineHome, AiOutlineInfoCircle, AiOutlineShop, AiOutlineContacts } from "react-icons/ai";
import { FaChalkboardTeacher, FaComments } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import TeammatesComponent from "./TeamatesComponent";
import CommunityComponent from "./CommunityComponent";
import MentorshipComponent from "./MentroshipComponent";

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
        style={{ width: isSidebarHovered ? "240px" : "60px" }}
      >
        <div className="flex h-16 items-center justify-start border-b border-gray-700 px-4">
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
        <div className="w-8"></div> 
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

export default Dashboard;