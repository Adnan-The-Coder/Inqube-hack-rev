import Image from 'next/image';
import React from 'react';

const Additional = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-16 bg-[#0a0a0a] px-6 py-32 text-white md:px-12 md:py-0 lg:px-20'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-gray-300 md:text-4xl'>Empowering Startups</h1>
        <p className='mx-auto mt-4 max-w-3xl text-lg text-gray-400 md:text-lg'>
          Unlock the potential of your startup with tailored investor connections, expert guidance, and growth-oriented resources.
        </p>
      </div>
      <div className='grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3'>
        <div className='flex flex-col items-center gap-4 rounded-lg bg-[rgba(30,30,30,0.85)] p-6 text-center shadow-lg'>
          <Image
            src="https://img.icons8.com/?size=100&id=77YeSGgiF08Y&format=png&color=76b900"
            alt="Investor Network"
            width={60}
            height={60}
            className='size-16'
          />
          <h2 className='text-2xl font-semibold text-gray-300'>Extensive Investor Network</h2>
          <p className='text-sm text-gray-400'>
            Gain access to a wide network of investors who are actively looking to fund startups like yours.
          </p>
        </div>
        <div className='flex flex-col items-center gap-4 rounded-lg bg-[rgba(30,30,30,0.85)] p-6 text-center shadow-lg'>
          <Image
            src="https://img.icons8.com/?size=100&id=pRPbA_aqBPFw&format=png&color=76b900"
            alt="Guidance"
            width={60}
            height={60}
            className='size-16'
          />
          <h2 className='text-2xl font-semibold text-gray-300'>Expert Guidance</h2>
          <p className='text-sm text-gray-400'>
            Receive advice and mentorship from seasoned entrepreneurs and industry experts.
          </p>
        </div>
        <div className='flex flex-col items-center gap-4 rounded-lg bg-[rgba(30,30,30,0.85)] p-6 text-center shadow-lg'>
          <Image
            src="https://img.icons8.com/?size=100&id=123786&format=png&color=76b900"
            alt="Resources"
            width={60}
            height={60}
            className='size-16'
          />
          <h2 className='text-2xl font-semibold text-gray-300'>Comprehensive Resources</h2>
          <p className='text-sm text-gray-400'>
            Access premium tools and resources designed to accelerate your startups growth.
          </p>
        </div>
      </div>
      <div className='mt-5 text-center'>
        <h2 className='text-3xl font-semibold text-gray-300'>Ready to Transform Your Startup?</h2>
        <p className='mt-4 text-gray-400'>
          Join our platform today and connect with investors who believe in your vision.
        </p>
        <button className='mt-6 rounded-lg bg-[#76b900] px-6 py-3 text-black transition hover:bg-white hover:text-black'>
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default Additional;
