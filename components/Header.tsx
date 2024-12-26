import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../Images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl focus:outline-none"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
        <div className="hidden md:flex">
          <ul className="flex space-x-6">
            {["Home", "About", "Dashboard", "Marketplace", "Contact us"].map(
              (item, index) => (
                <li
                  key={index}
                  className="m-2 hover:text-[#76b900] transition-all ease-in-out"
                >
                  <Link href={item === "Marketplace" ? "/marketplace" : "/"}>
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="hidden md:block">
          <Link href="/">
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
            {["Home", "About", "Dashboard", "Marketplace", "Contact us"].map(
              (item, index) => (
                <li
                  key={index}
                  className="text-xl font-medium hover:text-[#76b900] transition-all"
                >
                  <Link
                    href={item === "Marketplace" ? "/marketplace" : "/"}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
          <div className="mt-8">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
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
