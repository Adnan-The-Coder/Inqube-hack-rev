import React, { useState, useEffect, useCallback } from 'react';

interface ForumStats {
  posts: number;
  messages: number;
  events: number;
  members: number;
}

interface Discussion {
  id: string;
  title: string;
  author: string;
  authorAvatar: string;
  replies: number;
  views: number;
  time: string;
  category: string;
  isPinned: boolean;
  isHot: boolean;
}

interface Event {
  id: string;
  name: string;
  date: string;
  attendees: number;
  location: string;
  description: string;
  isRSVPed: boolean;
}

interface Member {
  id: string;
  name: string;
  avatar: string;
  role: string;
  joinDate: string;
  status: 'online' | 'offline' | 'away';
  lastActive: string;
}

const CommunityComponent = () => {
  // States
  const [category, setCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('discussions');
  const [showNotifications, setShowNotifications] = useState(false);
  const [forumStats, setForumStats] = useState<ForumStats>({ 
    posts: 32, 
    messages: 7, 
    events: 4,
    members: 245
  });
  
  const [discussions, setDiscussions] = useState<Discussion[]>([
    { id: '1', title: "Market trends in AI startups", author: "Tech Investor", authorAvatar: "TI", replies: 15, views: 124, time: "2 hours ago", category: "Technology", isPinned: true, isHot: true },
    { id: '2', title: "Due diligence checklist for SaaS", author: "VC Associate", authorAvatar: "VA", replies: 27, views: 203, time: "Yesterday", category: "Investing", isPinned: false, isHot: true },
    { id: '3', title: "Valuation methods comparison", author: "Financial Analyst", authorAvatar: "FA", replies: 8, views: 97, time: "2 days ago", category: "Startups", isPinned: false, isHot: false },
    { id: '4', title: "Term sheet negotiation tips", author: "Angel Investor", authorAvatar: "AI", replies: 19, views: 156, time: "3 days ago", category: "Investing", isPinned: false, isHot: false },
    { id: '5', title: "Creating a pitch deck that works", author: "Startup Mentor", authorAvatar: "SM", replies: 23, views: 189, time: "4 days ago", category: "Startups", isPinned: false, isHot: true },
    { id: '6', title: "Equity distribution best practices", author: "Founder Coach", authorAvatar: "FC", replies: 31, views: 242, time: "5 days ago", category: "Startups", isPinned: false, isHot: false },
  ]);
  
  const [events, setEvents] = useState<Event[]>([
    { id: 'e1', name: "Investment Summit", date: "March 5, 2025", attendees: 42, location: "Virtual", description: "Learn from top investors about current market trends", isRSVPed: false },
    { id: 'e2', name: "Startup Pitch Day", date: "March 12, 2025", attendees: 28, location: "San Francisco", description: "10 startups will pitch to a panel of investors", isRSVPed: false },
    { id: 'e3', name: "Networking Mixer", date: "March 18, 2025", attendees: 35, location: "New York", description: "Connect with founders and investors in a casual setting", isRSVPed: false },
    { id: 'e4', name: "Tech Trends Webinar", date: "March 25, 2025", attendees: 67, location: "Virtual", description: "Industry experts discuss emerging technologies", isRSVPed: false },
  ]);
  
  const [notifications, setNotifications] = useState([
    { id: 'n1', text: "Tech Investor replied to your comment", time: "5 minutes ago", read: false },
    { id: 'n2', text: "New event: AI Ethics Panel Discussion", time: "2 hours ago", read: false },
    { id: 'n3', text: "Your post was featured in the weekly digest", time: "Yesterday", read: true },
  ]);
  
  const [members] = useState<Member[]>([
    { id: 'm1', name: "Jane Smith", avatar: "JS", role: "Investor", joinDate: "Jan 2025", status: "online", lastActive: "Now" },
    { id: 'm2', name: "Michael Chen", avatar: "MC", role: "Founder", joinDate: "Dec 2024", status: "online", lastActive: "Now" },
    { id: 'm3', name: "Sarah Johnson", avatar: "SJ", role: "Mentor", joinDate: "Feb 2025", status: "away", lastActive: "15 min ago" },
    { id: 'm4', name: "David Kim", avatar: "DK", role: "Analyst", joinDate: "Nov 2024", status: "offline", lastActive: "3 hours ago" },
  ]);
  
  // Effects
  useEffect(() => {
    const interval = setInterval(() => {
      setForumStats((prev) => ({
        posts: prev.posts + Math.floor(Math.random() * 3),
        messages: prev.messages + Math.floor(Math.random() * 2),
        events: prev.events,
        members: prev.members + (Math.random() > 0.8 ? 1 : 0)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handlers
  const handleRSVP = useCallback((id: string) => {
    setEvents((prevEvents) => {
      return prevEvents.map(event => {
        if (event.id === id) {
          return { 
            ...event, 
            attendees: event.isRSVPed ? event.attendees - 1 : event.attendees + 1,
            isRSVPed: !event.isRSVPed 
          };
        }

        return event;
      });
    });
  }, []);

  const handleLikeDiscussion = useCallback((id: string) => {
    setDiscussions(prevDiscussions => {
      return prevDiscussions.map(discussion => {
        if (discussion.id === id) {
          return { ...discussion, views: discussion.views + 1 };
        }

        return discussion;
      });
    });
  }, []);

  const handleReadNotification = useCallback((id: string) => {
    setNotifications(prevNotifications => {
      return prevNotifications.map(notification => {
        if (notification.id === id) {
          return { ...notification, read: true };
        }

        return notification;
      });
    });
  }, []);

  const handleCreatePost = useCallback(() => {
    // In a real app, this would open a modal or redirect
    alert('New post creation would open here');
  }, []);

  // Filtered discussions based on category and search
  const filteredDiscussions = discussions.filter(d => {
    const matchesCategory = category === "All Categories" || d.category === category;
    const matchesSearch = searchQuery === '' || 
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      d.author.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Count unread notifications
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="mx-auto">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="text-3xl font-bold">Community Hub</h2>
        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)} 
              className="relative rounded-md bg-[#232323] px-4 py-2 text-sm font-medium hover:bg-[#333]"
            >
              Notifications
              {unreadCount > 0 && (
                <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-[#76b900] text-xs">
                  {unreadCount}
                </span>
              )}
            </button>
            {showNotifications && (
              <div className="absolute right-0 top-full z-10 mt-2 w-64 rounded-md border border-gray-700 bg-[#1b1b1b] p-2 shadow-xl">
                <h4 className="mb-2 border-b border-gray-700 pb-1 text-sm font-bold">Notifications</h4>
                <ul className="max-h-60 overflow-y-auto">
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <li 
                        key={notification.id} 
                        className={`mb-2 cursor-pointer rounded p-2 text-xs ${notification.read ? 'text-gray-400' : 'bg-[#232323]'}`}
                        onClick={() => handleReadNotification(notification.id)}
                      >
                        <p>{notification.text}</p>
                        <p className="mt-1 text-xs text-gray-500">{notification.time}</p>
                      </li>
                    ))
                  ) : (
                    <li className="p-2 text-xs text-gray-400">No notifications</li>
                  )}
                </ul>
              </div>
            )}
          </div>
          <button 
            onClick={handleCreatePost}
            className="rounded-md bg-[#76b900] px-4 py-2 text-sm font-medium text-black hover:bg-opacity-90"
          >
            Create Post
          </button>
        </div>
      </div>
      <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Forum Activity", value: forumStats.posts, description: "New posts this week" },
          { label: "Direct Messages", value: forumStats.messages, description: "Unread messages" },
          { label: "Upcoming Events", value: forumStats.events, description: "Events this month" },
          { label: "Community Members", value: forumStats.members, description: "Active members" },
        ].map((stat, index) => (
          <div key={index} className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-5 shadow-xl transition-transform hover:scale-[1.02]">
            <h3 className="text-xl font-bold">{stat.label}</h3>
            <p className="mt-3 text-4xl font-bold text-[#76b900]">{stat.value}</p>
            <p className="mt-2 text-sm text-gray-400">{stat.description}</p>
          </div>
        ))}
      </div>
      <div className="mb-6 flex border-b border-gray-700">
        <button 
          className={`mr-4 pb-2 pt-1 text-sm font-medium ${activeTab === 'discussions' ? 'border-b-2 border-[#76b900] text-[#76b900]' : 'text-gray-400'}`}
          onClick={() => setActiveTab('discussions')}
        >
          Discussions
        </button>
        <button 
          className={`mr-4 pb-2 pt-1 text-sm font-medium ${activeTab === 'events' ? 'border-b-2 border-[#76b900] text-[#76b900]' : 'text-gray-400'}`}
          onClick={() => setActiveTab('events')}
        >
          Events
        </button>
        <button 
          className={`pb-2 pt-1 text-sm font-medium ${activeTab === 'members' ? 'border-b-2 border-[#76b900] text-[#76b900]' : 'text-gray-400'}`}
          onClick={() => setActiveTab('members')}
        >
          Members
        </button>
      </div>
      {activeTab === 'discussions' && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-6 shadow-xl">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-bold">Latest Discussions</h3>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <input
                    type="text"
                    placeholder="Search discussions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="rounded-md bg-[#232323] px-3 py-1 text-sm"
                  />
                  <select 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)} 
                    className="rounded-md bg-[#232323] px-3 py-1 text-sm"
                  >
                    <option>All Categories</option>
                    <option>Investing</option>
                    <option>Startups</option>
                    <option>Technology</option>
                  </select>
                </div>
              </div>
              {filteredDiscussions.length > 0 ? (
                <ul className="space-y-4">
                  {filteredDiscussions.map((post) => (
                    <li key={post.id} className="rounded-md border border-gray-700 bg-[#232323] p-4 transition-transform hover:scale-[1.01]">
                      <div className="flex items-start">
                        <div className="mr-3 flex size-10 items-center justify-center rounded-full bg-[#333] text-sm font-bold">
                          {post.authorAvatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center">
                            <h4 className="text-lg font-bold text-[#76b900]">{post.title}</h4>
                            {post.isPinned && (
                              <span className="ml-2 rounded bg-[#444] px-1 py-0.5 text-xs">Pinned</span>
                            )}
                            {post.isHot && (
                              <span className="ml-2 rounded bg-[#76b900] px-1 py-0.5 text-xs text-black">Hot</span>
                            )}
                          </div>
                          <div className="mt-2 flex flex-wrap justify-between gap-2 text-sm">
                            <span>Posted by: {post.author}</span>
                            <span className="text-gray-400">{post.time}</span>
                          </div>
                          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <span>{post.replies} replies</span>
                            <span>{post.views} views</span>
                            <span className="rounded border border-gray-600 px-2 py-0.5 text-xs">{post.category}</span>
                            <button 
                              onClick={() => handleLikeDiscussion(post.id)}
                              className="ml-auto rounded-md bg-[#333] px-2 py-1 text-xs hover:bg-[#444]"
                            >
                              Like
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="rounded-md border border-gray-700 bg-[#232323] p-4 text-center">
                  <p className="text-gray-400">No discussions found matching your criteria</p>
                </div>
              )}
              <div className="mt-4 flex justify-center">
                <button className="rounded-md bg-[#333] px-4 py-2 text-sm hover:bg-[#444]">Load More</button>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-6 shadow-xl">
              <h3 className="mb-4 text-xl font-bold">Popular Categories</h3>
              <ul className="space-y-3">
                {[
                  { name: "Investing", count: 42, color: "#76b900" },
                  { name: "Startups", count: 38, color: "#e67e22" },
                  { name: "Technology", count: 27, color: "#3498db" },
                  { name: "Marketing", count: 19, color: "#9b59b6" },
                  { name: "Finance", count: 15, color: "#f1c40f" },
                ].map((cat, index) => (
                  <li 
                    key={index} 
                    className="flex cursor-pointer items-center justify-between rounded-md border border-gray-700 bg-[#232323] p-3 transition-transform hover:scale-[1.02]"
                    onClick={() => setCategory(cat.name)}
                  >
                    <div className="flex items-center">
                      <div className="mr-3 size-3 rounded-full" style={{ backgroundColor: cat.color }}></div>
                      <span>{cat.name}</span>
                    </div>
                    <span className="rounded-full bg-[#333] px-2 py-0.5 text-xs">{cat.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      {activeTab === 'events' && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div key={event.id} className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-6 shadow-xl transition-transform hover:scale-[1.02]">
              <h3 className="mb-2 text-xl font-bold text-[#76b900]">{event.name}</h3>
              <div className="mb-3 flex items-center text-sm">
                <span className="mr-3 rounded-md bg-[#333] px-2 py-1">{event.date}</span>
                <span className="rounded-md bg-[#333] px-2 py-1">{event.location}</span>
              </div>
              <p className="mb-4 text-sm text-gray-400">{event.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm">{event.attendees} attending</span>
                <button 
                  onClick={() => handleRSVP(event.id)} 
                  className={`rounded-md px-4 py-2 text-sm ${
                    event.isRSVPed 
                      ? 'bg-[#232323] text-gray-400' 
                      : 'bg-[#76b900] text-black'
                  }`}
                >
                  {event.isRSVPed ? 'Cancel RSVP' : 'RSVP'}
                </button>
              </div>
            </div>
          ))}
          <div className="rounded-lg border border-dashed border-gray-600 bg-[#1b1b1b] p-6 shadow-xl">
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="mb-4 text-gray-400">Want to organize a community event?</p>
              <button className="rounded-md bg-[#333] px-4 py-2 text-sm hover:bg-[#444]">Propose Event</button>
            </div>
          </div>
        </div>
      )}
      {activeTab === 'members' && (
        <div>
          <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-xl font-bold">Community Members</h3>
            <input
              type="text"
              placeholder="Search members..."
              className="w-full rounded-md bg-[#232323] px-3 py-1 text-sm sm:w-64"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {members.map((member) => (
              <div key={member.id} className="rounded-lg border border-gray-600 bg-[#1b1b1b] p-4 shadow-xl transition-transform hover:scale-[1.02]">
                <div className="flex items-center">
                  <div className="relative mr-3 flex size-12 items-center justify-center rounded-full bg-[#333] text-lg font-bold">
                    {member.avatar}
                    <span 
                      className={`absolute bottom-0 right-0 size-3 rounded-full border border-[#1b1b1b] ${
                        member.status === 'online' ? 'bg-green-500' : 
                        member.status === 'away' ? 'bg-yellow-500' : 'bg-gray-500'
                      }`}
                    ></span>
                  </div>
                  <div>
                    <h4 className="font-bold">{member.name}</h4>
                    <p className="text-xs text-gray-400">{member.role}</p>
                  </div>
                </div>
                <div className="mt-3 text-xs text-gray-400">
                  <p>Joined: {member.joinDate}</p>
                  <p>Last active: {member.lastActive}</p>
                </div>
                <button className="mt-3 w-full rounded-md bg-[#333] py-1 text-xs hover:bg-[#444]">
                  Message
                </button>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <button className="rounded-md bg-[#333] px-4 py-2 text-sm hover:bg-[#444]">View All Members</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityComponent;