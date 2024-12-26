import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../Images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#0a0a0a] text-white flex items-center justify-between p-4 md:p-1 md:px-8">
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
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-start p-6 transform transition-transform ease-in-out duration-500">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl text-white mb-8 focus:outline-none"
          >
            ✖
          </button>
          <ul className="flex flex-col space-y-4">
            {["Home", "About", "Dashboard", "Marketplace", "Contact us"].map(
              (item, index) => (
                <li
                  key={index}
                  className="text-lg hover:text-[#76b900] transition-all"
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
              <button className="bg-[#76b900] px-5 py-2 rounded-full hover:bg-[#5e9400] transition-all">
                Sign in
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
