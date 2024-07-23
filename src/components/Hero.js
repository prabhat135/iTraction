import React from "react";
import Header from "./Header";
import "../index.css";

const Hero = () => {
  // const [darkMode, setdarkMode] = useState(false);

  return (
    <div className="">
      <div className="hero bg-[#151515] min-h-screen dark:bg-white">
        <div className="bg-gradient-to-br from-[#6C6C6C] to-black  rounded-[30px] flex flex-col overflow-hidden dark:bg-gradient-to-br dark:from-[#F4F4F4] dark:to-[#B9E2F0]">
          {/* ____HEADER____ */}
          <Header />

          {/* ____HERO MAIN____ */}
          <div className="hero-main flex flex-col lg:flex-row justify-evenly">
            <div className="hero-content w-full lg:w-[45%] py-10 px-6 lg:px-16">
              <div className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white dark:text-black font-medium pb-8 lg:pb-10 text-center lg:text-left leading-tight">
                <div className="items-center gap-4 justify-center lg:justify-start">
                  Enterprise Business<br />
                  <p className="mt-2 lg:mt-4">with {" "}
                  <span className="bg-[#04ABE2] display-block rounded-full px-3 py-1 md:py-2 marquee-container w-[170px] md:w-[200px] lg:w-[209px] xl:w-[240px] 2xl:w-[290px]">
                    <span className="marquee-text">Artificial Intelligence</span>
                  </span>
                  </p>
                </div>
                {/* <p className="mt-2 lg:mt-4 text-center lg:text-left">
                  App Development
                </p> */}
              </div>

              <div>
                <img
                  src="./assets/line.png"
                  alt="line"
                  className="w-full sm:w-3/4 md:w-[500px] lg:w-full pb-8 lg:pb-10 mx-auto"
                />
              </div>

              <div className="text-center lg:text-left">
                <p className="text-lg lg:text-xl xl:text-2xl text-white dark:text-black leading-8 mb-6 lg:mb-10 px-0 sm:px-20 md:px-40 lg:px-0">
                  Backed with Latest Technology to Deliver{" "}
                  <br className="hidden lg:block" /> Best in Class User
                  Experience.
                </p>
              </div>
              <div className="text-center lg:text-left">
                <button className="hero-btn px-4 py-2 cursor-pointer bg-white text-black hover:text-white dark:border dark:border-black rounded-full text-lg lg:text-xl">
                  <span>Get Started</span>
                </button>
              </div>
            </div>
            <div className="hero-image pr-0 lg:pr-10 flex justify-center lg:justify-end">
              <img
                src="../assets/hero_img2.png"
                className="w-full max-w-xs lg:max-w-[30rem] h-auto"
                alt="hero"
              />
            </div>
          </div>
        </div>

        {/* ____STATS____ */}
        <div className="stats flex flex-wrap justify-around pt-10 lg:pt-20">
          <div className="m-4 lg:m-0 group relative w-36">
            <div className="group-hover:scale-125 transform transition-transform duration-150">
              <img
                src="./assets/vector1.png"
                alt=""
                className="w-[60px] lg:w-[90px] h-[65px] lg:h-[95px] mx-auto"
              />
              <h3 className="text-white dark:text-black text-xl lg:text-2xl font-semibold text-center pt-2 lg:pt-4 group-hover:text-[#04ABE2]">
                50+
              </h3>
              <div className="absolute left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-600">
                <p className="text-white dark:text-black text-sm pt-2 font-medium">
                  Top Developers
                </p>
              </div>
            </div>
          </div>

          <div className="dark:shadow-lg m-4 lg:m-0 group relative w-36">
            <div className="group-hover:scale-125 transform transition-transform duration-150">
              <img
                src="./assets/vector2.png"
                alt=""
                className="w-[60px] lg:w-[90px] h-[65px] lg:h-[95px] mx-auto"
              />
              <h3 className="text-white dark:text-black text-xl lg:text-2xl font-semibold text-center pt-2 lg:pt-4 group-hover:text-[#04ABE2]">
                100+
              </h3>
              <div className="absolute left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-600">
                <p className="text-white dark:text-black text-sm pt-2 font-medium">
                  Projects Completed
                </p>
              </div>
            </div>
          </div>

          <div className="dark:shadow-lg m-4 lg:m-0 group relative w-36">
            <div className="group-hover:scale-125 transform transition-transform duration-150">
              <img
                src="./assets/vector3.png"
                alt=""
                className="w-[60px] lg:w-auto h-[65px] lg:h-[95px] mx-auto"
              />
              <h3 className="text-white dark:text-black text-xl lg:text-2xl font-semibold text-center pt-2 lg:pt-4 group-hover:text-[#04ABE2]">
                50+
              </h3>
              <div className="absolute left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-600">
                <p className="text-white dark:text-black text-sm pt-2 font-medium">
                  Applications Delivered
                </p>
              </div>
            </div>
          </div>

          <div className="dark:shadow-lg m-4 lg:m-0 group relative w-36">
            <div className="group-hover:scale-125 transform transition-transform duration-150">
              <img
                src="./assets/vector4.png"
                alt=""
                className="w-[60px] lg:w-[90px] h-[65px] lg:h-[95px] mx-auto"
              />
              <h3 className="text-white dark:text-black text-xl lg:text-2xl font-semibold text-center pt-2 lg:pt-4 group-hover:text-[#04ABE2]">
                96%
              </h3>
              <div className="absolute left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-600">
                <p className="text-white dark:text-black text-sm pt-2 font-medium">
                  Projects Success
                </p>
              </div>
            </div>
          </div>

          <div className="dark:shadow-lg m-4 lg:m-0 group relative w-36">
            <div className="group-hover:scale-125 transform transition-transform duration-150">
              <img
                src="./assets/vector5.png"
                alt=""
                className="w-[60px] lg:w-[90px] h-[65px] lg:h-[95px] mx-auto"
              />
              <h3 className="text-white dark:text-black text-xl lg:text-2xl font-semibold text-center pt-2 lg:pt-4 group-hover:text-[#04ABE2]">
                100+
              </h3>
              <div className="absolute left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-600">
                <p className="text-white dark:text-black text-sm pt-2 font-medium">
                  Enterprise Customers
                </p>
              </div>
            </div>
          </div>

          <div className="dark:shadow-lg m-4 lg:m-0 group relative w-36">
            <div className="group-hover:scale-125 transform transition-transform duration-150">
              <img
                src="./assets/vector6.png"
                alt=""
                className="w-[60px] lg:w-[90px] h-[65px] lg:h-[95px] mx-auto"
              />
              <h3 className="text-white dark:text-black text-xl lg:text-2xl font-semibold text-center pt-2 lg:pt-4 group-hover:text-[#04ABE2]">
                4.7
              </h3>
              <div className="absolute left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-600">
                <p className="text-white dark:text-black text-sm pt-2 font-medium">
                  Star rating by 100+ Enterprise Customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
