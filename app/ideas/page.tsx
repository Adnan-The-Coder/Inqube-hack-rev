"use client";

import Header from "@/components/Header";
import { StarsBackground } from "../investments/stars-background";
import { ShootingStars } from "../investments/shooting-stars";
import React, { useState } from "react";
import Footer from "@/components/Footer";

const ResultPage = ({ result, resetGame }: { result: string; resetGame: () => void }) => {
    const parsedResults = result.split("<br />").reduce((acc: any[], line: string) => {
      const match = line.match(/<strong>(.*?)<\/strong>: (.*)/);
      if (match) {
        acc.push({ question: match[1], answer: match[2] });
      }
      return acc;
    }, []);
  
    return (
      <div className="flex flex-col items-center justify-center h-screen w-full mt-28 mb-20 md:mt-6 p-3">
        <h2 className="text-3xl font-bold mb-6">Your Startup Journey</h2>
        <div
          className="bg-[#1f1f1f] text-sm p-6 rounded-lg shadow-md w-full max-w-3xl text-left"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              {parsedResults.map((item, index) => (
                <p key={index} className="mb-2">
                  <strong>{item.question}</strong>
                </p>
              ))}
            </div>
            <div>
              {parsedResults.map((item, index) => (
                <p key={index} className="mb-2">{item.answer}</p>
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={resetGame}
          className="mt-6 bg-[#76b900] text-black px-6 py-3 rounded-lg z-50 transition duration-300"
        >
          Play Again
        </button>
      </div>
    );
  };

const StartupBuilder = () => {
  const [step, setStep] = useState(1);
  const [choices, setChoices] = useState({});
  const [result, setResult] = useState("");

  const steps = [
    { title: "Choose Your Startup Idea", description: "Pick an innovative idea.", options: ["AI-powered healthcare assistant", "Sustainable e-commerce platform", "Blockchain for supply chain", "Virtual reality fitness app"] },
    { title: "Select Your Industry", description: "Which industry does your idea target?", options: ["Healthcare", "E-commerce", "Technology", "Education"] },
    { title: "Pick a Business Model", description: "Choose how your startup generates revenue.", options: ["Subscription-based", "Freemium model", "Ad revenue", "One-time payment"] },
    { title: "Choose Your Funding Source", description: "How will you secure initial funding?", options: ["Bootstrapping", "Angel investors", "Crowdfunding", "Venture Capital"] },
    { title: "Select a Marketing Strategy", description: "How will you attract customers?", options: ["Social media campaigns", "Influencer partnerships", "Content marketing", "Traditional advertising"] },
    { title: "Pick a Target Audience", description: "Who is your primary target?", options: ["Young professionals", "Tech-savvy teens", "Small businesses", "Senior citizens"] },
    { title: "Select a Launch Region", description: "Where will you launch first?", options: ["Local market", "National market", "Global market", "Online-only"] },
    { title: "Pick a Tech Stack", description: "What technologies will you use?", options: ["React + Node.js", "Python + Django", "Ruby on Rails", "Java + Spring Boot"] },
    { title: "Build a Team", description: "Who is your first hire?", options: ["Tech-focused CTO", "Marketing wizard", "Experienced designer", "Finance strategist"] },
    { title: "Decide Branding Style", description: "What is your branding style?", options: ["Minimalist", "Bold & Vibrant", "Playful & Fun", "Professional & Clean"] },
    { title: "Choose Customer Support", description: "How will you assist customers?", options: ["Live chat", "Email support", "AI-driven chatbot", "Call center"] },
    { title: "Create a Tagline", description: "What describes your brand best?", options: ["Innovate your future", "Sustainability made easy", "Empower your vision", "Think different"] },
    { title: "Select Scaling Strategy", description: "How will you scale operations?", options: ["Expand to new markets", "Invest in automation", "Hire aggressively", "Develop partnerships"] },
    { title: "Choose Security Features", description: "How secure will your app be?", options: ["Basic encryption", "Multi-factor authentication", "Biometric login", "Full compliance with GDPR"] },
    { title: "Pick a Collaboration Tool", description: "What will your team use?", options: ["Slack", "Microsoft Teams", "Asana", "Trello"] },
    { title: "Launch Strategy", description: "How will you announce your launch?", options: ["Press release", "Product Hunt", "Influencer marketing", "Beta testers"] },
  ];
  const handleNextStep = (choice: string) => {
    setChoices({ ...choices, [steps[step - 1].title]: choice });
    if (step < steps.length) {
      setStep(step + 1);
    } else {
      generateResult();
    }
  };

  const generateResult = () => {
    const outcomes = [
      "Your startup becomes a unicorn within 2 years!",
      "You struggled but found a loyal niche audience.",
      "You pivoted your idea and achieved moderate success.",
      "Your startup ran out of funding, but you gained valuable experience.",
    ];
    const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
    const summary = Object.entries(choices)
      .map(([key, value]) => `<strong>${key}</strong>: ${value}`)
      .join("<br />");
    setResult(`${summary}<br /><br /><strong>Outcome:</strong> ${randomOutcome}`);
  };

  const resetGame = () => {
    setStep(1);
    setChoices({});
    setResult("");
  };

  return (
    <div>
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white bg-neutral-900">
      <Header />
      <StarsBackground />
      <ShootingStars />
  
      {result ? (
        <ResultPage result={result} resetGame={resetGame} />
      ) : (
        <div className="w-full max-w-3xl bg-[#2b2b2b] text-white rounded-lg p-8 shadow-2xl z-20">
          <h1 className="text-4xl font-bold text-center mb-6">Build Your Startup</h1>
          <h2 className="text-2xl font-semibold mb-2 text-center">{steps[step - 1].title}</h2>
          <p className="text-sm bg-[#333333] p-4 rounded-lg mb-6 text-center">
            {steps[step - 1].description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {steps[step - 1].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleNextStep(option)}
                className="px-5 py-3 rounded-lg bg-[#444444] text-white hover:bg-[#76b900] hover:text-black transition duration-300"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
      <Footer/>
    </div>
  );
  
};

export default StartupBuilder;
