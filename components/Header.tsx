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
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full top-0 left-0 z_class ${
        isScrolled ? "bg-[#0a0a0a] shadow-lg" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="flex items-center justify-between text-white p-4 md:p-1 md:px-8">
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" className="w-32 md:w-44" />
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl focus:outline-none"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex space-x-6">
            <li className="m-2 hover:text-[#76b900] transition-all ease-in-out">
              <Link href="/">Home</Link>
            </li>
            <li className="m-2 hover:text-[#76b900] transition-all ease-in-out">
              <Link href="/about">About</Link>
            </li>
            <li className="m-2 hover:text-[#76b900] transition-all ease-in-out">
              <Link href="/marketplace">Marketplace</Link>
            </li>
            <li className="m-2 hover:text-[#76b900] transition-all ease-in-out">
              <Link href="/contact">Contact</Link>
            </li>
            <li
              className="relative m-2 group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <span className="cursor-pointer">Dashboard ↓</span>
              <div
                className={`absolute left-0 w-48 bg-[#0a0a0a] text-white shadow-lg rounded-md transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out`}
              >
                <ul className="mt-5">
                  <li className="px-4 py-2 hover:bg-[#76b900] rounded-lg">
                    <Link href="/developer">Developer</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#76b900] rounded-lg">
                    <Link href="/investor">Investor</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <Link href="/sign-in">
            <button className="bg-[#76b900] px-5 py-2 rounded-full hover:bg-[#5e9400] transition-all">
              Sign in
            </button>
          </Link>
        </div>
        <div
          className={`fixed inset-y-0 left-0 w-full bg-black bg-opacity-90 z-50 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 flex flex-col justify-center items-center p-6`}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-3xl text-white focus:outline-none"
          >
            ✖
          </button>
          <ul className="flex flex-col space-y-6 text-center">
            <li className="text-xl font-medium hover:text-[#76b900] transition-all">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="text-xl font-medium hover:text-[#76b900] transition-all">
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li className="text-xl font-medium hover:text-[#76b900] transition-all">
              <Link href="/marketplace" onClick={() => setIsMenuOpen(false)}>
                Marketplace
              </Link>
            </li>
            <li className="text-xl font-medium hover:text-[#76b900] transition-all">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li
              className="relative text-xl font-medium hover:text-[#76b900] transition-all"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="cursor-pointer">Dashboard ↓</span>
              {isDropdownOpen && (
                <ul className="absolute left-0 bg-[#0a0a0a] text-white shadow-lg rounded-md w-full">
                  <li className="px-4 py-2 hover:bg-[#76b900]">
                    <Link href="/developer" onClick={() => setIsMenuOpen(false)}>
                      Developer
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#76b900]">
                    <Link href="/investor" onClick={() => setIsMenuOpen(false)}>
                      Investor
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
          <div className="mt-8">
            <Link href="/sign-in" onClick={() => setIsMenuOpen(false)}>
              <button className="bg-[#76b900] px-6 py-3 rounded-full hover:bg-[#5e9400] transition-all">
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
