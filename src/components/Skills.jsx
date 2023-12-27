import React from 'react'
const PY_LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
const HTML5_LOGO = "https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png"
const CSS_LOGO = "https://icons-for-free.com/download-icon-css3-1331550887274886564_512.png"
const JS_LOGO = "https://logosdownload.com/logo/javascript-logo-big.png"
const REACT_LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
const REDUX_LOGO = "https://cdn.worldvectorlogo.com/logos/redux.svg"
// const GIT_LOGO = "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
// const SQL_LOGO = "https://www.freeiconspng.com/thumbs/sql-server-icon-png/sql-server-icon-png-29.png"
const SQLALCHEMY_LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/SQLAlchemy.svg/640px-SQLAlchemy.svg.png"
const FLASK_LOGO = "https://www.seekpng.com/png/detail/875-8753366_flask-framework-logo-svg.png"
const JAVA_LOGO = "https://static.vecteezy.com/system/resources/previews/022/101/050/original/java-logo-transparent-free-png.png"

const Skills = () => {
    return (
      <div name='skills' className='w-full h-screen bg-[#f1ecea] text-[#1f2435]'>
        
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 '>Skills</p>
                <p className='py-4'> Technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={PY_LOGO} alt="Python icon" />
                    <p className='my-4'>Python</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JAVA_LOGO} alt="Java icon" />
                    <p className='my-4'>Java</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JS_LOGO} alt="JS icon" />
                    <p className='my-4'>JavaScript</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML5_LOGO} alt="HTML icon" />
                    <p className='my-4'>HTML 5</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS_LOGO} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={REACT_LOGO} alt="React icon" />
                    <p className='my-4'>React</p>
                </div> 
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={PY_LOGO} alt="Tailwind icon" />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={REDUX_LOGO} alt="Redux icon" />
                    <p className='my-4'>Redux</p>
                </div>  
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={FLASK_LOGO} alt="Flask icon" />
                    <p className='my-4'>Flask</p>
                </div>  
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={SQLALCHEMY_LOGO} alt="SQLAchemy icon" />
                    <p className='my-4'>SQLAlchemy</p>
                </div> 
            </div>
            {/* add sqlite, mysql, postgressql... fix styling */}
        </div>
      </div>
    );
  };
  
  export default Skills;