import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='py-10'>
        <h1 className="text-white text-center text-3xl md:text-5xl font-bold py-10 underline">Connect With Me</h1>
      </div>
      <div className="px-8 text-center">
          <a href="https://twitter.com/arrpitttwts" target="_blank" className="text-7xl px-8 text-black hover:animate-pulse"><i class="fa-brands fa-twitter"></i></a>
          <a href="https://github.com/arpittiwari24" target="_blank" className="text-7xl px-8 text-black hover:animate-pulse"><i class="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/arrpit-tiwari-0447b5228/" target="_blank" className="text-7xl px-8 text-black hover:animate-pulse"><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://www.instagram.com/arrpit.tiwari/" target="_blank" className="text-7xl px-8 text-black hover:animate-pulse"><i class="fa-brands fa-instagram"></i></a>
          <a href="mailto:atofficial2410@gmail.com" target="_blank" className="text-7xl px-8 text-black hover:animate-pulse"><i class="fa-solid fa-envelope"></i></a>
      </div>
    </div>
  )
}

export default Contact