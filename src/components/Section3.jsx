import React from "react";
import { useState } from "react";
const Section3 = () => {

    const spin = (number) => {
        console.log(0);

        let wheelElement = document.querySelector('.sec3-circle');
        if (wheelElement != null) {
            wheelElement.style.transition = "transform 1s";
            wheelElement.style.transform = `rotate(${45*number}deg)`;
            console.log("aaaaa");

        }      
    }

    const spinNoParam = () => {
        console.log(0);

        let wheelElement = document.querySelector('.sec3-circle');
        console.log(wheelElement.getAttribute('transform'));
        if (wheelElement != null) {
            wheelElement.style.transition = "transform 1s";
            wheelElement.style.transform = `rotate(${45}deg)`;
            console.log("aaaaa");
        }      
        console.log(wheelElement.getAttribute('transform'));

    }
    

    return (
        <>
            <div className="overflow-hidden flex items-center relative w-full responsive-bg3">
                <div className="sec3-layout" />
                <div className="sec3-title" />
                <div className="sec3-curve-char">
                        <div className="sec3-circle" >
                            <div className="sec3-icon-char1 item1" onClick={spinNoParam}/>
                            <div className="sec3-icon-char1 item2" onClick={spinNoParam}/>
                            <div className="sec3-icon-char1 item3" onClick={spinNoParam}/>
                            <div className="sec3-icon-char1 item4" onClick={spinNoParam}/>
                            <div className="sec3-icon-char1 item5" onClick={spinNoParam}/>
                            <div className="sec3-icon-char1 item6" onClick={spinNoParam}/>
                            <div className="sec3-icon-char1 item7" onClick={spinNoParam}/>
                            <div className="sec3-icon-char1 item8" onClick={spinNoParam}/>
                        </div>
                        
                    {/* <div className="char2 sec3-icon-char2" onClick={select}/> */}
                    {/* <div className="char3 sec3-icon-char3" onClick={select}/> */}
                </div>
              
            </div>
        </>
    );
}
export default Section3;