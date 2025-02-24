import React, { useState, useEffect } from "react";

const MentorshipComponent = () => {
  const savedData = localStorage.getItem("mentorshipData");
  const initialData = savedData ? JSON.parse(savedData) : {
    activeMentorships: 8,
    hoursMentored: 126,
    sessions: [
      { mentee: "John D.", date: "Feb 25, 2025", time: "2:00 PM", topic: "Investment Strategy" },
      { mentee: "Lisa M.", date: "Feb 26, 2025", time: "10:00 AM", topic: "Startup Valuation" },
      { mentee: "Mark P.", date: "Feb 27, 2025", time: "4:30 PM", topic: "Market Analysis" }
    ],
    areasOfExpertise: [
      "Venture Capital", "Angel Investing", "Financial Analysis", "Due Diligence", 
      "Startup Valuation", "Market Research", "Growth Strategies", "Exit Planning"
    ]
  };

  const [mentorshipData, setMentorshipData] = useState(initialData);
  const [newSkill, setNewSkill] = useState("");

  useEffect(() => {
    localStorage.setItem("mentorshipData", JSON.stringify(mentorshipData));
  }, [mentorshipData]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMentorshipData((prev: typeof initialData) => {
        const updatedData = {
          ...prev,
          activeMentorships: prev.activeMentorships + 1,
          hoursMentored: prev.hoursMentored + 2,
        };
        localStorage.setItem("mentorshipData", JSON.stringify(updatedData));

        return updatedData;
      });
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setMentorshipData((prev: typeof initialData) => {
        const updatedData = {
          ...prev,
          areasOfExpertise: [...prev.areasOfExpertise, newSkill],
        };
        localStorage.setItem("mentorshipData", JSON.stringify(updatedData));

        return updatedData;
      });
      setNewSkill("");
    }
  };

interface Session {
    mentee: string;
    date: string;
    time: string;
    topic: string;
}

interface MentorshipData {
    activeMentorships: number;
    hoursMentored: number;
    sessions: Session[];
    areasOfExpertise: string[];
}

const handleReschedule = (mentee: string) => {
    const newDate = prompt(`Reschedule session for ${mentee}: Enter new date and time`);
    if (newDate) {
        setMentorshipData((prev: MentorshipData) => {
            const updatedData: MentorshipData = {
                ...prev,
                sessions: prev.sessions.map((session: Session) =>
                    session.mentee === mentee ? { ...session, date: newDate } : session
                ),
            };
            localStorage.setItem("mentorshipData", JSON.stringify(updatedData));

            return updatedData;
        });
    }
};

  return (
    <div>
      <h2 className="mb-8 text-3xl font-bold">Mentorship Hub</h2>
      <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-5 shadow-xl transition hover:bg-[#242424]">
          <h3 className="text-xl font-bold">Active Mentorships</h3>
          <p className="mt-3 text-4xl font-bold text-[#76b900]">{mentorshipData.activeMentorships}</p>
          <p className="mt-2 text-sm text-gray-400">Sessions happening now</p>
        </div>
        <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-5 shadow-xl transition hover:bg-[#242424]">
          <h3 className="text-xl font-bold">Hours Mentored</h3>
          <p className="mt-3 text-4xl font-bold text-[#76b900]">{mentorshipData.hoursMentored}</p>
          <p className="mt-2 text-sm text-gray-400">+2 hours from last session</p>
        </div>
        <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-5 shadow-xl transition hover:bg-[#242424]">
          <h3 className="text-xl font-bold">Average Rating</h3>
          <p className="mt-3 text-4xl font-bold text-[#76b900]">4.8/5</p>
          <p className="mt-2 text-sm text-gray-400">Based on 42 reviews</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-6 shadow-xl">
          <h3 className="mb-4 text-xl font-bold">Upcoming Sessions</h3>
          <ul className="space-y-4">
            {mentorshipData.sessions.map((session: { mentee: string; date: string; time: string; topic: string }, index: number) => (
              <li key={index} className="rounded-md border border-gray-700 bg-[#232323] p-4">
                <div className="flex justify-between">
                  <h4 className="font-bold text-[#76b900]">{session.mentee}</h4>
                  <span className="text-sm text-gray-400">{session.date} at {session.time}</span>
                </div>
                <p className="mt-2">Topic: {session.topic}</p>
                <div className="mt-3 flex justify-end space-x-2">
                  <button className="rounded-md bg-[#76b900] px-3 py-1 text-sm text-white hover:bg-[#5a8c00]">
                    Join
                  </button>
                  <button
                    className="rounded-md border border-gray-500 px-3 py-1 text-sm hover:bg-gray-700"
                    onClick={() => handleReschedule(session.mentee)}
                  >
                    Reschedule
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
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
      </div>
    </div>
  );
};

MentorshipComponent.displayName = "MentorshipComponent";

export default MentorshipComponent;
