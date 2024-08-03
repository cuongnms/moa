import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css";
import "../assets/css/sec2-swiper.css";
import Popup from "./Popup";
import subtitle1 from "../assets/images/sec2-subtitle.png";
import { PopupContent } from "../data/data";
const Section2 = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showPopup]);
  const togglePopup = (index) => {
    setShowPopup(!showPopup);
    index !== -1 && setIndex(index);
  };
  return (
    <>
      <div className="overflow-hidden flex items-center justify-center relative w-full responsive-bg2">
        <div className="sec2-title" />
        <div className="sec2-container">
          <Swiper
            modules={[EffectFade, Autoplay, Navigation, Pagination]}
            effect={"fade"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            speed={3000}
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
              clickable: true,
            }}
            autoplay={{ delay: 3000 }}
            className="sec2-swiper-container"
          >
            {PopupContent.map((item, index) => (
              <>
                <SwiperSlide key={index} className={`sec2-swiper-slide banner${index + 1}`}>
                  <div className="frame-content">
                    <div
                      className={`subtitle${index+1}`}
                      style={{ backgroundImage: `url(${String(item.title)})` }}
                    />
                    <div className="sec2-content-txt">
                      {item.popupContent.replace("\n", "")}
                    </div>
                    <div
                      className="btn-viewmore"
                      onClick={() => togglePopup(index)}
                    />
                  </div>
                </SwiperSlide>
              </>
            ))}

            <div className="sec2-slider-controler">
              <div className="sec2-swiper-button-prev"></div>
              <div className="sec2-swiper-button-next"></div>
            </div>
          </Swiper>
          <div className="sec2-swiper-pagination"></div>
        </div>
      </div>
      <Popup index={index} show={showPopup} onClose={() => togglePopup(-1)} />
    </>
  );
};
export default Section2;
