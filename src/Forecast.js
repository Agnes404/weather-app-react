import React, { useState } from "react";
import ForecastElement from "./ForecastElement";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastData(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast ">
        <div className="forecastList">
          <div className="row">
            <ForecastElement prediction={forecast.list[0]} />
            <ForecastElement prediction={forecast.list[1]} />
            <ForecastElement prediction={forecast.list[2]} />
            <ForecastElement prediction={forecast.list[3]} />
            <ForecastElement prediction={forecast.list[4]} />
          </div>
          {/* <ul className="list-group list-group-flush forecastRow">
          <li className="list-group-item">
            <div className="d-flex bd-highlight">
              <div className="p-2 flex-fill bd-highlight">
                {new Date(forecast.list[0].dt * 1000).getHours()}:00
              </div>
              <div className="p-2 flex-fill bd-highlight">
                <WeatherIcon code={forecast.list[0].weather[0].icon} />
              </div>
              <div className="p-2 flex-fill bd-highlight">
                {Math.round(forecast.list[0].main.temp)}°C
              </div>
            </div>
          </li>
        </ul> */}
        </div>
      </div>
    );
  } else {
    let apiKey = "dec577791fe2b9b980cbcd63ffd42e77";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastData);

    return "loading...";
  }
}
