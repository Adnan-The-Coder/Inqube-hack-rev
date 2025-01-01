"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "@/components/Header";

function Page() {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [equityRange, setEquityRange] = useState<string>("");
  const [maxInvestment, setMaxInvestment] = useState<number>(1000000); // Default max investment value
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  async function fetchData(tableName: string): Promise<void> {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`/api/dataFetch`, {
        params: { table: tableName },
      });

      const uniqueTags = Array.from(new Set(response.data.map((item: any) => item.Tag).filter(Boolean))) as string[];

      setTags(uniqueTags);
      setData(response.data);
      setFilteredData(response.data);
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

  const renderProjectCards = () => {
    if (filteredData.length === 0) {
      return <p className="text-white">No projects found based on the filters.</p>;
    }

    return filteredData.map((project, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-lg shadow-md mb-6 max-w-md mx-auto"
      >
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {project.name?.charAt(0).toUpperCase()}
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-gray-800">{project.name}</h3>
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
      <div className="flex flex-col md:flex-row">
        {/* Filter Section */}
        <div
          className={`bg-[#76b900] md:w-1/6 rounded-md p-4 gap-6 ${
            isMenuOpen ? "fixed top-12 inset-0 z-50 md:h-screen md:overflow-y-auto" : "md:h-screen md:overflow-y-auto h-full"
          } md:sticky top-0 overflow-y-auto`}
          style={{ zIndex: 10 }}
        >
          <button
            className={`bg-gray-800 text-white px-4 py-2 rounded mb-4 md:hidden ${isMenuOpen ? "absolute top-4 right-4" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "Close Filters" : "Open Filters"}
          </button>

          {(isMenuOpen || !isMenuOpen) && (
            <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
              <h2 className="text-white text-2xl mb-4">Filters</h2>
              <div className="mb-4">
                <h3 className="text-white mb-2">Tags</h3>
                {tags.map((tag, index) => (
                  <div key={index} className="mb-2">
                    <label className="text-white inline-flex items-center">
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
              <div className="mb-4">
                <h3 className="text-white mb-2">Equity Range</h3>
                <select
                  className="w-full p-2 bg-gray-700 text-white rounded"
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
              <div className="mb-4">
                <h3 className="text-white mb-2">Max Investment Amount</h3>
                <input
                  type="range"
                  min="0"
                  max="1000000"
                  step="10000"
                  value={maxInvestment}
                  onChange={handleMaxInvestmentChange}
                  className="w-full mb-2"
                />
                <div className="flex justify-between text-white">
                  <span>₹0</span>
                  <span>₹{maxInvestment}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Project Cards Section */}
        <div className="md:w-5/6 px-4 md:px-8 md:h-screen md:overflow-y-auto">
          <h1 className="text-white text-4xl mb-4">Projects</h1>
          {loading && <p className="text-white">Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {renderProjectCards()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
