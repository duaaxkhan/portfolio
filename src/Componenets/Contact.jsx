import React from 'react'

export const Contact = () => {
  return (
    <div name="contact" className='w-full  h-screen  bg-[#000000] mx-auto  flex items-center  justify-center  '>
       <form method='POST' action="https://getform.io/f/ebpdelvb" className='flex flex-col max-w-[600px] w-full  h-full justify-center'>
            <div className='py-20'>
                <p className='text-4xl pt-30 last:font-bold inline border-b-4 border-[#fcc0c5] text-[#ffffff] sm:text-right '>Contact</p>
                <p className='text-[#c9cacc] py-4 md:text-3xl sm:text-2xl '> Submit the form below or shoot me an email - duaashahidkhan01@gmail.com</p>
            </div>
        
              <input className='bg-[#58595b] p-2 text-[#fcc0c5]' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#58595b] text-black' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#58595b] p-2 text-black' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2  hover:border-[#fcc0c5] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        
        </form>
       </div>
     



  )
}
export default Contact 
