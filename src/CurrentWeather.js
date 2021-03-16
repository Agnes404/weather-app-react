import React from "react";

import "./CurrentWeather.css";

export default function CurrentWeather() {
  let weatherData = {
    temperature: 21,
    description: "Sunny",
    feelsLike: 22,
    humidity: 65,
    windSpeed: 3,
  };

  return (
    <div className="CurrentWeather">
      <h1 className="city"> New York</h1>
      <div className="row">
        <div className="col">
          <h3 className="temp">
            {weatherData.temperature}
            <sup>
              <span className="units">
                <a href="/" className="tempSymbol">
                  °C
                </a>
                |
                <a href="/" className="tempSymbol">
                  °F
                </a>
              </span>
            </sup>
          </h3>
          <p className="description">{weatherData.description}</p>
        </div>
        <div className="col">
          <ul>
            <li>Feels like: {weatherData.feelsLike}°C</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind speed: {weatherData.windSpeed}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
