import React from "react";

const Service = () => {
  return (
    <div className="service flex flex-col md:flex-row justify-between items-center sm:p-10 h-screen">
      <div className="w-1/2">
        <h1 className="flex flex-wrap text-6xl text-white dark:text-black font-medium sm:mt-8 leading-tight">
          Our <span className="text-[#04ABE2] sm:pl-2">services</span>
        </h1>
        <p className="flex flex-wrap text-2xl text-[#999999] mt-10">
          We offer global services, driving growth with expertly designed apps.
          Let us elevate your business with cost-effective solutions and unlock
          its full potential.
        </p>
      </div>
      <div className="circles relative  flex justify-center items-center w-1/2">
        <div className="circle circle1 w-24 h-24 rounded-full bg-white absolute  "></div>
        <div className="circle circle2 w-32 h-32 rounded-full bg-white absolute "></div>
        <div className="circle circle3 w-20 h-20 rounded-full bg-white absolute "></div>
        <div className="circle circle4 w-16 h-16 rounded-full bg-white absolute "></div>
        <div className="circle circle5 w-22 h-22 rounded-full bg-white absolute"></div>
      </div>
    </div>
  );
};

export default Service;
