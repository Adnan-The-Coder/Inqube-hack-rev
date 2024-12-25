"use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import Link from "next/link";
import home from "../Images/home.jpg";
import Image from "next/image";
import brand1 from "../Images/brand1.webp";
import brand2 from "../Images/brand2.webp";
import brand3 from "../Images/brand3.webp";
import brand4 from "../Images/brand4.webp";
import brand5 from "../Images/brand5.webp";

export function Homepage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-neutral-950 text-white overflow-hidden rounded-md antialiased">
      <BackgroundBeams />
      <div className="z-10 flex flex-col items-center justify-center px-6 md:px-12 gap-6 text-center mt-16">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mt-1">
          Bridge the Gap Between <br />
          <span className="text-[#76b900] text-3xl md:text-5xl">
            Ideas and Investments.
          </span>
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mt-1">
          <Link
            href="/"
            className="bg-[#76b900] text-white px-6 py-3 rounded-lg text-sm md:text-md font-medium shadow-lg hover:bg-white hover:text-[#76b900] transition duration-300"
          >
            Explore
          </Link>
          <Link
            href="/"
            className="border-[#76b900] border px-6 py-3 rounded-lg text-sm md:text-md font-medium hover:bg-[#76b900] transition duration-300"
          >
            Marketplace
          </Link>
        </div>
        <Image src={home} alt="Home" className="w-64 md:w-96 rounded-lg shadow-lg" />
      </div>
      <div className="z-10 mt-32 md:mt-16">
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-32 px-4">
          {[brand1, brand2, brand3, brand4, brand5].map((brand, index) => (
            <Image
              key={index}
              src={brand}
              alt={`Brand ${index + 1}`}
              className="w-32 md:w-40 h-auto grayscale hover:scale-105 transition-all ease-in-out cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
