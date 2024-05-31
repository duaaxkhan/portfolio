import React from 'react'
import img1 from './../Assests/workImg.jpeg';
import img2 from './../Assests/gait.guru.jpeg';
import img3 from './../Assests/emegram.jpeg';
import img4 from './../Assests/olive.jpeg';
const Work = () => {

  const handleDemoClick = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    // Replace the URL with your actual demo video URL
    window.open('https://drive.google.com/file/d/1KD7PntUBj4YsJY_c0wQBrTt-zdbcZurg/view?usp=sharing', '_blank');
  };
  const handleDemoClickemegram = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    // Replace the URL with your actual demo video URL
    window.open('https://drive.google.com/file/d/135VKiZvMDWFdK03lrFF14yajjaJfPsgH/view?usp=sharing', '_blank');
  };

  const handleCodeClick = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    // Replace the URL with your actual GitHub repository URL
    window.open('https://github.com/duaaxkhan/gaitguruplus', '_blank');
  };

  const handleCodeClickemegram = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    // Replace the URL with your actual GitHub repository URL
    window.open('https://github.com/duaaxkhan/emegram-react', '_blank');
  };
  return (
    <div  name="work" className=' w-full md:h-screen  bg-[#191616]'>
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center items-center w-full h-full text-[#8892b0]'> 
        <div className='py-20'>
          <p className='text-5xl  font-bold inline border-b-4 border-[#fcc0c5] text-[#8892b0] sm:text-right '>Work</p>
          <p className='py-6 text-2xl'>Check out some of my recent work</p>
        </div>
        <div 
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-10'>
          <div   style={{backgroundImage:`url(${img2})`}}
          className='shadow-lg shadow-[#a1696e] group container rounded-md flex justify-center items-center mx-auto content-div'>
          
          
         {/* hover */}
          
           <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold mb-30 text-white tracking-wider'>
                Gait.Guru
                
              </span>
              <div className='pt-8  text-center'>
                <a href=''>
                  <button  onClick={handleDemoClick} className='text-center rounded-lg px-3 py-3 m-2 bg-[#a1696e] text-white font-bold text-lg'>Demo
          
                  </button>
                </a>
                <a href='/'>
                  <button  onClick={handleCodeClick} className='text-center rounded-lg px-3 py-3 m-2 bg-[#a1696e] text-white font-bold text-lg'>Code
                    
                  </button>
                </a>

              </div>

            </div>
          </div>
          <div   style={{backgroundImage:`url(${img3})`}}
          className='shadow-lg shadow-[#a1696e] group container rounded-md flex justify-center items-center mx-auto content-div'>
          
          
         {/* hover */}
          
           <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                EMEGRAM
                
              </span>
              <div className='pt-8  text-center'>
                <a href='/'>
                  <button  onClick={handleDemoClickemegram}  className='text-center rounded-lg px-3 py-3 m-2 bg-[#a1696e] text-white font-bold text-lg'>Demo
          
                  </button>
                </a>
                <a href='/'>
                  <button  onClick={handleCodeClickemegram}className='text-center rounded-lg px-3 py-3 m-2 bg-[#a1696e] text-white font-bold text-lg'>Code
                    
                  </button>
                </a>

              </div>

            </div>
          </div>

          <div   style={{backgroundImage:`url(${img4})`}}
          className='shadow-lg shadow-[#a1696e] group container rounded-md flex justify-center items-center mx-auto content-div'>
          
          
         {/* hover */}
          
           <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Olive Website
                
              </span>
              <div className='pt-8  text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-3 py-3 m-2 bg-[#a1696e] text-white font-bold text-lg'>Demo
          
                  </button>
                </a>
                <a href='https://github.com/duaaxkhan/olive'>
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
