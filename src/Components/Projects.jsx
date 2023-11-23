import { motion } from "framer-motion";
import React from "react";
import clock from "../../public/clock image.jpg"
import weather from "../../public/weather image.jpg"
import movie from "../../public/Movies.jpg"
import gym from "../../public/evogym.jpg"

const Projects = () => {

  const projects = [
    {
      img: clock,
      title: "Clock App",
      desc: " A multi author blog. Built with Node.js, MongoDB, React, Redux and Tailwind CSS ",
      live: "https://devlogg.onrender.com/",
      code: "https://github.com/Coderamrin/devlog",
    },
    {
      img: weather,
      title: "Weather App",
      desc: "Free website template directory for SaaS and Degital Agency. Built with Bootstrap, JQuery and JavaScript",
      live: "https://uilogs.xyz/",
      code: "https://github.com/Coderamrin/html-templates",
    },
    {
      img: movie,
      title: "Movie Search",
      desc: "Frontend Mentor challange directory, solved with vanilla CSS",
      live: "https://build-10-css-projects.netlify.app/",
      code: "https://github.com/Coderamrin/build-10-css-projects",
    },
    {
      img: gym,
      title: "Evo Gym",
      desc: "Quote search app. Used Quotable API for the quotes and React, Redux on the frontend",
      live: "https://get-inspirred.netlify.app/",
      code: "https://github.com/Coderamrin/get-inspired",
    },
  ]; 

  return (
    <section>
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
      <div className=" md:grid-cols-2 items-center md:justify-between">
        <h1 className="text-white text-center text-4xl md:text-5xl font-bold py-10">My Blogs</h1>
        </div>
</div>
      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} className="w-96 h-60"/>
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0  w-96 h-60  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
