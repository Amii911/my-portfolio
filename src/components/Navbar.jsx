import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

function Navbar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#CFDCD1] text-[#1f2435]'>
      <div className='text-2xl font-bold'>Aminat Adebayo</div>
      {/* menu */}
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
      
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        { !nav ? <FaBars/> : <FaTimes/> }
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#CFDCD1] flex flex-col justify-center items-center'}>
          <li className='py-6 text-3xl'>Home</li>
          <li className='py-6 text-3xl'>About</li>
          <li className='py-6 text-3xl'>Skills</li>
          <li className='py-6 text-3xl'>Project</li>
          <li className='py-6 text-3xl'>Contact</li>
      </ul>

      {/* social icons */}
      <div className='hidden'></div>
    </div>

  )
}

export default Navbar