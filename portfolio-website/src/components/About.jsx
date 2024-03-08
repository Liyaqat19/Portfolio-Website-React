import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function About() {
  return (
   
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm <TypeAnimation
                        sequence={[
                        "Liyaqat",
                        1000,
                        "a Web Developer",
                        1000,
                ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '1em', color: '#2fccbd' }}
      />
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
          Experienced web developer with a passion for crafting seamless and visually appealing online experiences,
           proficient in front-end and back-end technologies to bring creative visions to life.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-teal-400 hover:text-gray-800 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-teal-400 hover:text-gray-800 rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="rounded-full transition-shadow duration-300 ease-in-out hover:shadow-xl hover:shadow-teal-300/70"
            alt="hero"
            src='../Images/ProfileImg.jpg'
          />
        </div>
      </div>
    </section>
  )
}

export default About