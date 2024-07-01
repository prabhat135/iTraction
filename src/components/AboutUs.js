import React from "react";
// import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutus flex flex-row justify-around p-20 dark:bg-white">
      <div className="aboutus-content flex items-center">
        <div className="aboutus-heading">
          <h1 className="text-6xl text-white font-medium border-b-2 pb-16 mb-8 leading-tight">
            we build
            <span className="text-[#04ABE2] rounded-full px-3 py-2">
              powerful & <br />
              smart
            </span>
            solutions <br /> deliver top<span>-notch services</span>
          </h1>
            <p className="text-xl text-[#999999]">
            iTRACTION Technologies provides high-end web and mobile app <br />
            development, leveraging AI-based solutions and over 14 years of <br />
            expertise. Our skilled team ensures powerful, fast applications <br />
            tailored to your needs, helping you outrank competitors. What's<br />
            stopping you from being the best in the market?
          </p>
        </div>
        {/* <div className="aboutus-para">
          
        </div> */}
      </div>
      <div className="aboutus-image">
        <img src="./assets/aboutus.png" alt="" className="h-[800px] w-[580px]"/>
      </div>
    </div>
  );
}

export default AboutUs;
