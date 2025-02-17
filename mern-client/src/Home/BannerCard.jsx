import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import './BannerCard.css'

// import required modules
import { EffectCards, Autoplay } from "swiper/modules";

const BannerCard = () => {
  return (
    <div className="banner">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        autoplay={{
            delay: 2000, // 3 seconds delay between slides
            disableOnInteraction: false, // Keep autoplay running even after user interaction
          }}
        modules={[EffectCards, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerCard;
