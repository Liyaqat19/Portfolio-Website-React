import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../ProjectData";
function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-20 inline-block mb-4 hover:text-teal-400" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Explore my expertise in web development (HTML, CSS, JavaScript, React), programming languages (C#, Java), and RPA development (AA360) on my portfolio.
           A fusion of technical prowess and UI/UX design ensures a versatile skill set for creative project execution
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full group">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center group-hover:bg-teal-400">
                <BadgeCheckIcon className="text-teal-400 w-6 h-6 flex-shrink-0 mr-4 group-hover:text-gray-900" />
                <span className="title-font font-medium text-teal-400 group-hover:text-gray-900">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills