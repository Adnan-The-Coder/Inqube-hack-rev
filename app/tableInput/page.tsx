"use client";
import React, { useState } from 'react';
import axios from 'axios';

interface Developer {
  id: number;
  name: string;
  tag: string;
  desc: string;
  status: string;
  Expected_Invested_Amount: number;
  Capital: string;
  author: string;
  IsTeamReq: boolean;
  imageDemo: string;
  price: number;
}

const Page = () => {
  const [formData, setFormData] = useState<Developer>({
    id: 0,
    name: '',
    tag: '',
    desc: '',
    status: '',
    Expected_Invested_Amount: 0,
    Capital: '',
    author: '',
    IsTeamReq: false,
    imageDemo: '',
    price: 0,
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/dataTransfer', {
        table: 'Developer',
        jsonData: formData,
      });
      console.log('Data inserted successfully:', response.data);
    } catch (error:any) {
      console.error('Error inserting data:', error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Add Developer Project</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-md space-y-4">
        {/* Project Title */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Project Title
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Tag */}
        <div>
          <label htmlFor="tag" className="block text-sm font-medium text-gray-700">
            Tag
          </label>
          <input
            type="text"
            id="tag"
            name="tag"
            value={formData.tag}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Project Description */}
        <div>
          <label htmlFor="desc" className="block text-sm font-medium text-gray-700">
            Project Description
          </label>
          <textarea
            id="desc"
            name="desc"
            value={formData.desc}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Status */}
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <input
            type="text"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Expected Invested Amount */}
        <div>
          <label htmlFor="Expected_Invested_Amount" className="block text-sm font-medium text-gray-700">
            Expected Invested Amount
          </label>
          <input
            type="number"
            id="Expected_Invested_Amount"
            name="Expected_Invested_Amount"
            value={formData.Expected_Invested_Amount}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Capital */}
        <div>
          <label htmlFor="Capital" className="block text-sm font-medium text-gray-700">
            Capital
          </label>
          <input
            type="text"
            id="Capital"
            name="Capital"
            value={formData.Capital}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>


        {/* Author */}
        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Is Team Required */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="IsTeamReq"
            name="IsTeamReq"
            checked={formData.IsTeamReq}
            onChange={handleInputChange}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="IsTeamReq" className="ml-2 block text-sm text-gray-700">
            Is Team Required
          </label>
        </div>

        {/* Image Demo */}
        <div>
          <label htmlFor="imageDemo" className="block text-sm font-medium text-gray-700">
            Image Demo URL
          </label>
          <input
            type="text"
            id="imageDemo"
            name="imageDemo"
            value={formData.imageDemo}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Base Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full mt-4 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
