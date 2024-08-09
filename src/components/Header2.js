import React, { useCallback, useEffect, useRef, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import "../index.css";

const Header2 = ({ isVisible }) => {
  const [darkMode, setdarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDarkMode = () => {
    setdarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prevState => !prevState);
  }, []);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (isMenuOpen) {
          toggleMenu();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen, toggleMenu]);

  return (
    <div className={`header2 flex justify-between items-center px-8 sm:px-12 lg:px-20 py-8 fixed top-0 left-0 w-full bg-gradient-to-b from-[#151515] via-[#1c1c1c] to-transparent z-10 transition-opacity duration-500 dark:from-white dark:to-transparent ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="logo cursor-pointer">
        <img src="./assets/main_logo_2.png" alt="Logo" className="w-24 h-16"/>
        {/* <img src="./assets/main_logo_white.png" alt="Logo" class="hidden dark:block"/> */}
      </div>

      <div className="header-item  hidden  lg:flex">
        <ul className="flex gap-8 text-lg text-white dark:text-black font-normal">
          <li className="cursor-pointer tracking-wide hover:text-[#04abe2]">
          <a href="#hero">Home</a>
          </li>
          <li className="cursor-pointer tracking-wide hover:text-[#04abe2]">
             <a href="#service">Service</a>
          </li>
          <li className="cursor-pointer tracking-wide hover:text-[#04abe2]">
            <a href="#works">Works</a>
          </li>
          <li className="cursor-pointer tracking-wide hover:text-[#04abe2]">
            <a href="#contacts">Contacts</a>
          </li>
          <button onClick={toggleDarkMode} className="">
            <img src="./assets/dark_button.png" alt="" className="hidden dark:block"/>
            <img src="./assets/light_button.png" alt="" className="dark:hidden"/>
          </button>
        </ul>
      </div>

      <div className="hidden lg:block">
        <button className="header-btn px-4 py-2 cursor-pointer text-xl text-white dark:text-black border dark:border-black rounded-full bg-transparent hover:border-none dark:hover:text-white">
          <span>Schedule a Meeting</span>
        </button>
      </div>

      <div className="lg:hidden flex items-center">
        <div onClick={toggleMenu}>
          <Bars3Icon className="w-[2rem]  h-[2rem] cursor-pointer text-white dark:text-black" />
        </div>
      </div>

      {isMenuOpen && (
  <div
  ref={menuRef}
   className="lg:hidden fixed w-[100%] right-0.5 h-full top-0 flex justify-center items-center z-50">
    <div className="w-[100%] h-[100%] bg-gradient-to-br from-[#6C6C6C] to-black p-4 dark:from-[#F4F4F4] dark:to-[#B9E2F0] dark:shadow-xl">
      <div
        onClick={toggleMenu}
        className="inset-1 w-9 z-[50] cursor-pointer text-white dark:text-black"
      >
        <XMarkIcon />
      </div>
      <ul className="flex flex-col pb-[3rem] items-center h-full justify-between">
      <div className="flex flex-col w-[100%] gap-[4rem] text-[2.2rem] mt-5 items-end text-lg text-white dark:text-black font-normal py-4">
        <li className="cursor-pointer  tracking-wide hover:text-[#04abe2]">
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
        <button onClick={toggleDarkMode} className="">
          <img src="./assets/dark_button.png" alt="" className="hidden dark:block"/>
          <img src="./assets/light_button.png" alt="" className="dark:hidden"/>
        </button>
        </div>
        <button className="header-btn px-4 mb-[70px] py-2 cursor-pointer text-xl text-white dark:text-black border dark:border-black rounded-full bg-transparent hover:border-none">
          <span>Schedule a Meeting</span>
        </button>
      </ul>
    </div>
  </div>
)}
    </div>
  );
};

export default Header2;
