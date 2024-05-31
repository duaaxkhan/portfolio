import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full  h-screen bg-[#000000] '>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#fcc0c5] text-2xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          DUAA SHAHID
        </h1>
        <h2 className='md:text-5xl  sm:3xl font-bold text-[#8892b0]'>
          I'm a Computer Software Engineer.
        </h2>
        <p className='text-[#babdc6] md:text-2xl sm:text-xl py-4 max-w-[700px]'>
          specializing in designing exceptional digital experiences. Currently, I’m focused on
          building responsive and user-friendly web applications which are both captivating and functional.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-gray-800 hover:border-[#fcc0c5]'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home