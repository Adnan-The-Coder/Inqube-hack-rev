/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaBuilding, FaChartLine, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { Magic } from "magic-sdk";

type UserType = 'startup' | 'investor' | 'developer' | '';

const Page: React.FC = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    userType: "" as UserType
  });

  const [magic, setMagic] = useState<Magic | null>(null);

  // Initialize Magic SDK only on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const magicInstance = new Magic('pk_live_CABFBE82906BEF8B', {
        network: 'sepolia', // or 'mainnet'
      });
      setMagic(magicInstance);
    }
  }, []);

  const isButtonDisabled = !user.username || !user.email || !user.userType;

  const handleAuthenticate = async (e: React.FormEvent, emailAddress: string) => {
    e.preventDefault();

    if (!magic) {
      console.error("Magic SDK is not initialized");
      
      return;
    }

    try {
      await magic.auth.loginWithMagicLink({ email: emailAddress });
      const userInfo = await magic.user.getInfo();
      console.log(`UserInfo: ${userInfo}`);
    } catch (error: any) {
      console.log(error);
    }

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
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b0a0b] py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex w-full max-w-md flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#2a2a2b] bg-opacity-50 p-6 shadow-xl backdrop-blur-xl"
      >
        <h2 className="mb-6 text-center text-3xl font-bold text-[#76b900]">
          Establish your identity
        </h2>
        <div className="w-full">
          <form onSubmit={(e) => handleAuthenticate(e, user.email)}>
            <div className="mb-4">
              <label htmlFor="username" className="mb-2 flex items-center text-[#ffffff]">
                <FaUser className="mr-2" />
                Username
              </label>
              <input
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="Enter your username"
                className="w-full rounded-lg border border-gray-300 p-2 focus:border-yellow-400 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="mb-2 flex items-center text-[#ffffff]">
                <FaEnvelope className="mr-2" />
                Email
              </label>
              <input
                id="email"
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 p-2 focus:border-yellow-400 focus:outline-none"
              />
            </div>    
            <div className="mb-4">
              <label className="mb-2 block text-[#ffffff]">I am a:</label>
              <div className="mt-2 grid grid-cols-3 gap-3">
                <motion.button
                  type="button"
                  className={`flex flex-col items-center justify-center rounded-lg border p-3 transition-all ${user.userType === 'startup' ? 'border-[#76b900] bg-[#76b900] bg-opacity-20' : 'border-gray-600 hover:border-[#76b900]'}`}
                  onClick={() => handleUserTypeSelection('startup')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaBuilding className="mb-1 text-xl text-[#76b900]" />
                  <span className="text-sm text-white">Startup</span>
                </motion.button>     
                <motion.button
                  type="button"
                  className={`flex flex-col items-center justify-center rounded-lg border p-3 transition-all ${user.userType === 'investor' ? 'border-[#76b900] bg-[#76b900] bg-opacity-20' : 'border-gray-600 hover:border-[#76b900]'}`}
                  onClick={() => handleUserTypeSelection('investor')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaChartLine className="mb-1 text-xl text-[#76b900]" />
                  <span className="text-sm text-white">Investor</span>
                </motion.button>     
                <motion.button
                  type="button"
                  className={`flex flex-col items-center justify-center rounded-lg border p-3 transition-all ${user.userType === 'developer' ? 'border-[#76b900] bg-[#76b900] bg-opacity-20' : 'border-gray-600 hover:border-[#76b900]'}`}
                  onClick={() => handleUserTypeSelection('developer')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaCode className="mb-1 text-xl text-[#76b900]" />
                  <span className="text-sm text-white">Developer</span>
                </motion.button>
              </div>
              {user.userType && (
                <p className="mt-2 text-sm text-[#76b900]">
                  You selected: {user.userType.charAt(0).toUpperCase() + user.userType.slice(1)}
                </p>
              )}
            </div>
            <motion.button
              type="submit"
              className={`mt-5 w-full rounded-lg bg-gradient-to-r from-[#76b900] to-[#76b900] py-3 font-bold text-white shadow-lg transition duration-200 hover:from-[#76b900] hover:to-[#76b900] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${isButtonDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
              disabled={isButtonDisabled}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Authenticate
            </motion.button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-400">
            By authenticating, you agree to our{" "}
            <Link href="/terms" target="_blank" className="text-[#76b900] hover:underline">
              Terms and Conditions
            </Link>.
          </div>
        </div>
        <div className="mt-4 flex justify-center rounded-xl bg-[#595959] bg-opacity-50 px-8 py-4">
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
