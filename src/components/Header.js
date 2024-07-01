import React, { useState } from "react";

const Header = () => {
  const [darkMode, setdarkMode] = useState(false);

  const toggleDarkMode = () => {
    setdarkMode(!darkMode);
  };

  return (
    <div className="header flex justify-between items-center px-12 py-4">
      <div className="logo w-24 h-24">
        <img src="./assets/main_logo.png" alt="Logo" />
        {/* <img src="./assets/main_logo_white.png" alt="Logo" class="hidden dark:block"/> */}
      </div>

      <div className="header-item">
        <ul className="flex gap-12 text-lg text-white dark:text-black font-normal">
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
          <button className="">
            <img src="./assets/dark_button.png" alt="" />
          </button>
          <button
            className=" w-16 h-16 bg-white dark:bg-black rounded-full text-black dark:text-white font-semibold"
            onClick={toggleDarkMode}
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </ul>
      </div>

      <div className="header-btn">
        <button className="px-4 py-2 cursor-pointer text-xl text-white dark:text-black border dark:border-black rounded-full">
          Schedule a Meeting
        </button>
      </div>
    </div>
  );
};

export default Header;
