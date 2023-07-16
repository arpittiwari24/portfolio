import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col space-y-4 ">
    <div className="flex flex-row ">

      {/* Clock App */}
     <div className="basis-1/3 px-8 ">
        <div className="card card-compact w-96  bg-base-100  shadow-xl">
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
      <div className="basis-1/3   px-8  " >
        <div className="card card-compact w-96   bg-base-100 shadow-xl">
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

      <div className="basis-1/3  px-8 " >
        <div className="card card-compact w-96  bg-base-100 shadow-xl">
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

     <div className="flex flex-row ">
     <div className="basis-1/3  px-8 ">
        <div className="card card-compact w-96  bg-base-100 shadow-xl">
          <figure>
            <img
              src="WhatsApp Image 2023-07-16 at 18.40.42.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">TinDog</h2>
            
            <div className="card-actions justify-end">
            <a href="https://gym-page-ten.vercel.app/" target="_blank"><button className="btn btn-primary">Demo</button></a>
            </div>
          </div>
        </div>
      </div>


      <div className="basis-1/3  px-8 " >
        <div className="card card-compact w-96  bg-base-100 shadow-xl">
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
      <div className="basis-1/3  px-8 " >
        <div className="card card-compact w-96  bg-base-100 shadow-xl">
          <figure>
            <img
              src="dice.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dice Game</h2>
            
            <div className="card-actions justify-end">
            <a href="https://dice-game-one-sigma.vercel.app/?vercelToolbarCode=BwHkelAjdOm31r2" target="_blank"><button className="btn btn-primary">Demo</button></a>
            </div>
          </div>
        </div>
      </div>
     </div>


     
    </div>
  );
};

export default Projects;
