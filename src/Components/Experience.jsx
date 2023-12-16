import React from 'react'

const Experience = () => {
  return (
    <section  className="flex flex-col gap-4  max-sm:px-2 px-20 py-12 max-sm:py-6 ">
           <h1 className=" font-bold font-serif text-5xl underline pt-0 pb-20 text-center max-sm:text-4xl">Experience</h1>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl max-sm:text-xl font-semibold">
                    Full Stack Developer Intern
                  </h3>
                  <p className="text-lg underline italic"><a href="https://missionelixir.com/" target='_blank'>Silverseven Enterprises</a></p>
                </div>
                <div className="text-xl max-sm:text-xs">Dec-2023 - Present</div>
              </div>
              <ul className="list-disc pl-4">
                <li>
                  About to work on the Mission Elixir Website .....
                </li>
              </ul>
              <div className="flex justify-between items-center pt-12">
                <div>
                  <h3 className="text-2xl max-sm:text-xl font-semibold">
                    Freelance Developer 
                  </h3>
                  <p className="text-lg underline italic"><a href="https://poshan.in/" target='_blank'>Poshan for All</a></p>
                </div>
                <div className="text-xl max-sm:text-xs">Nov-2023 - Present</div>
              </div>
              <ul className="list-disc pl-4">
                <li className='py-2'>
                  Developing and maintaining web application for the Poshan for All (NGO)
                </li>
                <li className='py-2'>
                  Working closely with the client to understand their needs and
                  requirements
                </li>
                <li className='py-2'>
                  Delivering high-quality work on time and within budget
                </li>
              </ul>
            </div>
          </section>
  )
}

export default Experience