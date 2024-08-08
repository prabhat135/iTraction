import React from "react";
import '../index.css';

const ContactUs = () => {
  return (
    <div id="contacts" className="contactus flex flex-col-reverse lg:flex-row justify-around sm:p-4 lg:px-20 lg:pb-20 gap-8 dark:bg-white ">
      <div className="contactus-image flex items-center justify-center lg:justify-normal mb-20 sm:mb-0 w-full lg:w-[50%]">
        <img
          src="./assets/contactus.gif"
          alt=""
          className="max-w-md lg:max-w-none h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] w-[350px] sm:w-[450px] xl:w-[580px] rounded-3xl"
        />
      </div>

      <div className="contactus-content mx-auto flex justify-center sm:text-left lg:w-[50%] px-5 sm:px-10 md:px-20 lg:px-0">
        <div className="contactus-heading">
          <h1 className="text-center sm:text-left text-4xl sm:text-5xl xl:text-6xl text-white font-medium mb-8 leading-none">
            <span className="text-[#04ABE2] pr-0 sm:pr-2">let's </span>
            have a conversation <span className="text-[#04ABE2]">today!</span>
          </h1>
          <p className="flex flex-wrap text-center sm:text-left text-lg md:text-xl lg:text-2xl text-[#999999]">
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