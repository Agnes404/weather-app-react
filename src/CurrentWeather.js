import React, { useState } from "react";
import axios from "axios";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setReady(true);
    setWeatherData({
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      windSpeed: Math.round(response.data.wind.speed),
    });
  }

  // const [temp, setTemp] = useState(weatherInfo.temp);

  function convertToFahrenheit(event) {
    event.preventDefault();
    // let Fahrenheit = Math.round((weatherData.temp * 9) / 5 + 32);
    // setTemp(Fahrenheit);
  }
  function convertToCelsius(event) {
    event.preventDefault();
    // setTemp(weatherData.temp);
  }

  if (ready) {
    return (
      <div className="CurrentWeather">
        <h1 className="city"> {weatherData.city} </h1>
        <div className="row">
          <div className="col">
            <h3 className="temperature">
              {weatherData.temp}
              <sup>
                <span className="units">
                  <a href="/" className="tempSymbol" onClick={convertToCelsius}>
                    °C
                  </a>
                  |
                  <a
                    href="/"
                    className="tempSymbol"
                    onClick={convertToFahrenheit}
                  >
                    °F
                  </a>
                </span>
              </sup>
            </h3>
            <p className="description text-capitalize">
              {weatherData.description}
            </p>
          </div>
          <div className="col">
            <ul>
              <li>Feels like: {weatherData.feelsLike}°C</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.windSpeed} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `2af3f8b254a603f2b9c0355c32990678`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return <h1> Loading... </h1>;
  }
}
