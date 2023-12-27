import React from 'react';
import {data} from '../projects/Project.js'

const Projects = () => {
    // projects file
    const project = data;

  return (
    <div name='work' className='w-full md:h-screen text-[#1f2435] bg-[#f1ecea]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-[#1f2435]'>
            Projects
          </p>
          <p className='py-6'>My recent work</p>
        </div>

{/* container for projects */}
<div className="grid sm:grid-cols-4 md:grid-cols-3 gap-4">
          
          {/* Gird Item */}
          {project.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-xl font-bold text-[#1f2435]] tracking-wider ">
        {item.name}
        <br></br>
        {item.summary}
        <br></br>
        Tech Stack: {item.tech}
      </span>
      <div className="pt-8 text-center ">
        <a href={item.github} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-[#8892b0] text-gray-700 font-bold text-lg"
          >
            Github
          </button>
        </a>
        <a href={item.live} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-[#8892b0] text-gray-700 font-bold text-lg"
          >
            Walkthough
          </button>
        </a>
      </div>
    </div>
  </div>
))}


</div>
      </div>
    </div>
  );
};
export default Projects