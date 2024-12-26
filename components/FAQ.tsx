import React, { useState } from 'react';
import { ChevronDown, Code, LineChart, Lock } from 'lucide-react';

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      title: "Project Showcase Platform",
      description: "Comprehensive platform for developers to present their projects with multimedia support and detailed documentation.",
      icon: <Code className="w-8 h-8 text-[#76b900]" />,
      details: [
        "Interactive project demonstrations",
        "Code repository integration",
        "Technical documentation hosting",
        "Project metrics dashboard",
        "Team and technology stack profiles"
      ]
    },
    {
      id: 2,
      title: "Investor Dashboard",
      description: "Advanced search and filtering tools for investors to discover and evaluate promising development projects.",
      icon: <LineChart className="w-8 h-8 text-[#76b900]" />,
      details: [
        "AI-powered project matching",
        "Real-time development updates",
        "Due diligence tools",
        "Investment tracking",
        "Market analysis integration"
      ]
    },
    {
      id: 3,
      title: "Secure Communication",
      description: "End-to-end encrypted messaging system for confidential discussions between developers and investors.",
      icon: <Lock className="w-8 h-8 text-[#76b900]" />,
      details: [
        "End-to-end encryption",
        "Secure file sharing",
        "Video conferencing",
        "Smart contract integration",
        "Audit trail and compliance"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 pb-20">
      <div className="space-y-6">
        {features.map((feature) => (
          <div 
            key={feature.id}
            className="bg-[#111111] rounded-xl overflow-hidden border border-[#2a2a2a] hover:border-[#76b900] transition-all duration-300"
          >
            <div
              className="p-6 cursor-pointer"
              onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 text-[#76b900] transform transition-transform duration-300 ${
                    activeFeature === feature.id ? 'rotate-180' : ''
                  }`}
                />
              </div>
              <p className="mt-2 text-[#7f7f7f] text-md">{feature.description}</p>
            </div>
            
            <div
              className={`transition-all duration-300 ${
                activeFeature === feature.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 pt-0">
                <div className="bg-[#1b1b1b] rounded-xl p-6">
                  <ul className="space-y-3">
                    {feature.details.map((detail, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#76b900]" />
                        <span className="text-[#ececec]">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 bg-[#76b900] text-white px-6 py-2 rounded-lg hover:bg-[#8bd600] transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;