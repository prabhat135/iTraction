import React, { useEffect, useRef, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import "../index.css";

const Header = () => {
  // const [darkMode, setdarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // const toggleDarkMode = () => {
  //   setdarkMode(!darkMode);
  // };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <div className="header flex justify-between items-center px-4 lg:px-12 py-4 z-10">
      <div className="logo w-24 h-24">
        <img src="./assets/main_logo.png" alt="Logo" />
        {/* <img src="./assets/main_logo_white.png" alt="Logo" class="hidden dark:block"/> */}
      </div>

      <div className="header-item hidden  lg:flex">
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

          <button className="w-14 h-8">

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
  <div
  ref={menuRef}
   className="lg:hidden fixed w-[100%]  right-0.5 h-full top-0 flex justify-center items-center z-50">
    <div className="w-[100%] h-[100%]  bg-stone-900 p-4">
      <div
        onClick={toggleMenu}
        className="inset-1 w-9   z-[50]  cursor-pointer text-white"
      >
        <XMarkIcon />
      </div>
      <ul className="flex flex-col  pb-[3rem] items-end h-full justify-between  ">
      <div className="flex w-[100%] flex-col gap-[4rem] text-[2.2rem] mt-5 items-end   text-lg text-white dark:text-black font-normal py-4">
        <li className="cursor-pointer  tracking-wide hover:text-[#04abe2]">
          Homo
          
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
        </div>
        <button className="header-btn px-4  mb-[70px] py-2 cursor-pointer text-xl text-white dark:text-black border dark:border-black rounded-full bg-transparent hover:border-none">
          <span>Schedule a Meeting</span>
        </button>
      </ul>
    </div>
  </div>
)}



    </div>
  );
};

export default Header;
