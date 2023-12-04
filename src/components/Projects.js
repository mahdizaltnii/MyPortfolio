import React from "react";
import laboratory from "../assets/laboratory.png"
import joodbooking from "../assets/Joodbooking.png"

const Projects = ({ darkMode }) => {
  const projects = [
    {
      img:laboratory ,
      title: "Laboratory Management System",
      desc: " A web application for laboratory management. Built with Angular.js, SpringBoot, Mysql,PrimeNG,Python and MongoDB",
      code: "https://github.com/mahdizaltnii/Backoffice",
    },
    {
      img: joodbooking,
      title: "Customer Learning Plateform",
      desc: "A web application for customer learning. Built with Vue.js, Fastify,Nodejs,PrismaORM,Turbo and Tailwind CSS",
      code: "https://github.com/mahdizaltnii/Customer-learning.git",
    },
    
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <section
        className="bg-slate-100 dark:bg-gray-900 text-gray-800 dark:text-white px-5 py-10 md:py-24 font-mono"
        id="projects"
      >
        <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
          <div className="about-info mb-5">
            <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] lg:w-[300px] border-indigo-600 pb-2">
              Projects
            </h2>

            <p className="pb-5 text-sm md:text-base lg:text-lg">
              These are some of my best projects. I have built these with
              VueJs,Angular Java SpringBoot,NodeJs and Tailwind CSS. Check them
              out.
            </p>
          </div>

          <div className="about-img"></div>
        </div>

        <div className="projects container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => {
            return (
              <div className="relative" key={i}>
                <img src={project.img} alt={project.title} className="object-cover h-full w-full" />
                <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                  <p className="py-5 text-center font-bold px-2 text-white text-sm md:text-base lg:text-lg">
                    {project.desc}
                  </p>

                  <div className="mx-auto">
                    
                    <a
                      href={project.code}
                      className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold text-sm md:text-base lg:text-lg"
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
    </div>
  );
};

export default Projects;
