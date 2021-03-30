import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <h1 className="city"> {props.weatherInfo.city} </h1>
      <div className="row d-flex align-items-center">
        <div className="col-4">
          <WeatherTemp celsius={props.weatherInfo.temp} />
          <p className="description text-capitalize">
            {props.weatherInfo.description}
          </p>
        </div>
        <div className="col-4">
          <WeatherIcon
            code={props.weatherInfo.icon}
            alt={props.weatherInfo.description}
          />
        </div>
        <div className="col-4">
          <ul className="currentWeatherInfo">
            <li>Feels like: {props.weatherInfo.feelsLike}°C</li>
            <li>Humidity: {props.weatherInfo.humidity}%</li>
            <li>Wind: {props.weatherInfo.windSpeed} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
