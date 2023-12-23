import React from 'react';
import { TypeAnimation } from 'react-type-animation';


function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#f1ecea]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-2xl font-bold text-[#1f2435]'>Welcome!</p>
            <h1 className='text-3xl text-[#1f2435]'>Hi, I'm Aminat Adebayo</h1>
            <h2 className='font-bold text-[#1f2435]'> <TypeAnimation
      sequence={[
        'FULL-STACK SOFTWARE ENGINEER',
        2000,
        'CODER',
        2000,
        'TECH ENTHUSIAST',
        2000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    /></h2>
        </div>
    </div>
  )
}

export default Home