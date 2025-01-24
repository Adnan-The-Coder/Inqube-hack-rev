"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);

  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData: FormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    const formEndpoint = "https://formspree.io/f/mqaeaelp";

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setFormStatus("Oops! Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="bg-[#0a0a0a] text-white min-h-screen pt-16 p-6 lg:p-0 lg:pt-16">
        <Header />
        <main>
          <section className="max-w-4xl mx-auto py-10">
            <div className="flex items-center justify-center flex-col">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-md mb-6 text-[#6b6b6b] text-center">
                Whether you are an investor looking to discover innovative startups or a startup seeking investment opportunities, we are here to help! Reach out to us with your queries or to discuss potential partnerships.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-[#2b2b2b] p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#333333] text-white rounded-md border border-gray-600"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#333333] text-white rounded-md border border-gray-600"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-lg mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 bg-[#333333] text-white rounded-md border border-gray-600"
                  placeholder="How can we assist you?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#76b900] text-white font-bold rounded-md hover:bg-[#75b900d7] transition duration-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>

            {formStatus && (
              <div className="mt-4 text-center text-lg">
                <p>{formStatus}</p>
              </div>
            )}
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
