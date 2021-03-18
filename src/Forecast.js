import React from "react";

import "./Forecast.css";

export default function Forecast() {
  let forecastData = {
    day: "Monday",
    img: "",
    temp: "19",
  };
  return (
    <div className="Forecast">
      <li className="list-group-item">
        <div className="d-flex bd-highlight">
          <div className="p-2 flex-fill bd-highlight">{forecastData.day}</div>
          <div className="p-2 flex-fill bd-highlight">
            <i className="fas fa-cloud-sun">{forecastData.img}</i>
          </div>
          <div className="p-2 flex-fill bd-highlight">
            {forecastData.temp}°C
          </div>
        </div>
      </li>
    </div>
  );
}
