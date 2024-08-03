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
          <div className="flag1 flag1-margin1" style={{filter: `${treasureStatus[0] ? "" : "grayscale(100%)"}`}}>
            <a
              className="treasure-close"
              style={{
                backgroundImage: `url(${
                  treasureStatus[0] ? openTreasure : closeTreasure
                })`,
                filter: `${treasureStatus[0] ? "" : "grayscale(100%)"}`,
              }}
            />
          </div>
          <div className="flag1 flag1-margin2" style={{filter: `${treasureStatus[1] ? "" : "grayscale(100%)"}`}}>
            <a
              className="treasure-close"
              style={{
                backgroundImage: `url(${
                  treasureStatus[1] ? openTreasure : closeTreasure
                })`,
                filter: `${treasureStatus[1] ? "" : "grayscale(100%)"}`,
              }}
            />
          </div>
          <div className="flag2" style={{filter: `${treasureStatus[2] ? "" : "grayscale(100%)"}`}}>
            <div
              className="treasure-close"
              style={{
                backgroundImage: `url(${
                  treasureStatus[2] ? openTreasure : closeTreasure
                })`,
                filter: `${treasureStatus[2] ? "" : "grayscale(100%)"}`,
              }}
            />
          </div>
          <div className="flag2" style={{filter: `${treasureStatus[3] ? "" : "grayscale(100%)"}`}}>
            <div
              className="treasure-close"
              style={{
                backgroundImage: `url(${
                  treasureStatus[3] ? openTreasure : closeTreasure
                })`,
                filter: `${treasureStatus[3] ? "" : "grayscale(100%)"}`,
              }}
            />
          </div>
          <div className="flag3" style={{filter: `${treasureStatus[4] ? "" : "grayscale(100%)"}`}}>
            <div
              className="treasure-close last-treasure"
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
