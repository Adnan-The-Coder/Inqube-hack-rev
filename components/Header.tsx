"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../Images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <li
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="cursor-pointer text-white ">Dashboard ↓</span>
            {isDropdownOpen && (
              <ul className="absolute left-0 w-48 bg-[#0a0a0a] rounded-md shadow-lg">
                <li className="px-4 py-2 hover:bg-[#76b900] rounded-lg">
                  <Link href="/developer">Developer</Link>
                </li>
                <li className="px-4 py-2 hover:bg-[#76b900] rounded-lg">
                  <Link href="/investor">Investor</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div className="hidden lg:block">
          <Link href="/signin">
            <button className="bg-[#76b900] px-5 py-2 rounded-full hover:bg-[#5e9400]">
              Sign in
            </button>
          </Link>
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
              <Link href={item.href} className="text-xl text-white  hover:text-[#76b900]">
                {item.name} 
              </Link>
            </li>
          ))}
          <li onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <span className="cursor-pointer text-xl text-white ">Dashboard ↓</span>
            {isDropdownOpen && (
              <ul className="bg-[#0a0a0a] rounded-md mt-2">
                <li className="px-4 py-2 hover:bg-[#76b900] rounded-lg text-white">
                  <Link href="/developer">Developer</Link>
                </li>
                <li className="px-4 py-2 hover:bg-[#76b900] rounded-lg text-white">
                  <Link href="/investor">Investor</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div className="mt-8">
          <Link href="/signin">
            <button className="bg-[#76b900] px-6 py-3 rounded-full hover:bg-[#5e9400]">
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
