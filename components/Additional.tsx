import Image from 'next/image';
import React from 'react';

const Additional = () => {
  return (
    <div className='flex flex-col items-center justify-center text-white gap-16 px-6 md:px-12 lg:px-20 py-10 bg-[#0a0a0a]'>
      <div className='flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-8'>
        <div className='flex flex-col items-center lg:items-start gap-3'>
          <h1 className='text-5xl sm:text-6xl lg:text-7xl text-gray-300 font-light'>30%</h1>
          <p className='text-center lg:text-left text-lg md:text-xl'>Connect with the Right Investors</p>
        </div>
        <div className='flex flex-col lg:flex-row items-center gap-6'>
          <div className='text-center lg:text-left'>
            <h2 className='text-2xl md:text-3xl font-semibold'>Right Investors</h2>
            <p className='max-w-xs md:max-w-sm lg:max-w-md text-sm md:text-base text-gray-400'>
              Our platform simplifies connecting with investors, offering resources and guidance to accelerate your startup growth.
            </p>
          </div>
          <Image
            src="https://img.icons8.com/?size=100&id=61&format=png&color=FFFFFF"
            alt='arrow'
            width={50}
            height={50}
            className='cursor-pointer border hover:bg-[#76b900] transition-all duration-200 border-white rounded-full p-3'
          />
        </div>
      </div>
      <hr className='border border-gray-700 w-full max-w-7xl' />
      <div className='flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-8'>
        <div className='flex flex-col items-center lg:items-start gap-3'>
          <h1 className='text-5xl sm:text-6xl lg:text-7xl text-gray-300 font-light'>70%</h1>
          <p className='text-center lg:text-left text-lg md:text-xl'>Fuel Your Startup`s Potential</p>
        </div>
        <div className='flex flex-col lg:flex-row items-center gap-6'>
          <div className='text-center lg:text-left'>
            <h2 className='text-2xl md:text-3xl font-semibold'>Investor Connections</h2>
            <p className='max-w-xs md:max-w-sm lg:max-w-md text-sm md:text-base text-gray-400'>
              Find investors who align with your vision and access valuable advice and resources to grow your startup.
            </p>
          </div>
          <Image
            src="https://img.icons8.com/?size=100&id=61&format=png&color=FFFFFF"
            alt='arrow'
            width={50}
            height={50}
            className='cursor-pointer border hover:bg-[#76b900] transition-all duration-200 border-white rounded-full p-3'
          />
        </div>
      </div>
    </div>
  );
};

export default Additional;
