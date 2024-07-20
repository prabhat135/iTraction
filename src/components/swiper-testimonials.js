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
      spaceBetween={5}
      // autoplay={{
      //   delay: 1500,
      //   disableOnInteraction: false,
      // }}
      direction={'vertical'}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      loop={true}
    >
      {testimonials.map((testimonial, index) => {
        let marginClass;
        switch (index) {
          case 0:
            marginClass = "ml-20 mr-10";
            break;
          case 1:
            marginClass = "ml-10 mr-20";
            break;
          case 2:
            marginClass = "ml-0 mr-40";
            break;
          case 3:
            marginClass = "ml-10 mr-20";
            break;
          case 4:
            marginClass = "ml-20 mr-10";
            break;
          case 5:
            marginClass = "ml-40 mr-0";
            break;
          default:
            marginClass = "";
            break;
        }
        return (
          <SwiperSlide key={index}>
            <div
              className={`flex items-center h-[8vw] space-x-4 p-4 bg-black border-[1px] border-zinc-400 rounded-lg ${marginClass}`}
            >
              <img
                className="w-16 h-16 rounded-full"
                src={testimonial.image}
                alt={`${testimonial.name}'s profile`}
              />
              <div>
                <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-400 truncate">{testimonial.role}</p>
                <p className="mt-2">{testimonial.feedback}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
