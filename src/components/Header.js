import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
    <div className="bg-slate-100 fixed w-full z-10 px-4 dark:bg-gray-900 md:px-20 lg:px-40  font-mono">
      <nav className="py-4 md:py-5 flex justify-between items-center dark:text-white">
        <div className="flex items-center">
          <h1 className="font-burtons text-xl">developedbyme</h1>
        </div>

        {/* Navigation for medium and larger screens */}
        <ul className="hidden md:flex items-center font-burtons">
          <li>
            <a href="/#about">About</a>
          </li>
          <li className="ml-4">
            <a href="/#projects">Projects</a>
          </li>
          <li className="ml-4">
            <a href="/#blog">Blog</a>
          </li>
          <li className="ml-4">
            <a href="/#contact">Contact</a>
          </li>
        </ul>

       

        {/* Hamburger icon and mobile navigation */}

                {/* Moon toggle for dark mode */}

        <div className="md:hidden flex gap-5 items-center ml-auto ">
        <BsFillMoonStarsFill
          onClick={toggleDarkMode}
          className="cursor-pointer text-2xl md:hidden ml-auto "
        />
          <button
            onClick={handleToggleMenu}
            className="text-2xl focus:outline-none"
          >
             {toggle ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}

          </button>

          {menuOpen && (
            <ul className="absolute top-16 right-0 left-0 bg-white border dark:bg-gray-900 border-gray-300 rounded-md mt-2 py-2 text-center">

              <li>
                <a href="/#about" onClick={handleToggleMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="/#projects" onClick={handleToggleMenu}>
                  Projects
                </a>
              </li>
              <li>
                <a href="/#blog" onClick={handleToggleMenu}>
                  Blog
                </a>
              </li>
              <li>
                <a href="/#contact" onClick={handleToggleMenu}>
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* Resume link for medium and larger screens */}
        <ul className="flex items-center gap-4">
        <BsFillMoonStarsFill
          onClick={toggleDarkMode}
          className="hidden md:block cursor-pointer text-2xl "
        />
        <a
          className="hidden md:block bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
          href="https://drive.google.com/file/d/1C7PcNZ1RokMTOgs1o23NDrYf_fXutbhL/view"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>

        </ul>

      </nav>
    </div>
  </div>

  );
};

export default Header;
