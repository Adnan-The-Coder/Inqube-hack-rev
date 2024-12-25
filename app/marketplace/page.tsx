'use client';

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

interface Startup {
  id: number;
  name: string;
  industry: string;
  status: string;
  region: string;
  price: number;
}
const startups: Startup[] = [
    { id: 1, name: 'Tech Innovators', industry: 'Technology', status: 'Ready to launch in Market', region: 'North America', price: 50000000 },
    { id: 2, name: 'HealthFirst', industry: 'Healthcare', status: 'Under Development', region: 'Asia', price: 20000000 },
    { id: 3, name: 'EduSpark', industry: 'Education', status: 'Developed', region: 'Europe', price: 10000000 },
    { id: 4, name: 'E-Mart', industry: 'E-commerce', status: 'Ready to launch in Market', region: 'North America', price: 80000000 },
    { id: 5, name: 'FinServe', industry: 'Finance', status: 'Raw Idea', region: 'Africa', price: 30000000 },
    { id: 6, name: 'GreenTech Solutions', industry: 'Technology', status: 'Developed', region: 'Europe', price: 60000000 },
    { id: 7, name: 'FoodFusion', industry: 'Food & Beverage', status: 'Under Development', region: 'Asia', price: 40000000 },
    { id: 8, name: 'Meditech Pro', industry: 'Healthcare', status: 'Ready to launch in Market', region: 'North America', price: 90000000 },
    { id: 9, name: 'SmartEd', industry: 'Education', status: 'Raw Idea', region: 'Africa', price: 5000000 },
    { id: 10, name: 'StyleSphere', industry: 'Fashion', status: 'Under Development', region: 'Europe', price: 15000000 },
    { id: 11, name: 'AutoPilot', industry: 'Automotive', status: 'Ready to launch in Market', region: 'North America', price: 120000000 },
    { id: 12, name: 'AgriTech Hub', industry: 'Agriculture', status: 'Developed', region: 'Asia', price: 25000000 },
    { id: 13, name: 'FinGrowth', industry: 'Finance', status: 'Under Development', region: 'Europe', price: 40000000 },
    { id: 14, name: 'BioGenics', industry: 'Healthcare', status: 'Raw Idea', region: 'North America', price: 10000000 },
    { id: 15, name: 'EcoHome', industry: 'Real Estate', status: 'Developed', region: 'Asia', price: 70000000 },
    { id: 16, name: 'ShopEase', industry: 'E-commerce', status: 'Ready to launch in Market', region: 'Europe', price: 45000000 },
    { id: 17, name: 'Eventify', industry: 'Event Management', status: 'Under Development', region: 'Africa', price: 20000000 },
    { id: 18, name: 'RideSmart', industry: 'Automotive', status: 'Raw Idea', region: 'Asia', price: 15000000 },
    { id: 19, name: 'GameOn', industry: 'Gaming', status: 'Developed', region: 'North America', price: 60000000 },
    { id: 20, name: 'PetCare', industry: 'Pets', status: 'Ready to launch in Market', region: 'Europe', price: 25000000 },
    { id: 21, name: 'TravelBuddy', industry: 'Travel', status: 'Under Development', region: 'Asia', price: 30000000 },
    { id: 22, name: 'Artify', industry: 'Art & Design', status: 'Raw Idea', region: 'Africa', price: 8000000 },
    { id: 23, name: 'SolarGen', industry: 'Renewable Energy', status: 'Developed', region: 'North America', price: 90000000 },
    { id: 24, name: 'DigitalDocs', industry: 'Healthcare', status: 'Ready to launch in Market', region: 'Asia', price: 50000000 },
    { id: 25, name: 'LearnNest', industry: 'Education', status: 'Under Development', region: 'Europe', price: 20000000 },
    { id: 26, name: 'GadgetPro', industry: 'Technology', status: 'Raw Idea', region: 'Africa', price: 10000000 },
    { id: 27, name: 'BuildSmart', industry: 'Construction', status: 'Developed', region: 'Asia', price: 75000000 },
    { id: 28, name: 'FitPulse', industry: 'Fitness', status: 'Under Development', region: 'North America', price: 40000000 },
    { id: 29, name: 'CleanWave', industry: 'Environment', status: 'Ready to launch in Market', region: 'Europe', price: 55000000 },
    { id: 30, name: 'PlantPure', industry: 'Agriculture', status: 'Raw Idea', region: 'Africa', price: 15000000 },
    { id: 31, name: 'CloudStream', industry: 'Cloud Computing', status: 'Ready to launch in Market', region: 'North America', price: 70000000 },
    { id: 32, name: 'CyberDefend', industry: 'Cybersecurity', status: 'Under Development', region: 'Europe', price: 30000000 },
    { id: 33, name: 'FinTechWave', industry: 'Finance', status: 'Developed', region: 'Asia', price: 60000000 },
    { id: 34, name: 'AgroGrow', industry: 'Agriculture', status: 'Ready to launch in Market', region: 'Africa', price: 45000000 },
    { id: 35, name: 'UrbanSmart', industry: 'Smart Cities', status: 'Under Development', region: 'Europe', price: 50000000 },
    { id: 36, name: 'AutoTech', industry: 'Automotive', status: 'Developed', region: 'North America', price: 120000000 },
    { id: 37, name: 'FinAssist', industry: 'Finance', status: 'Ready to launch in Market', region: 'Africa', price: 25000000 },
    { id: 38, name: 'AquaCare', industry: 'Environment', status: 'Raw Idea', region: 'Asia', price: 15000000 },
    { id: 39, name: 'UrbanGreen', industry: 'Real Estate', status: 'Under Development', region: 'North America', price: 70000000 },
    { id: 40, name: 'NextGenBio', industry: 'Biotechnology', status: 'Ready to launch in Market', region: 'Europe', price: 80000000 },
    { id: 41, name: 'MediTechX', industry: 'Healthcare', status: 'Developed', region: 'Asia', price: 95000000 },
    { id: 42, name: 'CleanTech Innovations', industry: 'Renewable Energy', status: 'Under Development', region: 'Africa', price: 60000000 },
    { id: 43, name: 'PureGreen', industry: 'Environment', status: 'Ready to launch in Market', region: 'North America', price: 40000000 },
    { id: 44, name: 'FashionForward', industry: 'Fashion', status: 'Developed', region: 'Europe', price: 30000000 },
    { id: 45, name: 'FastFoodie', industry: 'Food & Beverage', status: 'Under Development', region: 'Africa', price: 20000000 },
    { id: 46, name: 'EduLink', industry: 'Education', status: 'Ready to launch in Market', region: 'Asia', price: 60000000 },
    { id: 47, name: 'TechHaven', industry: 'Technology', status: 'Developed', region: 'North America', price: 75000000 },
    { id: 48, name: 'HealthSync', industry: 'Healthcare', status: 'Under Development', region: 'Europe', price: 35000000 },
    { id: 49, name: 'TechHive', industry: 'Technology', status: 'Ready to launch in Market', region: 'Africa', price: 20000000 },
    { id: 50, name: 'HomeSmart', industry: 'Smart Homes', status: 'Developed', region: 'North America', price: 100000000 },
  ];
  

