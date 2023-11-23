import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'


const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };


  return (
    <div>
    <div className="navbar">
  <div className="flex-1">
    <h3 className="text-4xl text-white font-bold">Arrpit</h3>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
     <li><Link to="/projects" className='text-2xl font-bold text-white'>Projects</Link></li>
      {/* <li><Link to="/blogs" className='text-2xl font-bold text-white'>My Blogs</Link></li> */}
      <li><Link to="/contact" className='text-2xl font-bold text-white'>Contact Me</Link></li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar

