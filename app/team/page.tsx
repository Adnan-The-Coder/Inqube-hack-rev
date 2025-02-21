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
      name: "Afzal Hashmi Syed",
      role: "Team Lead",
      image: "/assets/team/afzal.jpg",
      about:
        "Afzal Hashmi Syed is an experienced leader in the tech industry, bringing over two years of successful team leadership and project management. With a strong background in driving innovation, Afzal has led cross-functional teams to deliver large-scale projects on time and within budget. His leadership approach is centered on fostering collaboration, driving continuous improvement, and solving complex challenges. Afzal is passionate about leveraging technology to create impactful solutions and empowering teams to reach their full potential.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://x.com",
        instagram: "https://instagram.com",
        github: "https://github.com",
      },
    },
    {
      name: "Nazish Ahmed",
      role: "Full Stack Developer",
      image:
        "/assets/team/nazish.jpg",
      about:
        "Nazish Ahmed is a passionate full-stack developer with a keen focus on delivering scalable, high-performance, and user-centric web applications. With extensive experience working across both the front-end and back-end, Nazish has a deep understanding of web technologies such as JavaScript, Node.js, React, and more. His approach combines technical expertise with a strong emphasis on user experience and efficiency, ensuring seamless integration of front-end and back-end services. Nazish is dedicated to continuous learning and growth, constantly exploring new technologies to stay ahead in the fast-evolving field of web development.",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://x.com",
        instagram: "https://instagram.com",
        github: "https://github.com",
      },
    },
    {
        name: "Syed Adnan Ali",
        role: "Full Stack Developer",
        image: "/assets/team/adnan.jpg",
        about:
        "Syed Adnan Ali is a versatile full-stack developer with a strong grasp of both client-side and server-side technologies. He has experience in building end-to-end web applications, from designing interactive user interfaces to developing scalable back-end systems. His technical expertise includes JavaScript, Node.js, Express, MongoDB, and React, which allows him to deliver feature-rich, performant applications. Adnan has a passion for problem-solving and optimizing code to improve efficiency. With his holistic approach to development, he excels at creating seamless integrations between front-end and back-end systems, ensuring a smooth user experience across the entire application.",
        socials: {
            linkedin: "https://linkedin.com/in/syedadnanali99/",
            twitter: "https://x.com",
            instagram: "https://instagram.com",
            github: "https://github.com/Adnan-The-Coder",
        },
    },
    {
        name: "Aayan Sayed",
        role: "Frontend Engineer",
        image: "/assets/team/aayan.jpg",
        about:
        "Aayan Sayed is a seasoned front-end engineer with a specialization in building highly interactive, visually appealing, and user-friendly interfaces. He combines his expertise in HTML, CSS, and JavaScript with modern frameworks like React and Vue to create smooth and responsive web experiences. Aayan is passionate about crafting web applications that not only look great but are also intuitive and easy to navigate. His focus on design principles and user experience ensures that every project he works on provides seamless usability while adhering to high performance and accessibility standards.",
        socials: {
            linkedin: "https://linkedin.com",
        twitter: "https://x.com",
        instagram: "https://instagram.com",
        github: "https://github.com",
    },
},
{
  name: "Mudassir Ahmed",
  role: "ML Engineer",
  image: "/assets/team/mudassir.jpg",
  about:
    "Mudassir Ahmed is an accomplished Machine Learning Engineer with a robust background in AI model development, data science, and automation. His expertise spans across designing, implementing, and optimizing machine learning models, as well as working with big data to derive actionable insights. Mudassir is adept at using various machine learning frameworks and tools, including TensorFlow, Scikit-learn, and PyTorch, to build intelligent systems that can automate processes and enhance decision-making. With a keen interest in artificial intelligence, he continuously seeks innovative ways to leverage machine learning to drive business success and technological advancement.",
  socials: {
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    instagram: "https://instagram.com",
    github: "https://github.com",
  },
},
    {
      name: "Haseeb Rahman",
      role: "Support Specialist",
      image: "/assets/team/haseeb.jpg",
      about:
        "Haseeb Rahman is a dedicated and results-driven Support Specialist, known for providing exceptional customer service and technical support. With an in-depth understanding of the company's products and services, Haseeb excels at troubleshooting issues, guiding customers through problem-solving processes, and ensuring that users receive the best possible experience. His approach emphasizes clear communication, empathy, and efficiency, ensuring prompt resolution of customer queries and issues. Haseeb is always focused on delivering high-quality support, enhancing user satisfaction, and maintaining strong customer relationships.",
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
              className="relative flex w-full max-w-4xl flex-col rounded-lg bg-[#1b1b1b] p-6 shadow-lg md:flex-row"
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
                className="h-80 w-full rounded-lg object-cover md:h-[28rem] md:w-[50rem]"
              />
              <div className="flex flex-col justify-center md:ml-6">
                <h2 className="mt-4 text-3xl font-bold text-white md:mt-0">
                  {selectedMember.name}
                </h2>
                <p className="mt-2 text-lg text-gray-300">{selectedMember.role}</p>
                <p className="mt-4 hidden text-sm text-gray-400 md:flex">{selectedMember.about}</p>
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
