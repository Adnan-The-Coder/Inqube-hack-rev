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
      <div className="flex items-center justify-center h-screen bg-gray-900 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        
        <div className="relative z-10 flex flex-col items-center w-full px-6">
          <h2 className="text-white text-xl mb-6 animate-pulse">Loading, please wait...</h2>

          {/* Loading Bar */}
          <div className="relative w-full max-w-lg h-4 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-[#76b900] transition-all"
              style={{ width: `${progress}%` }}
            ></div>

            {/* Airplane (Use ✈️ Emoji) */}
            <div
              className="absolute top-1/2 transform -translate-y-1/2 text-xl"
              style={{ left: `calc(${progress}% - 10px)` }}
            >
              <Image 
               src="https://img.icons8.com/?size=100&id=pYfkFiezZNdW&format=png&color=ffffff" alt="plane"
               width={20}
               height={20}
               />
            </div>
          </div>

          <p className="text-white mt-4">{progress}%</p>
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