const Page: React.FC = () => {
  const [price, setPrice] = useState<number>(100000000);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [isClient, setIsClient] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const startupsPerPage = 6;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  const handleFilterChange = (filterType: 'industry' | 'status' | 'region', value: string) => {
    switch (filterType) {
      case 'industry':
        setSelectedIndustries((prev) =>
          prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
        break;
      case 'status':
        setSelectedStatuses((prev) =>
          prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
        break;
      case 'region':
        setSelectedRegions((prev) =>
          prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
        break;
      default:
        break;
    }
  };

  const filteredStartups = startups.filter((startup) => {
    const matchesIndustry =
      selectedIndustries.length === 0 || selectedIndustries.includes(startup.industry);
    const matchesStatus =
      selectedStatuses.length === 0 || selectedStatuses.includes(startup.status);
    const matchesRegion =
      selectedRegions.length === 0 || selectedRegions.includes(startup.region);
    const matchesPrice = startup.price <= price;

    return matchesIndustry && matchesStatus && matchesRegion && matchesPrice;
  });

  const indexOfLastStartup = currentPage * startupsPerPage;
  const indexOfFirstStartup = indexOfLastStartup - startupsPerPage;
  const currentStartups = filteredStartups.slice(indexOfFirstStartup, indexOfLastStartup);

  const totalPages = Math.ceil(filteredStartups.length / startupsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="h-screen flex flex-col lg:flex-row">
      <div className="bg-[#76b900] w-full lg:w-64 h-screen shadow-lg flex flex-col p-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search startups or investors"
            className="w-full p-2 border rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5c7409]"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Filters</h3>
          <div className="mb-4">
            <h4 className="text-sm font-medium text-white mb-1">Startup Industry</h4>
            <ul className="space-y-2">
              {['Technology', 'Healthcare', 'Finance', 'Education', 'E-commerce'].map((category, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`industry-${index}`}
                    className="mr-2"
                    onChange={() => handleFilterChange('industry', category)}
                  />
                  <label htmlFor={`industry-${index}`} className="text-white text-sm cursor-pointer">
                    {category}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="text-sm font-medium text-white mb-1">Project Status</h4>
            <ul className="space-y-2">
              {['Raw Idea', 'Under Development', 'Developed', 'Ready to launch in Market'].map((stage, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`stage-${index}`}
                    className="mr-2"
                    onChange={() => handleFilterChange('status', stage)}
                  />
                  <label htmlFor={`stage-${index}`} className="text-white text-sm cursor-pointer">
                    {stage}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="text-sm font-medium text-white mb-1">Region</h4>
            <ul className="space-y-2">
              {['North America', 'Europe', 'Asia', 'Africa'].map((region, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`region-${index}`}
                    className="mr-2"
                    onChange={() => handleFilterChange('region', region)}
                  />
                  <label htmlFor={`region-${index}`} className="text-white text-sm cursor-pointer">
                    {region}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="text-sm font-medium text-white mb-1">Price Range</h4>
            <input
              type="range"
              min="0"
              max="100000000"
              step="1000000"
              className="w-full"
              id="price-range"
              value={price}
              onChange={handlePriceChange}
            />
            <div className="flex justify-between text-sm text-white mt-2">
              <span>₹0</span>
              <span>₹1,00,00,000</span>
            </div>
            <div className="text-white text-center mt-4">Selected Price: ₹{price.toLocaleString()}</div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-black p-6 text-white">
        <h1 className="text-2xl font-bold mb-6">Marketplace</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentStartups.map((startup) => (
            <motion.div
              key={startup.id}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-between hover:translate-y-[-2px] transition-all"
            >
              <h2 className="text-3xl font-bold text-black mb-4">{startup.name}</h2>
              <div className="flex flex-col space-y-2 text-black">
                <p className="text-lg">
                  <span className="text-[#76b900] font-semibold">Industry:</span> {startup.industry}
                </p>
                <p className="text-lg">
                  <span className="text-[#76b900] font-semibold">Status:</span> {startup.status}
                </p>
                <p className="text-lg">
                  <span className="text-[#76b900] font-semibold">Region:</span> {startup.region}
                </p>
                <p className="text-lg">
                  <span className="text-[#76b900] font-semibold">Price:</span> ₹{startup.price.toLocaleString()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <button
            className="px-3 py-2 bg-[#76b900] text-white rounded-full text-xl"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            &#x2190;
          </button>
          <span className="text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="px-3 py-2 bg-[#76b900] text-white rounded-full text-xl"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            &#x2192;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
