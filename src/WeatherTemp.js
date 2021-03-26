import React, { useState } from "react";

import "./WeatherTemp.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("Celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();

    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("Celsius");
  }

  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "Celsius") {
    return (
      <div className="WeatherTemp">
        <h3 className="temperature">
          {props.celsius}
          <sup>
            <span className="units">
              °C |
              <a href="/" className="tempSymbol" onClick={convertToFahrenheit}>
                °F
              </a>
            </span>
          </sup>
        </h3>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <h3 className="temperature">
          {fahrenheit()}
          <sup>
            <span className="units">
              <a href="/" className="tempSymbol" onClick={convertToCelsius}>
                °C
              </a>
              | °F
            </span>
          </sup>
        </h3>
      </div>
    );
  }
}
