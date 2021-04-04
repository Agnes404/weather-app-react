import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDailyElement(props) {
  function temp() {
    let temperature = Math.round(props.daily.temp.day);
    return `${temperature}°C`;
  }

  function forecastDay() {
    let date = new Date(props.daily.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return `${day}`;
  }

  return (
    <div className="col">
      {forecastDay()}
      <WeatherIcon code={props.daily.weather[0].icon} />
      {temp()}
    </div>
  );
}
