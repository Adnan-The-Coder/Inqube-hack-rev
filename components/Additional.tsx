import Image from 'next/image'
import React from 'react'

const Additional = () => {
  return (
    <div className='h-[40rem] md:h-[30rem] flex flex-col items-center justify-center text-white gap-10 px-4 sm:px-6 md:px-10'>
        <div className='flex flex-col md:flex-row items-center justify-between w-full md:w-[60rem] gap-4'>
            <div className='flex flex-col gap-4 text-center md:text-left'>
                <h1 className='text-4xl md:text-7xl text-gray-300 font-thin'>30%</h1>
                <p className='text-lg md:text-base'>Connect with the Right Investors</p>
            </div>
            <div className='flex flex-col md:flex-row gap-5 items-center justify-center md:justify-start'>
                <div className='flex flex-col items-center gap-3'>
                    <h1 className='text-3xl md:text-2xl text-[#ffffff]'>Right Investors</h1>
                    <p className='max-w-sm text-sm text-[#858585] text-center'>
                    Our platform simplifies connecting with investors, offering resources and guidance to accelerate your startup growth.
                    </p>
                </div>
                <Image src="https://img.icons8.com/?size=100&id=61&format=png&color=FFFFFF" alt='arrow' className='cursor-pointer w-[50px] border hover:bg-[#76b900] transition-all ease-out duration-200 border-white rounded-full p-3'/>
            </div>
        </div>
        <hr className='border border-[#505050] w-full md:w-[75rem]'/>
        <div className='flex flex-col md:flex-row items-center justify-between w-full md:w-[60rem] gap-4'>
            <div className='flex flex-col gap-4 text-center md:text-left'>
                <h1 className='text-4xl md:text-7xl text-gray-300 font-thin'>70%</h1>
                <p className='text-lg md:text-base'>Fuel Your Startup`s Potential</p>
            </div>
            <div className='flex flex-col md:flex-row gap-5 items-center justify-center md:justify-start'>
                <div className='flex flex-col items-center gap-3'>
                    <h1 className='text-3xl md:text-2xl text-[#ffffff]'>Investor Connections</h1>
                    <p className='max-w-sm text-sm text-[#858585] text-center'>
                    Find investors who align with your vision and access valuable advice and resources to grow your startup.
                    </p>
                </div>
                <Image src="https://img.icons8.com/?size=100&id=61&format=png&color=FFFFFF" alt='arrow' className='cursor-pointer w-[50px] border hover:bg-[#76b900] transition-all ease-out duration-200 border-white rounded-full p-3'/>
            </div>
        </div>
    </div>
  )
}

export default Additional
