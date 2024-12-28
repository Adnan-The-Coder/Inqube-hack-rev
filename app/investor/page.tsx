"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { AiOutlineDashboard, AiOutlineTeam } from "react-icons/ai";
import { FaChalkboardTeacher, FaComments } from "react-icons/fa";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Dashboard", icon: <AiOutlineDashboard /> },
    { name: "Mentorship Program", icon: <FaChalkboardTeacher /> },
    { name: "Community Forums", icon: <FaComments /> },
    { name: "Find Teammates", icon: <AiOutlineTeam /> },
  ];

  return (
    <div className="flex h-screen">
      <div
        className={`fixed top-0 left-0 h-screen bg-[#76b900] text-white p-6 flex flex-col justify-between transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:translate-x-0 w-4/5 md:w-1/5 z-50`}
      >
        <Link
          href="/"
          className="text-4xl font-extrabold mb-8 text-center md:text-left tracking-wide"
        >
          INQUBE
        </Link>
        <ul className="space-y-8 text-center md:text-left">
          {links.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-center md:justify-start gap-2 hover:text-black cursor-pointer text-md font-medium tracking-wide transition duration-200"
            >
              {item.icon}
              {item.name}
            </li>
          ))}
        </ul>
        <div className="mt-16 md:mt-auto text-center md:text-left border-t border-white/50 pt-6">
          <p className="text-gray-200 text-md mb-4 font-semibold">Afzal Hashmi</p>
          <button className="bg-white text-black py-2 px-6 rounded-full shadow-lg tracking-wide transition hover:bg-black hover:text-white">
            Logout
          </button>
        </div>
      </div>
      <div className="w-full md:w-4/5 bg-[#0a0a0a] text-white p-6 md:p-10 overflow-y-auto">
        <div className="md:hidden mb-6">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white text-2xl focus:outline-none z-50 relative"
            >
                {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
        </div>
        <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Investor Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {["Total Invested", "ROI", "Active Projects", "Notifications"].map((item, index) => (
            <div
              key={index}
              className="bg-[#1b1b1b] p-5 rounded-lg border border-gray-600 shadow-md hover:shadow-lg transition"
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
        <h3 className="text-2xl font-bold mb-4 text-center md:text-left">My Investments</h3>
        <div className="bg-[#1b1b1b] p-6 rounded-lg border border-gray-600 mb-10 shadow-md">
          <h4 className="text-xl font-bold mb-4">Active Investments</h4>
          <table className="w-full text-left text-sm md:text-base">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="py-2">Project</th>
                <th className="py-2">Amount Invested</th>
                <th className="py-2">Equity Owned</th>
                <th className="py-2">ROI Progress</th>
              </tr>
            </thead>
            <tbody>
              {[
                { project: "Project A", amount: "$50,000", equity: "5%", roi: "12%" },
                { project: "Project B", amount: "$75,000", equity: "7.5%", roi: "15%" },
                { project: "Project C", amount: "$100,000", equity: "10%", roi: "18%" },
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
        <h3 className="text-2xl font-bold mb-4 text-center md:text-left">Transaction History</h3>
        <div className="bg-[#1b1b1b] p-6 rounded-lg border border-gray-600 shadow-md">
          <h4 className="text-xl font-bold mb-4">Recent Transactions</h4>
          <table className="w-full text-left text-sm md:text-base">
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
                { date: "2023-05-01", type: "Investment", project: "Project A", amount: "$50,000" },
                { date: "2023-06-15", type: "Return", project: "Project B", amount: "$5,000" },
                { date: "2023-07-30", type: "Fee", project: "Platform Fee", amount: "-$500" },
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
};

export default Dashboard;
