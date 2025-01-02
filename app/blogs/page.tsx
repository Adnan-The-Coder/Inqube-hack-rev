"use client";

import Header from "@/components/Header";
import React, { useState } from "react";

interface Blog {
  title: string;
  description: string;
  author: string;
  content: string;
  category: string;
}

const BlogCard: React.FC<{
  blog: Blog;
  onClick: () => void;
}> = ({ blog, onClick }) => {
  return (
    <div
      className="bg-[#1b1b1b] text-white p-6 rounded-lg shadow-lg hover:translate-y-[-2px] transition-transform cursor-pointer"
      onClick={onClick}
    >
      <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
      <p className="text-gray-400 mb-4">{blog.description}</p>
      <p className="text-sm text-gray-500">By {blog.author}</p>
      <span className="inline-block mt-4 bg-[#76b900] text-black px-3 py-1 rounded-lg text-xs">
        {blog.category}
      </span>
    </div>
  );
};

const Modal: React.FC<{
  blog: Blog | null;
  onClose: () => void;
}> = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-5">
      <div className="bg-[#1b1b1b] text-white p-8 rounded-lg max-w-3xl mx-auto shadow-lg">
        <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>
        <p className="text-gray-400 mb-6">{blog.content}</p>
        <button
          className="bg-[#76b900] px-4 py-2 rounded-lg text-black font-semibold hover:bg-[#64a800] transition"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const BlogsPage: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [filter, setFilter] = useState("");

  const blogs: Blog[] = [
    {
      title: "How to Attract Startup Investors",
      description: "Learn strategies to capture the attention of investors.",
      author: "Jane Doe",
      content:
        "Investors seek startups with a clear business model, market potential, and scalability. Prepare a compelling pitch deck that highlights your value proposition, market opportunity, and traction. Build relationships by networking and showcasing your passion and expertise. Highlighting your startup's growth potential and creating a strong online presence can also attract investor interest. Demonstrating proof of concept with early-stage sales or partnerships will further boost credibility.",
      category: "Startup",
    },
    {
      title: "Top Business Trends for 2025",
      description: "Stay ahead with these key trends in the business world.",
      author: "Mark Spencer",
      content:
        "Emerging trends like AI-driven analytics, remote work optimization, and sustainability are reshaping businesses. Companies focusing on green technology and ethical business practices will gain a competitive edge. The rise of blockchain technology and the integration of machine learning into customer service and marketing strategies are also defining factors. It's essential for businesses to embrace innovation, stay agile, and adapt to technological changes in order to thrive in a highly competitive environment.",
      category: "Business",
    },
    {
      title: "Scaling Your Startup Effectively",
      description: "Discover how to grow your startup sustainably.",
      author: "Emily Carter",
      content:
        "Scaling requires a strategic approach. Focus on building a strong team, automating processes, and understanding your customer base. Invest in scalable technology and software to ensure your operations can handle increased demand. It's crucial to implement a solid business model that can evolve as your company grows. Expand your marketing efforts to reach new audiences, but always maintain the quality of your product or service. Set long-term goals and be prepared for potential challenges in scaling, such as talent acquisition and resource allocation.",
      category: "Growth",
    },
    {
      title: "Funding Options for Startups",
      description: "Understand the various funding opportunities available.",
      author: "James Wilson",
      content:
        "Explore funding options like venture capital, angel investors, crowdfunding, and bootstrapping. Venture capitalists are often looking for high-growth potential startups, while angel investors may provide more flexible terms. Crowdfunding allows entrepreneurs to engage their target audience early on, building both funds and a loyal customer base. Bootstrapping, though challenging, is a good way to retain full control over your business. Government grants and incubators can also provide valuable financial support for early-stage startups. Each option has its pros and cons, so it’s important to choose the one that aligns with your business goals.",
      category: "Finance",
    },
    {
      title: "The Power of Branding",
      description: "Why branding is essential for business success.",
      author: "Anna Taylor",
      content:
        "Branding builds trust and sets your company apart. A strong brand connects emotionally with customers and ensures loyalty. It’s important to define your brand's voice, values, and message clearly. Consistency in messaging across all channels and a visual identity that resonates with your target audience will help build recognition. In today’s competitive market, a good brand can influence purchasing decisions, create a sense of belonging, and elevate your business above competitors. Effective branding extends beyond logos; it includes customer service, product quality, and the overall experience you offer.",
      category: "Marketing",
    },
    {
      title: "Digital Marketing Tips for Startups",
      description: "Maximize your online presence with these tips.",
      author: "Robert Johnson",
      content:
        "Leverage social media, SEO, and email marketing to reach your target audience. Measure your results and adapt your strategies. A well-executed SEO strategy helps you rank higher on search engines, increasing visibility. Social media allows for direct engagement with customers, fostering relationships that can turn into loyal followers. Email marketing provides a personalized way to communicate with potential and current customers, offering them value and updates. Content marketing, such as blogging or video production, is also an effective way to build your brand and attract organic traffic.",
      category: "Marketing",
    },
    {
      title: "The Future of Artificial Intelligence",
      description: "AI trends shaping our future.",
      author: "Sophia Lee",
      content:
        "From autonomous vehicles to personalized healthcare, AI continues to revolutionize industries. Stay updated to harness its potential. AI is enabling businesses to automate repetitive tasks, improve decision-making, and enhance customer experiences. In healthcare, AI is assisting with diagnostics and treatment planning. AI-driven data analytics is also helping companies make more informed decisions, while chatbots and virtual assistants are streamlining customer support. To stay competitive, businesses should invest in AI tools and explore how they can integrate them into their operations, whether for efficiency or customer engagement.",
      category: "Technology",
    },
    {
      title: "Effective Time Management for Entrepreneurs",
      description: "Achieve more with better time management skills.",
      author: "John Smith",
      content:
        "Prioritize tasks, delegate when needed, and focus on your goals. Time management is a critical skill for success. Use tools like task lists, calendars, and time-tracking software to stay organized. Break your day into blocks of time and focus on completing tasks within those blocks. Be sure to set aside time for regular breaks to maintain productivity throughout the day. Delegating tasks to others can free up your time for high-priority work, allowing you to focus on strategic decisions that drive your business forward. Ultimately, effective time management ensures you meet deadlines and achieve long-term business goals.",
      category: "Productivity",
    },
    {
      title: "Building a Remote-First Team",
      description: "How to effectively manage a distributed workforce.",
      author: "Olivia Parker",
      content:
        "Managing a remote team requires trust, effective communication, and the right tools. Set clear expectations and communication guidelines to keep everyone on the same page. Use project management tools to track tasks, deadlines, and progress. Regular check-ins via video calls can help maintain team cohesion and keep employees engaged. Encourage flexible schedules but ensure that team members can collaborate when necessary. Foster a sense of community by organizing virtual team-building activities, and make sure to recognize and celebrate milestones and achievements to boost morale.",
      category: "Leadership",
    },
  ];
  
  

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto py-8 pt-20 px-10 items-center flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-6">Blogs</h1>
        <input
          type="text"
          className="w-full mb-6 p-3 rounded-lg bg-[#1b1b1b] text-white placeholder-gray-500"
          placeholder="Search blogs"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog, index) => (
            <BlogCard
              key={index}
              blog={blog}
              onClick={() => setSelectedBlog(blog)}
            />
          ))}
        </div>
      </div>
      <Modal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
    </div>
  );
};

export default BlogsPage;
