import { motion } from "framer-motion";
import React from "react";
import todo from "/todo.jpg"
import lyrics from "/Lyricist.jpg"
import petite from "/petite.jpg"
import poshan from "/poshan.jpg"

const Projects = () => {

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {/* FIRST */}
   <div className="card card-compact max-sm:w-72 w-96 shadow-lg">
  <figure><img src={lyrics} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Lyricist</h2>
    <p></p>
    <div className="card-actions justify-end ">
    <a href="https://lyricist-ten.vercel.app/" target="_blank"><button className="btn btn-ghost outline">Demo</button></a>
     <a href="https://github.com/arpittiwari24/Lyricist" target="_blank"><button className="btn btn-ghost outline">Code</button></a>
    </div>
  </div>
</div>
 {/* Second */}
 <div className="card card-compact max-sm:w-72 w-96 shadow-xl">
  <figure><img src={poshan} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Poshan</h2>
    <p></p>
    <div className="card-actions justify-end">
    <a href="https://poshan.in" target="_blank"><button className="btn btn-ghost outline">Demo</button></a>
    </div>
  </div>
</div>

{/* Third */}

<div className="card card-compact max-sm:w-72 w-96 shadow-xl">
  <figure><img src={petite} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Petite</h2>
    <p></p>
    <div className="card-actions justify-end">
     <a href="https://petite-x.vercel.app/" target="_blank"><button className="btn btn-ghost outline">Demo</button></a>
     <a href="https://github.com/arpittiwari24/petite" target="_blank"><button className="btn btn-ghost outline">Code</button></a>
    </div>
  </div>
</div>

{/* Fourth */}

<div className="card card-compact max-sm:w-72 w-96 shadow-xl">
  <figure><img src={todo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">TodoApp</h2>
    <p></p>
    <div className="card-actions justify-end">
      <a href="https://todo-frontend-mu-two.vercel.app/" target="_blank"><button className="btn btn-ghost outline">Demo</button></a>
      <a href="https://github.com/arpittiwari24/todo-frontend" target="_blank"><button className="btn btn-ghost outline">Code</button></a>
    </div>
  </div>
</div>
    </div>
  );
};

export default Projects;
