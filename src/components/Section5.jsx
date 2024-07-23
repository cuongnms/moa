import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "../assets/css/sec5-swiper.css";
import img1 from "../assets/images/sec5-banner1.png";
const Section5 = () => {
  return (
    <>
      <div className="overflow-hidden flex justify-center relative w-full responsive-bg5">
        <div className="sec5-title" />
        <div className="sec5-container">
          <Swiper
            modules={[EffectCoverflow, Navigation, Pagination]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 200,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            loop={true}
            navigation={{
              clickable: true,
              nextEl: ".sec5-swiper-button-next",
              prevEl: ".sec5-swiper-button-prev",
            }}
            pagination={{
              el: ".sec5-swiper-pagination",
              clickable: true,
            }}
            autoplay={{ delay: 3000 }}
            className="sec5-swiper-container"
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
            <div className="sec5-slider-controler">
              <div className="sec5-swiper-button-prev"></div>
              <div className="sec5-swiper-button-next"></div>
            </div>
          </Swiper>
          <div className="sec5-swiper-pagination"></div>
        </div>
      </div>
    </>
  );
};
export default Section5;
