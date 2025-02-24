import React, { useState, useEffect } from 'react';

const CommunityComponent = () => {
  const [category, setCategory] = useState('All Categories');
  const [forumStats, setForumStats] = useState({ posts: 32, messages: 7, events: 4 });
  const [discussions] = useState([
    { title: "Market trends in AI startups", author: "Tech Investor", replies: 15, views: 124, time: "2 hours ago", category: "Technology" },
    { title: "Due diligence checklist for SaaS", author: "VC Associate", replies: 27, views: 203, time: "Yesterday", category: "Investing" },
    { title: "Valuation methods comparison", author: "Financial Analyst", replies: 8, views: 97, time: "2 days ago", category: "Startups" },
    { title: "Term sheet negotiation tips", author: "Angel Investor", replies: 19, views: 156, time: "3 days ago", category: "Investing" },
  ]);
  const [events, setEvents] = useState([
    { name: "Investment Summit", date: "March 5, 2025", attendees: 42 },
    { name: "Startup Pitch Day", date: "March 12, 2025", attendees: 28 },
    { name: "Networking Mixer", date: "March 18, 2025", attendees: 35 },
    { name: "Tech Trends Webinar", date: "March 25, 2025", attendees: 67 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setForumStats((prev) => ({
        posts: prev.posts + Math.floor(Math.random() * 3),
        messages: prev.messages + Math.floor(Math.random() * 2),
        events: prev.events
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

interface Event {
    name: string;
    date: string;
    attendees: number;
}

const handleRSVP = (index: number): void => {
    setEvents((prevEvents: Event[]) => {
        const updatedEvents = [...prevEvents];
        updatedEvents[index].attendees += 1;
        
        return updatedEvents;
    });
};

  return (
    <div>
      <h2 className="mb-8 text-3xl font-bold">Community Hub</h2>
      <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {[
          { label: "Forum Activity", value: forumStats.posts, description: "New posts this week" },
          { label: "Direct Messages", value: forumStats.messages, description: "Unread messages" },
          { label: "Upcoming Events", value: forumStats.events, description: "Events this month" },
        ].map((stat, index) => (
          <div key={index} className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-5 shadow-xl">
            <h3 className="text-xl font-bold">{stat.label}</h3>
            <p className="mt-3 text-4xl font-bold text-[#76b900]">{stat.value}</p>
            <p className="mt-2 text-sm text-gray-400">{stat.description}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">Latest Discussions</h3>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-md bg-[#232323] px-3 py-1 text-sm">
                <option>All Categories</option>
                <option>Investing</option>
                <option>Startups</option>
                <option>Technology</option>
              </select>
            </div>
            <ul className="space-y-4">
              {discussions.filter(d => category === "All Categories" || d.category === category).map((post, index) => (
                <li key={index} className="rounded-md border border-gray-700 bg-[#232323] p-4">
                  <h4 className="text-lg font-bold text-[#76b900]">{post.title}</h4>
                  <div className="mt-2 flex justify-between text-sm">
                    <span>Posted by: {post.author}</span>
                    <span className="text-gray-400">{post.time}</span>
                  </div>
                  <div className="mt-3 flex text-sm text-gray-400">
                    <span className="mr-4">{post.replies} replies</span>
                    <span>{post.views} views</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-6 shadow-xl">
            <h3 className="mb-4 text-xl font-bold">Upcoming Events</h3>
            <ul className="space-y-4">
              {events.map((event, index) => (
                <li key={index} className="rounded-md border border-gray-700 bg-[#232323] p-3">
                  <div className="flex justify-between">
                    <h4 className="font-bold">{event.name}</h4>
                    <span className="text-xs text-[#76b900]">{event.attendees} going</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-400">{event.date}</p>
                  <button onClick={() => handleRSVP(index)} className="mt-2 w-full rounded-sm bg-[#333] py-1 text-sm hover:bg-[#444]">RSVP</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityComponent;