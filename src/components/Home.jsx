import React from 'react';
import { TypeAnimation } from 'react-type-animation';
// import {HiArrowNarrowRight} from 'react-icons/hi';

function Home() {
  return (
    <div name='home' className='w-full h-screen'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p>Welcome!</p>
            <h1>I'm Aminat Adebayo | Brooklyn, NY</h1>
            <h2> <TypeAnimation
      sequence={[
        'FULL-STACK SOFTWARE ENGINEER',
        1000,
        'CODER',
        1000,
        'TECH ENTHUSIAST',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    /></h2>
        </div>
    </div>
  )
}

export default Home