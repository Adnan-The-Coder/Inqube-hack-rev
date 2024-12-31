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
            <label className="block text-sm font-medium mb-1" htmlFor="projectID">
              Project ID
            </label>
            <input
              type="text"
              id="projectID"
              name="projectID"
              value={formData.projectID || ""}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            />
            <label className="block text-sm font-medium mb-1 mt-4" htmlFor="createdAt">
              Created At (Timestamp)
            </label>
            <input
              type="datetime-local"
              id="createdAt"
              name="createdAt"
              value={formData.createdAt || ""}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            />
            <label className="block text-sm font-medium mb-1 mt-4" htmlFor="projectTitle">
              Project Title
            </label>
            <input
              type="text"
              id="projectTitle"
              name="projectTitle"
              value={formData.projectTitle || ""}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            />
            <label className="block text-sm font-medium mb-1 mt-4" htmlFor="projectDesc">
              Project Description
            </label>
            <textarea
              id="projectDesc"
              name="projectDesc"
              value={formData.projectDesc || ""}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            ></textarea>
            <label className="block text-sm font-medium mb-1 mt-4" htmlFor="tag">
              Tag
            </label>
            <input
              type="text"
              id="tag"
              name="tag"
              value={formData.tag || ""}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            />
          </div>
        );
      case 2:
        return (
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="status">
              Status
            </label>
            <input
              type="text"
              id="status"
              name="status"
              value={formData.status || ""}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            />
            <label className="block text-sm font-medium mb-1 mt-4" htmlFor="expectedInv">
              Expected Investment ($)
            </label>
            <input
              type="number"
              id="expectedInv"
              name="expectedInv"
              value={formData.expectedInv || ""}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            />
            <label className="block text-sm font-medium mb-1 mt-4" htmlFor="capital">
              Capital
            </label>
            <input
              type="text"
              id="capital"
              name="capital"
              value={formData.capital || ""}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            />
            <label className="block text-sm font-medium mb-1 mt-4" htmlFor="author">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author || ""}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            />
          </div>
        );
      case 3:
        return (
          <div>
            <div>
            <label className="block text-sm font-medium mb-1" htmlFor="isTeamReq">
                Is Team Required?
            </label>
            <input
                type="checkbox"
                id="isTeamReq"
                name="isTeamReq"
                checked={formData.isTeamReq || false}
                onChange={handleCheckboxChange}
                className="mr-2 ml-2"
            />
            <span className="text-sm font-medium">
                {formData.isTeamReq ? "True" : "False"}
            </span>
            </div>
            <label className="block text-sm font-medium mb-1 mt-4" htmlFor="imageDemo">
              Upload Image
            </label>
            <input
              type="file"
              id="imageDemo"
              name="imageDemo"
              onChange={(e) => handleFileChange(e, "imageDemo")}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
            />
            <label className="block text-sm font-medium mb-1 mt-4" htmlFor="demoURL">
              Demo URL
            </label>
            <input
              type="text"
              id="demoURL"
              name="demoURL"
              value={formData.demoURL || ""}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            />
            <label className="block text-sm font-medium mb-1 mt-4" htmlFor="basePrice">
              Base Price ($)
            </label>
            <input
              type="number"
              id="basePrice"
              name="basePrice"
              value={formData.basePrice || ""}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
              required
            />
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
            <div className="bg-[#181818] rounded-lg shadow-lg w-11/12 max-w-4xl p-8 relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
              >
                <FiX size={24} />
              </button>
              <h2 className="text-2xl font-semibold text-[#76b900] mb-4">Add New Project</h2>
              <form onSubmit={handleSubmit}>
                {renderPage()}
                <div className="mt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-500 transition duration-300"
                  >
                    Back
                  </button>
                  {currentPage < 3 ? (
                    <button
                      type="button"
                      onClick={handleNextPage}
                      className="bg-[#76b900] text-white py-2 px-6 rounded-lg hover:bg-[#68a800] transition duration-300"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-[#76b900] text-white py-2 px-6 rounded-lg hover:bg-[#68a800] transition duration-300"
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
    </>
  );
};

export default AddNewProject;
