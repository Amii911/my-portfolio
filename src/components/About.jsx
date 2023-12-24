import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen text-[#1f2435]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-8'>
            <div className='sm:text-right text-4xl font-bold'>
              <img src='src/assets/Aminat Adebayo Headshot.JPG' alt='Headshot'
              className='max-w-[190px] w-full h-auto'/>
            </div>
            <div>
                <p>I am a Software Engineer based in Brooklyn, NY. In September 2022, I made a bold career shift, transitioning from a role as a Paralegal to immerse myself in the challenges of the tech world.
                <br/>
                I recently graduated from a coding bootcamp, where I developed and deployed applications using JavaScript, HTML, CSS, React, Python, SQLite, SQL Alchemy, and Flask. I discovered my passion for software engineering after I discovered the perpetual learning in the dynamic field of software engineering. I pride myself in being a life long learner.
                <br/>
                 Outside of work, I hang out with friends and family, try new foods, play tennis, yoga, attend meet ups, and help host Tech Gather NYC!
                </p>  
            </div>
            <br/>
            <a href='src/assets/Aminat_Adebayo Resume.pdf'
            >Download My Resume</a>
          </div>
      </div>
    </div>
  );
};

export default About;