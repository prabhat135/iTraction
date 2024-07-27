import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import "../index.css";

const Header2 = ({ isVisible }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`header2 hidden md:flex justify-between items-center px-12 lg:px-20 py-8 fixed top-0 left-0 w-full bg-gradient-to-b from-[#151515] via-[#1c1c1c] to-transparent z-10 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="logo cursor-pointer">
        <img src="./assets/main_logo_2.png" alt="Logo" className="w-24 h-16"/>
        {/* <img src="./assets/main_logo_white.png" alt="Logo" class="hidden dark:block"/> */}
      </div>

      <div className="header-item hidden  lg:flex">
        <ul className="flex gap-8 text-lg text-white dark:text-black font-normal">
          <li className="cursor-pointer tracking-wide hover:text-[#04abe2]">
            Home
          </li>
          <li className="cursor-pointer tracking-wide hover:text-[#04abe2]">
            Service
          </li>
          <li className="cursor-pointer tracking-wide hover:text-[#04abe2]">
            Works
          </li>
          <li className="cursor-pointer tracking-wide hover:text-[#04abe2]">
            Contacts
          </li>
          {/* <button className="">
            <img src="./assets/dark_button.png" alt="" />
          </button>
          <button
            className="w-16 bg-white dark:bg-black rounded-full text-black dark:text-white font-semibold"
            onClick={toggleDarkMode}
          >
            {darkMode ? "Light" : "Dark"}
          </button> */}
        </ul>
      </div>

      <div className="hidden lg:block">
        <button className="header-btn px-4 py-2 cursor-pointer text-xl text-white dark:text-black border dark:border-black rounded-full bg-transparent hover:border-none">
          <span>Schedule a Meeting</span>
        </button>
      </div>

      <div className="lg:hidden flex items-center">
        <div onClick={toggleMenu}>
          <Bars3Icon className="w-[2rem]  h-[2rem] cursor-pointer text-white" />
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-8 right-0 rounded-[25px] bg-gradient-to-br from-[#6C6C6C] to-black p-4 z-50">
          <div
            onClick={toggleMenu}
            className="relative cursor-pointer right-0 w-[2rem] text-white"
          >
            <XMarkIcon />
          </div>
          <ul className="flex flex-col items-center gap-6 text-lg text-white dark:text-black font-normal py-4">
            <li className="cursor-pointer tracking-wide hover:text-[#04abe2]">
              Home
            </li>
            <li className="cursor-pointer tracking-wide hover:text-[#04abe2]">
              Service
            </li>
            <li className="cursor-pointer tracking-wide hover:text-[#04abe2]">
              Works
            </li>
            <li className="cursor-pointer tracking-wide hover:text-[#04abe2]">
              Contacts
            </li>
            {/* <button className="">
              <img src="./assets/dark_button.png" alt="" />
            </button>
            <button
              className="w-16 h-16 bg-white dark:bg-black rounded-full text-black dark:text-white font-semibold"
              onClick={toggleDarkMode}
            >
              {darkMode ? "Light" : "Dark"}
            </button> */}
            <button className="header-btn px-4 py-2 cursor-pointer text-xl text-white dark:text-black border dark:border-black rounded-full bg-transparent hover:border-none">
              <span>Schedule a Meeting</span>
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header2;
