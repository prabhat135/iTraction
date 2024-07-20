import React from "react";
import "../index.css";

const Portfolio = () => {
  return (
    <div className="service flex flex-col justify-center items-center p-8">

      <div className="service-heading text-center items-center">
        <h1 className="text-4xl sm:text-5xl xl:text-6xl text-white dark:text-black font-medium mt-8 leading-tight">
          featured 
          <span className="text-[#04ABE2]"> works</span>
        </h1>
      </div>

      <div className="service-content text-center items-center px-0 sm:px-20 md:px-28 lg:px-40 pt-3 pb-14">
        <p className="flex flex-wrap text-lg md:text-xl lg:text-2xl text-[#999999]">
          Look at how businesses have leveraged our services to excel at what
          they do. We are excited to add you to our list of happy clients.
        </p>
      </div>

      <div className="service-card flex flex-wrap justify-center gap-10 pt-10 pb-5 m-auto">
        <div className="flex flex-col items-center bg-gradient-to-b from-[#04ABE2] to-[#20A5FA] rounded-2xl p-8 w-[350px] sm:w-[400px] md: lg:w-[33%] xl:w-[20%] 2xl:w-[400px] hover:border hover:border-[#04ABE2] hover:bg-none">
          <img src="../assets/portfolio.png" alt="" className="w-[250px]" />
          <h2 className="text-2xl lg:text-2xl 2xl:text-3xl font-medium text-white py-9  text-center">
            AllChat- Social Commercial App
          </h2>

          <button className="featured-btn flex items-center gap-2 bg-white text-black text-xl px-4 py-2 rounded-full">
            <span>view case study</span>
            <img
              src="../assets/arrow_diag.png"
              alt=""
              className="w-3 h-3"
            />
          </button>
        </div>

        <div className="flex flex-col items-center bg-gradient-to-b from-[#04ABE2] to-[#20A5FA] rounded-2xl p-8 w-[350px] sm:w-[400px] lg:w-[33%] xl:w-[20%] 2xl:w-[400px] hover:border hover:border-[#04ABE2] hover:bg-none">
          <img src="../assets/portfolio.png" alt="" className="w-[250px]" />
          <h2 className="text-2xl lg:text-2xl 2xl:text-3xl font-medium text-white py-9  text-center">
          freeBeer- An app to explore beer
          </h2>

          <button className="featured-btn flex items-center gap-2 bg-white text-black text-xl px-4 py-2 rounded-full">
            <span>view case study</span>
            <img
              src="../assets/arrow_diag.png"
              alt=""
              className="w-3 h-3"
            />
          </button>
        </div>

        <div className="flex flex-col items-center bg-gradient-to-b from-[#04ABE2] to-[#20A5FA] rounded-2xl p-8 w-[350px] sm:w-[400px] lg:w-[33%] xl:w-[20%] 2xl:w-[400px] hover:border hover:border-[#04ABE2] hover:bg-none">
          <img src="../assets/portfolio.png" alt="" className="w-[250px]" />
          <h2 className="text-2xl lg:text-2xl 2xl:text-3xl font-medium text-white py-9  text-center">
          Audience unlock- online audience development
          </h2>

          <button className="featured-btn flex items-center gap-2 bg-white text-black text-xl px-4 py-2 rounded-full">
            <span>view case study</span>
            <img
              src="../assets/arrow_diag.png"
              alt=""
              className="w-3 h-3"
            />
          </button>
        </div>

        <div className="flex flex-col items-center bg-gradient-to-b from-[#04ABE2] to-[#20A5FA] rounded-2xl p-8 w-[350px] sm:w-[400px] lg:w-[33%] xl:w-[20%] 2xl:w-[400px] hover:border hover:border-[#04ABE2] hover:bg-none">
          <img src="../assets/portfolio.png" alt="" className="w-[250px]" />
          <h2 className="text-2xl lg:text-2xl 2xl:text-3xl font-medium text-white py-9  text-center">
            AllChat- Social Commercial App
          </h2>

          <button className="featured-btn flex items-center gap-2 bg-white text-black text-xl px-4 py-2 rounded-full">
            <span>view case study</span>
            <img
              src="../assets/arrow_diag.png"
              alt=""
              className="w-3 h-3"
            />
          </button>
        </div>
      </div>

      <div className="flex gap-6 cursor-pointer py-14">
        <img src="../assets/arrow_left.png" alt="" />
        <img src="../assets/arrow_right.png" alt="" />
      </div>
    </div>
  );
};

export default Portfolio;
