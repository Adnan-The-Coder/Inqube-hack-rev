import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const TeammatesComponent = () => {
  // Extended profiles data with more people and diverse skills
  const allProfiles = [
    {
      name: "Sarah Johnson",
      title: "Senior Developer",
      skills: ["React", "Node.js", "AWS"],
      experience: "7 years",
      availability: "Full-time",
      image: "https://images.pexels.com/photos/30836923/pexels-photo-30836923/free-photo-of-professional-woman-portrait-against-green-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Software Dev"
    },
    {
      name: "Joshua Johnson",
      title: "UI/UX Designer",
      skills: ["Figma", "Adobe XD", "User Research"],
      experience: "5 years",
      availability: "Part-time",
      image: "https://images.pexels.com/photos/16597261/pexels-photo-16597261/free-photo-of-young-freelance-photographer-holding-professional-camera-in-his-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Design"
    },
    {
      name: "Priya Patel",
      title: "Product Manager",
      skills: ["Strategy", "Roadmapping", "Analytics"],
      experience: "4 years",
      availability: "Full-time",
      image: "https://images.pexels.com/photos/30822900/pexels-photo-30822900/free-photo-of-a-thoughtful-woman-with-dramatic-lighting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Software Dev"
    },
    {
      name: "David Kim",
      title: "Marketing Specialist",
      skills: ["SEO", "Content", "Analytics"],
      experience: "6 years",
      availability: "Contract",
      image: "https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Marketing"
    },
    {
      name: "Emma Garcia",
      title: "Financial Analyst",
      skills: ["Modeling", "Forecasting", "Valuation"],
      experience: "3 years",
      availability: "Full-time",
      image: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Finance"
    },
    {
      name: "James Wilson",
      title: "Full-stack Developer",
      skills: ["Python", "React", "Docker"],
      experience: "4 years",
      availability: "Part-time",
      image: "https://images.pexels.com/photos/936090/pexels-photo-936090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Software Dev"
    },
    {
      name: "Olivia Brown",
      title: "Cybersecurity Specialist",
      skills: ["Network Security", "Ethical Hacking", "Firewalls"],
      experience: "5 years",
      availability: "Full-time",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Software Dev"
    },
    {
      name: "Liam Martinez",
      title: "Data Scientist",
      skills: ["Machine Learning", "Python", "Big Data"],
      experience: "6 years",
      availability: "Contract",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Software Dev"
    },
    // Additional team members
    {
      name: "Sophia Chen",
      title: "Backend Developer",
      skills: ["Java", "Spring Boot", "Microservices"],
      experience: "8 years",
      availability: "Full-time",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Software Dev"
    },
    {
      name: "Miguel Rodriguez",
      title: "DevOps Engineer",
      skills: ["Kubernetes", "CI/CD", "Terraform"],
      experience: "5 years",
      availability: "Contract",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Software Dev"
    },
    {
      name: "Aisha Williams",
      title: "Graphic Designer",
      skills: ["Illustration", "Photoshop", "Branding"],
      experience: "4 years",
      availability: "Part-time",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Design"
    },
    {
      name: "Benjamin Lee",
      title: "Mobile Developer",
      skills: ["Swift", "Kotlin", "Flutter"],
      experience: "6 years",
      availability: "Full-time",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Software Dev"
    },
    {
      name: "Zoe Thompson",
      title: "Content Strategist",
      skills: ["Copywriting", "SEO", "Social Media"],
      experience: "3 years",
      availability: "Contract",
      image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Marketing"
    },
    {
      name: "Raj Patel",
      title: "Blockchain Developer",
      skills: ["Solidity", "Web3", "Smart Contracts"],
      experience: "4 years",
      availability: "Part-time",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Software Dev"
    },
    {
      name: "Hannah Schmidt",
      title: "Investment Analyst",
      skills: ["Portfolio Management", "Risk Analysis", "Financial Models"],
      experience: "7 years",
      availability: "Full-time",
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Finance"
    },
    {
      name: "Kai Nakamura",
      title: "3D Artist",
      skills: ["Blender", "Maya", "Substance Painter"],
      experience: "5 years",
      availability: "Contract",
      image: "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Design"
    }
  ];

  // State for filters and search
  const [skillsFilter, setSkillsFilter] = useState("Any");
  const [experienceFilter, setExperienceFilter] = useState("Any");
  const [availabilityFilter, setAvailabilityFilter] = useState("Any");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProfiles, setFilteredProfiles] = useState(allProfiles);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Apply filters whenever filter state changes
  useEffect(() => {
    applyFilters();
  }, [skillsFilter, experienceFilter, availabilityFilter, searchTerm]);

  // Filter profiles based on selected criteria
  const applyFilters = () => {
    let results = [...allProfiles];

    // Apply skills filter
    if (skillsFilter !== "Any") {
      results = results.filter(profile => profile.category === skillsFilter);
    }

    // Apply experience filter
    if (experienceFilter !== "Any") {
      const years = parseInt(experienceFilter);
      results = results.filter(profile => {
        const profileYears = parseInt(profile.experience);
        
return profileYears >= years;
      });
    }

    // Apply availability filter
    if (availabilityFilter !== "Any") {
      results = results.filter(profile => profile.availability === availabilityFilter);
    }

    // Apply search term
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      results = results.filter(profile => 
        profile.name.toLowerCase().includes(term) ||
        profile.title.toLowerCase().includes(term) ||
        profile.skills.some(skill => skill.toLowerCase().includes(term))
      );
    }

    setFilteredProfiles(results);
  };

  // Reset all filters
  const resetFilters = () => {
    setSkillsFilter("Any");
    setExperienceFilter("Any");
    setAvailabilityFilter("Any");
    setSearchTerm("");
  };

  // Handle profile view
  interface Profile {
    name: string;
    title: string;
    skills: string[];
    experience: string;
    availability: string;
    image: string;
    category: string;
  }

  const viewProfile = (profile: Profile) => {
    setSelectedProfile(profile);
    setShowModal(true);
  };

  // Modal for detailed profile view
  const ProfileModal = () => {
    if (!selectedProfile) return null;
    
    return (
      <div className="bg-opacity/70 fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="w-full max-w-2xl rounded-lg border border-gray-600 bg-[#1b1b1b] p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-2xl font-bold">{selectedProfile.name}</h3>
            <button 
              onClick={() => setShowModal(false)}
              className="text-2xl text-gray-400 hover:text-white"
            >
              X
            </button>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="mb-4 md:mb-0 md:mr-6">
              <Image
                src={selectedProfile.image}
                alt={selectedProfile.name}
                width={150}
                height={150}
                className="rounded-lg border-2 border-[#76b900]"
              />
            </div>
            <div className="flex-1">
              <p className="mb-3 text-xl text-[#76b900]">{selectedProfile.title}</p>
              <p className="mb-2"><span className="font-bold text-gray-400">Experience:</span> {selectedProfile.experience}</p>
              <p className="mb-2"><span className="font-bold text-gray-400">Availability:</span> {selectedProfile.availability}</p>
              <p className="mb-2"><span className="font-bold text-gray-400">Category:</span> {selectedProfile.category}</p>
              <div className="mb-4">
                <p className="mb-2 font-bold text-gray-400">Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProfile.skills.map((skill, i) => (
                    <span key={i} className="rounded-full bg-[#333] px-3 py-1 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mb-4">
                <span className="font-bold text-gray-400">About:</span> {selectedProfile.name} is a talented {selectedProfile.title.toLowerCase()} with {selectedProfile.experience} of experience in the industry. They specialize in {selectedProfile.skills.join(", ")}.
              </p>
              <button className="w-full rounded-md bg-[#76b900] py-2 font-medium transition-all hover:bg-[#5a8c00]">
                Contact {selectedProfile.name.split(" ")[0]}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto">
      <h2 className="mb-8 text-3xl font-bold">Find Teammates</h2>
      <div className="mb-6 rounded-lg border border-gray-600 bg-[#1b1b1b] p-6 shadow-xl">
        <div className="mb-4">
          <label className="mb-1 block text-sm">Search by name, title or skill</label>
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="e.g. React, Designer, Sarah..."
            className="w-full rounded-md bg-[#232323] px-4 py-2"
          />
        </div>
        <div className="mb-4 flex flex-col space-y-4 lg:flex-row lg:items-end lg:space-x-4 lg:space-y-0">
          <div>
            <label className="mb-1 block text-sm">Category</label>
            <select 
              value={skillsFilter}
              onChange={(e) => setSkillsFilter(e.target.value)}
              className="w-full rounded-md bg-[#232323] px-4 py-2 lg:w-40"
            >
              <option>Any</option>
              <option>Software Dev</option>
              <option>Design</option>
              <option>Marketing</option>
              <option>Finance</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm">Experience</label>
            <select 
              value={experienceFilter}
              onChange={(e) => setExperienceFilter(e.target.value)}
              className="w-full rounded-md bg-[#232323] px-4 py-2 lg:w-40"
            >
              <option>Any</option>
              <option>1</option>
              <option>3</option>
              <option>5</option>
              <option>7</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm">Availability</label>
            <select 
              value={availabilityFilter}
              onChange={(e) => setAvailabilityFilter(e.target.value)}
              className="w-full rounded-md bg-[#232323] px-4 py-2 lg:w-40"
            >
              <option>Any</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
            </select>
          </div>
          <button 
            onClick={resetFilters}
            className="rounded-md border border-gray-600 px-6 py-2 font-medium transition-all hover:bg-[#333]"
          >
            Reset Filters
          </button>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm text-gray-400">
            Found {filteredProfiles.length} teammates matching your criteria
          </p>
        </div>
      </div>
      {filteredProfiles.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProfiles.map((profile: Profile, index: number) => (
            <div
              key={index}
              className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-6 shadow-xl transition-all hover:border-gray-700"
            >
              <div className="flex items-center">
                <Image
              src={profile.image}
              alt={profile.name}
              width={100}
              height={100}
              className="size-16 rounded-full border-2 border-[#76b900] object-cover"
            />
                <div className="ml-4">
                  <h3 className="font-bold">{profile.name}</h3>
                  <p className="text-[#76b900]">{profile.title}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="mb-2 text-sm">
                  <span className="text-gray-400">Experience:</span>{" "}
                  {profile.experience}
                </p>
                <p className="mb-2 text-sm">
                  <span className="text-gray-400">Availability:</span>{" "}
                  {profile.availability}
                </p>
                <div className="mb-4">
                  <p className="mb-1 text-sm text-gray-400">Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill: string, i: number) => (
                      <span
                key={i}
                className="rounded-full bg-[#333] px-3 py-1 text-xs"
                  >
                        {skill}
                      </span>
                ))}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="w-1/2 rounded-md bg-[#76b900] py-2 text-sm font-medium hover:bg-[#5a8c00]">
                    Contact
                  </button>
                  <button 
                onClick={() => viewProfile(profile)}
                className="w-1/2 rounded-md border border-gray-600 py-2 text-sm font-medium hover:bg-[#333]"
              >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-8 text-center">
          <p className="text-xl">No teammates match your current filters</p>
          <button 
            onClick={resetFilters}
            className="mt-4 rounded-md bg-[#76b900] px-6 py-2 font-medium transition-all hover:bg-[#5a8c00]"
          >
            Reset All Filters
          </button>
        </div>
      )}
      {showModal && <ProfileModal />}
    </div>
  );
};

export default TeammatesComponent