import Image from 'next/image';
import React from 'react';

const Additional = () => {
  return (
    <div className='flex flex-col items-center justify-center text-white gap-16 px-6 md:px-12 lg:px-20 py-32 md:py-0 bg-[#0a0a0a]'>
      <div className='text-center'>
        <h1 className='text-4xl md:text-4xl font-bold text-gray-300'>Empowering Startups</h1>
        <p className='mt-4 text-lg md:text-lg text-gray-400 max-w-3xl mx-auto'>
          Unlock the potential of your startup with tailored investor connections, expert guidance, and growth-oriented resources.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl'>
        <div className='flex flex-col items-center text-center gap-4 p-6 bg-[rgba(30,30,30,0.85)] rounded-lg shadow-lg'>
          <Image
            src="https://img.icons8.com/?size=100&id=77YeSGgiF08Y&format=png&color=76b900"
            alt="Investor Network"
            width={60}
            height={60}
            className='w-16 h-16'
          />
          <h2 className='text-2xl font-semibold text-gray-300'>Extensive Investor Network</h2>
          <p className='text-gray-400 text-sm'>
            Gain access to a wide network of investors who are actively looking to fund startups like yours.
          </p>
        </div>
        <div className='flex flex-col items-center text-center gap-4 p-6 bg-[rgba(30,30,30,0.85)] rounded-lg shadow-lg'>
          <Image
            src="https://img.icons8.com/?size=100&id=pRPbA_aqBPFw&format=png&color=76b900"
            alt="Guidance"
            width={60}
            height={60}
            className='w-16 h-16'
          />
          <h2 className='text-2xl font-semibold text-gray-300'>Expert Guidance</h2>
          <p className='text-gray-400 text-sm'>
            Receive advice and mentorship from seasoned entrepreneurs and industry experts.
          </p>
        </div>
        <div className='flex flex-col items-center text-center gap-4 p-6 bg-[rgba(30,30,30,0.85)] rounded-lg shadow-lg'>
          <Image
            src="https://img.icons8.com/?size=100&id=123786&format=png&color=76b900"
            alt="Resources"
            width={60}
            height={60}
            className='w-16 h-16'
          />
          <h2 className='text-2xl font-semibold text-gray-300'>Comprehensive Resources</h2>
          <p className='text-gray-400 text-sm'>
            Access premium tools and resources designed to accelerate your startups growth.
          </p>
        </div>
      </div>
      <div className='text-center mt-5'>
        <h2 className='text-3xl font-semibold text-gray-300'>Ready to Transform Your Startup?</h2>
        <p className='mt-4 text-gray-400'>
          Join our platform today and connect with investors who believe in your vision.
        </p>
        <button className='mt-6 bg-[#76b900] text-black py-3 px-6 rounded-lg hover:bg-white hover:text-black transition'>
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default Additional;
