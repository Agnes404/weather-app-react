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

  function load() {
    let apiKey = "dec577791fe2b9b980cbcd63ffd42e77";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastData);
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
        </div>
      </div>
    );
  } else {
    load();
    return "loading...";
  }
}
