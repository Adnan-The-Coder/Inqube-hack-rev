"use client";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ShootingStars } from "./shooting-stars";
import { StarsBackground } from "./stars-background";

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
      <div className="relative flex h-screen w-full flex-col items-center justify-center rounded-md bg-neutral-900 text-white">
        <Header />
        <h1 className="mb-6 text-4xl font-bold text-[#76b900] md:text-5xl">
          Total Investments
        </h1>
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-extrabold md:text-6xl">
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
          <p className="mt-4 text-lg text-gray-400">Invested</p>
        </div>
        <ShootingStars />
        <StarsBackground />
      </div>
      <Footer/>
    </div>
  );
}
