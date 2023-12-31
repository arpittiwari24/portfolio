import React from 'react'
import { motion } from 'framer-motion'
import image from "/buffalo.svg"

const Hero = () => {
  return (
    <div>
    <div className="hero pt-14 pb-24 max-sm:pb-16 max-sm:pt-16 ">
  <div className="hero-content flex-col md:flex-row-reverse  px-8 ">
  <motion.div initial={{ scale: 0 }}
    animate={{  scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 20
    }}>
    <img src={image} className=" max-sm:w-48  max-w-sm  rounded-full  " />
    </motion.div>
    <div className='px-6 '>
      <h1 className="text-white max-sm:text-5xl text-7xl font-bold font-serif">Hello !!</h1>
      <p className="text-white text-3xl py-10 max-sm:text-xl">I am Arrpit Tiwari , a Full-Stack Developer. I can debug your code faster than a hummingbird on Red Bull. Just don't ask me to explain it in plain English.</p>
      <a href="https://drive.google.com/file/d/10WpAgG2qkYyXEj4psnSxSoObePuoU9Sw/view?usp=sharing" target="_blank"><button  className="btn btn-warning animate-bounce hover:btn-success">View  Resume</button></a>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero