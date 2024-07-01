import React from "react";

const Domain = () => {
  return (
    <div className="domain flex flex-col justify-center items-center p-8">
      
      <div className="domain-heading text-center">
        <h1 className="text-6xl text-white dark:text-black font-medium mt-8 leading-none">
          do you have an idea?
          <br />
          <span className="text-[#04ABE2] rounded-full px-3 py-2">
            we have a expert team!
          </span>
        </h1>
      </div>
      
      <div className="domain-content text-center px-10 pt-8 pb-14">
        <p className="text-2xl text-[#999999]">
          With the help of our wide range of services in various domains. We
          have successfully <br/>covered various companies globally. In our time
          frame, we have designed several apps <br/>for different companies that have
          benefited from it and can scale their business to new <br/>heights. We will
          be happy to do the same for your business and help you realize the
          true <br/>potential of your business with our cost-effective services.
        </p>
      </div>

      <div className="domain-card flex flex-row justify-between gap-5">
        <div className="bg-gradient-to-b from-[#04ABE2] to-[#30A5FA] rounded-2xl p-8 w-[400px]">
          <div className="rounded-full bg-white w-20 h-20 relative ">
            <img src="../assets/service1.png" alt="" className="absolute inset-0 m-auto" />
          </div>
          <h2 className="text-3xl font-bold text-white py-4 ">App and Web development</h2>
          <p className="text-md text-white pb-6">
            Transform your ideas into reality with our cutting-edge web and app
            development services.
          </p>
        </div>
        <div className="bg-gradient-to-b from-[#04ABE2] to-[#30A5FA] rounded-lg p-8 w-[400px]">
          <div className="rounded-full bg-white w-20 h-20 relative">
            <img src="../assets/service2.png" alt="" className="absolute inset-0 m-auto" />
          </div>
          <h2 className="text-3xl font-bold text-white py-4">Chatbot and Voicebot development</h2>
          <p className="text-md text-white">
          Connect with your customers in real-time and make the most out of the situation with our custom-built bots.
          </p>
        </div>
        <div className="bg-gradient-to-b from-[#04ABE2] to-[#30A5FA] rounded-lg p-8 w-[400px]">
          <div className="rounded-full bg-white w-20 h-20 relative">
            <img src="../assets/service3.png" alt="" className="absolute inset-0 m-auto" />
          </div>
          <h2 className="text-3xl font-bold text-white py-4">Smart IOT solutions</h2>
          <p className="text-md text-white">
          With IoT power, automate your crucial workflow and improve your productivity.
          </p>
        </div>
        <div className="bg-gradient-to-b from-[#04ABE2] to-[#30A5FA] rounded-lg p-8 w-[400px]">
          <div className="rounded-full bg-white w-20 h-20 relative">
            <img src="../assets/service4.png" alt="" className="absolute inset-0 m-auto" />
          </div>
          <h2 className="text-3xl font-bold text-white py-4">Software Testing</h2>
          <p className="text-md text-white">
          Ensure flawless performance with our new, cutting-edge software testing feature.
          </p>
        </div>
      </div>

      <div className="flex gap-6 cursor-pointer py-14">
        <img src="../assets/arrow_left.png" alt="" />
        <img src="../assets/arrow_right.png" alt="" />
      </div>
    </div>
  );
};

export default Domain;
