import React from "react";
import '../index.css';

const ContactUs = () => {
  return (
    <div className="contactus flex flex-col sm:flex-row justify-around p-4 sm:p-20 sm:gap-8 dark:bg-white ">
      <div className="contactus-image w-full mb-10 sm:mb-0  sm:w-[50%]">
        <img
          src="./assets/contactus.png"
          alt=""
          className="h-[400px] w-full sm:h-[800px] sm:w-[580px] "
        />
      </div>

      <div className="contactus-content flex w-full text-center sm:text-left sm:w-[50%]">
        <div className="contactus-heading">
          <h1 className="flex flex-wrap text-center sm:text-left text-6xl text-white font-medium mb-8 leading-none">
            <span className="text-[#04ABE2] pr-0 sm:pr-2">let's </span>
            have a 
            conversation <span className="text-[#04ABE2] pl-0 sm:pl-2">today!</span>
          </h1>
          <p className="flex flex-wrap text-center sm:text-left text-2xl text-[#999999]">
            Our experts are available to discuss your requirements and to become
            your tech partner
          </p>
          
          <form className="pt-6 mt-4 sm:mt-0 ">
            <div className="py-6">
              <h2 className="text-2xl text-left text-[#FFFFFF]">Name</h2>
              <input class="appearance-none bg-transparent border-b w-full text-[#FFFFFF] pt-4 leading-normal text-xl focus:outline-none" type="text" placeholder="" aria-label="Full name" />
            </div>

            <div className="py-6">
              <h2 className="text-2xl text-left text-[#FFFFFF]">E-Mail</h2>
              <input class="appearance-none bg-transparent border-b w-full text-[#FFFFFF] pt-4 leading-normal text-xl focus:outline-none" type="e-mail" placeholder="" aria-label="E-mail" />
            </div>

            <div className="py-6">
              <h2 className="text-2xl text-left text-[#FFFFFF]">Message</h2>
              {/* <input class="appearance-none bg-transparent border-b w-full text-[#FFFFFF] pt-4 leading-normal text-xl focus:outline-none h-14" type="message" placeholder="" aria-label="message" /> */}
              <textarea class="appearance-none bg-transparent border-b w-full text-[#FFFFFF] pt-4 leading-normal text-xl focus:outline-none h-14 min-h-28" type="message" placeholder="" aria-label="message" />
            </div>

            <div className="flex justify-center pt-10">
              <button className="submit-btn bg-transparent text-white text-2xl px-10 py-2 rounded-full border hover:border-none"><span>Submit</span></button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
