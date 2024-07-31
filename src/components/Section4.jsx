import React from "react";
import Progress from "./Progress";
import openTreasure from "../assets/images/sec4-treasure-open.png";
import closeTreasure from "../assets/images/sec4-treasure-close.png";
const Section4 = () => {
  return (
    <>
      <div className="overflow-hidden flex flex-col items-center relative w-full responsive-bg4">
        <div className="sec4-title" />
        <div className="sec4-line1" />
        <div className="sec4-line2" />
        <div className="sec4-wrapper">
          <div className="flag1 flag1-margin1">
            <a
              className="treasure-close"
              style={{ backgroundImage: `url(${closeTreasure})` }}
            />
          </div>
          <div className="flag1 flag1-margin2">
            <a
              className="treasure-close"
              style={{ backgroundImage: `url(${closeTreasure})` }}
            />
          </div>
          <div className="flag2">
            <div
              className="treasure-close"
              style={{ backgroundImage: `url(${closeTreasure})` }}
            />
          </div>
          <div className="flag2">
            <div
              className="treasure-close"
              style={{ backgroundImage: `url(${closeTreasure})` }}
            />
          </div>
          <div className="flag3">
            <div
              className="treasure-close last-treasure"
              style={{ backgroundImage: `url(${closeTreasure})` }}
            />
          </div>
        </div>

        <div className="sec4-btns">
          <a href="#" className="sec4-btn-checkin"></a>
          <a href="#" className="sec4-btn-term"></a>
        </div>
        <div className="sec4-note">
          <p>
            *Tham dự sự kiện đồng nghĩa người chơi đồng ý
            với các điều khoản và điều kiện từ Ban Điều Hành
          </p>
        </div>
      </div>
    </>
  );
};
export default Section4;
