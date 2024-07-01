import React from "react";

const Laptop = () => {
  return (
    <div className="laptop flex flex-row justify-evenly gap-20 items-center min-h-screen p-10">
      <div className="laptop_content relative">
        <div className="circle absolute w-7 h-7 rounded-full bg-[#04ABE2] top-[-168px] left-48"></div>
        <h1 className="text-6xl text-white font-medium leading-tight">
          <span className="text-[#04ABE2]">All chat</span> social <br />
          commercial app
        </h1>
        <p className="text-2xl text-[#999999] mt-10">
          We offer global services, driving <br />
          growth with expertly designed <br />
          apps. Let us elevate your business <br />
          with cost-effective solutions and <br />
          unlock its full potential.
        </p>
        <div className="circle absolute w-16 h-16 rounded-full bg-[#04ABE2] -bottom-32 left-48"></div>
        <div className="circle absolute w-40 h-40 rounded-full bg-[#04ABE2] bottom-[-250px] left-[-160px]"></div>
      </div>

      <div className="laptop_image relative">
        <div className="circle z-[-1] absolute w-24 h-24 rounded-full bg-[#04ABE2] top-24 left-6"></div>
        <img src="../assets/laptop.png" alt="" className="w-[1000px]" />
        <div className="flex gap-12 cursor-pointer pt-14 align-middle">
          <img src="../assets/arrow_left.png" alt="" />
          <img src="../assets/arrow_right.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Laptop;
