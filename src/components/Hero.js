import React, { useState } from "react";
import Header from "./Header";

const Hero = () => {
  const [darkMode, setdarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setdarkMode(!darkMode);
  // };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="hero bg-[#151515] h-screen dark:bg-white">
        <div className="bg-gradient-to-br from-[#6C6C6C] to-black h-[650px] rounded-[30px] flex flex-col overflow-hidden dark:bg-gradient-to-br dark:from-[#F4F4F4] dark:to-[#B9E2F0]">
          {/* ____HEADER____ */}
          <Header />

          {/* ____HERO MAIN____ */}
          <div className="hero-main flex flex-row justify-evenly">
            <div className="hero-content w-[40%] py-10 px-16">
              <div className="">
                <h1 className="text-6xl text-white dark:text-black font-medium border-b-2 dark:border-b-[#D9D9D9] pb-8 mb-8 leading-tight">
                  Web &{" "}
                  <span className="bg-[#04ABE2] rounded-full px-3 py-2">
                    Mobile
                  </span>{" "}
                  <br />
                  App Development
                </h1>
              </div>
              {/* <div className="w-[550px] h-[2px] bg-white my-10"></div> */}
              <div className="">
                <p className="text-xl text-white dark:text-black leading-8 mb-10">
                  Backed with Latest Technology to Deliver <br /> Best in Class
                  User Experience.
                </p>
              </div>
              <div className="hero-btn">
                <button className="px-4 py-2 cursor-pointer bg-white text-black dark:border dark:border-black rounded-full text-xl">
                  Get Started
                </button>
              </div>
            </div>
            <div className="hero-image pr-10">
              <img
                src="../assets/hero_img2.png"
                className="h-[500px]"
                alt="hero"
              />
            </div>
          </div>
        </div>

        {/* ____STATS____ */}
        <div className="stats flex justify-around pt-20">
          <div className="dark:shadow-lg">
            <img
              src="./assets/vector1.png"
              alt=""
              className="w-[90px] h-[95px] cursor-pointer"
            />
            <h3 className="text-white text-2xl font-semibold text-center pt-4">
              50+
            </h3>
          </div>
          <div className="dark:shadow-lg">
            <img
              src="./assets/vector2.png"
              alt=""
              className="w-[90px] h-[95px] cursor-pointer"
            />
            <h3 className="text-white text-2xl font-semibold text-center pt-4">
              100+
            </h3>
          </div>
          <div className="dark:shadow-lg">
            <img
              src="./assets/vector3.png"
              alt=""
              className="w-auto h-[95px] cursor-pointer"
            />
            <h3 className="text-white text-2xl font-semibold text-center pt-4">
              50+
            </h3>
          </div>
          <div className="dark:shadow-lg">
            <img
              src="./assets/vector4.png"
              alt=""
              className="w-[90px] h-[95px] cursor-pointer"
            />
            <h3 className="text-white text-2xl font-semibold text-center pt-4">
              96%
            </h3>
          </div>
          <div className="dark:shadow-lg">
            <img
              src="./assets/vector5.png"
              alt=""
              className="w-[90px] h-[95px] cursor-pointer"
            />
            <h3 className="text-white text-2xl font-semibold text-center pt-4">
              100+
            </h3>
          </div>
          <div className="dark:shadow-lg">
            <img
              src="./assets/vector6.png"
              alt=""
              className="w-[90px] h-[95px] cursor-pointer"
            />
            <h3 className="text-white text-2xl font-semibold text-center pt-4">
              4.7
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
