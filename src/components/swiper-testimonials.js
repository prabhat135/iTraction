import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../css/carousel.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { testimonials } from './Reviews';

export default function TestimonialsCarousel() {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={8}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      direction={'vertical'}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      loop={true}
    >
      {testimonials.map((testimonial, index) => {
        let marginClass;
        switch (index) {
          case 0:
            marginClass = "mx-10 md:ml-20 md:mr-10";
            break;
          case 1:
            marginClass = "mx-3 md:ml-10 md:mr-20";
            break;
          case 2:
            marginClass = "mx-10 md:ml-0 sm:mr-12 md:mr-40";
            break;
          case 3:
            marginClass = "mx-3 md:ml-10 md:mr-20";
            break;
          case 4:
            marginClass = "mx-10 md:ml-20 md:mr-10";
            break;
          case 5:
            marginClass = "mx-3 md:ml-40 md:mr-0";
            break;
          default:
            marginClass = "";
            break;
        }
        return (
          <SwiperSlide key={index}>
            <div
              className={`flex items-center h-full md:h-[8vw] space-x-4 px-2 py-1 md:px-4 md:py-4 bg-black border-[1px] border-zinc-400 rounded-lg ${marginClass}`}
            >
              <img
                className="w-10 md:w-16 h-10 md:h-16 rounded-full"
                src={testimonial.image}
                alt={`${testimonial.name}'s profile`}
              />
              <div className='flex flex-col'>
               <div className='flex gap-2 items-center'>
               <h4 className="text-xl font-semibold">{testimonial.name}</h4>
               <p className="text-sm text-gray-400 truncate">{testimonial.role}</p>
               </div>
                <p className="mt-2">{testimonial.feedback}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
