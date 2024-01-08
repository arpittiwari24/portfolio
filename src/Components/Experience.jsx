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
                  <p className="text-lg underline italic"><a href="https://silverseven.com/" target='_blank'>Silverseven Enterprises</a></p>
                </div>
                <div className="text-xl max-sm:text-xs">Dec-2023 - Present</div>
              </div>
              <ul className="list-disc pl-4">
                <li className='py-2'>
                Developed a comprehensive website for the NGO Poshan for All as part of a collaboration with Silverseven
Enterprises.
                </li>
                <li className='py-2'>
                Implemented the entire web application using the MERN stack (MongoDB, Express.js, React.js, Node.js) from
scratch, showcasing full-stack development skills.
                </li>
                <li className='py-2'>
                Took ownership of the project, managing the entire development lifecycle independently as a full stack developer
intern
                </li>
                <li className="py-2">
                • Implemented robust backend functionalities using Node.js and Express.js, including database management with
MongoDB.
                </li>
                <li className="py-2">
                Collaborated with the NGO stakeholders to gather requirements, incorporating feedback for continuous
improvement.
                </li>
              </ul>
            </div>
          </section>
  )
}

export default Experience