import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col max-sm:justify-center space-y-4 md:justify-normal">
    <div className="md:flex  md:flex-row ">

      {/* Clock App */}
     <div className="max-sm:pb-10 md:basis-1/3 md:px-8 px-4 pl-10">
        <div className="card card-compact md:w-96 w-60 h-full  bg-base-100  shadow-xl">
          <figure>
            <img
              src="clock image.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Clock App</h2>
            
            <div className="card-actions justify-end">
              <a href="https://clock-app-coral-eight.vercel.app/" target="_blank"><button className="btn btn-primary">Demo</button></a>
            </div>
          </div>
        </div>
      </div>
        {/* Weather App */}
      <div  className="max-sm:pb-10 md:basis-1/3 md:px-8 px-4 pl-10" >
        <div className="card card-compact md:w-96 w-60 h-full bg-base-100  shadow-xl">
          <figure>
            <img
              src="weather image.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Weather App</h2>
            
            <div className="card-actions justify-end">
            <a href="https://weather-app-rho-dun.vercel.app/" target="_blank"><button className="btn btn-primary">Demo</button></a>
            </div>
          </div>
        </div>
      </div>

        {/* Third project */}

      <div className="max-sm:pb-10 md:basis-1/3 md:px-8 px-4 pl-10">
        <div className="card card-compact  md:w-96 w-60 h-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="Movies.jpg"
              alt="Movies"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Movie Search </h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Demo</button>
            </div>
          </div>
        </div>
      </div>
     </div>

     <div className=" md:flex md:flex-row ">


     <div className="max-sm:pb-10  md:basis-1/3 md:px-8 px-10 ">
        <div className="card card-compact md:w-96 w-60 h-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="talendropp.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Talentdrop Clone</h2>
            
            <div className="card-actions justify-end">
            <a href="https://talentdrop-clone.vercel.app/" target="_blank"><button className="btn btn-primary">Demo</button></a>
            </div>
          </div>
        </div>
      </div>


      <div  className="max-sm:pb-10 md:basis-1/3 md:px-8 px-4 pl-10" >
        <div className="card card-compact  md:w-96 w-60 h-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="evogym.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Evo Gym</h2>   
            
            <div className="card-actions justify-end">
            <a href="https://gym-page-ten.vercel.app/" target="_blank"><button className="btn btn-primary">Demo</button></a>
            </div>
          </div>
        </div>
      </div>


      <div  className="max-sm:pb-10 md:basis-1/3 md:px-8 px-4 pl-10" >
        <div className="card card-compact md:w-96 w-60 h-full bg-base-100 shadow-xl">
          <figure>
            <img
              src="Todo-App.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Todo-App</h2>
            
            <div className="card-actions justify-end">
            <a href="https://todo-frontend-mu-two.vercel.app/" target="_blank"><button className="btn btn-primary">Demo</button></a>
            </div>
          </div>
        </div>
      </div>
     </div>


     
    </div>
  );
};

export default Projects;
