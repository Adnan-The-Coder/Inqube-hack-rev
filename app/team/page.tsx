"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FaLinkedin, FaInstagram, FaGithub  } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface TeamMember {
  name: string;
  role: string;
  image: string | StaticImageData;
  about: string;
  socials: {
    linkedin: string;
    twitter: string;
    instagram: string;
    github: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Syed Adnan Ali",
    role: "CEO",
    image: "/assets/team/adnan.jpg",
    about:
    "Syed Adnan Ali is an innovative leader with a strong foundation in full-stack development and business strategy. As CEO, he combines his technical expertise in JavaScript, Node.js, Express, and MongoDB with a visionary approach to scaling businesses. Adnan excels at building teams, driving growth, and identifying key market opportunities. His comprehensive understanding of both the front-end and back-end of web applications allows him to guide projects seamlessly from concept to completion. With a passion for solving complex problems and delivering solutions that exceed expectations, Adnan fosters a culture of continuous improvement and innovation.",
    socials: {
        linkedin: "https://linkedin.com/in/syedadnanali99/",
        twitter: "https://x.com",
        instagram: "https://instagram.com",
        github: "https://github.com/Adnan-The-Coder",
    },
  },  
  {
    name: "Nazish Ahmed",
    role: "CTO",
    image:
      "/assets/team/nazish.jpg",
    about:
      "Nazish Ahmed is a highly skilled full-stack developer and a technical visionary driving the company's technology strategy as CTO. He has a deep proficiency in modern web development technologies like React, Node.js, and JavaScript, which he leverages to architect and implement scalable, high-performance applications. Nazish is committed to creating an efficient, secure, and robust technical infrastructure, ensuring seamless integration between the front-end and back-end. His leadership in technical innovation, combined with a focus on user experience, positions him as a critical force behind the company's growth and technical success.",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
      instagram: "https://instagram.com",
      github: "https://github.com",
    },
  },
  {
      name: "Afzal Hashmi Syed",
      role: "COO",
      image: "/assets/team/afzal.jpg",
      about:
        "Afzal Hashmi Syed is a dynamic operations leader with an exceptional ability to manage large-scale projects and lead cross-functional teams. As COO, he brings over two years of experience in ensuring operational efficiency, maintaining high performance across departments, and fostering collaboration to deliver successful outcomes. Afzal excels in problem-solving, workflow optimization, and strategic planning, making him an integral part of driving the company’s business growth. His expertise lies in streamlining operations to achieve long-term sustainability while keeping the team focused on delivering value to clients.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://x.com",
        instagram: "https://instagram.com",
        github: "https://github.com",
      },
    },
    {
        name: "Aayan Sayed",
        role: "Co-Founder",
        image: "/assets/team/aayan.jpg",
        about:
        " Aayan Sayed is a forward-thinking front-end engineer and Co-Founder with a talent for creating visually engaging and highly interactive user interfaces. He blends creativity with technical acumen, specializing in modern web frameworks like React and Vue to design responsive, intuitive web experiences. Aayan’s keen eye for design and focus on user experience ensures that every project he touches is not only aesthetically pleasing but also functional and user-centric. His commitment to delivering elegant solutions that combine form and function makes him an invaluable asset to the team.",
        socials: {
            linkedin: "https://linkedin.com",
        twitter: "https://x.com",
        instagram: "https://instagram.com",
        github: "https://github.com",
    },
},
{
  name: "Mudassir Ahmed",
  role: "Co-Founder",
  image: "/assets/team/mudassir.jpg",
  about:
    "Mudassir Ahmed is a cutting-edge Machine Learning Engineer and Co-Founder, bringing expertise in AI, data science, and automation to the forefront of the company's innovation strategy. With an extensive background in developing AI-driven models and leveraging big data for predictive insights, Mudassir is dedicated to creating intelligent systems that optimize operations and enhance decision-making processes. His versatility in working with various machine learning frameworks like TensorFlow and PyTorch positions him as a leader in utilizing AI to solve complex business challenges, paving the way for future growth.",
  socials: {
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    instagram: "https://instagram.com",
    github: "https://github.com",
  },
},
    {
      name: "Haseeb Rahman",
      role: "Speaker",
      image: "/assets/team/haseeb.jpg",
      about:
        "Haseeb Rahman is an eloquent communicator and tech support specialist who excels in bridging the gap between technology and users. As a public speaker and support specialist, Haseeb is known for his ability to simplify complex technical concepts and deliver them in an engaging and approachable way. He has a strong passion for customer service, ensuring that users feel heard and supported at every step. His versatility as a speaker and support professional allows him to represent the company effectively at events, conferences, and customer interactions, building lasting relationships with clients and partners.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://x.com",
        instagram: "https://instagram.com",
        github: "https://github.com",
      },
    },
  ];

const TeamPage: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const closeModal = () => setSelectedMember(null);

  return (
    <div>
      <div className="relative min-h-screen bg-[#0a0a0a] px-6 py-20">
        <Header />
        <h1 className="mb-12 text-center text-4xl font-bold text-white">
          Meet Our Team
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
            key={index}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedMember(member)}
            className="group relative flex cursor-pointer flex-col overflow-hidden rounded-lg bg-[#1B1B1B] shadow-lg"
          >
              <Image
              src={member.image}
              alt={member.name}
              width={500}
              height={500}
              className="h-80 w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
            />
              <div className="p-4 text-center">
                <h2 className="text-xl font-bold text-white">{member.name}</h2>
                <p className="mt-2 text-sm text-gray-400">{member.role}</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-[#76b900] hover:text-[#76b900]"
                >
                    <FaLinkedin />
                  </a>
                  <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-[#76b900] hover:text-[#9cd041]"
                >
                    <BsTwitterX  />
                  </a>    
                  <a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-[#76b900] hover:text-[#9cd041]"
                >
                    <FaInstagram />
                  </a>
                  <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-[#76b900] hover:text-[#9cd041]"
                >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
        ))}
        </div>
        <AnimatePresence>
          {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative flex w-full max-w-4xl flex-col rounded-lg bg-[#1b1b1b] p-6 shadow-lg lg:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 text-3xl text-white"
              >
                &times;
              </button>
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                width={500}
                height={500}
                className="h-80 w-full rounded-lg object-cover lg:h-[28rem] lg:w-[50rem]"
              />
              <div className="flex flex-col justify-center lg:ml-6">
                <h2 className="mt-4 text-3xl font-bold text-white lg:mt-0">
                  {selectedMember.name}
                </h2>
                <p className="mt-2 text-lg text-gray-300">{selectedMember.role}</p>
                <p className="mt-4 hidden text-sm text-gray-400 lg:flex">{selectedMember.about}</p>
                <div className="mt-6 flex space-x-4">
                  <a
                    href={selectedMember.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-[#76b900] hover:text-[#9cd041]"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={selectedMember.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-[#76b900] hover:text-[#9cd041]"
                  >
                    <BsTwitterX  />
                  </a>
                  <a
                    href={selectedMember.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-[#76b900] hover:text-[#9cd041]"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href={selectedMember.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-[#76b900] hover:text-[#9cd041]"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
        <div className="mt-12">  {/* Added this wrapper with margin-top */}
        </div>
      </div>
      <Footer /> 
    </div>
  );
};

export default TeamPage;
