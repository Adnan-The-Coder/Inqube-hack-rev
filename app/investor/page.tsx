"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { AiOutlineDashboard, AiOutlineTeam } from "react-icons/ai";
import Image from "next/image";
import { FaChalkboardTeacher, FaComments } from "react-icons/fa";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const logo = "/assets/Images/logo.png";

  const links = [
    { name: "Dashboard", icon: <AiOutlineDashboard /> },
    { name: "Mentorship", icon: <FaChalkboardTeacher /> },
    { name: "Community", icon: <FaComments /> },
    { name: "Find Teammates", icon: <AiOutlineTeam /> },
  ];

  return (
    <div className="flex h-screen flex-col bg-[#121212] text-white">
      <header className="fixed z-50 flex w-full items-center justify-between bg-[#181818] p-4 shadow-md">
        <Link href="/">
          <Image src={logo} width={500} height={500} alt="Logo" className="w-28" />
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
              <Link
                href="/"
                className="font-medium text-white hover:text-[#76b900]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="font-medium text-white hover:text-[#76b900]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/marketplace"
                className="font-medium text-white hover:text-[#76b900]"
              >
                Marketplace
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-medium text-white hover:text-[#76b900]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div
        className={`fixed left-0 top-[68px] flex h-[calc(100%-70px)] flex-col justify-between bg-[#1b1b1b] p-6 text-white transition-transform duration-300${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } z-50 w-3/5 lg:w-1/5 lg:translate-x-0`}
      >
        <ul className="space-y-8 text-center lg:text-left">
          {links.map((item, index) => (
            <li
              key={index}
              className="text-md flex cursor-pointer items-center justify-center gap-2 font-medium tracking-wide transition duration-200 hover:text-[#76b900] lg:justify-start"
            >
              {item.icon}
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-[#76b900] p-3 text-white shadow-lg focus:outline-none lg:hidden"
        aria-label="Toggle Sidebar"
      >
        <Image src="https://img.icons8.com/?size=100&id=6690&format=png&color=000000" alt="dashboard" width={25} height={25}/>
      </button>
      <main className="mt-[80px] p-6 lg:ml-[20%]">
        <h2 className="mb-8 text-center text-3xl font-bold lg:text-left">Investor Dashboard</h2>
        <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {["Total Invested", "ROI", "Active Projects", "Notifications"].map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-5 shadow-xl transition hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">{item}</h3>
              <p className="mt-3 text-2xl">
                {item === "Total Invested" && "$1,234,567"}
                {item === "ROI" && "18.2%"}
                {item === "Active Projects" && "12"}
                {item === "Notifications" && "5"}
              </p>
              <p className="mt-2 text-sm text-gray-400">
                {item === "Total Invested" && "+20.1% from last month"}
                {item === "ROI" && "+2.5% from last month"}
                {item === "Active Projects" && "+2 new this month"}
                {item === "Notifications" && "3 new updates, 2 milestones"}
              </p>
            </div>
          ))}
        </div>
        <h3 className="mb-4 text-center text-2xl font-bold lg:text-left">My Investments</h3>
        <div className="mb-10 rounded-lg border border-gray-600 bg-[#1b1b1b] p-6 shadow-xl">
          <h4 className="mb-4 text-xl font-bold">Active Investments</h4>
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
        <h3 className="mb-4 text-center text-2xl font-bold lg:text-left">Transaction History</h3>
        <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-5 shadow-xl">
          <h4 className="mb-4 text-xl font-bold">Recent Transactions</h4>
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
