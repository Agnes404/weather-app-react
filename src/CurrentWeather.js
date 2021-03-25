import React from "react";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
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

  return (
    <div className="CurrentWeather">
      <h1 className="city"> {props.weatherInfo.city} </h1>
      <div className="row">
        <div className="col">
          <h3 className="temperature">
            {props.weatherInfo.temp}
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
            {props.weatherInfo.description}
          </p>
        </div>
        <div className="col">
          <ul>
            <li>Feels like: {props.weatherInfo.feelsLike}°C</li>
            <li>Humidity: {props.weatherInfo.humidity}%</li>
            <li>Wind: {props.weatherInfo.windSpeed} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
