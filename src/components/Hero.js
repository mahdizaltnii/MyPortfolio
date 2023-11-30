import React,{ useState } from "react";
import HeroImg from "../assets/hero-img.png";

import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Hero = ({ darkMode,toggleDarkMode  }) => {

  return (
    <div className={darkMode ? "dark" : ""}> 
    <section className=" bg-white text-gray-800 dark:bg-gray-900 px-5  dark:text-white py-32 font-mono">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">M</span>ahdi{" "}
            <span className="text-accent">Z</span>altni <br />
            Software engineer
          </h1>

          <p className="py-5  font-normal">
            {" "}
            I am a Passionate Software engineer and a Problem Solver: Where
            Challenges Spark Creativity
          </p>

          <div className="flex py-5 ">
            <a
              href="https://github.com/mahdizaltnii"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/mahdi-zaltni/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-red-500  border-2 border-[#ff7474] text-white  px-5  py-2 rounded-lg hover:bg-transparent hover:text-black"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
 
    </div>
  );
};

export default Hero;
