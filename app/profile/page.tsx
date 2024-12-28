"use client";

import React, { useState, useEffect } from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import Header from "@/components/Header";
import afzal from "@/app/team/afzal.jpg";
import profileBanner from "@/app/team/profile-banner.webp"; 
import Image from "next/image";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-12">
        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative flex flex-col items-center animate-fadeIn">
            <div className="absolute top-0 left-0 w-full h-48 rounded-t-lg overflow-hidden">
              <Image
                src={profileBanner}
                alt="Profile Banner"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-48 h-48 rounded-full border-4 border-gradient-to-r from-[#76b900] to-[#34b7b3] p-1 shadow-lg z-10">
              <Image
                src={afzal}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            <h1 className="mt-6 text-4xl font-extrabold text-[#76b900]">Afzal Hashmi</h1>
            <span className="mt-2 px-6 py-2 bg-[#76b900] text-black rounded-full text-sm font-medium">
              Execom
            </span>

            <div className="mt-4 flex space-x-6 animate-slideIn">
              <SocialLink Icon={Github} href="https://github.com/nazzmeen" />
              <SocialLink
                Icon={Linkedin}
                href="https://www.linkedin.com/in/nazmeen-sultana-3ab662252/"
              />
              <SocialLink
                Icon={Instagram}
                href="https://www.instagram.com/n4xmeen._/"
              />
            </div>
          </div>
          <div className="bg-[#111111] rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all">
            <h2 className="text-2xl font-bold mb-4 text-[#76b900]">About</h2>
            <p className="text-gray-300 leading-relaxed">
              A creative problem-solver with a passion for leadership, collaboration, and innovation. Skilled in organizing events, effective communication, and building meaningful connections. Combines technical expertise with interpersonal skills to embrace challenges and create lasting impact.
            </p>
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#76b900]">Achievements</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <AchievementCard
              title="Winner of National Robotics Competition"
              year="2023"
              description="Led the team to victory in the National Robotics Competition with innovative design and exceptional teamwork."
            />
            <AchievementCard
              title="Speaker at Tech Innovators Conference"
              year="2022"
              description="Delivered a well-received talk on the future of AI and its implications for the tech industry."
            />
            <AchievementCard
              title="Founder of E-Cell MJCET"
              year="2021"
              description="Founded and led the E-Cell at MJCET, fostering entrepreneurship among students and organizing key events."
            />
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#76b900]">Testimonials</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <TestimonialCard
              name="John Doe"
              role="CEO, Halcyon"
              message="Afzal is an exceptional leader who brings fresh ideas and executes them flawlessly. Its always a pleasure working with him."
            />
            <TestimonialCard
              name="Jane Smith"
              role="Lead Developer, E-Cell MJCET"
              message="Afzal's technical expertise and collaborative approach make him an asset to any team. Highly recommended!"
            />
            <TestimonialCard
              name="Michael Ross"
              role="Director, Tech Innovators"
              message="Ive worked with Afzal on several projects, and his dedication and attention to detail are unmatched. A true professional."
            />
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#76b900]">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 animate-slideUp">
            <Skill text="Designing" />
            <Skill text="Leadership" />
            <Skill text="Event Management" />
            <Skill text="Public Speaking" />
            <Skill text="Research" />
            <Skill text="Photoshop" />
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#76b900]">Certifications</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <CertificationCard
              title="AWS Certified Solutions Architect"
              issuer="Amazon Web Services"
              year="2024"
            />
            <CertificationCard
              title="Google Data Analytics Professional"
              issuer="Google"
              year="2023"
            />
            <CertificationCard
              title="Certified AI Specialist"
              issuer="Udemy"
              year="2022"
            />
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#76b900]">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#111111] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#76b900]">Email</h3>
              <p className="text-gray-300 mt-2">afzal.hashmi@example.com</p>
              <button className="mt-4 bg-[#76b900] text-black px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all">Send Email</button>
            </div>
            <div className="bg-[#111111] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#76b900]">Phone</h3>
              <p className="text-gray-300 mt-2">+123 456 7890</p>
              <button className="mt-4 bg-[#76b900] text-black px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all">Call</button>
            </div>
          </div>
        </section>

        {/* Get in Touch Section */}
        <section className="text-center mb-12">
          <button className="bg-[#76b900] text-black px-10 py-4 rounded-full font-medium hover:bg-opacity-90 transition-colors flex items-center mx-auto">
            <Mail className="w-5 h-5 mr-2" />
            Get in Touch
          </button>
        </section>
      </main>
    </div>
  );
}

const SocialLink = ({ Icon, href }: { Icon: any; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-[#76b900] transition-colors"
  >
    <Icon className="w-6 h-6" />
  </a>
);

const TestimonialCard = ({ name, role, message }: { name: string, role: string, message: string }) => (
  <div className="bg-[#111111] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all">
    <p className="text-gray-300 text-lg italic">"{message}"</p>
    <p className="mt-4 text-[#76b900] font-semibold">{name}</p>
    <p className="text-sm text-gray-400">{role}</p>
  </div>
);

const AchievementCard = ({ title, year, description }: { title: string, year: string, description: string }) => (
  <div className="bg-[#111111] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all">
    <h3 className="text-xl font-bold text-[#76b900]">{title}</h3>
    <p className="text-gray-300 mt-2">{year}</p>
    <p className="text-gray-400 mt-2">{description}</p>
  </div>
);

const Skill = ({ text }: { text: string }) => (
  <span className="px-6 py-3 bg-[#111111] rounded-full text-sm font-medium border-2 border-transparent hover:border-[#76b900] hover:text-[#76b900] transition-all">
    {text}
  </span>
);

const CertificationCard = ({ title, issuer, year }: { title: string, issuer: string, year: string }) => (
  <div className="bg-[#111111] rounded-xl p-6 hover:bg-[#1A1A1A] transition-all">
    <h3 className="text-xl font-bold text-[#76b900]">{title}</h3>
    <p className="text-sm text-gray-400">{issuer}</p>
    <p className="text-gray-300 mt-2">{year}</p>
  </div>
);

export default App;
