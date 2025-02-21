"use client";

import React, { useState } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
      <div className="min-h-screen bg-[#0a0a0a] p-6 pt-16 text-white lg:p-0 lg:pt-16">
        <Header />
        <main>
          <section className="mx-auto max-w-4xl py-10">
            <div className="flex flex-col items-center justify-center">
              <h2 className="mb-4 text-3xl font-bold">Contact Us</h2>
              <p className="text-md mb-6 text-center text-[#6b6b6b]">
                Whether you are an investor looking to discover innovative startups or a startup seeking investment opportunities, we are here to help! Reach out to us with your queries or to discuss potential partnerships.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="rounded-lg bg-[#2b2b2b] p-6 shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="mb-2 block text-lg">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-600 bg-[#333333] p-3 text-white"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="mb-2 block text-lg">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-600 bg-[#333333] p-3 text-white"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="mb-2 block text-lg">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-md border border-gray-600 bg-[#333333] p-3 text-white"
                  placeholder="How can we assist you?"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-[#76b900] py-3 font-bold text-white transition duration-200 hover:bg-[#75b900d7]"
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
