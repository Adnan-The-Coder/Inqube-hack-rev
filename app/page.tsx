"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import { Homepage } from "@/components/Homepage";
import Additional from "@/components/Additional";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Plans from "@/components/Plans";
import Services from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import General from "@/components/General";

export default function SparklesPreview() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
  setTimeout(() => setIsLoading(false), 500);
  
return 100;
}

return prev + 1; // Faster increment
      });
    }, 15); // Faster interval
  
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearInterval(interval);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="relative flex h-screen items-center justify-center bg-gray-900">
        <div className="absolute left-0 top-0 size-full bg-black opacity-70"></div>
        <div className="relative z-10 flex w-full flex-col items-center px-6">
          <h2 className="mb-6 animate-pulse text-xl text-white">Loading, please wait...</h2>
          <div className="relative h-4 w-full max-w-lg overflow-hidden rounded-full bg-gray-700">
            <div
              className="absolute left-0 top-0 h-full bg-[#76b900] transition-all"
              style={{ width: `${progress}%` }}
            ></div>
            <div
              className="absolute top-1/2 -translate-y-1/2 text-xl"
              style={{ left: `calc(${progress}% - 10px)` }}
            >
              <Image 
               src="https://img.icons8.com/?size=100&id=pYfkFiezZNdW&format=png&color=ffffff" alt="plane"
               width={20}
               height={20}
               />
            </div>
          </div>
          <p className="mt-4 text-white">{progress}%</p>
        </div>
      </div>
    );
  }
  
return (
  <div className="bg-black text-white">
    <Header />
    <Homepage />
    <Additional />
    <Services />
    <FAQ />
    <Plans />
    <Testimonials />
    <General />
    <Footer />
    {isVisible && (
    <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 rounded-full bg-green-500 p-3 text-white shadow-lg"
          aria-label="Back to Top"
        >
      <Image src="/assets/Images/arrow.png" width={500} height={500} className="w-8" alt="back to top" />
    </button>
      )}
  </div>
);
}
