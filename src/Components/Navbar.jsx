import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
           <div className="navbar ">
  <div className="flex-1">
  <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-ghost text-2xl mobile:text-sm text-white drawer-button">Arrpit</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a href="https://twitter.com/arrpitttwts" target="_blank" className="text-2xl mobile:text-sm">Twitter</a></li>
      <li><a href="https://github.com/arpittiwari24" target="_blank" className="text-2xl mobile:text-sm">Github</a></li>
      <li><a href="https://www.linkedin.com/in/arrpit-tiwari-0447b5228/" target="_blank" className="text-2xl mobile:text-sm">LinkedIn</a></li>
      <li><a href="mailto:atofficial2410@gmail.com" target="_blank" className="text-2xl mobile:text-sm">Email</a></li>
    </ul>
  </div>
</div>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 ">
      <li ><Link to="/" className='text-xl mobile:text-sm btn btn-ghost mobile:px-0.5'>Skills</Link></li>
      <li><Link to="/" className='text-xl mobile:text-sm btn btn-ghost mobile:px-0.5'>Projects</Link></li>
      <li><Link to="/" className='text-xl mobile:text-sm btn btn-ghost mobile:px-0.5'>Contact</Link></li>
    </ul>
    <Outlet />
  </div>
</div>
    </div>
  )
}

export default Navbar

