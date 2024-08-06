import React from "react";
import { useState, useEffect } from "react";
import elfName from "../assets/images/elf-name.png";
import dkName from "../assets/images/dk-name.png";
import dwName from "../assets/images/dw-name.png";
import dot from "../assets/images/swiper-bullet-active.png";
import dkSkill1 from "../assets/images/dk-skill1.png";
import dkSkill2 from "../assets/images/dk-skill2.png";
import dkSkill3 from "../assets/images/dk-skill3.png";
import hover from "../assets/images/hover.png";
import { Tooltip } from "react-tooltip";
import video from "../assets/videos/sec1-bg-video.mp4";
const Section3 = () => {
  const [rotate, setRotate] = useState(0);
  const [char, setChar] = useState("1");
  const [skill, setSkill] = useState(0);
  useEffect(() => {
    const left = document.getElementById("2");
    const right = document.getElementById("9");
    const mid = document.getElementById("1");
    left.classList.add("left");
    right.classList.add("right");
    mid.classList.add("mid");
  }, []);
  const isMobile = () => {
    return window.innerWidth < 769;
  };
  const spin = (event) => {
    const id = event.target.id;
    if (document.getElementById(id).classList.contains("mid")) {
      return;
    }
    setChar(id);
    if (parseInt(id) % 3 === 1) {
      document.getElementById("char1").classList.add("animate-fade-in");
      document.getElementById("char2").classList.add("animate-fade-out");
      document.getElementById("char3").classList.add("animate-fade-out");
      document.getElementById("char1").classList.remove("animate-fade-out");
      document.getElementById("char2").classList.remove("animate-fade-in");
      document.getElementById("char3").classList.remove("animate-fade-in");
    } else if (parseInt(id) % 3 === 2) {
      document.getElementById("char2").classList.add("animate-fade-in");
      document.getElementById("char1").classList.add("animate-fade-out");
      document.getElementById("char3").classList.add("animate-fade-out");
      document.getElementById("char2").classList.remove("animate-fade-out");
      document.getElementById("char1").classList.remove("animate-fade-in");
      document.getElementById("char3").classList.remove("animate-fade-in");
    } else {
      document.getElementById("char3").classList.add("animate-fade-in");
      document.getElementById("char2").classList.add("animate-fade-out");
      document.getElementById("char1").classList.add("animate-fade-out");
      document.getElementById("char3").classList.remove("animate-fade-out");
      document.getElementById("char2").classList.remove("animate-fade-in");
      document.getElementById("char1").classList.remove("animate-fade-in");
    }
    if (document.getElementById(id).classList.contains("dk")) {
      document.getElementById(id).classList.remove("dk");
      document.getElementById(id).classList.add("dk-active");
    } else if (document.getElementById(id).classList.contains("dw")) {
      document.getElementById(id).classList.remove("dw");
      document.getElementById(id).classList.add("dw-active");
    } else if (document.getElementById(id).classList.contains("elf")) {
      document.getElementById(id).classList.remove("elf");
      document.getElementById(id).classList.add("elf-active");
    }
    if (document.querySelector(".mid").classList.contains("dk-active")) {
      document.querySelector(".mid").classList.remove("dk-active");
      document.querySelector(".mid").classList.add("dk");
    } else if (document.querySelector(".mid").classList.contains("dw-active")) {
      document.querySelector(".mid").classList.remove("dw-active");
      document.querySelector(".mid").classList.add("dw");
    } else if (
      document.querySelector(".mid").classList.contains("elf-active")
    ) {
      document.querySelector(".mid").classList.remove("elf-active");
      document.querySelector(".mid").classList.add("elf");
    }
    let circle = document.querySelector(".sec3-circle");
    if (circle != null) {
      circle.style.transition = "transform 1s";
      if (document.getElementById(id).classList.contains("right")) {
        isMobile()
          ? (circle.style.transform = `rotate(${rotate + 130}deg)`)
          : (circle.style.transform = `rotate(${rotate + 40}deg)`);
        setRotate((rotate) => rotate + 40);
        const newRightId = id === "1" ? 9 : parseInt(id) - 1;
        document.querySelector(".left").classList.remove("left");
        document.querySelector(".mid").classList.add("left");
        document.querySelector(".left").classList.remove("mid");
        document.getElementById(String(newRightId)).classList.add("right");
        document.getElementById(id).classList.remove("right");
        document.getElementById(id).classList.add("mid");
      } else if (document.getElementById(id).classList.contains("left")) {
        isMobile()
          ? (circle.style.transform = `rotate(${rotate + 50}deg)`)
          : (circle.style.transform = `rotate(${rotate - 40}deg)`);
        setRotate((rotate) => rotate - 40);
        const newLeftId = id === "9" ? 1 : parseInt(id) + 1;
        document.querySelector(".right").classList.remove("right");
        document.querySelector(".mid").classList.add("right");
        document.querySelector(".right").classList.remove("mid");
        document.getElementById(String(newLeftId)).classList.add("left");
        document.getElementById(id).classList.remove("left");
        document.getElementById(id).classList.add("mid");
      }
    }
  };

  return (
    <>
      <div className="overflow-hidden flex items-center relative w-full responsive-bg3">
        <div className="sec3-layout" />
        <div className="sec3-title" />
        <div className="bg-char" />
        <div className="sec3-curve-char">
          <div className="sec3-circle">
            <div id="1" className="item dk-active" onClick={spin} />
            <div id="2" className="item dw" onClick={spin} />
            <div id="3" className="item elf" onClick={spin} />
            <div id="4" className="item dk" onClick={spin} />
            <div id="5" className="item dw" onClick={spin} />
            <div id="6" className="item elf" onClick={spin} />
            <div id="7" className="item dk" onClick={spin} />
            <div id="8" className="item dw" onClick={spin} />
            <div id="9" className="item elf" onClick={spin} />
          </div>
        </div>
        <div
          id="char1"
          className={`sec3-char-wrapper dk-wrapper ${
            parseInt(char) % 3 === 1 ? "animate-fade-in" : "animate-fade-out"
          }`}
        >
          <div className="sec3-layout-bg" />

          <div
            className={`sec3-char-info ${
              parseInt(char) % 3 === 1
                ? "animate__animated animate__fadeInRight"
                : ""
            }`}
          >
            <img src={dkName} className="char-name-dk" />
            <div className="char-info">
              <div className="relative flex items-center justify-start w-full">
                <img src={dot} className="w-[4%]" />
                <span
                  style={{ fontFamily: "beaufort-bold", textIndent: "4px" }}
                >
                  <p>Giới thiệu nhân vật</p>
                </span>
              </div>
              <div className="relative flex items-center justify-start w-full pl-[5%]">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
              <div className="relative flex items-center justify-start w-full">
                <img src={dot} className="w-[4%]" />
                <span
                  style={{ fontFamily: "beaufort-bold", textIndent: "4px" }}
                >
                  <p>Kỹ năng:</p>
                </span>
              </div>
              <div className="relative w-full flex items-center justify-center skills-wrapper">
                <div
                  id="dk-skill-1"
                  className="skills"
                  style={{
                    backgroundImage: `url(${skill === 0 ? hover : null})`,
                  }}
                  onClick={() => setSkill(0)}
                >
                  <img width={"80%"} src={String(dkSkill1)} />
                </div>
                <Tooltip
                  place="bottom"
                  anchorSelect="#dk-skill-1"
                  content="Skill 1 DK"
                />

                <div
                  id="dk-skill-2"
                  className="skills"
                  style={{
                    backgroundImage: `url(${skill === 1 ? hover : null})`,
                  }}
                  onClick={() => setSkill(1)}
                >
                  <img width={"80%"} src={String(dkSkill2)} />
                </div>
                <Tooltip
                  place="bottom"
                  anchorSelect="#dk-skill-2"
                  content="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                />

                <div
                  id="dk-skill-3"
                  className="skills"
                  style={{
                    backgroundImage: `url(${skill === 2 ? hover : null})`,
                  }}
                  onClick={() => setSkill(2)}
                >
                  <img width={"80%"} src={String(dkSkill3)} />
                </div>
                <Tooltip
                  place="bottom"
                  anchorSelect="#dk-skill-3"
                  content="Skill 3 DK"
                />
              </div>
            </div>
          </div>
          <div className="sec3-char-video">
            <video
              width={500}
              height={250}
              controls
              muted
              poster="path-to-poster-image.jpg"
            >
              <source src={String(video)} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div
          id="char2"
          className={`sec3-char-wrapper dw-wrapper ${
            parseInt(char) % 3 === 2 ? "animate-fade-in" : "animate-fade-out"
          }`}
        >
          <div className="sec3-layout-bg" />
          <div
            className={`sec3-char-info ${
              parseInt(char) % 3 === 2
                ? "animate__animated animate__fadeInRight"
                : ""
            }`}
          >
            <img src={dwName} className="char-name-dw" />
            <div className="char-info">
              <div className="relative flex items-center justify-start w-full">
                <img src={dot} className="w-[4%]" />
                <span
                  style={{ fontFamily: "beaufort-bold", textIndent: "4px" }}
                >
                  <p>Giới thiệu nhân vật</p>
                </span>
              </div>
              <div className="relative flex items-center justify-start w-full pl-[5%]">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
              <div className="relative flex items-center justify-start w-full">
                <img src={dot} className="w-[4%]" />
                <span
                  style={{ fontFamily: "beaufort-bold", textIndent: "4px" }}
                >
                  <p>Kỹ năng:</p>
                </span>
              </div>
              <div className="relative w-full flex items-center justify-center skills-wrapper">
                <div
                  id="dk-skill-1"
                  className="skills"
                  style={{
                    backgroundImage: `url(${skill === 0 ? hover : null})`,
                  }}
                  onClick={() => setSkill(0)}
                >
                  <img width={"80%"} src={String(dkSkill1)} />
                </div>
                <Tooltip
                  place="bottom"
                  anchorSelect="#dk-skill-1"
                  content="Skill 1 DK"
                />

                <div
                  id="dk-skill-2"
                  className="skills"
                  style={{
                    backgroundImage: `url(${skill === 1 ? hover : null})`,
                  }}
                  onClick={() => setSkill(1)}
                >
                  <img width={"80%"} src={String(dkSkill2)} />
                </div>
                <Tooltip
                  place="bottom"
                  anchorSelect="#dk-skill-2"
                  content="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                />

                <div
                  id="dk-skill-3"
                  className="skills"
                  style={{
                    backgroundImage: `url(${skill === 2 ? hover : null})`,
                  }}
                  onClick={() => setSkill(2)}
                >
                  <img width={"80%"} src={String(dkSkill3)} />
                </div>
                <Tooltip
                  place="bottom"
                  anchorSelect="#dk-skill-3"
                  content="Skill 3 DK"
                />
              </div>
            </div>
          </div>
          <div className="sec3-char-video"></div>
        </div>
        <div
          id="char3"
          className={`sec3-char-wrapper elf-wrapper ${
            parseInt(char) % 3 === 0 ? "animate-fade-in" : "animate-fade-out"
          }`}
        >
          <div className="sec3-layout-bg" />
          <div
            className={`sec3-char-info ${
              parseInt(char) % 3 === 0
                ? "animate__animated animate__fadeInRight"
                : ""
            }`}
          >
            <img src={elfName} className="char-name-elf" />
            <div className="char-info">
              <div className="relative flex items-center justify-start w-full">
                <img src={dot} className="w-[4%]" />
                <span
                  style={{ fontFamily: "beaufort-bold", textIndent: "4px" }}
                >
                  <p>Giới thiệu nhân vật</p>
                </span>
              </div>
              <div className="relative flex items-center justify-start w-full pl-[5%]">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
              <div className="relative flex items-center justify-start w-full">
                <img src={dot} className="w-[4%]" />
                <span
                  style={{ fontFamily: "beaufort-bold", textIndent: "4px" }}
                >
                  <p>Kỹ năng:</p>
                </span>
              </div>
              <div className="relative w-full flex items-center justify-center skills-wrapper">
                <div
                  id="dk-skill-1"
                  className="skills"
                  style={{
                    backgroundImage: `url(${skill === 0 ? hover : null})`,
                  }}
                  onClick={() => setSkill(0)}
                >
                  <img width={"80%"} src={String(dkSkill1)} />
                </div>
                <Tooltip
                  place="bottom"
                  anchorSelect="#dk-skill-1"
                  content="Skill 1 DK"
                />

                <div
                  id="dk-skill-2"
                  className="skills"
                  style={{
                    backgroundImage: `url(${skill === 1 ? hover : null})`,
                  }}
                  onClick={() => setSkill(1)}
                >
                  <img width={"80%"} src={String(dkSkill2)} />
                </div>
                <Tooltip
                  place="bottom"
                  anchorSelect="#dk-skill-2"
                  content="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                />

                <div
                  id="dk-skill-3"
                  className="skills"
                  style={{
                    backgroundImage: `url(${skill === 2 ? hover : null})`,
                  }}
                  onClick={() => setSkill(2)}
                >
                  <img width={"80%"} src={String(dkSkill3)} />
                </div>
                <Tooltip
                  place="bottom"
                  anchorSelect="#dk-skill-3"
                  content="Skill 3 DK"
                />
              </div>
            </div>
          </div>
          <div className="sec3-char-video"></div>
        </div>
      </div>
    </>
  );
};
export default Section3;
