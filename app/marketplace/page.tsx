'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { Menu, X } from 'lucide-react';

interface Startup {
  id: number;
  name: string;
  tag: string;
  status: string;
  region: string;
  price: number;
}
const startups: Startup[] = [
  { id: 1, name: 'Tech Innovators', tag: 'Technology', status: 'Ready to launch in Market', region: 'North America', price: 50000000 },
  { id: 2, name: 'HealthFirst', tag: 'Healthcare', status: 'Under Development', region: 'Asia', price: 20000000 },
  { id: 3, name: 'EduSpark', tag: 'Education', status: 'Developed', region: 'Europe', price: 10000000 },
  { id: 4, name: 'E-Mart', tag: 'E-commerce', status: 'Ready to launch in Market', region: 'North America', price: 80000000 },
  { id: 5, name: 'FinServe', tag: 'Finance', status: 'Raw Idea', region: 'Africa', price: 30000000 },
  { id: 6, name: 'GreenTech Solutions', tag: 'Technology', status: 'Developed', region: 'Europe', price: 60000000 },
  { id: 7, name: 'FoodFusion', tag: 'Food & Beverage', status: 'Under Development', region: 'Asia', price: 40000000 },
  { id: 8, name: 'Meditech Pro', tag: 'Healthcare', status: 'Ready to launch in Market', region: 'North America', price: 90000000 },
  { id: 9, name: 'SmartEd', tag: 'Education', status: 'Raw Idea', region: 'Africa', price: 5000000 },
  { id: 10, name: 'StyleSphere', tag: 'Fashion', status: 'Under Development', region: 'Europe', price: 15000000 },
  { id: 11, name: 'AutoPilot', tag: 'Automotive', status: 'Ready to launch in Market', region: 'North America', price: 120000000 },
  { id: 12, name: 'AgriTech Hub', tag: 'Agriculture', status: 'Developed', region: 'Asia', price: 25000000 },
  { id: 13, name: 'FinGrowth', tag: 'Finance', status: 'Under Development', region: 'Europe', price: 40000000 },
  { id: 14, name: 'BioGenics', tag: 'Healthcare', status: 'Raw Idea', region: 'North America', price: 10000000 },
  { id: 15, name: 'EcoHome', tag: 'Real Estate', status: 'Developed', region: 'Asia', price: 70000000 },
  { id: 16, name: 'ShopEase', tag: 'E-commerce', status: 'Ready to launch in Market', region: 'Europe', price: 45000000 },
  { id: 17, name: 'Eventify', tag: 'Event Management', status: 'Under Development', region: 'Africa', price: 20000000 },
  { id: 18, name: 'RideSmart', tag: 'Automotive', status: 'Raw Idea', region: 'Asia', price: 15000000 },
  { id: 19, name: 'GameOn', tag: 'Gaming', status: 'Developed', region: 'North America', price: 60000000 },
  { id: 20, name: 'PetCare', tag: 'Pets', status: 'Ready to launch in Market', region: 'Europe', price: 25000000 },
  { id: 21, name: 'TravelBuddy', tag: 'Travel', status: 'Under Development', region: 'Asia', price: 30000000 },
  { id: 22, name: 'Artify', tag: 'Art & Design', status: 'Raw Idea', region: 'Africa', price: 8000000 },
  { id: 23, name: 'SolarGen', tag: 'Renewable Energy', status: 'Developed', region: 'North America', price: 90000000 },
  { id: 24, name: 'DigitalDocs', tag: 'Healthcare', status: 'Ready to launch in Market', region: 'Asia', price: 50000000 },
  { id: 25, name: 'LearnNest', tag: 'Education', status: 'Under Development', region: 'Europe', price: 20000000 },
  { id: 26, name: 'GadgetPro', tag: 'Technology', status: 'Raw Idea', region: 'Africa', price: 10000000 },
  { id: 27, name: 'BuildSmart', tag: 'Construction', status: 'Developed', region: 'Asia', price: 75000000 },
  { id: 28, name: 'FitPulse', tag: 'Fitness', status: 'Under Development', region: 'North America', price: 40000000 },
  { id: 29, name: 'CleanWave', tag: 'Environment', status: 'Ready to launch in Market', region: 'Europe', price: 55000000 },
  { id: 30, name: 'PlantPure', tag: 'Agriculture', status: 'Raw Idea', region: 'Africa', price: 15000000 },
  { id: 31, name: 'CloudStream', tag: 'Cloud Computing', status: 'Ready to launch in Market', region: 'North America', price: 70000000 },
  { id: 32, name: 'CyberDefend', tag: 'Cybersecurity', status: 'Under Development', region: 'Europe', price: 30000000 },
  { id: 33, name: 'FinTechWave', tag: 'Finance', status: 'Developed', region: 'Asia', price: 60000000 },
  { id: 34, name: 'AgroGrow', tag: 'Agriculture', status: 'Ready to launch in Market', region: 'Africa', price: 45000000 },
  { id: 35, name: 'UrbanSmart', tag: 'Smart Cities', status: 'Under Development', region: 'Europe', price: 50000000 },
  { id: 36, name: 'AutoTech', tag: 'Automotive', status: 'Developed', region: 'North America', price: 120000000 },
  { id: 37, name: 'FinAssist', tag: 'Finance', status: 'Ready to launch in Market', region: 'Africa', price: 25000000 },
  { id: 38, name: 'AquaCare', tag: 'Environment', status: 'Raw Idea', region: 'Asia', price: 15000000 },
  { id: 39, name: 'UrbanGreen', tag: 'Real Estate', status: 'Under Development', region: 'North America', price: 70000000 },
  { id: 40, name: 'NextGenBio', tag: 'Biotechnology', status: 'Ready to launch in Market', region: 'Europe', price: 80000000 },
  { id: 41, name: 'MediTechX', tag: 'Healthcare', status: 'Developed', region: 'Asia', price: 95000000 },
  { id: 42, name: 'CleanTech Innovations', tag: 'Renewable Energy', status: 'Under Development', region: 'Africa', price: 60000000 },
  { id: 43, name: 'PureGreen', tag: 'Environment', status: 'Ready to launch in Market', region: 'North America', price: 40000000 },
  { id: 44, name: 'FashionForward', tag: 'Fashion', status: 'Developed', region: 'Europe', price: 30000000 },
  { id: 45, name: 'FastFoodie', tag: 'Food & Beverage', status: 'Under Development', region: 'Africa', price: 20000000 },
  { id: 46, name: 'EduLink', tag: 'Education', status: 'Ready to launch in Market', region: 'Asia', price: 60000000 },
  { id: 47, name: 'TechHaven', tag: 'Technology', status: 'Developed', region: 'North America', price: 75000000 },
  { id: 48, name: 'HealthSync', tag: 'Healthcare', status: 'Under Development', region: 'Europe', price: 35000000 },
  { id: 49, name: 'TechHive', tag: 'Technology', status: 'Ready to launch in Market', region: 'Africa', price: 20000000 },
  { id: 50, name: 'HomeSmart', tag: 'Smart Homes', status: 'Developed', region: 'North America', price: 100000000 },
  { id: 51, name: 'QuantumX', tag: 'Quantum Computing', status: 'Raw Idea', region: 'Asia', price: 40000000 },
  { id: 52, name: 'SolarEdge', tag: 'Renewable Energy', status: 'Ready to launch in Market', region: 'Europe', price: 70000000 },
  { id: 53, name: 'BioWave', tag: 'Biotechnology', status: 'Developed', region: 'North America', price: 80000000 },
  { id: 54, name: 'HealthyBytes', tag: 'Food & Beverage', status: 'Under Development', region: 'Asia', price: 35000000 },
  { id: 55, name: 'SmartHomes Inc', tag: 'Real Estate', status: 'Ready to launch in Market', region: 'Africa', price: 65000000 },
  { id: 56, name: 'UrbanBytes', tag: 'Technology', status: 'Developed', region: 'North America', price: 50000000 },
  { id: 57, name: 'Travelogue', tag: 'Travel', status: 'Raw Idea', region: 'Europe', price: 20000000 },
  { id: 58, name: 'E-Health Solutions', tag: 'Healthcare', status: 'Ready to launch in Market', region: 'Asia', price: 95000000 },
  { id: 59, name: 'EventFlare', tag: 'Event Management', status: 'Under Development', region: 'North America', price: 25000000 },
  { id: 60, name: 'GreenFit', tag: 'Fitness', status: 'Developed', region: 'Africa', price: 40000000 },
  { id: 61, name: 'EcoLiving', tag: 'Environment', status: 'Raw Idea', region: 'Asia', price: 15000000 },
  { id: 62, name: 'SmartBuild', tag: 'Construction', status: 'Ready to launch in Market', region: 'Europe', price: 85000000 },
  { id: 63, name: 'FutureEats', tag: 'Food & Beverage', status: 'Developed', region: 'North America', price: 60000000 },
  { id: 64, name: 'TechImpact', tag: 'Technology', status: 'Under Development', region: 'Africa', price: 50000000 },
  { id: 65, name: 'CyberCore', tag: 'Cybersecurity', status: 'Raw Idea', region: 'Asia', price: 10000000 },
  { id: 66, name: 'FashionHub', tag: 'Fashion', status: 'Ready to launch in Market', region: 'Europe', price: 40000000 },
  { id: 67, name: 'AgriFuture', tag: 'Agriculture', status: 'Under Development', region: 'North America', price: 45000000 },
  { id: 68, name: 'GameZone', tag: 'Gaming', status: 'Developed', region: 'Asia', price: 55000000 },
  { id: 69, name: 'PetZone', tag: 'Pets', status: 'Ready to launch in Market', region: 'Europe', price: 70000000 },
  { id: 70, name: 'UrbanTech', tag: 'Smart Cities', status: 'Developed', region: 'North America', price: 100000000 }
];

  const Page: React.FC = () => {
    const [price, setPrice] = useState<number>(100000000);
    const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
    const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
    const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
    const [isClient, setIsClient] = useState<boolean>(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isMobileView, setIsMobileView] = useState<boolean>(false);
    
    const startupsPerPage = isMobileView ? 4 : 6;
  
    useEffect(() => {
      setIsClient(true);
      const handleResize = () => {
        const isMobile = window.innerWidth < 768;
        setIsMobileView(isMobile);
        setIsSidebarOpen(!isMobile); 
      };
      
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPrice(Number(event.target.value));
    };
  
    const handleFilterChange = (filterType: 'tag' | 'status' | 'region', value: string) => {
      switch (filterType) {
        case 'tag':
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
      }
    };
  
    const filteredStartups = startups.filter((startup) => {
      const matchestag = selectedIndustries.length === 0 || selectedIndustries.includes(startup.tag);
      const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes(startup.status);
      const matchesRegion = selectedRegions.length === 0 || selectedRegions.includes(startup.region);
      const matchesPrice = startup.price <= price;
  
      return matchestag && matchesStatus && matchesRegion && matchesPrice;
    });
  
    const indexOfLastStartup = currentPage * startupsPerPage;
    const indexOfFirstStartup = indexOfLastStartup - startupsPerPage;
    const currentStartups = filteredStartups.slice(indexOfFirstStartup, indexOfLastStartup);
    const totalPages = Math.ceil(filteredStartups.length / startupsPerPage);
  
    const nextPage = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
  
    const prevPage = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
  
    if (!isClient) return null;
  
    return (
      <div className="h-screen flex flex-col md:flex-row relative">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#76b900] rounded-full text-white"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <motion.div
          initial={{ x: isMobileView ? -300 : 0 }}
          animate={{ x: isSidebarOpen ? 0 : -300 }}
          transition={{ duration: 0.3 }}
          className={`bg-[#76b900] w-full md:w-64 fixed md:relative h-screen z-40 shadow-lg flex flex-col p-3 overflow-y-auto ${
            isSidebarOpen ? 'block' : 'hidden md:block'
          }`}
        >
          <div className="mb-4 mt-12 md:mt-0">
            <input
              type="text"
              placeholder="Search startups"
              className="w-full p-2  border rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5c7409]"
            />
          </div>
          <div className="space-y-4 overflow-y-auto flex-1">
            <h3 className="text-lg font-semibold text-white">Filters</h3>
            <div className="mb-4">
              <h4 className="text-sm font-medium text-white mb-1">Startup tag</h4>
              <ul className="space-y-2">
                {['Technology', 'Healthcare', 'Finance', 'Education', 'E-commerce'].map((category, index) => (
                  <li key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`tag-${index}`}
                      className="mr-2"
                      onChange={() => handleFilterChange('tag', category)}
                    />
                    <label htmlFor={`tag-${index}`} className="text-white text-sm cursor-pointer">
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
              <div className="text-white text-center mt-4">
                Selected Price: ₹{price.toLocaleString()}
              </div>
            </div>
          </div>
        </motion.div>
        <div className="flex-1 bg-black p-4 md:p-6 text-white mt-10 md:mt-0">
          <Link href="/" className="text-2xl font-bold mb-6 mt-12 md:mt-0">Marketplace</Link>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-5">
            {currentStartups.map((startup) => (
              <motion.div
                key={startup.id}
                className="bg-white rounded-lg shadow-lg p-4 md:p-6 hover:shadow-xl transition-all"
              >
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-[#76b900] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-lg font-bold">{startup.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">{startup.name}</h2>
                    <p className="text-sm text-gray-600">by {startup.tag} Innovators</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  A {startup.tag.toLowerCase()} startup focusing on {startup.status.toLowerCase()} phase with innovative solutions.
                </p>
  
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-700">Equity: </span>
                    <span className="ml-1 text-sm font-semibold text-gray-900">15%</span>
                  </div>
                  <div className="flex items-center ml-4">
                    <span className="text-sm text-gray-700">Goal: </span>
                    <span className="ml-1 text-sm font-semibold text-gray-900">₹{startup.price.toLocaleString()}</span>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">
                    {startup.tag}
                  </span>
                </div>
  
                <button className="w-full py-2 px-4 bg-[#0f172a] text-white rounded-lg hover:bg-[#1e293b] transition-colors">
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
  
          <div className="flex justify-between items-center mt-6">
            <button
              className="px-3 py-2 bg-[#76b900] text-white rounded-full text-xl disabled:opacity-50"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              &#x2190;
            </button>
            <span className="text-white text-sm md:text-base">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="px-3 py-2 bg-[#76b900] text-white rounded-full text-xl disabled:opacity-50"
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