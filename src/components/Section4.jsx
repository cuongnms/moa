import React, { useEffect, useState } from "react";
import openTreasure from "../assets/images/sec4-treasure-open.png";
import closeTreasure from "../assets/images/sec4-treasure-close.png";
import { TermUrl } from "../config/config";
const Section4 = () => {
  const [treasureStatus, setTreasureStatus] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('https://api.example.com/data'); 
        // const json = await response.json();
        const status = [true, true, false, false, false];
        setTreasureStatus(status);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    
  }, []);

  return (
    <>
      <div className="overflow-hidden flex flex-col items-center relative w-full responsive-bg4">
        <div className="sec4-title" />
        <div className="sec4-line1" />
        <div className="sec4-line2" />
        <div className="sec4-wrapper">
          <div className="flag1 flag1-margin1 wow animate__animated animate__fadeInUp animate__delay-1s" style={{filter: `${treasureStatus[0] ? "" : "grayscale(100%)"}`}}>
            <a
              className="treasure-close wow animate__animated animate__fadeIn animate__delay-1s"
              style={{
                backgroundImage: `url(${
                  treasureStatus[0] ? openTreasure : closeTreasure
                })`,
                filter: `${treasureStatus[0] ? "" : "grayscale(100%)"}`,
              }}
            />
          </div>
          <div className="flag1 flag1-margin2 wow animate__animated animate__fadeInUp animate__delay-2s" style={{filter: `${treasureStatus[1] ? "" : "grayscale(100%)"}`}}>
            <a
              className="treasure-close wow animate__animated animate__fadeIn animate__delay-2s"
              style={{
                backgroundImage: `url(${
                  treasureStatus[1] ? openTreasure : closeTreasure
                })`,
                filter: `${treasureStatus[1] ? "" : "grayscale(100%)"}`,
              }}
            />
          </div>
          <div className="flag2 wow animate__animated animate__fadeInUp animate__delay-3s" style={{filter: `${treasureStatus[2] ? "" : "grayscale(100%)"}`}}>
            <div
              className="treasure-close wow animate__animated animate__fadeIn animate__delay-3s"
              style={{
                backgroundImage: `url(${
                  treasureStatus[2] ? openTreasure : closeTreasure
                })`,
                filter: `${treasureStatus[2] ? "" : "grayscale(100%)"}`,
              }}
            />
          </div>
          <div className="flag2 wow animate__animated animate__fadeInUp animate__delay-4s" style={{filter: `${treasureStatus[3] ? "" : "grayscale(100%)"}`}}>
            <div
              className="treasure-close wow animate__animated animate__fadeIn animate__delay-4s"
              style={{
                backgroundImage: `url(${
                  treasureStatus[3] ? openTreasure : closeTreasure
                })`,
                filter: `${treasureStatus[3] ? "" : "grayscale(100%)"}`,
              }}
            />
          </div>
          <div className="flag3 wow animate__animated animate__fadeInUp animate__delay-5s" style={{filter: `${treasureStatus[4] ? "" : "grayscale(100%)"}`}}>
            <div
              className="treasure-close last-treasure wow animate__animated animate__fadeIn animate__delay-5s"
              style={{
                backgroundImage: `url(${
                  treasureStatus[4] ? openTreasure : closeTreasure
                })`,
                filter: `${treasureStatus[4] ? "" : "grayscale(100%)"}`,
              }}
            />
          </div>
        </div>

        <div className="sec4-btns">
          <a className="sec4-btn-checkin"></a>
          <a href={TermUrl} className="sec4-btn-term"></a>
        </div>
        <div className="sec4-note">
          <p>
            *Tham dự sự kiện đồng nghĩa người chơi đồng ý với các điều khoản và
            điều kiện từ Ban Điều Hành
          </p>
        </div>
      </div>
    </>
  );
};
export default Section4;
