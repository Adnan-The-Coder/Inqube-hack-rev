"use client";

import React, { useState, useEffect } from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import Header, { useUser } from "@/components/Header";
import defaultpic from "@/app/team/defaultpic.jpg";
import { ExternalLink } from "lucide-react";
import profileBanner from "@/app/team/profile-banner.webp";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function ProfilePage() {
  return <ProfileContent />;
}

function ProfileContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const profileImage = user?.photoURL ? `${user.photoURL}?t=${new Date().getTime()}` : defaultpic;

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
                src={profileImage}
                alt="Profile"
                width={192}
                height={192}
                quality={100} 
                className="w-full h-full object-cover rounded-full"
            />
            </div>
            <h1 className="mt-6 mb-2 text-4xl font-bold text-[#76b900]">
              {user?.displayName || "Default"}
            </h1>
            <span className="mt-2 px-6 py-2 bg-[#76b900] text-black rounded-full text-sm font-medium">
              Investor
            </span>

            <div className="mt-4 flex space-x-6 animate-slideIn">
              <SocialLink Icon={Github} href="https://github.com" />
              <SocialLink Icon={Linkedin} href="https://www.linkedin.com/" />
              <SocialLink Icon={Instagram} href="https://www.instagram.com/" />
            </div>
          </div>
          <div className="bg-[#111111] rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all">
            <h2 className="text-2xl font-bold mb-4 text-[#76b900]">About</h2>
            <p className="text-gray-300 leading-relaxed">
              A creative problem-solver with a passion for leadership,
              collaboration, and innovation. Skilled in organizing events,
              effective communication, and building meaningful connections.
              Combines technical expertise with interpersonal skills to embrace
              challenges and create lasting impact.
            </p>
            {user && (
              <div className="mt-4 p-4 bg-[#1a1a1a] rounded-lg">
                <h3 className="text-xl font-semibold text-[#76b900] mb-2">
                  Contact Information
                </h3>
                <p className="text-gray-300">
                  <strong>Email:</strong> {user.email || "Not provided"}
                </p>
              </div>
            )}
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
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#76b900]">
            Achievements
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <AchievementCard
              title="Speaker at International Design Summit"
              year="2023"
              description="Presented a talk on the evolution of design thinking and its role in shaping modern technology and user experiences."
            />
            <AchievementCard
              title="Creator of Award-Winning User Interface"
              year="2022"
              description="Designed an award-winning user interface for a mobile app that improved user engagement by 40%."
            />
            <AchievementCard
              title="Lead Design at ECELL MJCET"
              year="2021"
              description="Founded and led the Design Club at MJCET, organizing workshops, design challenges, and collaborations with industry professionals."
            />
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#76b900]">
            Testimonials
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Syed Shujauddin"
              role="CEO, Halcyon"
              message="Afzal is an exceptional leader who brings fresh ideas and executes them flawlessly. Its always a pleasure working with him."
            />
            <TestimonialCard
              name="Abid Nafi"
              role="CTO, E-Cell MJCET"
              message="Afzal's technical expertise and collaborative approach make him an asset to any team. Highly recommended!"
            />
            <TestimonialCard
              name="Mohammed Irfan"
              role="CIO, E-Cell MJCET"
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
          <h2 className="text-3xl font-bold mb-6 text-[#76b900]">
            Certifications
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <CertificationCard
              title="Adobe Certified Expert"
              issuer="Adobe"
              year="2024"
            />
            <CertificationCard
              title="Certified UX Designer"
              issuer="Interaction Design Foundation"
              year="2023"
            />
            <CertificationCard
              title="UI/UX Design Professional"
              issuer="Coursera"
              year="2022"
            />
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#76b900]">
            Contact Information
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#111111] rounded-xl p-6">
              <h3 className="text-xl font-bold text-white">Email</h3>
              <p className="text-gray-300 mt-2 mb-4">
                {user?.email || "afzalsyed.hs@gmail.com"}
              </p>
              <Link
                href={`mailto:${user?.email || "afzalsyed.hs@gmail.com"}`}
                className="mt-4 bg-[#76b900] text-black px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all"
              >
                Send Email
              </Link>
            </div>
            <div className="bg-[#111111] rounded-xl p-6">
              <h3 className="text-xl font-bold text-white">Phone</h3>
              <p className="text-gray-300 mt-2 mb-5">+917396211824</p>
              <Link
                href="tel:+917396211824"
                className="mt-4 bg-[#76b900] text-black px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all"
              >
                Call
              </Link>
            </div>
          </div>
        </section>
        <section className="text-center mb-12">
          <button className="bg-[#76b900] text-black px-10 py-4 rounded-full font-medium hover:bg-opacity-90 transition-colors flex items-center mx-auto">
            <Mail className="w-5 h-5 mr-2" />
            Get in Touch
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

interface SocialLinkProps {
  Icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const SocialLink = ({ Icon, href }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-[#76b900] transition-colors hover:scale-95"
  >
    <Icon className="w-6 h-6" />
  </a>
);

interface TestimonialCardProps {
  name: string;
  role: string;
  message: string;
}

const TestimonialCard = ({ name, role, message }: TestimonialCardProps) => (
  <div className="bg-[#111111] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all">
    <p className="text-gray-300 text-lg italic">"{message}"</p>
    <p className="mt-4 text-[#76b900] font-semibold">{name}</p>
    <p className="text-sm text-gray-400">{role}</p>
  </div>
);

interface AchievementCardProps {
  title: string;
  year: string;
  description: string;
}

const AchievementCard = ({ title, year, description }: AchievementCardProps) => (
  <div className="bg-[#111111] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all">
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-gray-300 mt-2">{year}</p>
    <p className="text-gray-400 mt-2">{description}</p>
  </div>
);

interface SkillProps {
  text: string;
}

const Skill = ({ text }: SkillProps) => (
  <span className="px-6 py-3 bg-[#111111] rounded-full text-sm font-medium border-2 border-transparent hover:border-[#76b900] hover:text-[#76b900] transition-all">
    {text}
  </span>
);

interface CertificationCardProps {
  title: string;
  issuer: string;
  year: string;
}

const CertificationCard = ({ title, issuer, year }: CertificationCardProps) => (
  <div className="bg-[#111111] rounded-xl p-6 hover:bg-[#1A1A1A] transition-all">
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-sm text-gray-400">{issuer}</p>
    <p className="text-gray-300 mt-2">{year}</p>
  </div>
);

interface ProjectCardProps {
  title: string;
  description: string;
  year: string;
}

const ProjectCard = ({ title, description, year }: ProjectCardProps) => (
  <div className="bg-[#111111] rounded-xl p-6 hover:bg-[#1A1A1A]">
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