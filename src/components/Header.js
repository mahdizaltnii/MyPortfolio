import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);

  return (
    <div className={darkMode ? "dark" : ""}> 
    
    <div className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 font-mono">
        <nav className="py-10  flex justify-between dark:text-white">
          <h1 className="font-burtons text-xl">developedbyme</h1>
          <ul className="flex items-center font-burtons">
           <li>
             <a href="/#about">About</a>
           </li>
           <li>
             <a href="/#projects">Projects</a>
           </li>
           <li>
             <a  href="/#blog">Blog</a>
           </li>
           <li>
             <a href="/#contact">Contact</a>
           </li>
           <li>
             {/* <a
               href="https:drive.google.com/file/d/1ugumpTwoA8vtAAWw2ezI0CZP2IGUwPzF/view"
               target="_blank"
               without
               rel="noreferrer"
             >
               Resume
             </a> */}
           </li>
         </ul>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill
                onClick={toggleDarkMode}
                className=" cursor-pointer text-2xl"
              />
            </li>

            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
    </div>
  </div>


    // <header className="flex justify-between px-5 py-3 bg-primary text-white fixed w-full z-10 ">
    //   <a
    //     href="/"
    //     className="logo text-2xl  text-accent font-extrabold font-Roboto"
    //   >
    //     Mahdi ZALTNI
    //   </a>

    //   {/* Desktop Nav */}
    //   <nav className="hidden md:block text-lg font-extrabold font-changa px-7">
    //     <ul className="flex">
    //       <li>
    //         <a href="/#about">About</a>
    //       </li>
    //       <li>
    //         <a href="/#projects">Projects</a>
    //       </li>
    //       <li>
    //         <Link to="/blog">Blog</Link>
    //       </li>
    //       <li>
    //         <a href="/#contact">Contact</a>
    //       </li>
    //       <li>
    //         <a
    //           href="https://drive.google.com/file/d/1ugumpTwoA8vtAAWw2ezI0CZP2IGUwPzF/view"
    //           target="_blank"
    //           without
    //           rel="noreferrer"
    //         >
    //           Resume
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>

    //   {/* Mobile Nav */}
    //   <nav
    //     className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
    //   >
    //     <ul className="flex flex-col ">
    //       <li>
    //         <a href="/#about">About</a>
    //       </li>
    //       <li>
    //         <a href="/#projects">Projects</a>
    //       </li>
    //       <li>
    //         <a href="/#blog">Blog</a>
    //       </li>
    //       <li>
    //         <a href="/#contact">Contact</a>
    //       </li>
    //       <li>
    //         <a href="/#resume">Resume</a>
    //       </li>
    //     </ul>
    //   </nav>

    //   {/* Toggle button */}
    //   <button onClick={handleToggle} className="block md:hidden">
    //     {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
    //   </button>
    // </header>
  );
};

export default Header;
