import React from "react";
import { PopupContent } from "../data/data";
const PopupStory = ({ index, show, onClose }) => {
  if (!show) return null;
  return (
    <div
      id="popup"
      className="popup"
      
    >
      <div className="popup-container"
      onClick={(e) => {
        if (e.target.className === "popup-container") {
          e.stopPropagation();
          onClose();
        }
      }}>
        <div className="popup-content animate__animated animate__zoomIn">
            <a className={`content-header-${index+1}`} />
            <div className="content-body">
            {PopupContent[index].popupContent.split('\n').map((line, index) => <p key={index}>{line}</p>)}
            </div>
        </div>
      </div>
    </div>
  );
};

export default PopupStory;
