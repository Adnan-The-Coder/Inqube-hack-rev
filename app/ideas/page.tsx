"use client";

import React, { useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { StarsBackground } from "../investments/stars-background";
import { ShootingStars } from "../investments/shooting-stars";

const ResultPage = ({ result, resetGame }: { result: string; resetGame: () => void }) => {
    const parsedResults = result.split("<br />").reduce((acc: any[], line: string) => {
      const match = line.match(/<strong>(.*?)<\/strong>: (.*)/);
      if (match) {
        acc.push({ question: match[1], answer: match[2] });
      }
      
return acc;
    }, []);

    return (
      <div className="mb-20 mt-28 flex h-screen w-full flex-col items-center justify-center p-3 md:mt-6">
        <h2 className="mb-6 text-3xl font-bold">Your Startup Journey</h2>
        <div
          className="w-full max-w-3xl rounded-lg bg-[#1f1f1f] p-6 text-left text-sm shadow-md"
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
          className="z-50 mt-6 rounded-lg bg-[#76b900] px-6 py-3 text-black transition duration-300"
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
      <div className="relative flex min-h-screen flex-col items-center justify-center bg-neutral-900 text-white">
        <Header />
        <StarsBackground />
        <ShootingStars />
        {result ? (
          <ResultPage result={result} resetGame={resetGame} />
      ) : (
        <div className="z-20 w-full max-w-3xl rounded-lg bg-[#2b2b2b] p-8 text-white shadow-2xl">
          <h1 className="mb-6 text-center text-4xl font-bold">Build Your Startup</h1>
          <h2 className="mb-2 text-center text-2xl font-semibold">{steps[step - 1].title}</h2>
          <p className="mb-6 rounded-lg bg-[#333333] p-4 text-center text-sm">
            {steps[step - 1].description}
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {steps[step - 1].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleNextStep(option)}
                className="rounded-lg bg-[#444444] px-5 py-3 text-white transition duration-300 hover:bg-[#76b900] hover:text-black"
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
