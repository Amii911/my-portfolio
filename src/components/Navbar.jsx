import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

function Navbar() {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#CFDCD1] text-[#1f2435] font-bold'>
      <div>Aminat Adebayo</div>
      {/* menu */}
      <div>
        <ul className='flex'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* Hamburger */}
      <div className='hidden'>
        <FaBars/>
      </div>

      {/* Mobile menu */}
      <ul className='hidden'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Project</li>
          <li>Contact</li>
      </ul>

      {/* social icons */}
      <div></div>
    </div>

  )
}

export default Navbar