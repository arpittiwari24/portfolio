import React from 'react'

const Skills = () => {
  return (
    <div>
      <div>
      <h1 className="max-sm:text-4xl text-white text-center text-5xl font-bold py-10 pt-12">Skills</h1>
      </div>
      <div className="flex flex-wrap justify-center text-7xl text-black">
      <div className="flex justify-center w-1/3 sm:w-auto md:w-1/5 lg:w-auto px-4 py-4 md:px-10 hover:animate-pulse"> 
      <i class="fa-brands fa-html5"></i>
    </div>
    <div className="flex justify-center w-1/3 sm:w-auto md:w-1/5 lg:w-auto px-4 py-4 md:px-10 hover:animate-pulse">
      <i class="fa-brands fa-css3-alt"></i>
    </div>
    <div className="flex justify-center w-1/3 sm:w-auto md:w-1/5 lg:w-auto px-4 py-4 md:px-10 hover:animate-pulse">
      <i class="fa-brands fa-js"></i>
    </div>
        <div className="flex justify-center w-1/3 sm:w-auto md:w-1/5 lg:w-auto px-4 py-4 md:px-10 hover:animate-pulse"><i class="fa-brands fa-react"></i></div>
        <div  className="flex justify-center w-1/3 sm:w-auto md:w-1/5 lg:w-auto px-4 py-4 md:px-10 hover:animate-pulse"><i class="fa-brands fa-node-js"></i></div>
        <div  className="flex justify-center w-1/3 sm:w-auto md:w-1/5 lg:w-auto px-4 py-4 md:px-10 hover:animate-pulse"><i class="lni lni-mongodb"></i></div>
        <div  className="flex justify-center w-1/3 sm:w-auto md:w-1/5 lg:w-auto px-4 py-4 md:px-10 hover:animate-pulse"><i class="lni lni-tailwindcss"></i></div>
        <div className="flex justify-center w-1/3 sm:w-auto md:w-1/5 lg:w-auto px-4 py-4 md:px-10 hover:animate-pulse"><i class="fa-brands fa-github"></i></div>
        <div className="flex justify-center w-1/3 sm:w-auto md:w-1/5 lg:w-auto px-4 py-4 md:px-10 hover:animate-pulse"><i class="lni lni-bootstrap"></i></div>
        <div className="flex justify-center w-1/3 sm:w-auto md:w-1/5 lg:w-auto px-4 py-4 md:px-10 hover:animate-pulse"><i class="lni lni-postman"></i></div>
        </div>
        </div>
    
  )
}

export default Skills