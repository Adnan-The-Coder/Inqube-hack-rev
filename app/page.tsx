"use client";
import Additional from "@/components/Additional";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Homepage } from "@/components/Homepage";
import Plans from "@/components/Plans";
import Services from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import React from "react";
import { useState, useEffect } from "react";
import arrow from "../Images/arrow.png";
import Image from "next/image";

export default function SparklesPreview() {
  const [isVisible, setIsVisible] = useState(false);

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
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div className="bg-black h-screen">
        <Header/>
        <Homepage/>
        <Additional/>
        <Services/>
        <FAQ/>
        <Plans/>
        <Testimonials/>
        <Footer/>
        {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-[#76b900] text-white p-3 rounded-full shadow-lg"
          aria-label="Back to Top"
        >
          <Image src={arrow} className="w-8" alt="back to top"/>
        </button>
      )}
    </div>
  );
}
