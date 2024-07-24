import React from "react";
import $ from 'jquery';
const Section3 = () => {

    const select = () => {

        $('.wrapper').on('click', function(){
            $('.wrapper').toggleClass('open');
        });
        console.log("test");
        
        
    }

    return (
        <>
            <div className="overflow-hidden flex items-center relative w-full responsive-bg3">
                <div className="sec3-layout" />
                <div className="sec3-title" />
                <div className="sec3-curve-char">
                    <div className="wrapper">
                        <div className="char1 sec3-icon-char1" onClick={select}/>
                    </div>
                    {/* <div className="char2 sec3-icon-char2" onClick={select}/> */}
                    {/* <div className="char3 sec3-icon-char3" onClick={select}/> */}
                </div>
              
            </div>
        </>
    );
}
export default Section3;