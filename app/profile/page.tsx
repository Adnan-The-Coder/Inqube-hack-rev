"use client"
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Mail, ExternalLink } from 'lucide-react';

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
      <div className={`fixed w-full top-0 left-0 z-50 ${
        isScrolled ? "bg-[#0a0a0a] shadow-lg" : "bg-transparent"
      } transition-all duration-300`}>
        <div className="flex items-center justify-between text-white p-4 md:p-1 md:px-8">
          <div>
            <a href="/" className="text-2xl font-bold text-[#76b900]">
              INQUBE
            </a>
          </div>
          
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-3xl focus:outline-none"
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>

          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex space-x-6">
              {["Home", "About", "Marketplace", "Contact us"].map((item) => (
                <li key={item} className="m-2">
                  <a 
                    href={item === "Marketplace" ? "/marketplace" : "/"} 
                    className="hover:text-[#76b900] transition-all ease-in-out"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li
                className="relative m-2 group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <span className="cursor-pointer">Dashboard ↓</span>
                <div className="absolute left-0 w-48 bg-[#0a0a0a] text-white shadow-lg rounded-md transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out">
                  <ul className="mt-5">
                    <li className="px-4 py-2 hover:bg-[#76b900] rounded-lg">
                      <a href="/developer">Developer</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-[#76b900] rounded-lg">
                      <a href="/investor">Investor</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div className="hidden lg:block">
            <a href="/contact-us">
              <button className="bg-[#76b900] px-5 py-2 rounded-full hover:bg-[#5e9400] transition-all">
                Sign in
              </button>
            </a>
          </div>

          <div className={`fixed inset-y-0 left-0 w-full bg-black bg-opacity-90 z-50 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 flex flex-col justify-center items-center p-6 lg:hidden`}>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-3xl text-white focus:outline-none"
            >
              ✖
            </button>
            <ul className="flex flex-col space-y-6 text-center">
              {["Home", "About", "Marketplace"].map((item) => (
                <li key={item} className="text-xl font-medium hover:text-[#76b900] transition-all">
                  <a 
                    href={item === "Marketplace" ? "/marketplace" : "/"} 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li
                className="relative text-xl font-medium hover:text-[#76b900] transition-all"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="cursor-pointer">Dashboard ↓</span>
                {isDropdownOpen && (
                  <ul className="absolute left-0 bg-[#0a0a0a] text-white shadow-lg rounded-md w-full">
                    <li className="px-4 py-2 hover:bg-[#76b900]">
                      <a href="/developer" onClick={() => setIsMenuOpen(false)}>
                        Developer
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:bg-[#76b900]">
                      <a href="/investor" onClick={() => setIsMenuOpen(false)}>
                        Investor
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="text-xl font-medium hover:text-[#76b900] transition-all">
                <a href="/contact-us" onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <a href="/" onClick={() => setIsMenuOpen(false)}>
                <button className="bg-[#76b900] px-6 py-3 rounded-full hover:bg-[#5e9400] transition-all">
                  Sign in
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 pt-32 pb-12">
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="md:w-1/3">
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full border-2 border-[#76b900] p-1">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h1 className="mt-6 text-3xl font-bold">Nazmeen Sultana</h1>
              <span className="mt-2 px-4 py-1 bg-[#76b900] text-black rounded-full text-sm font-medium">
                Execom
              </span>
              <div className="mt-4 flex space-x-4">
                <SocialLink Icon={Github} href="https://github.com/nazzmeen" />
                <SocialLink Icon={Linkedin} href="https://www.linkedin.com/in/nazmeen-sultana-3ab662252/" />
                <SocialLink Icon={Instagram} href="https://www.instagram.com/n4xmeen._/" />
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="bg-[#111111] rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">About</h2>
              <p className="text-gray-300 leading-relaxed">
                A creative problem-solver with a passion for leadership, collaboration, and innovation. 
                Skilled in organizing events, effective communication, and building meaningful connections. 
                Combines technical expertise with interpersonal skills to embrace challenges and create lasting impact.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="grid gap-6">
            <ExperienceCard
              title="Co-Founder"
              company="Halcyon"
              period="November 2023 - Present"
              description="Co-founded an innovative mental health care app, leveraging AI-driven therapy tools and strategic partnerships to make mental health resources accessible, personalized, and stigma-free."
              highlight={true}
            />
            <ExperienceCard
              title="Editorial & Research Team Head"
              company="E-Cell MJCET"
              period="October 2024 - Present"
              description="Led the Editorial & Research Team, overseeing content creation, conducting in-depth analyses, and ensuring high-quality deliverables aligned with organizational goals."
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            <Skill text="AI & Data Science" />
            <Skill text="Leadership" />
            <Skill text="Event Management" />
            <Skill text="Public Speaking" />
            <Skill text="Research" />
            <Skill text="Content Creation" />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="Note Sync"
              description="Developing a note-making website using ReactJS. Contributing to the development of a Stealth Project involving mobile app development."
              year="2023"
            />
            <ProjectCard
              title="Know Money"
              description="Developed a UPI app with innovative features to help users save money, track spending, and effectively reduce expenses through smart financial insights."
              year="2023"
            />
          </div>
        </section>

        <section className="text-center">
          <button className="bg-[#76b900] text-black px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors flex items-center mx-auto">
            <Mail className="w-5 h-5 mr-2" />
            Get in Touch
          </button>
        </section>
      </main>
    </div>
  );
}

const NavLink = ({ href, text }: { href: string; text: string }) => (
  <a href={href} className="text-gray-300 hover:text-[#76b900] transition-colors">
    {text}
  </a>
);

const SocialLink = ({ Icon, href }: { Icon: any; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-[#76b900] transition-colors"
  >
    <Icon className="w-5 h-5" />
  </a>
);

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  highlight = false,
}: {
  title: string;
  company: string;
  period: string;
  description: string;
  highlight?: boolean;
}) => (
  <div className={`bg-[#111111] rounded-xl p-6 ${highlight ? 'border border-[#76b900]' : ''}`}>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-[#76b900] mt-1">{company}</p>
    <p className="text-gray-400 text-sm mt-1">{period}</p>
    <p className="text-gray-300 mt-4">{description}</p>
  </div>
);

const Skill = ({ text }: { text: string }) => (
  <span className="px-4 py-2 bg-[#111111] rounded-full text-sm font-medium hover:border-[#76b900] border border-transparent transition-colors">
    {text}
  </span>
);

const ProjectCard = ({
  title,
  description,
  year,
}: {
  title: string;
  description: string;
  year: string;
}) => (
  <div className="bg-[#111111] rounded-xl p-6">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <span className="text-sm text-gray-400">{year}</span>
    </div>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="flex space-x-4">
      <button className="text-sm text-[#76b900] hover:underline flex items-center">
        <ExternalLink className="w-4 h-4 mr-1" />
        Live Demo
      </button>
      <button className="text-sm text-[#76b900] hover:underline flex items-center">
        <Github className="w-4 h-4 mr-1" />
        View Code
      </button>
    </div>
  </div>
);

export default App;