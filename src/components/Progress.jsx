import React from "react";
const Progress = (items) => {
  return (
    <>
      <div className="sec4-line" />
      <div className="sec4-progress">
        {Array.from({ length: items.items - 1 }, (_, i) => i + 1).map(
          (item) => (
            <div key={item} className="sec4-item"></div>
          )
        )}
      </div>
    </>
  );
};
export default Progress;
