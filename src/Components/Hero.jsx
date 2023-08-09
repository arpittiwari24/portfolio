import React from 'react'

const Hero = () => {
  return (
    <div>
    <div className="hero min-h-screen max-sm:pt-16 ">
  <div className="hero-content flex-col md:flex-row-reverse  px-8 ">
    <img src="DALL·E 2023-06-23 12.12.00 - a buffallo coding on a laptop while playing football.png" className=" max-sm:w-48  max-w-sm  rounded-full shadow-2xl " />
    <div className='px-6 '>
      <h1 className="text-white max-sm:text-5xl text-7xl font-bold ">Hello !!</h1>
      <p className="text-white text-3xl py-10 ">I am Arrpit Tiwari , a Full-Stack Developer who codes like a wizard and debugs like a pro, turning bugs into distant memories, and websites into techno masterpieces! </p>
      <a href="https://bit.ly/3Xo9uay" target="_blank"><button  className="btn btn-warning animate-bounce hover:btn-success">View  Resume</button></a>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero