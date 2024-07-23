import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css";
import "../assets/css/sec5-swiper.css";
import img1 from "../assets/images/sec5-banner1.png";
const Section2 = () => {
  return (
    <>
      <div className="overflow-hidden flex items-center relative w-full responsive-bg2">
        <div className="sec2-title" />
        <div className="sec2-container">
          <Swiper
            modules={[EffectFade, Navigation, Pagination]}
            effect={"fade"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            fadeEffect={{
              duration: 0,
              ease: "linear",
            }}
            loop={true}
            navigation={{
              clickable: true,
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            autoplay={{ delay: 3000 }}
            className="swiper-container"
          >
            <SwiperSlide className="swiper-slide">
              <img src={String(img1)} alt="Temp" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={String(img1)} alt="Temp" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={String(img1)} alt="Temp" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={String(img1)} alt="Temp" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={String(img1)} alt="Temp" />
            </SwiperSlide>

            <div className="slider-controler">
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </>
  );
};
export default Section2;
