import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

const Home = ({ darkMode }) => {
  
  return (
    <>
      <Hero darkMode={darkMode}  />
      <About darkMode={darkMode}  />
      <Projects  darkMode={darkMode} />
      <Blog darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </>
  );
};

export default Home;
