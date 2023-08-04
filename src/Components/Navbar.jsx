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
    <h3 className="text-4xl text-white font-bold">Arrpit</h3>
    </div>
    </div>
  )
}

export default Navbar

