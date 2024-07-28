import React from "react";
import TestimonialsCarousel from "./swiper-testimonials";




const Testimonials = () => {
  return (
    <div className="text-white h-[102vh] md:h-full flex flex-col justify-between overflow-hidden">
      <div className="max-w-9xl mx-auto w-full flex flex-col md:flex-row md:p-6">
        <div className="md:w-[40%] ml-10 mt-14 md:mt-72 relative md:pr-8">
          <img
            className="absolute bottom-1 md:-top-60 right-10 md:left-80 h-[7vw] w-[7vw]"
            src="/star-arrow.svg"
            alt=""
          />
          <img
            className="h-[5vw] w-[6vw] absolute -top-4 left-20 md:-left-4 md:-top-20 "
            src="/colon.svg"
            alt=""
          />
          <h2 className="font-medium mb-8 text-[#04ABE2] text-4xl sm:text-5xl xl:text-6xl text-center md:text-left">
            <span className="text-white">what </span> our <br /><span className="text-white">Customers</span> says
          </h2>
          <p className="mb-8 text-lg lg:text-2xl text-[#999999] text-center md:text-left">
            real stories, real satisfaction—hear what our happy customers have
            to say!
          </p>
        </div>
        <div className="md:w-[60%] pt-10 py-3 md:py-5 h-screen px-5">
          <TestimonialsCarousel/>
        </div>
      </div>
     
    </div>
  );
};

export default Testimonials;


