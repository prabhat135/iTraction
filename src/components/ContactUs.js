import React from "react";

const ContactUs = () => {
  return (
    <div className="contactus flex flex-row justify-around p-20 dark:bg-white gap-20">
      <div className="contactus-image">
        <img
          src="./assets/contactus.png"
          alt=""
          className="h-[800px] w-[580px]"
        />
      </div>

      <div className="contactus-content flex">
        <div className="contactus-heading">
          <h1 className="text-6xl text-white font-medium mb-8 leading-none">
            <span className="text-[#04ABE2]">let's  </span>
            have a <br />
            conversation <span className="text-[#04ABE2]">today!</span>
          </h1>
          <p className="text-2xl text-[#999999]">
            Our experts are available to discuss your requirements and <br />to become
            your tech partner
          </p>
          
          <form className="pt-6">
            <div className="py-6">
              <h2 className="text-2xl text-[#FFFFFF]">Name</h2>
              <input class="appearance-none bg-transparent border-b w-full text-[#FFFFFF] pt-4 leading-normal text-xl focus:outline-none" type="text" placeholder="" aria-label="Full name" />
            </div>

            <div className="py-6">
              <h2 className="text-2xl text-[#FFFFFF]">E-Mail</h2>
              <input class="appearance-none bg-transparent border-b w-full text-[#FFFFFF] pt-4 leading-normal text-xl focus:outline-none" type="e-mail" placeholder="" aria-label="E-mail" />
            </div>

            <div className="py-6">
              <h2 className="text-2xl text-[#FFFFFF]">Message</h2>
              {/* <input class="appearance-none bg-transparent border-b w-full text-[#FFFFFF] pt-4 leading-normal text-xl focus:outline-none h-14" type="message" placeholder="" aria-label="message" /> */}
              <textarea class="appearance-none bg-transparent border-b w-full text-[#FFFFFF] pt-4 leading-normal text-xl focus:outline-none h-14 min-h-28" type="message" placeholder="" aria-label="message" />
            </div>

            <div className="flex justify-center pt-10">
              <button className="bg-transparent border text-white text-2xl px-10 py-2 rounded-full">Submit</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
