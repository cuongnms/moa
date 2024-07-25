import React, {useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css";
import "../assets/css/sec2-swiper.css";
import img1 from "../assets/images/sec3-bg-mb.png";
import img2 from "../assets/images/sec4-bg-mb.png";
import img3 from "../assets/images/sec5-bg-mb.png";
import subtitle1 from "../assets/images/sec2-subtitle.png";
const Section2 = () => {
  return (
    <>
      <div className="overflow-hidden flex items-center justify-center relative w-full responsive-bg2">
        <div className="sec2-title" />
        <div className="sec2-container">
          <Swiper
            modules={[Autoplay, EffectFade, Navigation, Pagination]}
            effect={"fade"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            fadeEffect={{
              crossFade: true,
            }}
            loop={true}
            navigation={{
              clickable: true,
              nextEl: ".sec2-swiper-button-next",
              prevEl: ".sec2-swiper-button-prev",
            }}
            pagination={{
              el: ".sec2-swiper-pagination",
              clickable: false,
            }}
            autoplay={{ delay: 1000, pauseOnMouseEnter: false, disableOnInteraction: false}}
            className="sec2-swiper-container"
          >
            <SwiperSlide className="swiper-slide">
                <img src={String(img1)} alt="Temp" />

                <div className="frame-content" >
                  <div
                    className="subtitle"
                    style={{ backgroundImage: `url(${subtitle1})` }}
                  />
                  <p className="sec2-content-txt">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially...
                  </p>
                  <div className="btn-viewmore" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img src={String(img2)} alt="Temp" />

                <div className="frame-content" >
                  <div
                    className="subtitle"
                    style={{ backgroundImage: `url(${subtitle1})` }}
                  />
                  <p className="sec2-content-txt">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially...
                  </p>
                  <div className="btn-viewmore" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img src={String(img3)} alt="Temp" />

                <div className="frame-content" >
                  <div
                    className="subtitle"
                    style={{ backgroundImage: `url(${subtitle1})` }}
                  />
                  <p className="sec2-content-txt">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially...
                  </p>
                  <div className="btn-viewmore" />
                </div>
            </SwiperSlide>
            
            <div className="sec2-slider-controler">
              <div className="sec2-swiper-button-prev"></div>
              <div className="sec2-swiper-button-next"></div>
            </div>
            <div className="sec2-swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default Section2;
