import React ,{useState} from 'react'
import logo from './../Assests/hi.png'
import { Link } from 'react-scroll';
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

        <div className='fixed w-full h-[80px] flex justify-between px-4 items-center bg-[#000000] text-[#d9d9d9]'>
    
               <img src={logo} alt="logo"  style={{width:'250px'}}  className='pt-10 ' ></img>
        
                <div className='hidden md:flex'>
               <ul className='hidden md:flex'>
                <li>
                <Link to="home"  smooth={true} duration={500} > Home</Link>
                </li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li>
                <Link  to="Skills"  smooth={true}  duration={500} >Skills</Link></li>
                <li>
                <Link to="work" smooth={true} duration={500} >Work</Link> </li>
                <li><Link to="contact"  smooth={true} duration={500} > Contact</Link>
                </li>
               </ul>
            </div>


            {/* Hamburger Menu */}
            <div  onClick={handleClick} className='md:hidden z-10 pr-2'>
            {!nav?<FaBars size={30}/>:<FaTimes size={30}/>}
            </div>

            {/* Mobile Menu */}
            <div className={!nav?'hidden':' absolute top-0 left-0 w-full h-screen bg-[#191616] flex flex-col justify-center items-center'}>
            <ul>
                <li className='py-6 text-3xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li className='py-6 text-3xl'>
                <Link onClick={handleClick}  to="home"  smooth={true} duration={500} > Home</Link>
                </li>
                <li className='py-6 text-3xl'>
                <Link  onClick={handleClick}  to="Skills"  smooth={true}  duration={500} >Skills</Link>
                </li>
                <li className='py-6 text-3xl'><Link  onClick={handleClick} to="work" smooth={true} duration={500} >Work</Link></li>
                <li className='py-6 text-3xl'><Link onClick={handleClick}  to="contact"  smooth={true} duration={500} > Contact</Link></li>
               </ul>
            </div>

            {/* Social Icons*/}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/duaa-shahid-889323232/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/duaaxkhan'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='duaashahidkhan01@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li> */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1VWBejeAu37KYai4U42zzh2_-VGBIXtlo/view'
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