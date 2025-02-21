"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import Additional from "@/components/Additional";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Homepage } from "@/components/Homepage";
import Plans from "@/components/Plans";
import Services from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

<<<<<<< HEAD
import arrow from "../Images/arrow.png";
import General from "@/components/General";

=======
>>>>>>> d9a11b565199db855e8c90c2dadb80b7318a6a9f
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
  <div className="h-screen bg-black">
    <Header/>
    <Homepage/>
    <Additional/>
    <Services/>
    <FAQ/>
    <Plans/>
    <Testimonials/>
    <General/>
    <Footer/>
    {isVisible && (
    <button
          onClick={scrollToTop}
          className="z_class fixed bottom-10 right-10 rounded-full bg-[#76b900] p-3 text-white shadow-lg"
          aria-label="Back to Top"
        >
      <Image src="/assets/Images/arrow.png" width={500} height={500} className="w-8" alt="back to top"/>
    </button>
      )}
  </div>
);
}
