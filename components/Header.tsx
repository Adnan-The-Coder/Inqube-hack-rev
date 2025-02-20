"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../Images/logo.png";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC7BxJICnYuikbCybJYwSQbV4LyswrnMZs",
  authDomain: "inqube-25.firebaseapp.com",
  projectId: "inqube-25",
  storageBucket: "inqube-25.appspot.com", // ✅ Fixed the incorrect URL
  messagingSenderId: "588510225974",
  appId: "1:588510225974:web:382b095d7c2e72e7ae5a97",
  measurementId: "G-JQVWG51VRQ",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isProfileHovered, setIsProfileHovered] = useState(false); 
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      localStorage.setItem("user", JSON.stringify(result.user));
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        localStorage.removeItem("user");
      })
      .catch((error) => console.error("Error signing out:", error));
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Marketplace", href: "/marketplace" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div
      className={`fixed w-full top-0 left-0 z-50 ${
        isScrolled ? "bg-[#0a0a0a] shadow-lg" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="flex items-center justify-between text-white p-2 md:px-8">
        <Link href="/">
          <Image src={logo} alt="Logo" className="w-32 md:w-44" />
        </Link>
        <ul className="hidden lg:flex space-x-6">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-[#76b900] text-white transition-all ease-in-out"
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <div
                className="relative"
                onMouseEnter={() => setIsProfileHovered(true)}
                onMouseLeave={() => setIsProfileHovered(false)}
              >
                <Image
                  src={user.photoURL || "/default-avatar.png"}
                  alt="User Profile"
                  width={40}
                  height={40}
                  className="rounded-full shadow-md cursor-pointer"
                />
                {isProfileHovered && (
                  <div className="absolute top-10 right-0 bg-[#1a1a1a] text-white p-3 w-36 rounded-lg shadow-xl transition-all duration-300">
                    <Link
                      href="/profile"
                      className="block text-sm px-3 py-2 hover:text-[#76b900] transition duration-200"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="w-full bg-red-600 text-sm text-white px-4 py-2 rounded-md 
                        hover:bg-red-700 transition-all duration-300 ease-in-out"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={handleSignIn}
                className="bg-[#76b900] px-5 py-2 rounded-full shadow-md text-white 
                  hover:bg-[#5e9400] hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Sign in
              </button>
            )}
          </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-3xl"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-3xl text-white"
        >
          ✖
        </button>
        <ul className="space-y-6 text-center">
          {menuItems.map((item, index) => (
            <li key={index} onClick={() => setIsMenuOpen(false)}>
              <Link
                href={item.href}
                className="text-xl text-white hover:text-[#76b900]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          {user ? (
            <div className="flex flex-col items-center">
              <Image
                src={user.photoURL || "/default-avatar.png"} // ✅ Fallback Image
                alt="User Profile"
                width={50}
                height={50}
                className="rounded-full border-[1px] border-[#76b900]"
              />
              <button
                onClick={handleSignOut}
                className="px-3 py-2 bg-red-600 rounded-xl mt-5"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={handleSignIn}
              className="bg-[#76b900] px-6 py-3 rounded-full hover:bg-[#5e9400]"
            >
              Sign in 
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
