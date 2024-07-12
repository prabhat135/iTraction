import React, { useState } from "react";
import Header from "./Header";

const Hero = () => {
  const [darkMode, setdarkMode] = useState(false);

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="hero bg-[#151515] min-h-screen dark:bg-white">
        <div className="bg-gradient-to-br from-[#6C6C6C] to-black  rounded-[30px] flex flex-col overflow-hidden dark:bg-gradient-to-br dark:from-[#F4F4F4] dark:to-[#B9E2F0]">
          {/* ____HEADER____ */}
          <Header />

          {/* ____HERO MAIN____ */}
          <div className="hero-main flex flex-col lg:flex-row justify-evenly">
            <div className="hero-content w-full lg:w-[45%] py-10 px-6 lg:px-16">
              <div className="">
                <div className="  text-4xl lg:text-4xl xl:text-5xl text-white dark:text-black font-medium border-b-2 dark:border-b-[#D9D9D9] pb-4 lg:pb-8 mb-4 lg:mb-8 leading-tight">
                  Web & {" "}
                  <span className="bg-[#04ABE2] display-block rounded-full px-3 py-2  ">
                    Mobile
                  </span>
                  <span className="flex flex-wrap mt-2 lg:mt-4">App Development</span>

                </div>
              </div>
              <div className="">
                <p className="text-lg lg:text-xl text-white dark:text-black leading-8 mb-6 lg:mb-10">
                  Backed with Latest Technology to Deliver <br className="hidden lg:block" /> Best in Class
                  User Experience.
                </p>
              </div>
              <div className="hero-btn">
                <button className="px-4 py-2 cursor-pointer bg-white text-black dark:border dark:border-black rounded-full text-lg lg:text-xl">
                  Get Started
                </button>
              </div>
            </div>
            <div className="hero-image pr-0 lg:pr-10 flex justify-center lg:justify-end">
              <img
                src="../assets/hero_img2.png"
                className="w-full max-w-xs lg:max-w-md h-auto"
                alt="hero"
              />
            </div>
          </div>
        </div>

        {/* ____STATS____ */}
        <div className="stats flex flex-wrap justify-around pt-10 lg:pt-20">
          <div className="dark:shadow-lg m-4 lg:m-0">
            <img
              src="./assets/vector1.png"
              alt=""
              className="w-[60px] lg:w-[90px] h-[65px] lg:h-[95px] cursor-pointer"
            />
            <h3 className="text-white dark:text-black text-xl lg:text-2xl font-semibold text-center pt-2 lg:pt-4">
              50+
            </h3>
          </div>
          <div className="dark:shadow-lg m-4 lg:m-0">
            <img
              src="./assets/vector2.png"
              alt=""
              className="w-[60px] lg:w-[90px] h-[65px] lg:h-[95px] cursor-pointer"
            />
            <h3 className="text-white dark:text-black text-xl lg:text-2xl font-semibold text-center pt-2 lg:pt-4">
              100+
            </h3>
          </div>
          <div className="dark:shadow-lg m-4 lg:m-0">
            <img
              src="./assets/vector3.png"
              alt=""
              className="w-[60px] lg:w-auto h-[65px] lg:h-[95px] cursor-pointer"
            />
            <h3 className="text-white dark:text-black text-xl lg:text-2xl font-semibold text-center pt-2 lg:pt-4">
              50+
            </h3>
          </div>
          <div className="dark:shadow-lg m-4 lg:m-0">
            <img
              src="./assets/vector4.png"
              alt=""
              className="w-[60px] lg:w-[90px] h-[65px] lg:h-[95px] cursor-pointer"
            />
            <h3 className="text-white dark:text-black text-xl lg:text-2xl font-semibold text-center pt-2 lg:pt-4">
              96%
            </h3>
          </div>
          <div className="dark:shadow-lg m-4 lg:m-0">
            <img
              src="./assets/vector5.png"
              alt=""
              className="w-[60px] lg:w-[90px] h-[65px] lg:h-[95px] cursor-pointer"
            />
            <h3 className="text-white dark:text-black text-xl lg:text-2xl font-semibold text-center pt-2 lg:pt-4">
              100+
            </h3>
          </div>
          <div className="dark:shadow-lg m-4 lg:m-0">
            <img
              src="./assets/vector6.png"
              alt=""
              className="w-[60px] lg:w-[90px] h-[65px] lg:h-[95px] cursor-pointer"
            />
            <h3 className="text-white dark:text-black text-xl lg:text-2xl font-semibold text-center pt-2 lg:pt-4">
              4.7
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
