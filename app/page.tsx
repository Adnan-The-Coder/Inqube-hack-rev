"use client";
import Header from "@/components/Header";
import { Homepage } from "@/components/Homepage";
import React from "react";

export default function SparklesPreview() {
  return (
    <div className="bg-black h-screen">
        <Header/>
        <Homepage/>
    </div>
  );
}
