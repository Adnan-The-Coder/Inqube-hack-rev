"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Homepage() {
  const brand1 = "/assets/Images/brand1.webp";
  const brand2 = "/assets/Images/brand2.webp";
  const brand3 = "/assets/Images/brand3.webp";
  const brand4 = "/assets/Images/brand4.webp";
  const brand5 = "/assets/Images/brand5.webp";

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md bg-neutral-950 text-white antialiased">
      <div className="z-10 mt-32 flex flex-col items-center justify-center gap-6 px-6 text-center md:mt-28 md:px-12">
        <h1 className="mt-1 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
          Bridge the Gap Between <br />
          <span className="text-3xl text-[#76b900] md:text-5xl">
            Ideas and Investments.
          </span>
        </h1>
        <div className="mt-1 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="md:text-md rounded-lg bg-[#76b900] px-6 py-3 text-sm font-medium text-white shadow-lg transition duration-300 hover:bg-white hover:text-[#76b900]"
          >
            Explore
          </Link>
          <Link
            href="/marketplace"
            className="md:text-md rounded-lg border border-[#76b900] px-6 py-3 text-sm font-medium transition duration-300 hover:bg-[#76b900]"
          >
            Marketplace
          </Link>
        </div>
        <Image src="/assets/Images/home.jpg" width={500} height={500} alt="Home" className="w-64 rounded-lg shadow-lg md:w-96" />
      </div>
      <div className="z-10 mb-24 mt-28 md:mt-16">
        <div className="flex flex-wrap items-center justify-center gap-10 px-2 md:gap-32">
          {[brand1, brand2, brand3, brand4, brand5].map((brand, index) => (
            <Image
              key={index}
              src={brand}
              alt={`Brand ${index + 1}`}
              width={500}
              height={500}
              className="h-auto w-32 cursor-pointer grayscale transition-all ease-in-out hover:scale-105 md:w-40"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
