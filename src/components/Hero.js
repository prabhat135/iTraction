import React from "react";
import Header from "./Header";
import "../index.css";

const statsData = [
  {
    image: "./assets/vector1.png",
    darkimage: "./assets/vector1_darktheme.png",
    number: "50+",
    text: "Top Developers",
  },
  {
    image: "./assets/vector2.png",
    darkimage: "./assets/vector2_darktheme.png",
    number: "100+",
    text: "Projects Completed",
  },
  {
    image: "./assets/vector3.png",
    darkimage: "./assets/vector3_darktheme.png",
    number: "50+",
    text: "Applications Delivered",
  },
  {
    image: "./assets/vector4.png",
    darkimage: "./assets/vector4_darktheme.png",
    number: "96%",
    text: "Projects Success",
  },
  {
    image: "./assets/vector5.png",
    darkimage: "./assets/vector5_darktheme.png",
    number: "100+",
    text: "Enterprise Customers",
  },
  {
    image: "./assets/vector6.png",
    darkimage: "./assets/vector6_darktheme.png",
    number: "4.7",
    text: "Star rating by 100+ Enterprise Customers",
  },
];

const Hero = () => {
  // const [darkMode, setdarkMode] = useState(false);

  return (
    <div id="hero" className="">
      <div className="hero dark:bg-white px-4 pt-4 sm:px-8 sm:pt-8">
        <div className="bg-gradient-to-br from-[#6C6C6C] to-black rounded-[30px] flex flex-col overflow-hidden dark:bg-gradient-to-br dark:from-[#F4F4F4] dark:to-[#B9E2F0]">
          {/* ____HEADER____ */}
          <Header />

          {/* ____HERO MAIN____ */}
          <div className="hero-main flex flex-col lg:flex-row justify-evenly">
            <div className="hero-content w-full lg:w-[48%] xl:w-[46%] py-10 px-6 lg:px-16">
              <div className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white dark:text-black font-medium pb-8 lg:pb-10 text-center lg:text-left leading-tight">
                <div className="items-center gap-4 justify-center lg:justify-start">
                  Enterprise Business
                  <br />
                  <p className="mt-2 lg:mt-4">
                    <span>with </span>
                    <span className="bg-[#04ABE2] display-block rounded-full px-3 py-1 md:py-2 marquee-container w-[170px] md:w-[200px] lg:w-[209px] xl:w-[240px] 2xl:w-[290px] mb-[-14px] md:mb-[-18px]">
                      <span className="marquee-text dark:text-white">
                        Artificial Intelligence
                      </span>
                    </span>
                  </p>
                </div>
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
                className="w-full max-w-xs lg:max-w-[30rem] h-auto 2xl:pt-[7px]"
                alt="hero"
              />
            </div>
          </div>
        </div>

        {/* ____STATS____ */}

        <div className="flex flex-wrap justify-evenly  lg:mb-9 lg:pt-[3rem] xl:pb-[0rem] 2xl:pb-0">
          {statsData.map((item, index) => (
            <div
              key={index}
              className="m-4 md:m-12 lg:m-0 group relative w-28 xsm:w-36"
            >
              <div className="md:group-hover:scale-110 transform transition-transform duration-150">
                <img
                  src={item.image}
                  alt=""
                  className="h-[65px] lg:h-[95px] max-h-[70px] mx-auto dark:hidden"
                />
                <img
                  src={item.darkimage}
                  alt=""
                  className="h-[65px] lg:h-[95px] max-h-[70px] mx-auto hidden dark:block"
                />
                <h3 className="text-white dark:text-black text-xl lg:text-2xl font-semibold text-center pt-2 lg:pt-4 group-hover:text-[#04ABE2]">
                  {item.number}
                </h3>
                <div className="absolute left-0 right-0 text-center opacity-0 md:group-hover:opacity-100 transition-opacity duration-600">
                  <p className="text-white dark:text-black text-md pt-2 font-medium">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Hero;
