/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client";

import React, { useState, useEffect } from "react";
import { Github, Linkedin, Instagram, Mail , ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import Footer from "@/components/Footer";
import defaultpic from "@/app/team/defaultpic.jpg";
import Header, { useUser } from "@/components/Header";
import profileBanner from "@/app/team/profile-banner.webp";

const seedRandom = (seed: string): number => {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; 
  }
  
return Math.abs(hash) / 2147483647;
};
const getSeededItem = (array: any[], seed: string) => {
  const index = Math.floor(seedRandom(seed) * array.length);
  
return array[index];
};

const getSeededItems = (array: any[], seed: string, count: number) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const r = Math.floor(seedRandom(seed + i) * (i + 1));
    [shuffled[i], shuffled[r]] = [shuffled[r], shuffled[i]];
  }
  
  return shuffled.slice(0, count);
};

const getUserSpecificData = (seed: string) => {
  // About options
  const aboutOptions = [
    "A creative problem-solver with a passion for leadership, collaboration, and innovation. Skilled in organizing events, effective communication, and building meaningful connections.",
    "A strategic thinker with expertise in digital transformation and product development. Passionate about using technology to solve real-world problems and create positive social impact.",
    "An analytical mind with a creative approach to business challenges. Experienced in market research, consumer behavior analysis, and developing data-driven marketing strategies.",
    "A versatile professional combining technical expertise with business acumen. Passionate about sustainable innovation and creating solutions that balance profit with purpose.",
    "A dynamic professional with a background in both technology and design. Skilled at bridging the gap between technical requirements and user experience to create intuitive products."
  ];
  // Project options
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
  // Achievement options
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

  interface Testimonial {
    name: string;
    role: string;
    message: string;
  }

  const generateTestimonials = (seed: string): Testimonial[] => {
    const nameOptions: string[] = ["Syed Shujauddin", "Abid Nafi", "Mohammed Irfan", "Sara Johnson", "Priya Patel", "David Chen", "Anika Gupta"];
    const roleOptions: string[] = ["CEO, Halcyon", "CTO, E-Cell MJCET", "Product Manager, TechStart", "Design Director, CreativeHub", "VP Engineering, InnovateTech"];
    const messageOptions: string[] = [
      "An exceptional leader who brings fresh ideas and executes them flawlessly. It's always a pleasure working with them.",
      "Their technical expertise and collaborative approach make them an asset to any team. Highly recommended!",
      "I've worked with them on several projects, and their dedication and attention to detail are unmatched. A true professional.",
      "Brings unique perspectives to every project and consistently delivers beyond expectations. A brilliant collaborator!",
      "Their ability to bridge technical and creative aspects of projects is remarkable. One of the most versatile professionals I've worked with.",
      "Shows exceptional problem-solving skills and maintains a positive attitude even under pressure. A joy to work with!",
      "Demonstrates both creativity and analytical thinking in equal measure. Their solutions are always innovative yet practical."
    ];
    
    const testimonials: Testimonial[] = [];
    for (let i = 0; i < 3; i++) {
      const nameSeed = seed + "name" + i;
      const roleSeed = seed + "role" + i;
      const messageSeed = seed + "message" + i;
      
      const randomName = getSeededItem(nameOptions, nameSeed);
      const randomRole = getSeededItem(roleOptions, roleSeed);
      const randomMessage = getSeededItem(messageOptions, messageSeed);
      
      testimonials.push({
        name: randomName,
        role: randomRole,
        message: randomMessage
      });
    }
    
    return testimonials;
  };

  // Skill options
  const skillOptions = [
    "Designing", "Leadership", "Event Management", "Public Speaking", "Research", "Photoshop",
    "Web Development", "UI/UX Design", "Data Analysis", "Project Management", "Digital Marketing",
    "Content Strategy", "Mobile App Design", "Blockchain", "AI/ML", "JavaScript", "React", "Python",
    "Video Editing", "Brand Strategy", "Social Media", "SEO Optimization", "3D Modeling", "Animation"
  ];

  // Certification options
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

  // User type options
  const userTypeOptions = ["Investor", "Developer", "Product Manager", "Entrepreneur", "Consultant", "Marketing Specialist"];

  return {
    userType: getSeededItem(userTypeOptions, seed + "type"),
    about: getSeededItem(aboutOptions, seed + "about"),
    projects: getSeededItems(projectOptions, seed + "projects", 2),
    achievements: getSeededItems(achievementOptions, seed + "achievements", 3),
    testimonials: generateTestimonials(seed),
    skills: getSeededItems(skillOptions, seed + "skills", 6),
    certifications: getSeededItems(certOptions, seed + "certifications", 3)
  };
};

