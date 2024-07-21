import React from "react";
import ExpandCards from "./ExpandCards";

const Domain = () => {
  return (
    <div className="domain flex flex-col justify-center items-center p-8">
      
      <div className="domain-heading text-center flex justify-center items-center ">
        <h1 className="text-4xl sm:text-5xl xl:text-6xl text-white dark:text-black font-medium mt-8 leading-none">
          do you have an idea?
          <br />
          <span className="text-[#04ABE2] rounded-full px-3 py-2">
            we have a expert team!
          </span>
        </h1>
      </div>
      
      <div className="domain-content sm:max-w-[80%] flex justify-center items-center text-center px-10 pt-8 pb-14">
        <p className="flex flex-wrap text-lg sm:text-xl lg:text-2xl text-[#999999]">
          With the help of our wide range of services in various domains. We
          have successfully covered various companies globally. In our time
          frame, we have designed several apps for different companies that have
          benefited from it and can scale their business to new heights. We will
          be happy to do the same for your business and help you realize the
          true potential of your business with our cost-effective services.
        </p>
      </div>
      

      <div className="w-full h-full flex items-center justify-center">
       <ExpandCards/>
      </div>


    

      <div className="flex gap-6 cursor-pointer py-14">
        <img src="../assets/arrow_left.png" alt="arrow-left" />
        <img src="../assets/arrow_right.png" alt="arrow-right" />
      </div>
      
    </div>
  );
};

export default Domain;
