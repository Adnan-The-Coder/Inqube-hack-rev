import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, Clock, Users, Award, BarChart2, Link2, PlusCircle, X } from "lucide-react";

const MentorshipComponent = () => {
  // Expanded initial data
  const savedData = localStorage.getItem("mentorshipData");
  const initialData = savedData ? JSON.parse(savedData) : {
    activeMentorships: 8,
    hoursMentored: 126,
    totalMentees: 24,
    successRate: 92,
    sessions: [
      { id: "s1", mentee: "John D.", date: "Feb 25, 2025", time: "2:00 PM", topic: "Investment Strategy", notes: "Focus on angel investment portfolio diversification", status: "confirmed" },
      { id: "s2", mentee: "Lisa M.", date: "Feb 26, 2025", time: "10:00 AM", topic: "Startup Valuation", notes: "Pre-seed stage SaaS company analysis", status: "confirmed" },
      { id: "s3", mentee: "Mark P.", date: "Feb 27, 2025", time: "4:30 PM", topic: "Market Analysis", notes: "Competitive landscape for fintech solutions", status: "confirmed" },
      { id: "s4", mentee: "Sarah J.", date: "Mar 2, 2025", time: "1:15 PM", topic: "Exit Planning", notes: "Strategic acquisition preparation", status: "pending" }
    ],
    areasOfExpertise: [
      "Venture Capital", "Angel Investing", "Financial Analysis", "Due Diligence", 
      "Startup Valuation", "Market Research", "Growth Strategies", "Exit Planning"
    ],
    resources: [
      { title: "Pre-seed Valuation Guide", type: "PDF", link: "#", description: "Complete guide to valuing early-stage startups" },
      { title: "Investment Term Sheet Template", type: "Template", link: "#", description: "Standard term sheet with annotations" },
      { title: "Due Diligence Checklist", type: "Checklist", link: "#", description: "Comprehensive due diligence process" }
    ],
    blogPosts: [
      { title: "5 Red Flags in Startup Pitches", date: "Feb 15, 2025", link: "#", readTime: "7 min" },
      { title: "How to Structure Your First Angel Investment", date: "Jan 22, 2025", link: "#", readTime: "10 min" },
      { title: "Mentorship vs. Advisory: Key Differences", date: "Dec 10, 2024", link: "#", readTime: "5 min" }
    ],
    testimonials: [
      { mentee: "Alex T.", company: "FinnovateAI", text: "The guidance on our Series A preparation was invaluable. We secured 2.5x our target funding.", rating: 5 },
      { mentee: "Rachel K.", company: "SupplyChainX", text: "Helped us pivot our business model at a critical time. Now we're profitable and growing 30% MoM.", rating: 5 },
      { mentee: "David M.", company: "Startup Founder", text: "The market analysis techniques I learned saved me from a costly mistake. Great mentor!", rating: 4 }
    ]
  };

  const [mentorshipData, setMentorshipData] = useState(initialData);
  const [newSkill, setNewSkill] = useState("");
  const [activeTab, setActiveTab] = useState("upcoming");
  const [searchTerm, setSearchTerm] = useState("");
  interface Session {
    id: string;
    mentee: string;
    date: string;
    time: string;
    topic: string;
    notes: string;
    status: string;
  }
  interface Session {
    mentee: string;
    topic: string;
    // other properties of session
  }
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [newSession, setNewSession] = useState({
    mentee: "",
    date: "",
    time: "",
    topic: "",
    notes: "",
    status: "pending"
  });
  const [showAddSession, setShowAddSession] = useState(false);
  const [showResourceForm, setShowResourceForm] = useState(false);
  const [newResource, setNewResource] = useState({
    title: "",
    type: "PDF",
    link: "#",
    description: ""
  });

  // Save data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("mentorshipData", JSON.stringify(mentorshipData));
  }, [mentorshipData]);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMentorshipData((prev: typeof initialData) => {
        const updatedData = {
          ...prev,
          activeMentorships: prev.activeMentorships + Math.floor(Math.random() * 2),
          hoursMentored: prev.hoursMentored + Math.floor(Math.random() * 3),
        };
        localStorage.setItem("mentorshipData", JSON.stringify(updatedData));

        return updatedData;
      });
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  // Handle adding new skill
  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setMentorshipData((prev: typeof initialData) => {
        const updatedData = {
          ...prev,
          areasOfExpertise: [...prev.areasOfExpertise, newSkill],
        };

        return updatedData;
      });
      setNewSkill("");
    }
  };

  // Handle session rescheduling
  const handleReschedule = (sessionId: string) => {
    setSelectedSession(mentorshipData.sessions.find((session: Session) => session.id === sessionId) || null);
  };

  // Handle save session updates
  const handleSaveSession = () => {
    if (selectedSession) {
      setMentorshipData((prev: typeof initialData) => {
        const updatedData = {
          ...prev,
          sessions: prev.sessions.map((session: { id: string; mentee: string; date: string; time: string; topic: string; notes: string; status: string }) =>
            session.id === selectedSession.id ? selectedSession : session
          ),
        };

        return updatedData;
      });
      setSelectedSession(null);
    }
  };

  // Handle add new session
  const handleAddSession = () => {
    if (newSession.mentee && newSession.date && newSession.time && newSession.topic) {
      const sessionId = `s${Date.now()}`;
      setMentorshipData((prev: typeof initialData) => {
        const updatedData = {
          ...prev,
          sessions: [...prev.sessions, { ...newSession, id: sessionId }],
        };

        return updatedData;
      });
      setNewSession({
        mentee: "",
        date: "",
        time: "",
        topic: "",
        notes: "",
        status: "pending"
      });
      setShowAddSession(false);
    }
  };

  // Handle adding new resource
  const handleAddResource = () => {
    if (newResource.title && newResource.description) {
      setMentorshipData((prev: typeof initialData) => {
        const updatedData = {
          ...prev,
          resources: [...prev.resources, newResource],
        };

        return updatedData;
      });
      setNewResource({
        title: "",
        type: "PDF",
        link: "#",
        description: ""
      });
      setShowResourceForm(false);
    }
  };

  // Filter sessions based on search term
  const filteredSessions = mentorshipData.sessions.filter((session: Session) => 
    session.mentee.toLowerCase().includes(searchTerm.toLowerCase()) || 
    session.topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-auto">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Mentorship Hub</h2>
        <div className="flex space-x-4">
          <button 
            className="flex items-center space-x-2 rounded-md bg-[#76b900] px-4 py-2 text-white hover:bg-[#5a8c00]"
            onClick={() => setShowAddSession(true)}
          >
            <PlusCircle size={18} />
            <span>New Session</span>
          </button>
        </div>
      </div>
      <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-5 shadow-xl transition hover:bg-[#242424]">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-xl font-bold">Active Mentorships</h3>
            <Users size={24} className="text-[#76b900]" />
          </div>
          <p className="mt-1 text-4xl font-bold text-[#76b900]">{mentorshipData.activeMentorships}</p>
          <p className="mt-2 text-sm text-gray-400">Sessions happening now</p>
        </div>
        <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-5 shadow-xl transition hover:bg-[#242424]">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-xl font-bold">Hours Mentored</h3>
            <Clock size={24} className="text-[#76b900]" />
          </div>
          <p className="mt-1 text-4xl font-bold text-[#76b900]">{mentorshipData.hoursMentored}</p>
          <p className="mt-2 text-sm text-gray-400">+2 hours from last session</p>
        </div>
        <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-5 shadow-xl transition hover:bg-[#242424]">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-xl font-bold">Total Mentees</h3>
            <Award size={24} className="text-[#76b900]" />
          </div>
          <p className="mt-1 text-4xl font-bold text-[#76b900]">{mentorshipData.totalMentees}</p>
          <p className="mt-2 text-sm text-gray-400">Growing your network</p>
        </div>
        <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-5 shadow-xl transition hover:bg-[#242424]">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-xl font-bold">Success Rate</h3>
            <BarChart2 size={24} className="text-[#76b900]" />
          </div>
          <p className="mt-1 text-4xl font-bold text-[#76b900]">{mentorshipData.successRate}%</p>
          <p className="mt-2 text-sm text-gray-400">Positive outcome rate</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Sessions Panel - Takes up 2 columns */}
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold">Mentoring Sessions</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search sessions..." 
                  className="w-64 rounded-md border border-gray-600 bg-[#232323] px-3 py-2 focus:border-[#76b900] focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-6">
              <div className="flex border-b border-gray-700">
                <button 
                  className={`px-4 py-2 font-medium ${activeTab === 'upcoming' ? 'border-b-2 border-[#76b900] text-[#76b900]' : 'text-gray-400'}`}
                  onClick={() => setActiveTab('upcoming')}
                >
                  Upcoming
                </button>
                <button 
                  className={`px-4 py-2 font-medium ${activeTab === 'past' ? 'border-b-2 border-[#76b900] text-[#76b900]' : 'text-gray-400'}`}
                  onClick={() => setActiveTab('past')}
                >
                  Past Sessions
                </button>
                <button 
                  className={`px-4 py-2 font-medium ${activeTab === 'resources' ? 'border-b-2 border-[#76b900] text-[#76b900]' : 'text-gray-400'}`}
                  onClick={() => setActiveTab('resources')}
                >
                  Resources
                </button>
              </div>
            </div>
            {activeTab === 'upcoming' && (
            <ul className="space-y-4">
              {filteredSessions.map((session: Session, index: number) => (
                <li key={session.id || `session-${index}`} className="rounded-md border border-gray-700 bg-[#232323] p-4">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div className="mr-3 flex size-10 items-center justify-center rounded-full bg-[#2a2a2a]">
                        <span className="text-lg font-bold text-[#76b900]">
                          {session.mentee?.charAt(0) || '?'}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#76b900]">{session.mentee || 'Unknown Mentee'}</h4>
                        <p className="text-sm">Topic: {session.topic || 'Unspecified'}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar size={14} className="mr-1" />
                        <span>{session.date || 'TBD'} at {session.time || 'TBD'}</span>
                      </div>
                      <span className={`mt-1 inline-block rounded-full px-2 py-1 text-xs ${
              session.status === 'confirmed' ? 'bg-green-900 text-green-200' : 'bg-yellow-900 text-yellow-200'
            }`}>
                        {session.status ? session.status.charAt(0).toUpperCase() + session.status.slice(1) : 'Pending'}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-end space-x-2">
                    <button className="rounded-md bg-[#76b900] px-3 py-1 text-sm text-white hover:bg-[#5a8c00]">
                      Join
                    </button>
                    <button
            className="rounded-md border border-gray-500 px-3 py-1 text-sm hover:bg-gray-700"
            onClick={() => handleReschedule(session.id)}
          >
                      Manage
                    </button>
                  </div>
                </li>
    ))}
            </ul>
)}
            {activeTab === 'past' && (
              <div className="space-y-4">
                <p className="text-gray-400">Showing your past mentoring sessions.</p>
                {/* Past sessions would go here */}
                <div className="rounded-md border border-gray-700 bg-[#232323] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-300">Michael R.</h4>
                      <p className="text-sm text-gray-400">Topic: Pitch Deck Review</p>
                    </div>
                    <div className="text-sm text-gray-400">
                      Jan 15, 2025
                    </div>
                  </div>
                  <div className="mt-3 text-sm">
                    <p className="text-gray-400">Session Notes:</p>
                    <p className="text-gray-300">Reviewed initial pitch deck. Suggested improvements for market sizing slide and financial projections.</p>
                  </div>
                </div>
                <div className="rounded-md border border-gray-700 bg-[#232323] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-300">Emma T.</h4>
                      <p className="text-sm text-gray-400">Topic: Go-to-Market Strategy</p>
                    </div>
                    <div className="text-sm text-gray-400">
                      Jan 10, 2025
                    </div>
                  </div>
                  <div className="mt-3 text-sm">
                    <p className="text-gray-400">Session Notes:</p>
                    <p className="text-gray-300">Discussed channel strategy and customer segmentation. Recommended focusing on SMB segment first.</p>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'resources' && (
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="font-bold">Shared Resources</h4>
                  <button 
                    className="flex items-center text-sm text-[#76b900] hover:text-[#5a8c00]"
                    onClick={() => setShowResourceForm(true)}
                  >
                    <PlusCircle size={16} className="mr-1" />
                    Add Resource
                  </button>
                </div>
                <ul className="space-y-3">
                  {mentorshipData.resources && mentorshipData.resources.map((resource: { title: string; type: string; link: string; description: string }, index: number) => (
                    <li key={index} className="rounded-md border border-gray-700 bg-[#232323] p-4 transition-colors hover:border-[#76b900]">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-bold text-[#76b900]">{resource.title}</h4>
                          <p className="mt-1 text-sm text-gray-300">{resource.description}</p>
                        </div>
                        <div className="flex items-center">
                          <span className="mr-3 rounded-full bg-gray-700 px-2 py-1 text-xs text-gray-300">
                            {resource.type}
                          </span>
                          <button className="text-[#76b900] hover:text-[#5a8c00]">
                            <Link2 size={18} />
                          </button>
                        </div>
                      </div>
                    </li>
              ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="space-y-6">
          {/* Areas of Expertise */}
          <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-6 shadow-xl">
            <h3 className="mb-4 text-xl font-bold">Your Mentorship Areas</h3>
            <div className="flex flex-wrap gap-2">
              {mentorshipData.areasOfExpertise.map((skill: string, index: number) => (
                <span key={index} className="rounded-full bg-[#333] px-3 py-1 text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="mb-3 font-bold">Add New Area of Expertise</h4>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter skill or area"
                  className="w-full rounded-l-md border border-gray-600 bg-[#232323] px-3 py-2 focus:outline-none"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                />
                <button
                  className="rounded-r-md bg-[#76b900] px-4 text-white hover:bg-[#5a8c00]"
                  onClick={handleAddSkill}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-6 shadow-xl">
            <h3 className="mb-4 text-xl font-bold">Your Mentorship Blog</h3>
            <ul className="space-y-4">
              {mentorshipData.blogPosts && mentorshipData.blogPosts.map((post: { title: string; date: string; link: string; readTime: string }, index: number) => (
                <li key={index} className="border-b border-gray-700 pb-4 last:border-0 last:pb-0">
                  <h4 className="cursor-pointer font-bold text-[#76b900] hover:underline">{post.title}</h4>
                  <div className="mt-1 flex justify-between text-sm text-gray-400">
                    <span>{post.date}</span>
                    <span>{post.readTime} read</span>
                  </div>
                </li>
                ))}
            </ul>
            <button className="mt-4 w-full rounded-md border border-[#76b900] px-3 py-2 text-sm text-[#76b900] transition-colors hover:bg-[#76b900] hover:text-white">
              Create New Post
            </button>
          </div>
        </div>
      </div>
      {selectedSession && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="w-full max-w-lg rounded-lg border border-gray-600 bg-[#1b1b1b] p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">Manage Session</h3>
              <button 
                className="text-gray-400 hover:text-white"
                onClick={() => setSelectedSession(null)}
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Mentee</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-600 bg-[#232323] px-3 py-2 focus:outline-none"
                  value={selectedSession.mentee}
                  onChange={(e) => setSelectedSession({...selectedSession, mentee: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">Date</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-600 bg-[#232323] px-3 py-2 focus:outline-none"
                    value={selectedSession.date}
                    onChange={(e) => setSelectedSession({...selectedSession, date: e.target.value})}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Time</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-600 bg-[#232323] px-3 py-2 focus:outline-none"
                    value={selectedSession.time}
                    onChange={(e) => setSelectedSession({...selectedSession, time: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Topic</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-600 bg-[#232323] px-3 py-2 focus:outline-none"
                  value={selectedSession.topic}
                  onChange={(e) => setSelectedSession({...selectedSession, topic: e.target.value})}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Notes</label>
                <textarea
                  className="h-24 w-full resize-none rounded-md border border-gray-600 bg-[#232323] px-3 py-2 focus:outline-none"
                  value={selectedSession.notes}
                  onChange={(e) => setSelectedSession({...selectedSession, notes: e.target.value})}
                ></textarea>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Status</label>
                <select
                  className="w-full rounded-md border border-gray-600 bg-[#232323] px-3 py-2 focus:outline-none"
                  value={selectedSession.status}
                  onChange={(e) => setSelectedSession({...selectedSession, status: e.target.value})}
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="canceled">Canceled</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                className="rounded-md border border-gray-500 px-4 py-2 text-sm hover:bg-gray-700"
                onClick={() => setSelectedSession(null)}
              >
                Cancel
              </button>
              <button
                className="rounded-md bg-[#76b900] px-4 py-2 text-sm text-white hover:bg-[#5a8c00]"
                onClick={handleSaveSession}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
      {showAddSession && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="w-full max-w-lg rounded-lg border border-gray-600 bg-[#1b1b1b] p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">Add New Session</h3>
              <button 
                className="text-gray-400 hover:text-white"
                onClick={() => setShowAddSession(false)}
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Mentee Name</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-600 bg-[#232323] px-3 py-2 focus:outline-none"
                  value={newSession.mentee}
                  onChange={(e) => setNewSession({...newSession, mentee: e.target.value})}
                  placeholder="Enter mentee name"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">Date</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-600 bg-[#232323] px-3 py-2 focus:outline-none"
                    value={newSession.date}
                    onChange={(e) => setNewSession({...newSession, date: e.target.value})}
                    placeholder="e.g. Mar 5, 2025"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Time</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-600 bg-[#232323] px-3 py-2 focus:outline-none"
                    value={newSession.time}
                    onChange={(e) => setNewSession({...newSession, time: e.target.value})}
                    placeholder="e.g. 2:00 PM"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Topic</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-600 bg-[#232323] px-3 py-2 focus:outline-none"
                  value={newSession.topic}
                  onChange={(e) => setNewSession({...newSession, topic: e.target.value})}
                  placeholder="Enter session topic"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Notes</label>
                <textarea
                  className="h-24 w-full resize-none rounded-md border border-gray-600 bg-[#232323] px-3 py-2 focus:outline-none"
                  value={newSession.notes}
                  onChange={(e) => setNewSession({...newSession, notes: e.target.value})}
                  placeholder="Enter any notes or preparation details"
                ></textarea>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                className="rounded-md border border-gray-500 px-4 py-2 text-sm hover:bg-gray-700"
                onClick={() => setShowAddSession(false)}
              >
                Cancel
              </button>
              <button
                className="rounded-md bg-[#76b900] px-4 py-2 text-sm text-white hover:bg-[#5a8c00]"
                onClick={handleAddSession}
              >
                Add Session
              </button>
            </div>
          </div>
        </div>
      )}
      {showResourceForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="w-full max-w-lg rounded-lg border border-gray-600 bg-[#1b1b1b] p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">Add New Resource</h3>
              <button 
                className="text-gray-400 hover:text-white"
                onClick={() => setShowResourceForm(false)}
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Resource Title</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-600 bg-[#232323] px-3 py-2 focus:outline-none"
                  value={newResource.title}
                  onChange={(e) => setNewResource({...newResource, title: e.target.value})}
                  placeholder="Enter resource title"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Resource Type</label>
                <select
                  className="w-full rounded-md border border-gray-600 bg-[#232323] px-3 py-2 focus:outline-none"
                  value={newResource.type}
                  onChange={(e) => setNewResource({...newResource, type: e.target.value})}
                >
                  <option value="PDF">PDF</option>
                  <option value="Template">Template</option>
                  <option value="Checklist">Checklist</option>
                  <option value="Video">Video</option>
                  <option value="Guide">Guide</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Description</label>
                <textarea
                  className="h-24 w-full resize-none rounded-md border border-gray-600 bg-[#232323] px-3 py-2 focus:outline-none"
                  value={newResource.description}
                  onChange={(e) => setNewResource({...newResource, description: e.target.value})}
                  placeholder="Enter resource description"
                ></textarea>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                className="rounded-md border border-gray-500 px-4 py-2 text-sm hover:bg-gray-700"
                onClick={() => setShowResourceForm(false)}
              >
                Cancel
              </button>
              <button
                className="rounded-md bg-[#76b900] px-4 py-2 text-sm text-white hover:bg-[#5a8c00]"
                onClick={handleAddResource}
              >
                Add Resource
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="mt-10">
        <h2 className="mb-6 text-2xl font-bold">Impact Dashboard</h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-6 shadow-xl lg:col-span-2">
            <h3 className="mb-4 text-xl font-bold">Mentorship Activity</h3>
            <div className="flex h-64 items-center justify-center rounded-md bg-[#232323] p-4">
              <div className="text-center">
                <BarChart2 size={48} className="mx-auto mb-2 text-[#76b900]" />
                <p className="text-gray-400">Activity chart would display here</p>
                <p className="mt-2 text-sm text-gray-500">Shows sessions, hours, and impact over time</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="rounded-md bg-[#232323] p-4 text-center">
                <h4 className="mb-1 text-sm text-gray-400">Most Active Day</h4>
                <p className="font-bold text-white">Wednesday</p>
              </div>
              <div className="rounded-md bg-[#232323] p-4 text-center">
                <h4 className="mb-1 text-sm text-gray-400">Avg Session Length</h4>
                <p className="font-bold text-white">65 minutes</p>
              </div>
              <div className="rounded-md bg-[#232323] p-4 text-center">
                <h4 className="mb-1 text-sm text-gray-400">Growth Rate</h4>
                <p className="font-bold text-[#76b900]">+12.5%</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-6 shadow-xl">
            <h3 className="mb-4 text-xl font-bold">Mentorship Network</h3>
            <div className="space-y-4">
              <div className="rounded-md bg-[#232323] p-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Industry Breakdown</h4>
                </div>
                <div className="mt-4 space-y-2">
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Technology</span>
                      <span>45%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-600">
                      <div className="h-2 rounded-full bg-[#76b900]" style={{ width: "45%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Finance</span>
                      <span>30%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-600">
                      <div className="h-2 rounded-full bg-[#76b900]" style={{ width: "30%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Healthcare</span>
                      <span>15%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-600">
                      <div className="h-2 rounded-full bg-[#76b900]" style={{ width: "15%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Other</span>
                      <span>10%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-600">
                      <div className="h-2 rounded-full bg-[#76b900]" style={{ width: "10%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-md bg-[#232323] p-4">
                <h4 className="mb-3 font-medium">Top Mentorship Topics</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-sm">Business Strategy</span>
                    <span className="text-sm text-[#76b900]">32%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sm">Fundraising</span>
                    <span className="text-sm text-[#76b900]">28%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sm">Product Development</span>
                    <span className="text-sm text-[#76b900]">22%</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-sm">Marketing</span>
                    <span className="text-sm text-[#76b900]">18%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured Mentorship Content</h2>
          <button className="flex items-center text-sm text-[#76b900] hover:text-[#5a8c00]">
            View All Content
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg border border-gray-600 bg-[#1b1b1b] shadow-xl">
            <div className="relative h-40 bg-[#232323]">
              <Image width={500} height={500} src="https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Mentorship webinar" className="size-full object-cover" />
              <div className="absolute right-2 top-2 rounded bg-[#76b900] px-2 py-1 text-xs text-white">
                Webinar
              </div>
            </div>
            <div className="p-5">
              <h3 className="mb-2 text-lg font-bold">How to Structure Effective Mentoring Sessions</h3>
              <p className="mb-4 text-sm text-gray-400">Learn the framework used by top mentors to drive meaningful outcomes in every session.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Feb 20, 2025</span>
                <button className="text-sm text-[#76b900] hover:text-[#5a8c00]">Watch Now</button>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-gray-600 bg-[#1b1b1b] shadow-xl">
            <div className="relative h-40 bg-[#232323]">
              <Image width={500} height={500} src="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Mentorship guide" className="size-full object-cover" />
              <div className="absolute right-2 top-2 rounded bg-[#333] px-2 py-1 text-xs text-white">
                Guide
              </div>
            </div>
            <div className="p-5">
              <h3 className="mb-2 text-lg font-bold">The Ultimate Guide to Investment Due Diligence</h3>
              <p className="mb-4 text-sm text-gray-400">A comprehensive checklist and framework for evaluating startup investments.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Feb 12, 2025</span>
                <button className="text-sm text-[#76b900] hover:text-[#5a8c00]">Download</button>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-gray-600 bg-[#1b1b1b] shadow-xl">
            <div className="relative h-40 bg-[#232323]">
              <Image width={500} height={500} src="https://images.pexels.com/photos/6267023/pexels-photo-6267023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Mentorship podcast" className="size-full object-cover" />
              <div className="absolute right-2 top-2 rounded bg-[#333] px-2 py-1 text-xs text-white">
                Podcast
              </div>
            </div>
            <div className="p-5">
              <h3 className="mb-2 text-lg font-bold">Scaling Mentorship Impact: Beyond One-on-One</h3>
              <p className="mb-4 text-sm text-gray-400">Explore strategies for expanding your mentorship reach without sacrificing quality.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Jan 30, 2025</span>
                <button className="text-sm text-[#76b900] hover:text-[#5a8c00]">Listen Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4 mt-10">
        <h2 className="mb-6 text-2xl font-bold">Community Engagement</h2>
        <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-6 shadow-xl">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold">Upcoming Community Events</h3>
            <button className="rounded-md bg-[#76b900] px-4 py-2 text-sm text-white hover:bg-[#5a8c00]">
              Host an Event
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-md border border-gray-700 bg-[#232323] p-4 transition-colors hover:border-[#76b900]">
              <div className="mb-3 flex items-start justify-between">
                <h4 className="font-bold">Startup Pitch Night</h4>
                <span className="rounded-full bg-[#333] px-2 py-1 text-xs">Virtual</span>
              </div>
              <p className="mb-3 text-sm text-gray-300">Join a panel of mentors to review and provide feedback on startup pitches.</p>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Mar 10, 2025</span>
                <span>6:00 PM</span>
              </div>
              <button className="mt-4 w-full rounded-md border border-[#76b900] bg-transparent py-1 text-sm text-[#76b900] transition-colors hover:bg-[#76b900] hover:text-white">
                RSVP Now
              </button>
            </div>
            <div className="rounded-md border border-gray-700 bg-[#232323] p-4 transition-colors hover:border-[#76b900]">
              <div className="mb-3 flex items-start justify-between">
                <h4 className="font-bold">Mentor Roundtable</h4>
                <span className="rounded-full bg-[#333] px-2 py-1 text-xs">In-person</span>
              </div>
              <p className="mb-3 text-sm text-gray-300">Connect with other mentors to share experiences and best practices.</p>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Mar 15, 2025</span>
                <span>5:30 PM</span>
              </div>
              <button className="mt-4 w-full rounded-md border border-[#76b900] bg-transparent py-1 text-sm text-[#76b900] transition-colors hover:bg-[#76b900] hover:text-white">
                RSVP Now
              </button>
            </div>
            <div className="rounded-md border border-gray-700 bg-[#232323] p-4 transition-colors hover:border-[#76b900]">
              <div className="mb-3 flex items-start justify-between">
                <h4 className="font-bold">Mentor Training Workshop</h4>
                <span className="rounded-full bg-[#333] px-2 py-1 text-xs">Virtual</span>
              </div>
              <p className="mb-3 text-sm text-gray-300">Learn advanced techniques for effective mentorship in the digital age.</p>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Mar 20, 2025</span>
                <span>12:00 PM</span>
              </div>
              <button className="mt-4 w-full rounded-md border border-[#76b900] bg-transparent py-1 text-sm text-[#76b900] transition-colors hover:bg-[#76b900] hover:text-white">
                RSVP Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MentorshipComponent.displayName = "MentorshipComponent";

export default MentorshipComponent;