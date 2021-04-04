import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastElement(props) {
  function hour() {
    let date = new Date(props.prediction.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temp() {
    let temperature = Math.round(props.prediction.main.temp);
    return `${temperature}°C`;
  }

  return (
    <div className="col">
      {hour()}
      <WeatherIcon code={props.prediction.weather[0].icon} />
      {temp()}
    </div>
  );
}
