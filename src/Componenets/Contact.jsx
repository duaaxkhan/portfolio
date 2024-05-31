import React from 'react'

export const Contact = () => {
  return (
    <div name="contact" className='w-full  h-screen  bg-[#191616] mx-auto  flex items-center  justify-center  '>
       <form method='POST' action="https://getform.io/f/ebpdelvb" className='flex flex-col max-w-[600px] w-full  h-full justify-center'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#fcc0c5] text-[#9b9ea7] sm:text-right '>Contact</p>
                <p className='text-[#8892b0] py-4'> Submit the form below or shoot me an email - vutukuri.kumar192st.niituniversity.in</p>
            </div>
        
              <input className='bg-[#ccd6f6] p-2 text-black ' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] text-black' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 text-black' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2  hover:border-[#fcc0c5] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        
        </form>
       </div>
     



  )
}
export default Contact 
