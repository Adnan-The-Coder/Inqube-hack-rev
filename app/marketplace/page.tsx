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
        className="bg-white p-6 rounded-xl shadow-md mb-6 max-w-md mx-auto"
      >
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            {project.name?.charAt(0).toUpperCase()}
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
            <p className="text-sm text-gray-600">{project.Project_Title}</p>
            <p className="text-sm text-gray-600">by {project.Author}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{project.Project_Desc}</p>
        <div className="flex justify-between text-sm text-gray-600 mb-4">
          <span>
            <strong>Expected Investment Amount</strong> ₹
            {project.Expected_Investment_amount || "-"}
          </span>
          <span>
            <strong>Equity:</strong> {project.Equity || "-"}%
          </span>
        </div>
        <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded">
          {project.Tag || "Technology"}
        </span>
        <button className="mt-4 w-full py-2 bg-gray-900 text-white text-center rounded">
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
                  className={`bg-[#76b900] mb-10 xl:mb-0 m-6 xl:m-0 xl:w-1/6 rounded-md p-3 gap-6 ${
                    isMenuOpen
                      ? "fixed top-12 inset-0 z-50 xl:h-screen xl:overflow-y-auto"
                      : "xl:h-screen xl:overflow-y-auto h-full"
                  } xl:sticky top-0 overflow-y-auto`}
                  style={{ zIndex: 10 }}
                >
                  <button
                    className={`bg-[#1b1b1b] text-white px-4 py-2 rounded mb-4 ${
                      isMenuOpen ? "absolute top-4 right-4" : "xl:hidden"
                    }`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    {isMenuOpen ? "X" : "Open Filters"}
                  </button>

                  {(isMenuOpen || !isMenuOpen) && (
                    <div className={`${isMenuOpen ? "block" : "hidden"} xl:block`}>
                      <h2 className="text-white text-2xl mb-4">Filters</h2>

                      {/* Tags Section */}
                      <div className="mb-4">
                        <h3 className="text-white mb-2 text-xl">Tags</h3>
                        {tags.map((tag, index) => (
                          <div key={index} className="mb-2">
                            <label className="text-white inline-flex items-center text-sm">
                              <input
                                type="checkbox"
                                className="form-checkbox text-gray-800 mr-2"
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
                  <h3 className="text-white mb-2 text-xl">Equity Range</h3>
                  <select
                    className="w-full p-2 bg-gray-700 text-white rounded text-sm"
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
                  <h3 className="text-white mb-2 text-xl">Max Investment Amount</h3>
                  <input
                    type="range"
                    min="0"
                    max="1000000"
                    step="10000"
                    value={maxInvestment}
                    onChange={handleMaxInvestmentChange}
                    className="w-full mb-2"
                  />
                  <div className="flex justify-between text-white text-sm">
                    <span>₹0</span>
                    <span>₹{maxInvestment}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

        {/* Project Cards Section */}
        <div className="md:w-6/6 px-4 md:px-8 md:h-screen md:overflow-y-auto scrollbar">
          <h1 className="text-white text-4xl mb-4 font-bold">Startups</h1>
          {loading && (
            <div className="flex justify-center items-center h-full">
              <div className="loader"></div>
            </div>
          )}
          {error && <p className="text-red-500">{error}</p>}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderProjectCards()}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between mt-6 items-center">
            <button
              onClick={prevPage}
              className="bg-[#1b1b1b] hover:bg-[#76b900] transition-all text-white py-2 px-4 rounded mb-10"
              disabled={currentPage === 1}
            >
              Prev
            </button>
            
            {/* Pagination Info */}
            <div className="text-white text-md mb-10">
              Page {currentPage} of {Math.ceil(filteredData.length / cardsPerPage)}
            </div>
            
            <button
              onClick={nextPage}
              className="bg-[#1b1b1b] hover:bg-[#76b900] transition-all text-white py-2 px-4 rounded mb-10"
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
