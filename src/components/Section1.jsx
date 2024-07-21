import React from "react";
import video from "../assets/videos/sec1-bg-video.mp4";
const Section1 = () => {
  return (
    <>
      <div className="overflow-hidden flex items-center relative w-full responsive-bg1">
        <div className="video">
          <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="logo-18" />
        <div className="scroll" />
        
      </div>
    </>
  );
};
export default Section1;
