import React from "react";
import Circles from "./circles";

const Service = () => {
  return (
    <div className="service-container flex flex-col md:flex-row justify-between items-center h-screen p-5 bg-[#151515] text-white w-full">
      <div className="text-content flex flex-col p-0 sm:p-2  md:p-10 max-w-full md:max-w-2xl mb-5 md:mb-0 text-left md:text-left w-1/2  sm:w-[30%]">
        <h1 className="text-4xl font-bold">
          our <span className="text-[#04ABE2]">services</span>
        </h1>
        <p className="mt-4 text-lg">
          we offer global services, driving growth with expertly designed apps.
          let us elevate your business with cost-effective solutions and unlock
          its full potential.
        </p>
      </div>
      <Circles />
    </div>
  );
};

export default Service;
