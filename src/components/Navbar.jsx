import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaMediumM} from 'react-icons/fa';
import { Link } from 'react-scroll';

function Navbar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#CFDCD1] text-[#1f2435] z-10'>
    
      <div className='text-2xl font-bold'>Aminat Adebayo</div>
      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        { !nav ? <FaBars/> : <FaTimes/> }
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#CFDCD1] flex flex-col justify-center items-center'}
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
  
               {/* social icons */}
          <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
           <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300'>
              <a className='flex justify-between items-center w-full text-[#1f2435]'
              href="https://www.linkedin.com/in/a-adebayo/">
                LinkedIn <FaLinkedin size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300'>
              <a className='flex justify-between items-center w-full text-[#1f2435]'
              href="https://github.com/Amii911">
                Github <FaGithub size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300'>
              <a className='flex justify-between items-center w-full text-[#1f2435]'
              href="https://medium.com/@bkcodergirl911">
                Medium <FaMediumM size={30}/>
              </a>
            </li>
           </ul>
        </div>
    </div>

  )
}

export default Navbar
