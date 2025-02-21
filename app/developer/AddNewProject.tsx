import React, { useState } from "react";
import { FiX } from "react-icons/fi";

const AddNewProject: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    projectID: "",         
    createdAt: "",
    projectTitle: "",
    projectDesc: "",
    tag: "",
    status: "",
    expectedInv: "",
    capital: "",
    author: "",
    isTeamReq: false,   
    imageDemo: "",
    demoURL: "",
    basePrice: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value || "", 
    }));
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked, 
    }));
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0];
    setFormData((prev) => ({
      ...prev,
      [field]: file ? file.name : "",
    }));
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
            <label className="mb-1 block text-sm font-medium" htmlFor="projectID">
              Project ID
            </label>
            <input
              type="text"
              id="projectID"
              name="projectID"
              value={formData.projectID || ""}
              onChange={handleInputChange}
              className="w-full rounded-lg bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            />
            <label className="mb-1 mt-4 block text-sm font-medium" htmlFor="createdAt">
              Created At (Timestamp)
            </label>
            <input
              type="datetime-local"
              id="createdAt"
              name="createdAt"
              value={formData.createdAt || ""}
              onChange={handleInputChange}
              className="w-full rounded-lg bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            />
            <label className="mb-1 mt-4 block text-sm font-medium" htmlFor="projectTitle">
              Project Title
            </label>
            <input
              type="text"
              id="projectTitle"
              name="projectTitle"
              value={formData.projectTitle || ""}
              onChange={handleInputChange}
              className="w-full rounded-lg bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            />
            <label className="mb-1 mt-4 block text-sm font-medium" htmlFor="projectDesc">
              Project Description
            </label>
            <textarea
              id="projectDesc"
              name="projectDesc"
              value={formData.projectDesc || ""}
              onChange={handleInputChange}
              className="w-full rounded-lg bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            ></textarea>
            <label className="mb-1 mt-4 block text-sm font-medium" htmlFor="tag">
              Tag
            </label>
            <input
              type="text"
              id="tag"
              name="tag"
              value={formData.tag || ""}
              onChange={handleInputChange}
              className="w-full rounded-lg bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            />
          </div>
        );
      case 2:
        return (
          <div>
            <label className="mb-1 block text-sm font-medium" htmlFor="status">
              Status
            </label>
            <input
              type="text"
              id="status"
              name="status"
              value={formData.status || ""}
              onChange={handleInputChange}
              className="w-full rounded-lg bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            />
            <label className="mb-1 mt-4 block text-sm font-medium" htmlFor="expectedInv">
              Expected Investment ($)
            </label>
            <input
              type="number"
              id="expectedInv"
              name="expectedInv"
              value={formData.expectedInv || ""}
              onChange={handleInputChange}
              className="w-full rounded-lg bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            />
            <label className="mb-1 mt-4 block text-sm font-medium" htmlFor="capital">
              Capital
            </label>
            <input
              type="text"
              id="capital"
              name="capital"
              value={formData.capital || ""}
              onChange={handleInputChange}
              className="w-full rounded-lg bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            />
            <label className="mb-1 mt-4 block text-sm font-medium" htmlFor="author">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author || ""}
              onChange={handleInputChange}
              className="w-full rounded-lg bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            />
          </div>
        );
      case 3:
        return (
          <div>
            <div>
              <label className="mb-1 block text-sm font-medium" htmlFor="isTeamReq">
                Is Team Required?
              </label>
              <input
                type="checkbox"
                id="isTeamReq"
                name="isTeamReq"
                checked={formData.isTeamReq || false}
                onChange={handleCheckboxChange}
                className="mx-2"
            />
              <span className="text-sm font-medium">
                {formData.isTeamReq ? "True" : "False"}
              </span>
            </div>
            <label className="mb-1 mt-4 block text-sm font-medium" htmlFor="imageDemo">
              Upload Image
            </label>
            <input
              type="file"
              id="imageDemo"
              name="imageDemo"
              onChange={(e) => handleFileChange(e, "imageDemo")}
              className="w-full rounded-lg bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
            />
            <label className="mb-1 mt-4 block text-sm font-medium" htmlFor="demoURL">
              Demo URL
            </label>
            <input
              type="text"
              id="demoURL"
              name="demoURL"
              value={formData.demoURL || ""}
              onChange={handleInputChange}
              className="w-full rounded-lg bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            />
            <label className="mb-1 mt-4 block text-sm font-medium" htmlFor="basePrice">
              Base Price ($)
            </label>
            <input
              type="number"
              id="basePrice"
              name="basePrice"
              value={formData.basePrice || ""}
              onChange={handleInputChange}
              className="w-full rounded-lg bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-10">
      <button
          onClick={() => setIsModalOpen(true)}
          className="rounded-lg bg-[#76b900] px-6 py-2 text-white transition duration-300 hover:bg-[#68a800]"
        >
        + Add New Project
      </button>
      {isModalOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative w-11/12 max-w-4xl rounded-lg bg-[#181818] p-8 shadow-lg">
          <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-200"
              >
            <FiX size={24} />
          </button>
          <h2 className="mb-4 text-2xl font-semibold text-[#76b900]">Add New Project</h2>
          <form onSubmit={handleSubmit}>
            {renderPage()}
            <div className="mt-4 flex justify-between">
              <button
                    type="button"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="rounded-lg bg-gray-600 px-6 py-2 text-white transition duration-300 hover:bg-gray-500"
                  >
                Back
              </button>
              {currentPage < 3 ? (
                <button
                      type="button"
                      onClick={handleNextPage}
                      className="rounded-lg bg-[#76b900] px-6 py-2 text-white transition duration-300 hover:bg-[#68a800]"
                    >
                  Next
                </button>
                  ) : (
                    <button
                      type="submit"
                      className="rounded-lg bg-[#76b900] px-6 py-2 text-white transition duration-300 hover:bg-[#68a800]"
                    >
                      Submit
                    </button>
                  )}
            </div>
          </form>
        </div>
      </div>
        )}
    </div>
  );
};

export default AddNewProject;