export default function ProfilePage() {
  return <ProfileContent />;
}

function ProfileContent() {
  // eslint-disable-next-line no-unused-vars
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isScrolled, setIsScrolled] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user } = useUser();
  // eslint-disable-next-line no-unused-vars
  const router = useRouter();
  
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

  interface UserData {
    userType: string;
    about: string;
    projects: Project[];
    achievements: Achievement[];
    testimonials: Testimonial[];
    skills: string[];
    certifications: Certification[];
  }

  const [userData, setUserData] = useState<UserData>({
    userType: "",
    about: "",
    projects: [],
    achievements: [],
    testimonials: [],
    skills: [],
    certifications: []
  });

  useEffect(() => {
    if (!user) {
      const redirectTimer = setTimeout(() => {
        handleGoogleLogin();
      }, 500);
      
      return () => clearTimeout(redirectTimer);
    }
  }, [user]);

  const handleGoogleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    
return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    if (user) {
      const uniqueSeed = user.uid || user.email || "";
      const data = getUserSpecificData(uniqueSeed);
      setUserData(data);
    }
  }, [user]);
  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] text-white">
        <div className="text-center">
          <h2 className="mb-4 text-xl">Redirecting to login...</h2>
          <div className="mx-auto size-12 animate-spin rounded-full border-4 border-gray-700 border-t-[#76b900]"></div>
        </div>
      </div>
    );
  }

  const profileImage = user?.photoURL ? user.photoURL.replace("s96-c", "s400-c") : defaultpic;
  
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />
      <main className="container mx-auto px-6 pb-12 pt-32">
        <section className="mb-16 grid gap-12 md:grid-cols-2">
          <div className="animate-fadeIn relative flex flex-col items-center">
            <div className="absolute left-0 top-0 h-48 w-full overflow-hidden rounded-t-lg">
              <Image
                src={profileBanner}
                alt="Profile Banner"
                className="size-full object-cover"
              />
            </div>
            <div className="border-gradient-to-r z-10 size-48 rounded-full border-4 from-[#76b900] to-[#34b7b3] p-1 shadow-lg">
              <Image
                src={profileImage}
                alt="Profile"
                width={192}
                height={192}
                quality={100} 
                className="size-full rounded-full object-cover"
              />
            </div>
            <h1 className="mb-2 mt-6 text-4xl font-bold text-[#76b900]">
              {user?.displayName || "Default"}
            </h1>
            <span className="mt-2 rounded-full bg-[#76b900] px-6 py-2 text-sm font-medium text-black">
              {userData.userType}
            </span>
            <div className="animate-slideIn mt-4 flex space-x-6">
              <SocialLink Icon={Github} href="https://github.com" />
              <SocialLink Icon={Linkedin} href="https://www.linkedin.com/" />
              <SocialLink Icon={Instagram} href="https://www.instagram.com/" />
            </div>
          </div>
          <div className="rounded-xl bg-[#111111] p-6 shadow-xl transition-all hover:shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold text-[#76b900]">About</h2>
            <p className="leading-relaxed text-gray-300">
              {userData.about}
            </p>
            {user && (
              <div className="mt-4 rounded-lg bg-[#1a1a1a] p-4">
                <h3 className="mb-2 text-xl font-semibold text-[#76b900]">
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
          <h2 className="mb-6 text-2xl font-bold">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {userData.projects.map((project, index) => (
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
          <h2 className="mb-6 text-3xl font-bold text-[#76b900]">
            Achievements
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {userData.achievements.map((achievement, index) => (
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
          <h2 className="mb-6 text-3xl font-bold text-[#76b900]">
            Testimonials
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {userData.testimonials.map((testimonial, index) => (
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
          <h2 className="mb-6 text-3xl font-bold text-[#76b900]">Skills</h2>
          <div className="animate-slideUp grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {userData.skills.map((skill, index) => (
              <Skill key={index} text={skill} />
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-[#76b900]">
            Certifications
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {userData.certifications.map((cert, index) => (
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
          <h2 className="mb-6 text-3xl font-bold text-[#76b900]">
            Contact Information
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-[#111111] p-6">
              <h3 className="text-xl font-bold text-white">Email</h3>
              <p className="mb-4 mt-2 text-gray-300">
                {user?.email || "example@gmail.com"}
              </p>
              <Link
                href={`mailto:${user?.email || "example@gmail.com"}`}
                className="mt-4 rounded-full bg-[#76b900] px-6 py-2 font-medium text-black transition-all hover:bg-opacity-90"
              >
                Send Email
              </Link>
            </div>
            <div className="rounded-xl bg-[#111111] p-6">
              <h3 className="text-xl font-bold text-white">Phone</h3>
              <p className="mb-5 mt-2 text-gray-300">+917396211824</p>
              <Link
                href="tel:+917396211824"
                className="mt-4 rounded-full bg-[#76b900] px-6 py-2 font-medium text-black transition-all hover:bg-opacity-90"
              >
                Call
              </Link>
            </div>
          </div>
        </section>
        <section className="mb-12 text-center">
          <button className="mx-auto flex items-center rounded-full bg-[#76b900] px-10 py-4 font-medium text-black transition-colors hover:bg-opacity-90">
            <Mail className="mr-2 size-5" />
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
    className="text-gray-300 transition-colors hover:scale-95 hover:text-[#76b900]"
  >
    <Icon className="size-6" />
  </a>
);

interface TestimonialCardProps {
  name: string;
  role: string;
  message: string;
}

const TestimonialCard = ({ name, role, message }: TestimonialCardProps) => (
  <div className="rounded-xl bg-[#111111] p-6 shadow-lg transition-all hover:shadow-2xl">
    <p className="text-lg italic text-gray-300">"{message}"</p>
    <p className="mt-4 font-semibold text-[#76b900]">{name}</p>
    <p className="text-sm text-gray-400">{role}</p>
  </div>
);

interface AchievementCardProps {
  title: string;
  year: string;
  description: string;
}

const AchievementCard = ({ title, year, description }: AchievementCardProps) => (
  <div className="rounded-xl bg-[#111111] p-6 shadow-lg transition-all hover:shadow-2xl">
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="mt-2 text-gray-300">{year}</p>
    <p className="mt-2 text-gray-400">{description}</p>
  </div>
);

interface SkillProps {
  text: string;
}

const Skill = ({ text }: SkillProps) => (
  <span className="rounded-full border-2 border-transparent bg-[#111111] px-6 py-3 text-sm font-medium transition-all hover:border-[#76b900] hover:text-[#76b900]">
    {text}
  </span>
);

interface CertificationCardProps {
  title: string;
  issuer: string;
  year: string;
}

const CertificationCard = ({ title, issuer, year }: CertificationCardProps) => (
  <div className="rounded-xl bg-[#111111] p-6 transition-all hover:bg-[#1A1A1A]">
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-sm text-gray-400">{issuer}</p>
    <p className="mt-2 text-gray-300">{year}</p>
  </div>
);

interface ProjectCardProps {
  title: string;
  description: string;
  year: string;
}

const ProjectCard = ({ title, description, year }: ProjectCardProps) => (
  <div className="rounded-xl bg-[#111111] p-6 hover:bg-[#1A1A1A]">
    <div className="mb-4 flex items-start justify-between">
      <h3 className="text-xl font-bold">{title}</h3>
      <span className="text-sm text-gray-400">{year}</span>
    </div>
    <p className="mb-4 text-gray-300">{description}</p>
    <div className="flex space-x-4">
      <button className="flex items-center text-sm text-[#76b900] hover:underline">
        <ExternalLink className="mr-1 size-4" />
        Live Demo
      </button>
      <button className="flex items-center text-sm text-[#76b900] hover:underline">
        <Github className="mr-1 size-4" />
        View Code
      </button>
    </div>
  </div>
);