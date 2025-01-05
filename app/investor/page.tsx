"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { AiOutlineDashboard, AiOutlineTeam } from "react-icons/ai";
import Image from "next/image";
import logo from '@/Images/logo.png';
import { FaChalkboardTeacher, FaComments } from "react-icons/fa";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const links = [
    { name: "Dashboard", icon: <AiOutlineDashboard /> },
    { name: "Mentorship", icon: <FaChalkboardTeacher /> },
    { name: "Community", icon: <FaComments /> },
    { name: "Find Teammates", icon: <AiOutlineTeam /> },
  ];

  return (
    <div className="flex flex-col h-screen bg-[#121212] text-white">
      <header className="bg-[#181818] p-4 flex justify-between items-center shadow-md fixed w-full z-50">
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
      <div
        className={`fixed top-[68px] left-0 h-[calc(100%-70px)] bg-[#1b1b1b] text-white p-6 flex flex-col justify-between transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-3/5 lg:w-1/5 z-50`}
      >
        <ul className="space-y-8 text-center lg:text-left">
          {links.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-center lg:justify-start gap-2 hover:text-[#76b900] cursor-pointer text-md font-medium tracking-wide transition duration-200"
            >
              {item.icon}
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed bottom-4 right-4 bg-[#76b900] text-white p-3 rounded-full shadow-lg z-50 focus:outline-none"
        aria-label="Toggle Sidebar"
      >
        <Image src="https://img.icons8.com/?size=100&id=6690&format=png&color=000000" alt="dashboard" width={25} height={25}/>
      </button>

      <main className="p-6 lg:ml-[20%] mt-[80px]">
        <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">Investor Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {["Total Invested", "ROI", "Active Projects", "Notifications"].map((item, index) => (
            <div
              key={index}
              className="bg-[#1b1b1b] p-5 rounded-lg border border-gray-600 shadow-xl hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold">{item}</h3>
              <p className="text-2xl mt-3">
                {item === "Total Invested" && "$1,234,567"}
                {item === "ROI" && "18.2%"}
                {item === "Active Projects" && "12"}
                {item === "Notifications" && "5"}
              </p>
              <p className="text-sm text-gray-400 mt-2">
                {item === "Total Invested" && "+20.1% from last month"}
                {item === "ROI" && "+2.5% from last month"}
                {item === "Active Projects" && "+2 new this month"}
                {item === "Notifications" && "3 new updates, 2 milestones"}
              </p>
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-center lg:text-left">My Investments</h3>
        <div className="bg-[#1b1b1b] p-6 rounded-lg border border-gray-600 mb-10 shadow-xl">
          <h4 className="text-xl font-bold mb-4">Active Investments</h4>
          <table className="w-full text-left text-sm lg:text-base">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="py-2 px-2">Project</th>
                <th className="py-2 px-2">Invested</th>
                <th className="py-2 px-2">Equity</th>
                <th className="py-2 px-2">ROI Progress</th>
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
        <h3 className="text-2xl font-bold mb-4 text-center lg:text-left">Transaction History</h3>
        <div className="bg-[#1b1b1b] p-5 rounded-lg border border-gray-600 shadow-xl">
          <h4 className="text-xl font-bold mb-4">Recent Transactions</h4>
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
      </main>
    </div>
  );
};

export default Dashboard;
