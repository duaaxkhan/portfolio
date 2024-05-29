import React from 'react'
import img1 from './../Assests/workImg.jpeg';
import img2 from './../Assests/realestate.jpg';
const Work = () => {
  return (
    <div  name="work" className='w-full md:h-screen bg-[#191616]'>
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center items-center w-full h-full text-[#8892b0]'> 
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#fcc0c5] text-[#8892b0] sm:text-right '>Work</p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>
        <div 
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-10'>
          <div   style={{backgroundImage:`url(${img1})`}}
          className='shadow-lg shadow-[#a1696e] group container rounded-md flex justify-center items-center mx-auto content-div'>
          
          
         {/* hover */}
          
           <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React Js Application
                
              </span>
              <div className='pt-8  text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-3 py-3 m-2 bg-[#a1696e] text-white font-bold text-lg'>Demo
          
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-3 py-3 m-2 bg-[#a1696e] text-white font-bold text-lg'>Code
                    
                  </button>
                </a>

              </div>

            </div>
          </div>
          <div   style={{backgroundImage:`url(${img1})`}}
          className='shadow-lg shadow-[#a1696e] group container rounded-md flex justify-center items-center mx-auto content-div'>
          
          
         {/* hover */}
          
           <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React Js Application
                
              </span>
              <div className='pt-8  text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-3 py-3 m-2 bg-[#a1696e] text-white font-bold text-lg'>Demo
          
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-3 py-3 m-2 bg-[#a1696e] text-white font-bold text-lg'>Code
                    
                  </button>
                </a>

              </div>

            </div>
          </div>

          <div   style={{backgroundImage:`url(${img1})`}}
          className='shadow-lg shadow-[#a1696e] group container rounded-md flex justify-center items-center mx-auto content-div'>
          
          
         {/* hover */}
          
           <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React Js Application
                
              </span>
              <div className='pt-8  text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-3 py-3 m-2 bg-[#a1696e] text-white font-bold text-lg'>Demo
          
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-3 py-3 m-2 bg-[#a1696e] text-white font-bold text-lg'>Code
                    
                  </button>
                </a>

              </div>

            </div>
          </div>


          

        </div>
      </div>
    </div>
  )
}

export default Work
