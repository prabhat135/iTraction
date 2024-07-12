import React from "react";

const Service = () => {
  return (
    <div className="service flex justify-between items-center p-8 h-[100vh]">
      <div>
        <h1 className="text-6xl text-white dark:text-black font-medium mt-8 leading-tight">
          Our
          <span className="text-[#04ABE2]"> services</span>
        </h1>
        <p className="text-2xl text-[#999999] mt-10 w-[40%]">
          We craft expertly designed apps that fuel growth and unlock your full
          potential. Don't just compete locally, reach new markets and customers
          worldwide. Our global services team understands the intricacies of
          international expansion, ensuring your app is culturally relevant and
          technically sound. We don't stop there. We focus on cost-effective
          solutions, maximizing your return on investment. Let us elevate your
          business with cutting-edge mobile and web applications, propelling you
          towards a thriving future in the global marketplace. 
        </p>
      </div>
      <div className="circles relative h-full">
        <div className="circle1 absolute w-48 h-48 rounded-full bg-white top-3 right-[500px]"></div>
        <div className="circle4 absolute w-32 h-32 rounded-full bg-white top-64 right-24"></div>
        <div className="circle2 absolute w-72 h-72 rounded-full bg-white top-80 right-[450px]"></div>
        <div className="circle3 absolute w-36 h-36 rounded-full bg-white top-[588px] right-[800px]"></div>
        <div className="circle5 absolute w-44 h-44 rounded-full bg-white bottom-[130px] right-48"></div>
      </div>
    </div>
  );
};

export default Service;
