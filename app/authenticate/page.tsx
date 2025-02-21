/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaBuilding, FaChartLine, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

type UserType = 'startup' | 'investor' | 'developer' | '';

const Page: React.FC = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    userType: "" as UserType
  });

  // Disable button if any field is empty
  const isButtonDisabled = !user.username || !user.email || !user.userType;

  // Simple redirect function - no API calls, just redirect
  const handleAuthenticate = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (user.userType === 'investor') {
      window.location.href = '/investor';
    } else {
      window.location.href = '/developer';
    }
  };

  const handleUserTypeSelection = (type: UserType) => {
    setUser({ ...user, userType: type });
  };

  return (
    <div className="py-8 min-h-screen bg-[#0b0a0b] flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-[#2a2a2b] bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden flex flex-col items-center justify-center p-6"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-[#76b900]">
          Establish your identity
        </h2>
        <div className="w-full">
          <form onSubmit={handleAuthenticate}>
            <div className="mb-4">
              <label htmlFor="username" className="flex items-center text-[#ffffff] mb-2">
                <FaUser className="mr-2" />
                Username
              </label>
              <input
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="Enter your username"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="flex items-center text-[#ffffff] mb-2">
                <FaEnvelope className="mr-2" />
                Email
              </label>
              <input
                id="email"
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
              />
            </div>
            
            <div className="mb-4">
              <label className="text-[#ffffff] mb-2 block">I am a:</label>
              <div className="grid grid-cols-3 gap-3 mt-2">
                <motion.button
                  type="button"
                  className={`p-3 flex flex-col items-center justify-center rounded-lg border transition-all ${
                    user.userType === 'startup' 
                      ? 'border-[#76b900] bg-[#76b900] bg-opacity-20' 
                      : 'border-gray-600 hover:border-[#76b900]'
                  }`}
                  onClick={() => handleUserTypeSelection('startup')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaBuilding className="text-xl mb-1 text-[#76b900]" />
                  <span className="text-white text-sm">Startup</span>
                </motion.button>
                
                <motion.button
                  type="button"
                  className={`p-3 flex flex-col items-center justify-center rounded-lg border transition-all ${
                    user.userType === 'investor' 
                      ? 'border-[#76b900] bg-[#76b900] bg-opacity-20' 
                      : 'border-gray-600 hover:border-[#76b900]'
                  }`}
                  onClick={() => handleUserTypeSelection('investor')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaChartLine className="text-xl mb-1 text-[#76b900]" />
                  <span className="text-white text-sm">Investor</span>
                </motion.button>
                
                <motion.button
                  type="button"
                  className={`p-3 flex flex-col items-center justify-center rounded-lg border transition-all ${
                    user.userType === 'developer' 
                      ? 'border-[#76b900] bg-[#76b900] bg-opacity-20' 
                      : 'border-gray-600 hover:border-[#76b900]'
                  }`}
                  onClick={() => handleUserTypeSelection('developer')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaCode className="text-xl mb-1 text-[#76b900]" />
                  <span className="text-white text-sm">Developer</span>
                </motion.button>
              </div>
              {user.userType && (
                <p className="text-sm text-[#76b900] mt-2">
                  You selected: {user.userType.charAt(0).toUpperCase() + user.userType.slice(1)}
                </p>
              )}
            </div>

            <motion.button
              type="submit"
              className={`w-full py-3 mt-5 bg-gradient-to-r from-[#76b900] to-[#76b900] text-white font-bold rounded-lg shadow-lg 
                hover:from-[#76b900] hover:to-[#76b900] focus:outline-none 
                focus:ring-2 focus:ring-green-500 focus:ring-offset-2 
                transition duration-200 ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isButtonDisabled}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Authenticate
            </motion.button>
          </form>
          <div className="mt-4 text-sm text-gray-400 text-center">
            By authenticating, you agree to our{" "}
            <Link href="/terms" target="_blank" className="text-[#76b900] hover:underline">
              Terms and Conditions
            </Link>.
          </div>
        </div>
        <div className="px-8 py-4 bg-[#595959] bg-opacity-50 rounded-xl mt-4 flex justify-center">
          <p className="text-sm text-white">
            Already have an account?{" "}
            <Link href={'/'} className='text-[#76b900] hover:underline'>
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
