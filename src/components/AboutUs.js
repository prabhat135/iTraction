import React from "react";  
// import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutus flex flex-col lg:flex-row justify-around lg:px-20 dark:bg-white">
      <div className="aboutus-content flex flex-col items-center justify-center  lg:w-1/2 p-4 ">
        <div className="aboutus-heading items-center justify-center text-center lg:text-left">
          <h1 className="text-center lg:text-left text-4xl sm:text-5xl xl:text-6xl text-white font-medium border-b-2 xl:px-10 pb-8 lg:pb-16 mb-8 lg:mb-16 leading-tight">
            We build <span className="text-[#04ABE2]">solutions &<br /> smart
            </span> delivering<br /> top- <span className="text-[#04ABE2]">notch service</span>
          </h1>

          <p className=" flex flex-wrap px-10 sm:px-20 md:px-40 lg:px-0 xl:px-10 text-center lg:text-left justify-center items-center text-lg lg:text-2xl text-[#999999]">
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
          className=" max-w-md lg:max-w-none h-[450px] md:h-[600px] w-[400px] lg:h-[700px] xl:w-[580px] xl:h-[800px]"
        />
      </div>
    </div>
  );
}

export default AboutUs;