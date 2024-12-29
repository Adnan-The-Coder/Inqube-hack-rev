"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub  } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Header from "@/components/Header";
import mudassir from "@/app/team/mudassir.jpg";
import aayan from "@/app/team/aayan.jpg";
import afzal from "@/app/team/afzal.jpg"
import usaid from "@/app/team/usaid.jpg";
import adnan from "@/app/team/adnan.jpg";
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
      image: afzal,
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
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
        image: adnan,
        about:
        "Syed Adnan Ali is a versatile full-stack developer with a strong grasp of both client-side and server-side technologies. He has experience in building end-to-end web applications, from designing interactive user interfaces to developing scalable back-end systems. His technical expertise includes JavaScript, Node.js, Express, MongoDB, and React, which allows him to deliver feature-rich, performant applications. Adnan has a passion for problem-solving and optimizing code to improve efficiency. With his holistic approach to development, he excels at creating seamless integrations between front-end and back-end systems, ensuring a smooth user experience across the entire application.",
        socials: {
            linkedin: "https://linkedin.com",
            twitter: "https://x.com",
            instagram: "https://instagram.com",
            github: "https://github.com",
        },
    },
    {
        name: "Aayan Sayed",
        role: "Frontend Engineer",
        image: aayan,
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
  image: mudassir,
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
      name: "Syed Usaid Minhaj",
      role: "Support Specialist",
      image: usaid,
      about:
        "Syed Usaid Minhaj is a dedicated and results-driven Support Specialist, known for providing exceptional customer service and technical support. With an in-depth understanding of the company's products and services, Usaid excels at troubleshooting issues, guiding customers through problem-solving processes, and ensuring that users receive the best possible experience. His approach emphasizes clear communication, empathy, and efficiency, ensuring prompt resolution of customer queries and issues. Syed Usaid Minhaj is always focused on delivering high-quality support, enhancing user satisfaction, and maintaining strong customer relationships.",
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
    <div className="bg-[#0a0a0a] min-h-screen py-20 px-6 relative">
      <Header />
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        Meet Our Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedMember(member)}
            className="group relative bg-[#1B1B1B] rounded-lg shadow-lg overflow-hidden cursor-pointer flex flex-col"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={500}
              height={500}
              className="w-full h-80 object-cover group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold text-white">{member.name}</h2>
              <p className="text-sm text-gray-400 mt-2">{member.role}</p>
              <div className="flex space-x-4 justify-center mt-4">
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#76b900] hover:text-[#76b900] text-2xl"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#76b900] hover:text-[#9cd041] text-2xl"
                >
                  <BsTwitterX  />
                </a>    
                <a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#76b900] hover:text-[#9cd041] text-2xl"
                >
                  <FaInstagram />
                </a>
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#76b900] hover:text-[#9cd041] text-2xl"
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
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative bg-[#1b1b1b] rounded-lg shadow-lg max-w-4xl w-full p-6 flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-3xl"
              >
                &times;
              </button>
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                width={500}
                height={500}
                className="w-full md:w-[50rem] h-[20rem] md:h-[28rem] object-cover rounded-lg"
              />
              <div className="md:ml-6 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mt-4 md:mt-0">
                  {selectedMember.name}
                </h2>
                <p className="text-lg text-gray-300 mt-2">{selectedMember.role}</p>
                <p className="text-gray-400 hidden md:flex mt-4 text-sm">{selectedMember.about}</p>
                <div className="flex space-x-4 mt-6">
                  <a
                    href={selectedMember.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#76b900] hover:text-[#9cd041] text-2xl"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={selectedMember.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#76b900] hover:text-[#9cd041] text-2xl"
                  >
                    <BsTwitterX  />
                  </a>
                  <a
                    href={selectedMember.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#76b900] hover:text-[#9cd041] text-2xl"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href={selectedMember.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#76b900] hover:text-[#9cd041] text-2xl"
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
