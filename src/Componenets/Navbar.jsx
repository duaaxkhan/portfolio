import React ,{useState} from 'react'
import logo from './../Assests/hi.png'
import {
   FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
 
  } from 'react-icons/fa';
  import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
const Navbar = () => {
    const[nav,setNav]=useState(false)
    const handleClick= () => setNav(!nav)
  return (

        <div className='fixed w-full h-[80px] flex justify-between px-4 items-center bg-[#191616] text-[#d9d9d9]'>
    
               <img src={logo} alt="logo"  style={{width:'350px'}}  className='pt-10 ' ></img>
        
                <div className='hidden md:flex'>
               <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skill</li>
                <li>Work</li>
                <li>Contact</li>
               </ul>
            </div>


            {/* Hamburger Menu */}
            <div  onClick={handleClick} className='md:hidden z-10 pr-2'>
            {!nav?<FaBars size={40}/>:<FaTimes size={40}/>}
            </div>

            {/* Mobile Menu */}
            <div className={!nav?'hidden':' absolute top-0 left-0 w-full h-screen bg-[#191616] flex flex-col justify-center items-center'}>
            <ul>
                <li className='py-6 text-3xl'>About</li>
                <li className='py-6 text-3xl'>Home</li>
                <li className='py-6 text-3xl'>Skill</li>
                <li className='py-6 text-3xl'>Work</li>
                <li className='py-6 text-3xl'>Contact</li>
               </ul>
            </div>

            {/* Social Icons*/}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
                
            </ul>
            </div> 
     </div>
      

  )
}

export default Navbar
