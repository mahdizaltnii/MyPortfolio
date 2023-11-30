import React from "react";
import AboutImg from "../assets/about-img.png";

const About = ({ darkMode }) => {
  return (
    <div className={darkMode ? "dark" : ""}> 
    <section
      className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-5 py-32 font-mono"
      id="about"
    >
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is Mahdi Zaltni. I am a Software engineer. I have a
            burning desire to put together well-written code that helps to
            create advanced applications which are fit for purpose, functionally
            correct and meets the user's precise needs
          </p>
          <p className="pb-5">
            I am proficient in Frontend skills like Angular, Vuejs ,React.js,
            Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.
          </p>

          <p className="pb-5">
            In backend I Have experience in Java Spring Boot,.NET, Node.js,
            Fastify.js,Sql, MongoDB, and Mongoose
          </p>

          <p className="pb-5">
            My key strengths include being able to use web based systems that
            create a highly interactive user experience. On a personal level he
            is loaded with energy and passion
          </p>
          <p>
            Right now i would like to join a company where there is a culture of
            encourangement,respect and teamwork
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;
