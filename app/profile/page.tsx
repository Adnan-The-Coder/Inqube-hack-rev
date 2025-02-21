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

const getRandomAbout = () => {
  const aboutOptions = [
    "A creative problem-solver with a passion for leadership, collaboration, and innovation. Skilled in organizing events, effective communication, and building meaningful connections.",
    "A strategic thinker with expertise in digital transformation and product development. Passionate about using technology to solve real-world problems and create positive social impact.",
    "An analytical mind with a creative approach to business challenges. Experienced in market research, consumer behavior analysis, and developing data-driven marketing strategies.",
    "A versatile professional combining technical expertise with business acumen. Passionate about sustainable innovation and creating solutions that balance profit with purpose.",
    "A dynamic professional with a background in both technology and design. Skilled at bridging the gap between technical requirements and user experience to create intuitive products."
  ];
  return aboutOptions[Math.floor(Math.random() * aboutOptions.length)];
};

const getRandomProjects = () => {
  const projectOptions = [
    {
      title: "Note Sync",
      description: "Developing a note-making website using ReactJS. Contributing to the development of a Stealth Project involving mobile app development.",
      year: "2023"
    },
    {
      title: "Know Money",
      description: "Developed a UPI app with innovative features to help users save money, track spending, and effectively reduce expenses through smart financial insights.",
      year: "2023"
    },
    {
      title: "EcoTrack",
      description: "Built a carbon footprint tracking application that helps users monitor and reduce their environmental impact through personalized recommendations.",
      year: "2022"
    },
    {
      title: "MindSpace",
      description: "Created a meditation and mindfulness platform with guided sessions and progress tracking to improve mental health and reduce stress.",
      year: "2024"
    },
    {
      title: "TechLearn",
      description: "Developed an interactive learning platform focused on teaching programming skills through hands-on projects and real-time feedback.",
      year: "2023"
    }
  ];
  const shuffled = [...projectOptions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 2);
};

