import React, { useEffect, useState } from "react";
import openTreasure from "../assets/images/sec4-treasure-open.png";
import closeTreasure from "../assets/images/sec4-treasure-close.png";
import { TermUrl } from "../config/config";
import PopupLogin from "./PopupLogin";

const Section4 = () => {
  const [showPopup, setShowPopup] = useState(false);

  const [treasureStatus, setTreasureStatus] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [player, setPlayer] = useState(0);

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

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('https://api.example.com/data');
        // const json = await response.json();
        // json = {status: [true, true, false, false, false], players: 1000 };
        const status = [true, true, false, false, false];
        const players = 1000;
        setTreasureStatus(status);
        setPlayer(players);
      } catch (error) {
        console.error("Error fetching data:", error);
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
          <div
            className="flag1 flag1-margin1 wow animate__animated animate__fadeInUp animate__delay-1s"
            style={{ filter: `${treasureStatus[0] ? "" : "grayscale(100%)"}` }}
          >
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
          <div
            className="flag1 flag1-margin2 wow animate__animated animate__fadeInUp animate__delay-2s"
            style={{ filter: `${treasureStatus[1] ? "" : "grayscale(100%)"}` }}
          >
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
          <div
            className="flag2 wow animate__animated animate__fadeInUp animate__delay-3s"
            style={{ filter: `${treasureStatus[2] ? "" : "grayscale(100%)"}` }}
          >
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
          <div
            className="flag2 wow animate__animated animate__fadeInUp animate__delay-4s"
            style={{ filter: `${treasureStatus[3] ? "" : "grayscale(100%)"}` }}
          >
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
          <div
            className="flag3 wow animate__animated animate__fadeInUp animate__delay-5s"
            style={{ filter: `${treasureStatus[4] ? "" : "grayscale(100%)"}` }}
          >
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
        <div className="player-info">
          <p>{player.toLocaleString("de-DE")}</p>
        </div>
        <div className="sec4-note">
          <p>Đã có người chơi đăng ký</p>
        </div>
        <div className="sec4-btns">
          <a className="sec4-btn-checkin" onClick={togglePopup}></a>
          <a href={TermUrl} target="_blank" className="sec4-btn-term"></a>
        </div>
      </div>
      <PopupLogin show={showPopup} onClose={() => togglePopup()} />
    </>
  );
};
export default Section4;
