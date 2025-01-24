"use client"

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Page: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<string>('');
  const formEndpoint = 'https://formspree.io/f/mqaeaelp';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setFormStatus('All fields are required.');
      return;
    }
    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setFormStatus('Thank you for your message! We will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setFormStatus('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setFormStatus('An error occurred while submitting the form. Please try again.');
    }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Header />
      <main className="pt-20 pb-10">
        <section className="max-w-5xl mx-auto bg-[#0a0a0a] rounded-lg p-6 shadow-lg">
          <h1 className="text-3xl font-bold text-[#ffffff] mb-4">Customer Service</h1>
          <p className="text-gray-300 mb-8">
            Welcome to our support page! Whether you are an investor or a startup founder, we are here to assist you in making the most of our platform. Below, you will find answers to common questions and a way to reach out to us for personalized help.
          </p>
          <h2 className="text-2xl font-semibold text-[#ffffff] mb-4">FAQs</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-600 pb-2">
              <h3 className="font-medium text-[#ffffff]">How do I create a profile as an investor or startup?</h3>
              <p className="text-gray-400 pt-2">
                Simply sign up and select your role (Investor or Startup). Once registered, you can create a detailed profile to showcase your interests or offerings.
              </p>
            </div>
            <div className="border-b border-gray-600 pb-2">
              <h3 className="font-medium text-[#ffffff]">How does the platform match investors with startups?</h3>
              <p className="text-gray-400 pt-2">
                Our AI-driven algorithm analyzes profiles and preferences to provide the most relevant matches for both investors and startups.
              </p>
            </div>
            <div className="border-b border-gray-600 pb-2">
              <h3 className="font-medium text-[#ffffff]">Is there a fee to use the platform?</h3>
              <p className="text-gray-400 pt-2">
                Startups can create a basic profile for free. For premium features like enhanced visibility or direct messaging, subscription plans are available.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-[#ffffff]">How can I contact customer support?</h3>
              <p className="text-gray-400 pt-2">
                Fill out the form below or email us directly at inqube@platform.com. We will respond within 24 hours.
              </p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-[#ffffff] mt-8 mb-4">Contact Us</h2>
          {formStatus && <p className="mb-4 text-sm text-gray-400">{formStatus}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full bg-[#76b900] text-[#0a0a0a] rounded-md shadow-md px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-lime-300"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Email Address</label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full bg-[#76b900] text-[#0a0a0a] rounded-md shadow-md px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-lime-300"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                name="message"
                className="mt-1 block w-full bg-[#76b900] text-[#0a0a0a] rounded-md shadow-md px-4 py-2 placeholder-black focus:outline-none focus:ring-2 focus:ring-lime-300"
                rows={5}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#76b900] text-white font-bold py-3 px-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-lime-300"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