const getRandomAchievements = () => {
  const achievementOptions = [
    {
      title: "Speaker at International Design Summit",
      year: "2023",
      description: "Presented a talk on the evolution of design thinking and its role in shaping modern technology and user experiences."
    },
    {
      title: "Creator of Award-Winning User Interface",
      year: "2022",
      description: "Designed an award-winning user interface for a mobile app that improved user engagement by 40%."
    },
    {
      title: "Lead Design at ECELL MJCET",
      year: "2021",
      description: "Founded and led the Design Club at MJCET, organizing workshops, design challenges, and collaborations with industry professionals."
    },
    {
      title: "Winner of National Hackathon",
      year: "2023",
      description: "Led a team that won first place in a national hackathon by developing a sustainable energy monitoring solution."
    },
    {
      title: "Published Research Paper",
      year: "2022",
      description: "Co-authored a research paper on machine learning applications in healthcare that was published in a leading journal."
    },
    {
      title: "Community Service Award",
      year: "2024",
      description: "Recognized for developing a free coding education program for underprivileged students, reaching over 500 participants."
    }
  ];
  const shuffled = [...achievementOptions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
};

const getRandomTestimonials = () => {
  const nameOptions = ["Syed Shujauddin", "Abid Nafi", "Mohammed Irfan", "Sara Johnson", "Priya Patel", "David Chen", "Anika Gupta"];
  const roleOptions = ["CEO, Halcyon", "CTO, E-Cell MJCET", "Product Manager, TechStart", "Design Director, CreativeHub", "VP Engineering, InnovateTech"];
  const messageOptions = [
    "An exceptional leader who brings fresh ideas and executes them flawlessly. It's always a pleasure working with them.",
    "Their technical expertise and collaborative approach make them an asset to any team. Highly recommended!",
    "I've worked with them on several projects, and their dedication and attention to detail are unmatched. A true professional.",
    "Brings unique perspectives to every project and consistently delivers beyond expectations. A brilliant collaborator!",
    "Their ability to bridge technical and creative aspects of projects is remarkable. One of the most versatile professionals I've worked with.",
    "Shows exceptional problem-solving skills and maintains a positive attitude even under pressure. A joy to work with!",
    "Demonstrates both creativity and analytical thinking in equal measure. Their solutions are always innovative yet practical."
  ];
  const testimonials = [];
  for (let i = 0; i < 3; i++) {
    const randomName = nameOptions[Math.floor(Math.random() * nameOptions.length)];
    const randomRole = roleOptions[Math.floor(Math.random() * roleOptions.length)];
    const randomMessage = messageOptions[Math.floor(Math.random() * messageOptions.length)];
    
    testimonials.push({
      name: randomName,
      role: randomRole,
      message: randomMessage
    });
    nameOptions.splice(nameOptions.indexOf(randomName), 1);
    messageOptions.splice(messageOptions.indexOf(randomMessage), 1);
  }
  
  return testimonials;
};

const getRandomSkills = () => {
  const skillOptions = [
    "Designing", "Leadership", "Event Management", "Public Speaking", "Research", "Photoshop",
    "Web Development", "UI/UX Design", "Data Analysis", "Project Management", "Digital Marketing",
    "Content Strategy", "Mobile App Design", "Blockchain", "AI/ML", "JavaScript", "React", "Python",
    "Video Editing", "Brand Strategy", "Social Media", "SEO Optimization", "3D Modeling", "Animation"
  ];
  const shuffled = [...skillOptions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 6);
};

const getRandomCertifications = () => {
  const certOptions = [
    {
      title: "Adobe Certified Expert",
      issuer: "Adobe",
      year: "2024"
    },
    {
      title: "Certified UX Designer",
      issuer: "Interaction Design Foundation",
      year: "2023"
    },
    {
      title: "UI/UX Design Professional",
      issuer: "Coursera",
      year: "2022"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      title: "Google Analytics Certification",
      issuer: "Google",
      year: "2022"
    },
    {
      title: "Professional Scrum Master",
      issuer: "Scrum.org",
      year: "2023"
    },
    {
      title: "Certified Blockchain Developer",
      issuer: "Blockchain Council",
      year: "2024"
    },
    {
      title: "Data Science Professional",
      issuer: "IBM",
      year: "2023"
    }
  ];
  const shuffled = [...certOptions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
};

const getRandomUserType = () => {
  const types = ["Investor", "Developer", "Designer", "Product Manager", "Entrepreneur", "Consultant", "Marketing Specialist"];
  return types[Math.floor(Math.random() * types.length)];
};

export default function ProfilePage() {
  return <ProfileContent />;
}

function ProfileContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user } = useUser();
  interface Project {
    title: string;
    description: string;
    year: string;
  }

  interface Achievement {
    title: string;
    year: string;
    description: string;
  }

  interface Testimonial {
    name: string;
    role: string;
    message: string;
  }

  interface Certification {
    title: string;
    issuer: string;
    year: string;
  }

  interface RandomData {
    userType: string;
    about: string;
    projects: Project[];
    achievements: Achievement[];
    testimonials: Testimonial[];
    skills: string[];
    certifications: Certification[];
  }

  const [randomData, setRandomData] = useState<RandomData>({
    userType: "",
    about: "",
    projects: [],
    achievements: [],
    testimonials: [],
    skills: [],
    certifications: []
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (user) {
      const seed = user.uid || user.email || "";
      setRandomData({
        userType: getRandomUserType(),
        about: getRandomAbout(),
        projects: getRandomProjects(),
        achievements: getRandomAchievements(),
        testimonials: getRandomTestimonials(),
        skills: getRandomSkills(),
        certifications: getRandomCertifications()
      });
    }
  }, [user]);

  const profileImage = user?.photoURL ? user.photoURL.replace("s96-c", "s400-c") : defaultpic;
  
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
              {randomData.userType}
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
              {randomData.about}
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
            {randomData.projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                year={project.year}
              />
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#76b900]">
            Achievements
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {randomData.achievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                title={achievement.title}
                year={achievement.year}
                description={achievement.description}
              />
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#76b900]">
            Testimonials
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {randomData.testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                message={testimonial.message}
              />
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#76b900]">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 animate-slideUp">
            {randomData.skills.map((skill, index) => (
              <Skill key={index} text={skill} />
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#76b900]">
            Certifications
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {randomData.certifications.map((cert, index) => (
              <CertificationCard
                key={index}
                title={cert.title}
                issuer={cert.issuer}
                year={cert.year}
              />
            ))}
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