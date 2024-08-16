import React, { useCallback, useEffect, useRef, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import "../index.css";
import { Link } from "react-scroll";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness3Icon from "@mui/icons-material/Brightness3";

const Header2 = ({ isVisible }) => {
  const [darkMode, setdarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDarkMode = () => {
    setdarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (isMenuOpen) {
          toggleMenu();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen, toggleMenu]);

  return (
    <div
      className={`header2 flex justify-between items-center px-8 sm:px-12 lg:px-20 py-8 fixed top-0 left-0 w-full z-10 transition-opacity duration-500 bg-gradient-to-b from-white via-[#f2f2f2] via-70% to-transparent dark:from-[#151515] dark:via-[#1c1c1c] dark:via-50% dark:to-transparent ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="logo">
        <img
          src="./assets/main_logo_2.png"
          alt="Logo"
          className="w-24 h-16 cursor-pointer hidden dark:block"
        />
        <img
          src="./assets/main_logo_2_dark.png"
          alt="Logo"
          className="w-24 h-16 cursor-pointer dark:hidden"
        />
      </div>

      <div className="header-item hidden lg:flex gap-8">
        <ul className="flex gap-8 text-lg text-black dark:text-white font-normal items-center">
          <li className="cursor-pointer tracking-wide hover:text-[#04abe2]">
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}
            >
              Home
            </Link>
          </li>
          <li className="cursor-pointer tracking-wide hover:text-[#04abe2]">
            <Link
              activeClass="active"
              to="service"
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}
            >
              Service
            </Link>
          </li>
          <li className="cursor-pointer tracking-wide hover:text-[#04abe2]">
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}
            >
              Works
            </Link>
          </li>
          <li className="cursor-pointer tracking-wide hover:text-[#04abe2]">
            <Link
              activeClass="active"
              to="contactus"
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}
            >
              Contacts
            </Link>
          </li>
        </ul>
        <button onClick={toggleDarkMode} className="text-black dark:text-white">
            <div className="hidden dark:block icon-container hover:bg-[#5E5E5E] bg-stone-800 px-[10px] py-2 justify-center items-center rounded-full transition transform active:scale-95 ">
              <WbSunnyIcon />
            </div>

            <div className="dark:hidden icon-container hover:bg-stone-300 bg-gray-200 rotate-[130deg] p-[10px] flex justify-center items-center rounded-full transition transform active:scale-95">
              {" "}
              <Brightness3Icon />
            </div>

            {/* <img src="./assets/dark_button.png" alt="" className="hidden dark:block"/>
            <img src="./assets/light_button.png" alt="" className="dark:hidden"/> */}
          </button>
      </div>

      <div className="hidden lg:block">
        <a href="https://calendly.com/itraction" target="blank">
          <button className="header-btn px-4 py-2 cursor-pointer text-xl text-black hover:text-white dark:text-white border border-black dark:border-white hover:border-none rounded-full bg-white dark:bg-transparent">
            <span>Schedule a Meeting</span>
          </button>
        </a>
      </div>

      <div className="lg:hidden flex items-center">
        <div onClick={toggleMenu}>
          <Bars3Icon className="w-[2rem] h-[2rem] cursor-pointer text-black dark:text-white" />
        </div>
      </div>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden fixed w-[100%] right-0.5 h-full top-0 flex justify-center items-center z-50"
        >
          <div className="w-[100%] h-[100%] p-4 bg-gradient-to-br from-[#F4F4F4] to-[#B9E2F0] dark:from-[#6C6C6C] dark:to-black">
            <div
              onClick={toggleMenu}
              className="inset-1 w-9 z-[50] cursor-pointer text-black dark:text-white"
            >
              <XMarkIcon />
            </div>
            <ul className="flex flex-col pb-[3rem] items-center h-full justify-between">
              <div className="flex flex-col w-[100%] gap-[4rem] text-[2.2rem] mt-5 items-center text-lg font-normal py-4 text-black dark:text-white">
                <li className="cursor-pointer tracking-wide hover:text-[#04abe2]">
                  <Link
                    activeClass="active"
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={100}
                  >
                    Home
                  </Link>
                </li>
                <li className="cursor-pointer tracking-wide hover:text-[#04abe2]">
                  <Link
                    activeClass="active"
                    to="service"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={100}
                  >
                    Service
                  </Link>
                </li>
                <li className="cursor-pointer tracking-wide hover:text-[#04abe2]">
                  <Link
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={100}
                  >
                    Works
                  </Link>
                </li>
                <li className="cursor-pointer tracking-wide hover:text-[#04abe2]">
                  <Link
                    activeClass="active"
                    to="contactus"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={100}
                  >
                    Contacts
                  </Link>
                </li>
                <button onClick={toggleDarkMode} className="">
                  <div className="hidden dark:block icon-container hover:bg-[#5E5E5E] bg-stone-800 px-[10px] py-2 justify-center items-center rounded-full transition transform active:scale-95 ">
                    <WbSunnyIcon />
                  </div>

                  <div className="dark:hidden icon-container hover:bg-stone-300 bg-gray-200 rotate-[130deg] p-[10px] flex justify-center items-center rounded-full transition transform active:scale-95">
                    {" "}
                    <Brightness3Icon />
                  </div>
                  {/* <img
                    src="./assets/dark_button.png"
                    alt=""
                    className="hidden dark:block"
                  />
                  <img
                    src="./assets/light_button.png"
                    alt=""
                    className="dark:hidden"
                  /> */}
                </button>
              </div>
              <a href="https://calendly.com/itraction" target="blank">
                <button className="header-btn px-4 mb-[70px] py-2 cursor-pointer text-xl text-black hover:text-white dark:text-white border border-black dark:border-white hover:border-none rounded-full bg-white dark:bg-transparent">
                  <span>Schedule a Meeting</span>
                </button>
              </a>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header2;
