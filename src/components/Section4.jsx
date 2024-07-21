import React from "react";
import Progress from "./Progress";
import openTreasure from "../assets/images/sec4-treasure-open.png";
import closeTreasure from "../assets/images/sec4-treasure-close.png";
const Section4 = () => {
  return (
    <>
      <div className="overflow-hidden flex flex-col items-center relative w-full responsive-bg4">
        <div className="sec4-title" />
        <div className="sec4-wrapper">
          <div className="sec4-flags1">
            <div className="sec4-line1" />
            <div className="sec4-flag1">
              <div className="flag1" />
              <div
                className="treasure-close"
                style={{ backgroundImage: { closeTreasure } }}
              />
            </div>
            <div className="sec4-flag1">
              <div className="flag1" />
              <div
                className="treasure-close"
                style={{ backgroundImage: { closeTreasure } }}
              />
            </div>
          </div>
          <div className="sec4-flags2">
            <div className="sec4-line2" />
            <div className="sec4-flag2">
              <div className="flag2" />
              <div
                className="treasure-close"
                style={{ backgroundImage: { closeTreasure } }}
              />
            </div>
            <div className="sec4-flag2">
              <div className="flag2" />
              <div
                className="treasure-close"
                style={{ backgroundImage: { closeTreasure } }}
              />
            </div>
            <div className="sec4-flag2">
              <div className="flag3" />
              <div
                className="treasure-close"
                style={{ backgroundImage: { closeTreasure } }}
              />
            </div>
          </div>
        </div>
        <div className="sec4-btns">
          <a href="#" className="sec4-btn-checkin"></a>
          <a href="#" className="sec4-btn-term"></a>
        </div>
        <div className="sec4-note">
          <p>*Tham dự sự kiện đồng nghĩa người chơi đồng ý <br/>
          với các điều khoản và điều kiện từ Ban Điều Hành</p>
        </div>
      </div>
    </>
  );
};
export default Section4;
