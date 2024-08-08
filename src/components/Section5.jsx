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
import "swiper/css/effect-fade";
import { Sec5Banner } from "../data/data";
const Section5 = () => {

  const isMobile = () => {
    return window.innerWidth < 769;
  };

  return (
    <>
      <div className="overflow-hidden flex justify-center relative w-full responsive-bg5">
        <div className="sec5-title" />
        <div className="sec5-container">
          <Swiper
            modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: isMobile()
                ? window.innerWidth * 0.678
                : window.innerWidth * 0.6129,
              scale: 0.9,
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
            {Sec5Banner.map((item, index) => ( 
              <>
                <SwiperSlide key={index} className="sec5-swiper-slide">
                  <img
                    src={String(item.pc)}
                    id="pc"
                    className="sec5-img-pc w-[70%]"
                    alt="Temp"
                  />
                  <img
                    src={String(item.mb)}
                    id="mb"
                    className="sec5-img-mb"
                    alt="Temp"
                  />
                </SwiperSlide>
              </>
            ))}
            
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
