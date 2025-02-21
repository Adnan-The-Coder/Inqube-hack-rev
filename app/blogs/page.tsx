"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Blog {
  title: string;
  description: string;
  author: string;
  content: string;
  category: string;
  image: string;
}

const BlogCard: React.FC<{
  blog: Blog;
  onClick: () => void;
}> = ({ blog, onClick }) => {
  return (
    <div
      className="cursor-pointer overflow-hidden rounded-lg bg-[#1b1b1b] p-6 text-white shadow-lg transition-transform hover:translate-y-[-2px] hover:shadow-2xl"
      onClick={onClick}
    >
      <Image
        src={blog.image}
        alt={blog.title}
        width={400}
        height={400}
        className="mb-4 h-48 w-full rounded-md object-cover"
      />
      <h2 className="mb-2 text-2xl font-bold">{blog.title}</h2>
      <p className="mb-4 text-gray-400">{blog.description}</p>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">By {blog.author}</p>
        <span className="inline-block rounded-lg bg-[#76b900] px-3 py-1 text-xs text-black">
          {blog.category}
        </span>
      </div>
    </div>
  );
};

const Modal: React.FC<{
  blog: Blog | null;
  onClose: () => void;
}> = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-5">
      <div className="relative mx-auto max-w-4xl rounded-lg bg-[#1b1b1b] p-8 text-white shadow-lg">
        <Image
          src={blog.image}
          alt={blog.title}
          width={400}
          height={400}
          className="mb-6 h-64 w-full rounded-md object-cover"
        />
        <h2 className="mb-4 text-3xl font-bold">{blog.title}</h2>
        <p className="mb-6 text-gray-400">{blog.content}</p>
        <button
          className="rounded-lg bg-[#76b900] px-4 py-2 font-semibold text-black transition hover:bg-[#64a800]"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const BlogFormModal: React.FC<{
  onClose: () => void;
  // eslint-disable-next-line no-unused-vars
  onAddBlog: (blog: Blog) => void;
}> = ({ onClose, onAddBlog }) => {
  const [formData, setFormData] = useState<Blog>({
    title: "",
    description: "",
    author: "",
    content: "",
    category: "",
    image: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddBlog(formData);
    onClose();
  };

  return (
    // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-5">
      <div className="mx-auto w-full max-w-3xl rounded-lg bg-[#1b1b1b] p-6 text-white shadow-lg">
        <h2 className="mb-6 text-2xl font-bold">Write a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            className="mb-6 w-full rounded-lg bg-[#1f2937] p-3 text-white"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Description"
            className="mb-6 w-full rounded-lg bg-[#1f2937] p-3 text-white"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Author"
            className="mb-6 w-full rounded-lg bg-[#1f2937] p-3 text-white"
            value={formData.author}
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
            required
          />
          <textarea
            placeholder="Content"
            className="mb-6 w-full rounded-lg bg-[#1f2937] p-3 text-white"
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Category"
            className="mb-6 w-full rounded-lg bg-[#1f2937] p-3 text-white"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            required
          />
          <input
            type="url"
            placeholder="Image URL"
            className="mb-6 w-full rounded-lg bg-[#1f2937] p-3 text-white"
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
            required
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-[#76b900] px-4 py-2 font-semibold text-black transition hover:bg-[#64a800]"
          >
            Post Blog
          </button>
        </form>
        <button
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

const BlogsPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Load blogs from localStorage on component mount
  useEffect(() => {
    const savedBlogs = localStorage.getItem("blogs");
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs));
    } else {
      // Set the initial blogs
      const initialBlogs: Blog[] = [
        {
          title: "How to Attract Startup Investors",
          description: "Learn strategies to capture the attention of investors.",
          author: "Jane Doe",
          content:
            "Investors seek startups with a clear business model, market potential, and scalability. Prepare a compelling pitch deck that highlights your value proposition, market opportunity, and traction. Build relationships by networking and showcasing your passion and expertise.",
          category: "Startup",
          image: "https://images.pexels.com/photos/7414284/pexels-photo-7414284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Top Business Trends for 2025",
          description: "Stay ahead with these key trends in the business world.",
          author: "Mark Spencer",
          content:
            "Emerging trends like AI-driven analytics, remote work optimization, and sustainability are reshaping businesses. Companies focusing on green technology and ethical business practices will gain a competitive edge.",
          category: "Business",
          image: "https://images.pexels.com/photos/590045/pexels-photo-590045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Scaling Your Startup Effectively",
          description: "Discover how to grow your startup sustainably.",
          author: "Emily Carter",
          content:
            "Scaling requires a strategic approach. Focus on building a strong team, automating processes, and understanding your customer base. Invest in scalable technology and software to ensure your operations can handle increased demand.",
          category: "Growth",
          image: "https://images.pexels.com/photos/2451646/pexels-photo-2451646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Funding Options for Startups",
          description: "Understand the various funding opportunities available.",
          author: "James Wilson",
          content:
            "Explore funding options like venture capital, angel investors, crowdfunding, and bootstrapping. Venture capitalists are often looking for high-growth potential startups, while angel investors may provide more flexible terms.",
          category: "Finance",
          image: "https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "The Power of Branding",
          description: "Why branding is essential for business success.",
          author: "Anna Taylor",
          content:
            "Branding builds trust and sets your company apart. A strong brand connects emotionally with customers and ensures loyalty. It’s important to define your brand's voice, values, and message clearly.",
          category: "Marketing",
          image: "https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Digital Marketing Tips for Startups",
          description: "Maximize your online presence with these tips.",
          author: "Robert Johnson",
          content:
            "Leverage social media, SEO, and email marketing to reach your target audience. Measure your results and adapt your strategies. A well-executed SEO strategy helps you rank higher on search engines, increasing visibility.",
          category: "Marketing",
          image: "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "The Future of Artificial Intelligence",
          description: "AI trends shaping our future.",
          author: "Sophia Lee",
          content:
            "From autonomous vehicles to personalized healthcare, AI continues to revolutionize industries. AI-driven analytics and chatbots are transforming how businesses operate and interact with customers.",
          category: "Technology",
          image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Effective Time Management for Entrepreneurs",
          description: "Achieve more with better time management skills.",
          author: "John Smith",
          content:
            "Prioritize tasks, delegate when needed, and focus on your goals. Effective time management can help you balance professional and personal commitments.",
          category: "Productivity",
          image: "https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "The Rise of Sustainable Startups",
          description: "Why sustainability is the future of entrepreneurship.",
          author: "Laura Green",
          content:
            "Sustainable startups not only attract investors but also build long-term customer loyalty. Embrace eco-friendly practices to make a difference and thrive in a competitive market.",
          category: "Sustainability",
          image: "https://images.pexels.com/photos/3184352/pexels-photo-3184352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Mastering the Art of Networking",
          description: "Grow your professional circle effectively.",
          author: "Peter Davis",
          content:
            "Networking is essential for personal and professional growth. Attend events, build genuine relationships, and leverage platforms like LinkedIn to expand your reach.",
          category: "Career",
          image: "https://images.pexels.com/photos/2566573/pexels-photo-2566573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "How Blockchain is Changing Business",
          description: "Understanding the impact of blockchain technology.",
          author: "Nina Patel",
          content:
            "Blockchain is revolutionizing industries with transparency and security. Learn how businesses are using it for supply chain, finance, and beyond.",
          category: "Technology",
          image: "https://images.pexels.com/photos/844127/pexels-photo-844127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Balancing Work and Life as an Entrepreneur",
          description: "Tips to achieve a healthy work-life balance.",
          author: "Rachel Adams",
          content:
            "Entrepreneurship can be demanding. Set boundaries, take breaks, and focus on your well-being to maintain productivity and happiness.",
          category: "Lifestyle",
          image: "https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ];
      
      setBlogs(initialBlogs);
      localStorage.setItem("blogs", JSON.stringify(initialBlogs));
    }
  }, []);

  const handleAddBlog = (newBlog: Blog) => {
    const updatedBlogs = [...blogs, newBlog];
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto mb-10 flex flex-col items-center px-5 py-8 pt-20 md:px-10">
        <h1 className="mb-6 text-4xl font-bold">Blogs</h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              blog={blog}
              onClick={() => setSelectedBlog(blog)}
            />
          ))}
        </div>
      </div>
      <button
        className="fixed bottom-8 right-8 rounded-full bg-[#76b900] p-3 text-black shadow-lg transition hover:bg-[#64a800]"
        onClick={() => setIsFormOpen(true)}
      >
        <Image src="https://img.icons8.com/?size=100&id=1501&format=png&color=000000" alt="+" width={30} height={30}/>
      </button>
      {selectedBlog && (
        <Modal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
      )}
      {isFormOpen && (
        <BlogFormModal
          onClose={() => setIsFormOpen(false)}
          onAddBlog={handleAddBlog}
        />
      )}
      <Footer/>
    </div>
  );
};

export default BlogsPage;
