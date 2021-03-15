import React from "react";

import "./Date.css";

export default function Date() {
  let dateInfo = {
    date: "Monday, May 02",
    time: "01:07",
  };

  return (
    <div className="Date">
      <div className="row">
        <div className="col">
          <h2 className="date">{dateInfo.date}</h2>
        </div>
        <div className="col">
          <h2>
            <i className="far fa-clock"></i>
            <span className="time">{dateInfo.time}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
