"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const ContactPage = () => {
  return (
    <div>
    <div className="bg-[#0a0a0a] text-white min-h-screen p-8">
      <Header />
      <main className="flex flex-col lg:flex-row justify-between items-start mt-20 gap-8">
        <section className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Have questions? Connect with us.</h2>
          <p className="text-gray-400 mb-6">
            Welcome to our platform – where startups meet investors. We bridge the gap between your
            groundbreaking ideas and the resources needed to bring them to life.
          </p>
          <p className="text-gray-400">
            If you have a query, feedback, or need assistance, please choose the most relevant category
            below and fill out the form to get in touch with us.
          </p>

          <ul className="mt-6 space-y-4 text-[#76b900]">
            <li>1. I want to pitch my startup to investors</li>
            <li>2. I am an investor looking for opportunities</li>
            <li>3. I want to partner with your platform</li>
            <li>4. I need help with my account</li>
            <li>5. I want to report an issue</li>
            <li>6. I have general feedback</li>
          </ul>
        </section>
        <section className="lg:w-1/2 bg-[#1b1b1b] p-6 rounded-lg shadow-lg">
          <form>
            <label className="block text-gray-300 mb-2">Category</label>
            <select
              className="w-full p-3 mb-4 bg-[#0a0a0a] text-white rounded-lg border border-gray-700"
              required
            >
              <option value="">Select a category</option>
              <option value="pitch">I want to pitch my startup to investors</option>
              <option value="investor">I am an investor looking for opportunities</option>
              <option value="partner">I want to partner with your platform</option>
              <option value="help">I need help with my account</option>
              <option value="issue">I want to report an issue</option>
              <option value="feedback">I have general feedback</option>
            </select>

            <label className="block text-gray-300 mb-2">Your Name</label>
            <input
              type="text"
              className="w-full p-3 mb-4 bg-[#0a0a0a] text-white rounded-lg border border-gray-700"
              placeholder="Enter your name"
              required
            />

            <label className="block text-gray-300 mb-2">Your Email</label>
            <input
              type="email"
              className="w-full p-3 mb-4 bg-[#0a0a0a] text-white rounded-lg border border-gray-700"
              placeholder="Enter your email"
              required
            />

            <label className="block text-gray-300 mb-2">Your Message</label>
            <textarea
              className="w-full p-3 mb-4 bg-[#0a0a0a] text-white rounded-lg border border-gray-700"
              placeholder="Type your message"
              rows={4}
              required
            ></textarea>

            <label className="block text-gray-300 mb-2">Screenshot (optional)</label>
            <input
              type="file"
              className="w-full p-3 bg-[#0a0a0a] text-white rounded-lg border border-gray-700"
            />

            <button
              type="submit"
              className="mt-6 w-full bg-[#76b900] text-gray-900 font-bold py-3 rounded-lg transition"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </div>
      <Footer/>
      </div>
  );
};

export default ContactPage;
