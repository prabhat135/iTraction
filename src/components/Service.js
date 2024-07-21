import React from "react";
import Circles from "./circles";

const Service = () => {
  return (
    <section className="flex flex-col space-y-8 items-center justify-center h-screen">
      <div className="service-container flex flex-col md:flex-row justify-between items-center h-screen p-5 md:p-0 bg-[#151515] text-white w-full max-w-7xl">
        <div className="text-content flex flex-col px-5 md:pl-14 mb-7 md:mb-0 w-full md:w-[50%] text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl xl:text-6xl text-center md:text-left pb-8 font-medium">
            our <span className="text-[#04ABE2]">services</span>
          </h1>
          <p className="text-center md:text-left justify-center items-center text-lg lg:text-2xl text-[#999999]">
            we offer global services, driving growth with expertly designed
            apps. let us elevate your business with cost-effective solutions and
            unlock its full potential.
          </p>
        </div>

        <Circles />
      </div>
    </section>
  );
};

export default Service;