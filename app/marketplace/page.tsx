"use client";
import React, { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';

import Header from "@/components/Header";

function Page() {
  // Initialize Supabase client
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [equityRange, setEquityRange] = useState<string>("");
  const [maxInvestment, setMaxInvestment] = useState<number>(1000000); // Default max investment value
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  // Function to fetch data directly from Supabase table
  async function fetchData(tableName: string): Promise<void> {
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.from(tableName).select('*');
      if (error) throw error;

      const uniqueTags = Array.from(new Set(data.map((item: any) => item.Tag).filter(Boolean))) as string[];

      setTags(uniqueTags);
      setData(data);
      setFilteredData(data);
    } catch (error: any) {
      setError("Error fetching data: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  const applyFilters = () => {
    let filtered = data;

    if (selectedTags.length > 0) {
      filtered = filtered.filter((project) =>
        selectedTags.includes(project.Tag)
      );
    }

    if (equityRange) {
      const [min, max] = equityRange.split("-").map(Number);
      filtered = filtered.filter(
        (project) => project.Equity >= min && project.Equity <= max
      );
    }

    // Filter projects by max investment amount
    filtered = filtered.filter(
      (project) => project.Expected_Investment_amount <= maxInvestment
    );

    setFilteredData(filtered);
  };

  const handleTagChange = (tag: string) => {
    setSelectedTags((prevSelectedTags) => {
      if (prevSelectedTags.includes(tag)) {
        return prevSelectedTags.filter((selectedTag) => selectedTag !== tag);
      } else {
        return [...prevSelectedTags, tag];
      }
    });
  };

  const handleEquityRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEquityRange(e.target.value);
  };

  const handleMaxInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxInvestment(Number(e.target.value));
  };

  // Calculate the indexes for slicing filteredData for pagination
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = filteredData.slice(startIndex, endIndex);

  // Render Project Cards
  const renderProjectCards = () => {
    if (currentCards.length === 0) {
      return <p className="text-white">No projects found based on the filters.</p>;
    }

    return currentCards.map((project, index) => (
      <div
        key={index}
        className="mx-auto mb-6 max-w-md rounded-xl bg-white p-6 shadow-md"
      >
        <div className="mb-4 flex items-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-green-500 text-xl font-bold text-white">
            {project.name?.charAt(0).toUpperCase()}
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
            <p className="text-sm text-gray-600">{project.Project_Title}</p>
            <p className="text-sm text-gray-600">by {project.Author}</p>
          </div>
        </div>
        <p className="mb-4 text-gray-700">{project.Project_Desc}</p>
        <div className="mb-4 flex justify-between text-sm text-gray-600">
          <span>
            <strong>Expected Investment Amount</strong> ₹
            {project.Expected_Investment_amount || "-"}
          </span>
          <span>
            <strong>Equity:</strong> {project.Equity || "-"}%
          </span>
        </div>
        <span className="inline-block rounded bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-800">
          {project.Tag || "Technology"}
        </span>
        <button className="mt-4 w-full rounded bg-gray-900 py-2 text-center text-white">
          View Details
        </button>
      </div>
    ));
  };

  // Handle Pagination Buttons
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredData.length / cardsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    fetchData("Developer_Projects");
  }, []);

  useEffect(() => {
    applyFilters();
  }, [selectedTags, equityRange, maxInvestment, data]);

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <div className="flex flex-col xl:flex-row">
        {/* Filter Section */}
        <div
                  className={`m-6 mb-10 gap-6 rounded-md bg-[#76b900] p-3 xl:m-0 xl:w-1/6 ${
                    isMenuOpen
                      ? "fixed inset-0 top-12 z-50 xl:h-screen xl:overflow-y-auto"
                      : "h-full xl:h-screen xl:overflow-y-auto"
                  } top-0 overflow-y-auto xl:sticky`}
                  style={{ zIndex: 10 }}
                >
          <button
                    className={`mb-4 rounded bg-[#1b1b1b] px-4 py-2 text-white ${
                      isMenuOpen ? "absolute right-4 top-4" : "xl:hidden"
                    }`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
            {isMenuOpen ? "X" : "Open Filters"}
          </button>
          {(isMenuOpen || !isMenuOpen) && (
          <div className={`${isMenuOpen ? "block" : "hidden"} xl:block`}>
            <h2 className="mb-4 text-2xl text-white">Filters</h2>
            {/* Tags Section */}
            <div className="mb-4">
              <h3 className="mb-2 text-xl text-white">Tags</h3>
              {tags.map((tag, index) => (
                <div key={index} className="mb-2">
                  <label className="inline-flex items-center text-sm text-white">
                    <input
                                type="checkbox"
                                className="form-checkbox mr-2 text-gray-800"
                                checked={selectedTags.includes(tag)}
                                onChange={() => handleTagChange(tag)}
                              />
                    {tag}
                  </label>
                </div>
                        ))}
            </div>
            {/* Equity Range Section */}
            <div className="mb-4">
              <h3 className="mb-2 text-xl text-white">Equity Range</h3>
              <select
                    className="w-full rounded bg-gray-700 p-2 text-sm text-white"
                    value={equityRange}
                    onChange={handleEquityRangeChange}
                  >
                <option value="">All</option>
                <option value="0-10">0-10%</option>
                <option value="10-30">10-30%</option>
                <option value="30-50">30-50%</option>
                <option value="50-60">50-60%</option>
                <option value="60-80">60-80%</option>
              </select>
            </div>
            {/* Max Investment Amount Section */}
            <div className="mb-4">
              <h3 className="mb-2 text-xl text-white">Max Investment Amount</h3>
              <input
                    type="range"
                    min="0"
                    max="1000000"
                    step="10000"
                    value={maxInvestment}
                    onChange={handleMaxInvestmentChange}
                    className="mb-2 w-full"
                  />
              <div className="flex justify-between text-sm text-white">
                <span>₹0</span>
                <span>₹{maxInvestment}</span>
              </div>
            </div>
          </div>
            )}
        </div>
        {/* Project Cards Section */}
        <div className="md:w-6/6 scrollbar px-4 md:h-screen md:overflow-y-auto md:px-8">
          <h1 className="mb-4 text-4xl font-bold text-white">Startups</h1>
          {loading && (
            <div className="flex h-full items-center justify-center">
              <div className="loader"></div>
            </div>
          )}
          {error && <p className="text-red-500">{error}</p>}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {renderProjectCards()}
          </div>
          {/* Pagination Controls */}
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={prevPage}
              className="mb-10 rounded bg-[#1b1b1b] px-4 py-2 text-white transition-all hover:bg-[#76b900]"
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {/* Pagination Info */}
            <div className="text-md mb-10 text-white">
              Page {currentPage} of {Math.ceil(filteredData.length / cardsPerPage)}
            </div>
            <button
              onClick={nextPage}
              className="mb-10 rounded bg-[#1b1b1b] px-4 py-2 text-white transition-all hover:bg-[#76b900]"
              disabled={currentPage === Math.ceil(filteredData.length / cardsPerPage)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .loader {
          border: 4px solid #76b900;
          border-top: 4px solid white;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}

export default Page;
