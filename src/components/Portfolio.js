import React from "react";

const Portfolio = () => {
  return (
    <div className="service flex flex-col justify-center items-center p-8">

      <div className="service-heading text-center">
        <h1 className="text-6xl text-white dark:text-black font-medium mt-8 leading-tight">
          Featured 
          <span className="text-[#04ABE2]"> works</span>
        </h1>
      </div>

      <div className="service-content text-center px-40 pt-3 pb-14">
        <p className="text-2xl text-[#999999]">
          Look at how businesses have leveraged our services to excel at what
          they do. We are <br />excited to add you to our list of happy clients.
        </p>
      </div>

      <div className="service-card flex flex-row justify-between gap-10 pt-10 pb-5">
        <div className="flex flex-col items-center bg-gradient-to-b from-[#04ABE2] to-[#30A5FA] rounded-2xl p-8 w-[400px]">
          <img src="../assets/portfolio.png" alt="" className="w-[250px]" />
          <h2 className="text-3xl font-medium text-white py-9  text-center">
            AllChat- Social Commercial App
          </h2>

          <button className="flex items-center gap-2 bg-white border text-black text-xl px-4 py-2 rounded-full">
            <h3>view case study</h3>
            <img
              src="../assets/arrow_diag.png"
              alt=""
              className="w-3 h-3"
            />
          </button>
        </div>

        <div className="flex flex-col items-center bg-gradient-to-b from-[#04ABE2] to-[#30A5FA] rounded-2xl p-8 w-[400px]">
          <img src="../assets/portfolio.png" alt="" className="w-[250px]" />
          <h2 className="text-3xl font-medium text-white py-9  text-center">
          freeBeer- An app to explore beer
          </h2>

          <button className="flex items-center gap-2 bg-white border text-black text-xl px-4 py-2 rounded-full">
            <h3>view case study</h3>
            <img
              src="../assets/arrow_diag.png"
              alt=""
              className="w-3 h-3"
            />
          </button>
        </div>

        <div className="flex flex-col items-center bg-gradient-to-b from-[#04ABE2] to-[#30A5FA] rounded-2xl p-8 w-[400px]">
          <img src="../assets/portfolio.png" alt="" className="w-[250px]" />
          <h2 className="text-3xl font-medium text-white py-9  text-center">
          Audience unlock- online audience development
          </h2>

          <button className="flex items-center gap-2 bg-white border text-black text-xl px-4 py-2 rounded-full">
            <h3>view case study</h3>
            <img
              src="../assets/arrow_diag.png"
              alt=""
              className="w-3 h-3"
            />
          </button>
        </div>

        <div className="flex flex-col items-center bg-gradient-to-b from-[#04ABE2] to-[#30A5FA] rounded-2xl p-8 w-[400px]">
          <img src="../assets/portfolio.png" alt="" className="w-[250px]" />
          <h2 className="text-3xl font-medium text-white py-9  text-center">
            AllChat- Social Commercial App
          </h2>

          <button className="flex items-center gap-2 bg-white border text-black text-xl px-4 py-2 rounded-full">
            <h3>view case study</h3>
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
