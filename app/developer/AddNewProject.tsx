import React, { useState } from "react";
import { FiX } from "react-icons/fi";

const AddNewProject: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    fundingGoal: "",
    equityOffered: "",
    businessModel: "",
    targetMarket: "",
    credentials: "",
    certificates: "",
    attachments: "",
    projectedRevenue: "",
    teamMembers: "",
    mission: "",
    shortTermGoals: "",
    longTermGoals: "",
    milestones: "",
    stage: "",
    competitors: "",
    uniqueSellingPoints: "",
    partnerships: "",
    fundingRound: "",
    userAcquisition: "",
    guidanceNeeded: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, [field]: file.name });
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Project Data:", formData);
    setIsModalOpen(false);
    setCurrentPage(1);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="title">
              Project Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            />
            <label className="block text-sm font-medium mb-1 mt-4" htmlFor="description">
              Project Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            ></textarea>
            <label className="block text-sm font-medium mb-1 mt-4" htmlFor="fundingGoal">
              Funding Goal ($)
            </label>
            <input
              type="number"
              id="fundingGoal"
              name="fundingGoal"
              value={formData.fundingGoal}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            />
            <label className="block text-sm font-medium mb-1 mt-4" htmlFor="equityOffered">
              Equity Offered (%)
            </label>
            <input
              type="number"
              id="equityOffered"
              name="equityOffered"
              value={formData.equityOffered}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            />
          </div>
        );
      case 2:
        return (
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="businessModel">
              Business Model
            </label>
            <textarea
              id="businessModel"
              name="businessModel"
              value={formData.businessModel}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            ></textarea>
            <label className="block text-sm font-medium mb-1 mt-4" htmlFor="targetMarket">
              Target Market
            </label>
            <textarea
              id="targetMarket"
              name="targetMarket"
              value={formData.targetMarket}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            ></textarea>
            <label className="block text-sm font-medium mb-1 mt-4" htmlFor="projectedRevenue">
              Projected Revenue ($)
            </label>
            <input
              type="number"
              id="projectedRevenue"
              name="projectedRevenue"
              value={formData.projectedRevenue}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            />
            <label className="block text-sm font-medium mb-1 mt-4" htmlFor="teamMembers">
              Team Members (Names & Roles)
            </label>
            <textarea
              id="teamMembers"
              name="teamMembers"
              value={formData.teamMembers}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            ></textarea>
          </div>
        );
      case 3:
        return (
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="mission">
              Startup Mission
            </label>
            <textarea
              id="mission"
              name="mission"
              value={formData.mission}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            ></textarea>
            <label className="block text-sm font-medium mb-1 mt-4" htmlFor="shortTermGoals">
              Short-Term Goals
            </label>
            <textarea
              id="shortTermGoals"
              name="shortTermGoals"
              value={formData.shortTermGoals}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            ></textarea>
            <label className="block text-sm font-medium mb-1 mt-4" htmlFor="longTermGoals">
              Long-Term Goals
            </label>
            <textarea
              id="longTermGoals"
              name="longTermGoals"
              value={formData.longTermGoals}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            ></textarea>
          </div>
        );
      case 4:
        return (
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="milestones">
              Key Milestones Achieved
            </label>
            <textarea
              id="milestones"
              name="milestones"
              value={formData.milestones}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            ></textarea>
            <label className="block text-sm font-medium mb-1 mt-4" htmlFor="competitors">
              Main Competitors
            </label>
            <textarea
              id="competitors"
              name="competitors"
              value={formData.competitors}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            ></textarea>
            <label className="block text-sm font-medium mb-1 mt-4" htmlFor="uniqueSellingPoints">
              Unique Selling Points (USPs)
            </label>
            <textarea
              id="uniqueSellingPoints"
              name="uniqueSellingPoints"
              value={formData.uniqueSellingPoints}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            ></textarea>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="mt-10">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#76b900] text-white py-2 px-6 rounded-lg hover:bg-[#68a800] transition duration-300"
        >
          + Add New Project
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#181818] rounded-lg shadow-lg w-11/12 max-w-4xl p-6 text-white">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-medium">Add New Project</h2>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setCurrentPage(1);
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  <FiX size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {renderPage()}

                <div className="flex justify-between mt-4">
                  {currentPage > 1 && (
                    <button
                      type="button"
                      onClick={handlePreviousPage}
                      className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
                    >
                      Previous
                    </button>
                  )}
                  {currentPage < 4 ? (
                    <button
                      type="button"
                      onClick={handleNextPage}
                      className="bg-[#76b900] text-black py-2 px-4 rounded-lg hover:bg-[#68a800]"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-[#76b900] text-black py-2 px-4 rounded-lg hover:bg-[#68a800]"
                    >
                      Submit
                    </button>
                  )}
                </div>

                <div className="mt-4 text-center">
                  <p>
                    Page {currentPage} of 4
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AddNewProject;
