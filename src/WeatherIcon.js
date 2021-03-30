import React from "react";

import "./WeatherIcon.css";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "clear-day",
    "01n": "clear-night",
    "02d": "partly-cloudy-day",
    "02n": "partly-cloudy-night",
    "03d": "cloudy",
    "03n": "cloudy",
    "04d": "cloudy",
    "04n": "cloudy",
    "09d": "rain",
    "09n": "rain",
    "10d": "partly-cloudy-day-rain",
    "10n": "partly-cloudy-night-rain",
    "11d": "thunderstorms",
    "11n": "thunderstorms",
    "13d": "partly-cloudy-day-snow",
    "13n": "partly-cloudy-day-snow",
    "50d": "mist",
    "50n": "mist",
  };

  let iconUrl = `https://bmcdn.nl/assets/weather-icons/v1.4.1/${
    codeMapping[props.code]
  }.svg`;

  return (
    <div className="WeatherIcon">
      <img className="mainIcon" src={iconUrl} alt={props.alt} />
    </div>
  );
}
