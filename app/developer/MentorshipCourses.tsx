import React, { useState } from 'react';

const MentorshipCourses = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'ideation', name: 'Ideation' },
    { id: 'funding', name: 'Fundraising' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'product', name: 'Product' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'scaling', name: 'Scaling' }
  ];
  
  const courses = [
    {
      id: 1,
      title: 'Startup School',
      provider: 'Y Combinator',
      category: 'ideation',
      imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      description: 'Y Combinators Startup School is a free online program for founders, covering startup fundamentals from idea to launch.',
      videoEmbed: "https://www.youtube.com/embed/j6kCPJNqHG4?si=o87QI2DgAtzEah6t",
      link: '#yc-startup-school',
      featured: true
    },
    {
      id: 2,
      title: 'How to Start a Startup',
      provider: 'Stanford',
      category: 'ideation',
      imageUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      description: 'Stanford Universitys course taught by Sam Altman and other industry experts on building a successful startup.',
      videoEmbed: 'https://www.youtube.com/embed/CBYhVcO4WgI',
      link: '#stanford-startup',
      featured: true
    },
    {
      id: 3,
      title: 'Mastering Seed Fundraising',
      provider: 'TechCrunch',
      category: 'funding',
      imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      description: 'Learn how to effectively raise your seed round with insights from successful founders and investors.',
      videoEmbed: "https://www.youtube.com/embed/KZLroOQKT-g?si=2GcmXs0uzXGSMHNi",
      link: '#seed-fundraising',
      featured: false
    },
    {
      id: 4,
      title: 'Growth Marketing for Startups',
      provider: 'Growth Hackers',
      category: 'marketing',
      imageUrl: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
      description: 'Comprehensive guide to growth marketing strategies specifically tailored for early-stage startups.',
      videoEmbed: "https://www.youtube.com/embed/u1gynzMjseA?si=GRmQnxlBNH89e875",
      link: '#growth-marketing',
      featured: true
    },
    {
      id: 5,
      title: 'Product Management Fundamentals',
      provider: 'Product School',
      category: 'product',
      imageUrl: 'https://images.pexels.com/photos/7439096/pexels-photo-7439096.jpeg',
      description: 'Essential skills and frameworks for building products that customers love.',
      videoEmbed: 'https://www.youtube.com/embed/lNjrAXGRda4',
      link: '#product-management',
      featured: false
    },
    {
      id: 6,
      title: 'Startup Leadership',
      provider: 'Harvard Business School',
      category: 'leadership',
      imageUrl: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
      description: 'Develop the leadership skills needed to build and scale a successful startup team.',
      videoEmbed: "https://www.youtube.com/embed/A3u67X2fo-g?si=Ss6i6kNLWIkXX8tw",
      link: '#startup-leadership',
      featured: true
    },
    {
      id: 7,
      title: 'Financial Modeling for Startups',
      provider: 'Sequoia Capital',
      category: 'funding',
      imageUrl: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg',
      description: 'Learn how to create financial models that will help you make strategic decisions and attract investors.',
      videoEmbed: "https://www.youtube.com/embed/Ye7VeofnBfc?si=IO-7VxgAaP9yMMjC",
      link: '#financial-modeling',
      featured: false
    },
    {
      id: 8,
      title: 'Building Your MVP',
      provider: 'TechStars',
      category: 'product',
      imageUrl: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      description: 'Step-by-step guide to building a minimum viable product that validates your business idea.',
      videoEmbed: 'https://www.youtube.com/embed/1hHMwLxN6EM',
      link: '#building-mvp',
      featured: true
    },
    {
      id: 9,
      title: 'Scaling Your Startup',
      provider: 'First Round Capital',
      category: 'scaling',
      imageUrl: 'https://images.pexels.com/photos/3182826/pexels-photo-3182826.jpeg',
      description: 'Learn proven strategies for taking your startup from initial traction to exponential growth.',
      videoEmbed: "https://www.youtube.com/embed/r-98YRAF1dY?si=zUtZoLiA54FH7IdL",
      link: '#scaling-startup',
      featured: true
    },
  ];
  
  const resources = [
    {
      title: 'Startup Podcasts',
      items: [
        'How I Built This with Guy Raz',
        'Masters of Scale with Reid Hoffman',
        'The Pitch',
        'Startup by Gimlet Media',
        'The Twenty Minute VC'
      ]
    },
    {
      title: 'Recommended Books',
      items: [
        'The Lean Startup by Eric Ries',
        'Zero to One by Peter Thiel',
        'The Hard Thing About Hard Things by Ben Horowitz',
        'Hooked by Nir Eyal',
        'Traction by Gabriel Weinberg'
      ]
    },
    {
      title: 'Startup Communities',
      items: [
        'Y Combinator Startup School',
        'Indie Hackers',
        'Product Hunt',
        'Startup Grind',
        'On Deck Fellowship'
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Founder, TechNova",
      text: "These courses helped me navigate the challenging early stages of my startup. The practical advice was invaluable.",
      avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=60"
    },
    {
      name: "Michael Chen",
      company: "CEO, DataFlow",
      text: "I credit much of our fundraising success to the strategies I learned through these mentorship courses.",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=60"
    },
    {
      name: "Priya Patel",
      company: "Founder, EcoStartup",
      text: "The product development course completely changed my approach to building our MVP. We saved months of development time.",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=60"
    }
  ];
  
  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);
  
  const featuredCourses = filteredCourses.filter(course => course.featured);
  const regularCourses = filteredCourses.filter(course => !course.featured);
  
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-gray-200">
      <div className="bg-[#121212]">
        <div className="container mx-auto py-4">
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">Startup Mentorship Courses</h1>
          <p className="mb-8 text-lg text-gray-300">Curated learning resources to help you build and scale your startup</p>
          <div className="inline-block rounded-lg border border-gray-700 bg-[#2a2a2a] p-4 shadow-md">
            <p className="font-medium text-[#76b900]">Over 100+ hours of expert content</p>
          </div>
        </div>
      </div>
      <div className="top-0 z-10 border-b border-gray-800 bg-[#242424] shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {categories.map(category => (
              <button
                key={category.id}
                className={`rounded-full px-3 py-2 text-sm transition-all duration-200 md:text-base ${
                  activeCategory === category.id
                    ? 'bg-[#76b900] text-white'
                    : 'border border-gray-700 bg-[#2a2a2a] text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      {featuredCourses.length > 0 && (
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8 flex items-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl">Featured Courses</h2>
            <div className="ml-4 h-1 grow rounded bg-[#76b900]"></div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {featuredCourses.map(course => (
              <div key={course.id} className="group overflow-hidden rounded-xl border border-gray-700 bg-[#242424] shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="relative">
                  <img 
                    src={course.imageUrl} 
                    alt={course.title} 
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute right-0 top-0 rounded-bl bg-[#76b900] px-2 py-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-white">Featured</span>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-y-2">
                    <h3 className="text-lg font-bold text-white md:text-xl">{course.title}</h3>
                    <span className="rounded border border-gray-700 bg-[#2a2a2a] px-2 py-1 text-xs font-semibold text-gray-300">
                      {categories.find(cat => cat.id === course.category)?.name}
                    </span>
                  </div>
                  <p className="mb-2 text-sm text-gray-400">By {course.provider}</p>
                  <p className="mb-4 text-sm text-gray-300 md:text-base">{course.description}</p>
                  <div className="mb-4 aspect-video">
                    <iframe 
                      src={course.videoEmbed} 
                      title={course.title}
                      className="size-full rounded-lg border border-gray-700"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <a 
                    href={course.link} 
                    className="block rounded-lg bg-[#76b900] px-4 py-2 text-center font-medium text-white transition-all duration-200 hover:bg-[#669e00]"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex items-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            {activeCategory === 'all' ? 'All Courses' : `${categories.find(cat => cat.id === activeCategory)?.name} Courses`}
          </h2>
          <div className="ml-4 h-1 grow rounded bg-[#76b900]"></div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {(featuredCourses.length > 0 ? regularCourses : filteredCourses).map(course => (
            <div key={course.id} className="group overflow-hidden rounded-xl border border-gray-700 bg-[#242424] shadow-md transition-all duration-300 hover:shadow-xl">
              <img 
                src={course.imageUrl} 
                alt={course.title} 
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4 md:p-6">
                <div className="mb-3 flex flex-wrap items-start justify-between gap-y-2">
                  <h3 className="text-lg font-bold text-white md:text-xl">{course.title}</h3>
                  <span className="rounded border border-gray-700 bg-[#2a2a2a] px-2 py-1 text-xs font-semibold text-gray-300">
                    {categories.find(cat => cat.id === course.category)?.name}
                  </span>
                </div>
                <p className="mb-2 text-sm text-gray-400">By {course.provider}</p>
                <p className="mb-4 text-sm text-gray-300 md:text-base">{course.description}</p>
                <div className="mb-4 aspect-video">
                  <iframe 
                    src={course.videoEmbed} 
                    title={course.title}
                    className="size-full rounded-lg border border-gray-700"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <a 
                  href={course.link} 
                  className="block rounded-lg border-2 border-[#76b900] bg-transparent px-4 py-2 text-center font-medium text-[#76b900] transition-all duration-200 hover:bg-[#76b900] hover:text-white"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#121212] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">Success Stories</h2>
            <p className="mx-auto max-w-2xl text-gray-400">Hear from entrepreneurs who transformed their startups through our mentorship courses</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-xl border border-gray-700 bg-[#242424] p-4 md:p-6">
                <div className="mb-4 flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="mr-4 size-12 rounded-full border border-gray-700"
                  />
                  <div>
                    <h3 className="font-bold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#1a1a1a] py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl">Additional Resources</h2>
            <div className="ml-4 h-1 grow rounded bg-[#76b900]"></div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="rounded-xl border border-gray-700 bg-[#242424] p-4 shadow-md md:p-6 hover:translate-y-[-2px] transition-all">
                <h3 className="mb-4 text-lg font-bold text-white md:text-xl">{resource.title}</h3>
                <ul className="space-y-2">
                  {resource.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-[#76b900]">•</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorshipCourses;