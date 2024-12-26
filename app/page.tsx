"use client";
import Additional from "@/components/Additional";
import Header from "@/components/Header";
import { Homepage } from "@/components/Homepage";
import Plans from "@/components/Plans";
import Services from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import React from "react";

export default function SparklesPreview() {
  return (
    <div className="bg-black h-screen">
        <Header/>
        <Homepage/>
        <Additional/>
        <Services/>
        <Plans/>
        <Testimonials/>
    </div>
  );
}
