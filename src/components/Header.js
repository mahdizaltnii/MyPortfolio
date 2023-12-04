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
              <a href="/#blog">Blog</a>
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
                href="https://drive.google.com/file/d/1C7PcNZ1RokMTOgs1o23NDrYf_fXutbhL/view"
               target="_blank"
               without
               rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
