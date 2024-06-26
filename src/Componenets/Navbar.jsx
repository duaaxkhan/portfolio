import React, { useState } from 'react';
import logo from './../Assests/hi.png';
import { Link } from 'react-scroll';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between px-4 items-center bg-[#000000] text-[#d9d9d9]'>
      <img src={logo} alt="logo" style={{ width: '250px' }} className='pt-10 ' />

      {/* Desktop Menu */}
      <div className='hidden md:flex'>
        <ul className='hidden md:flex'>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="Skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="work" smooth={true} duration={500}>Work</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </div>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className='md:hidden z-10 pr-2'>
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Mobile Menu */}
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center'}>
        <ul>
          <li className='py-6 text-3xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='py-6 text-3xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
          <li className='py-6 text-3xl'><Link onClick={handleClick} to="Skills" smooth={true} duration={500}>Skills</Link></li>
          <li className='py-6 text-3xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link></li>
          <li className='py-6 text-3xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>

        {/* Social Icons for Mobile */}
        <div className='flex justify-center mt-4'>
          <a href='https://www.linkedin.com/in/duaa-shahid-889323232/' className='mx-2 text-gray-300'><FaLinkedin size={30} /></a>
          <a href='https://github.com/duaaxkhan' className='mx-2 text-gray-300'><FaGithub size={30} /></a>
          <a href='https://drive.google.com/file/d/1mfscIGRgKxk3oq-jZ3f3mXr-hkiHnN6e/view?usp=sharing' className='mx-2 text-gray-300'><BsFillPersonLinesFill size={30} /></a>
        </div>
      </div>

      {/* Social Icons for Desktop */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/duaa-shahid-889323232/'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/duaaxkhan'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://drive.google.com/file/d/1mfscIGRgKxk3oq-jZ3f3mXr-hkiHnN6e/view?usp=sharing'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;