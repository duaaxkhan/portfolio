import React from 'react'
import html from '/Users/duaashahid/Desktop/portfolio/src/Assests/html.png'
import css from '/Users/duaashahid/Desktop/portfolio/src/Assests/css.png'
import js from '/Users/duaashahid/Desktop/portfolio/src/Assests/javascript.png'
import git from '/Users/duaashahid/Desktop/portfolio/src/Assests/github.png'
import mongo from '/Users/duaashahid/Desktop/portfolio/src/Assests/mongo.png'
import  react from '/Users/duaashahid/Desktop/portfolio/src/Assests/react.png'
import tailwind from '/Users/duaashahid/Desktop/portfolio/src/Assests/tailwind.png'
import node from './../Assests/node.png'

function Skills() {
  return (
    <div name='Skills' className="w-full h-screen bg-[#191616]">
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center items-center w-full h-full text-[#8892b0]'>
        <div className=' '>
            <p className='text-4xl font-bold inline border-b-4 border-[#fcc0c5] text-[#8892b0] sm:text-right '>Skills</p>
            <p  className='py-7'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={html} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={css} alt="cssicon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={js} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={react} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={git} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              
          </div>
      </div>

    </div>
  )
}

export default Skills
