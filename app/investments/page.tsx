"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import CountUp from "react-countup";
import { ShootingStars } from "./shooting-stars";
import { StarsBackground } from "./stars-background";
import Footer from "@/components/Footer";

export default function TotalInvestments() {
  const [investment, setInvestment] = useState<number | null>(null);
  const MAX_INVESTMENT = 1000000000; 

  useEffect(() => {
    setInvestment(1000000); // Initial value
    const interval = setInterval(() => {
      setInvestment((prev) => {
        const newValue = (prev ?? 0) + Math.floor(Math.random() * 10000);
        return newValue > MAX_INVESTMENT ? MAX_INVESTMENT : newValue; 
      });
    }, 30000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <div className="h-screen rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full text-white">
      <Header />
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#76b900]">
        Total Investments
      </h1>
      <div className="flex flex-col items-center">
        <h2 className="text-5xl md:text-6xl font-extrabold">
          {investment !== null ? (
            <CountUp 
              start={0} 
              end={investment} 
              duration={30}  
              separator="," 
              prefix="$" 
            />
          ) : (
            "Loading..."
          )}
        </h2>
        <p className="text-lg mt-4 text-gray-400">Invested</p>
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
    <Footer/>
      </div>
  );
}
