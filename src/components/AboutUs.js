import React from "react";
// import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutus flex flex-col lg:flex-row justify-around lg:px-20 dark:bg-white">
      <div className="aboutus-content flex flex-col items-center justify-center  lg:w-1/2 p-4 ">
        <div className="aboutus-heading items-center justify-center text-center lg:text-left">
          <h1 className="  text-center md:text-left   text-4xl sm:text-5xl lg:text-6xl text-white font-medium border-b-2 pb-4 px-10 sm:pb-8 lg:pb-16 mb-4 sm:mb-8 lg:mb-16 leading-tight">
            We build  solutions,  <span className="text-[#04ABE2]">& smart
            delivering</span> top- <span className="text-[#04ABE2]">notch service</span>
          </h1>

          <p className=" flex flex-wrap px-10 text-center  md:text-left justify-center items-center text-base text-lg lg:text-xl text-[#999999]">
            iTRACTION Technologies provides high-end web and mobile app
            development, leveraging AI-based solutions and over 14 years of
            expertise. Our skilled team ensures powerful, fast applications
            tailored to your needs, helping you outrank competitors. What's
            stopping you from being the best in the market?
          </p>
        </div>
      </div>
      <div className="aboutus-image flex justify-center items-center lg:mt-0 lg:w-1/2 p-4">
        <img
          src="./assets/aboutus.png"
          alt="About Us"
          className="h-auto w-full max-w-md lg:max-w-none lg:w-[400px] lg:h-[800px] xl:w-[580px]"
        />
      </div>
    </div>
  );
}

export default AboutUs;
