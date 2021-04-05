import React, { useEffect, useState } from "react";
import ForecastDailyElement from "./ForecastDailyElement";
import axios from "axios";

import "./ForecastDaily.css";

export default function ForecastDaily(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "dec577791fe2b9b980cbcd63ffd42e77";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecast);
  }

  useEffect(() => {
    setLoaded(false);
    return null;
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="ForecastDaily">
        <div className="forecastList">
          <div className="row">
            <ForecastDailyElement daily={forecast[1]} />
            <ForecastDailyElement daily={forecast[2]} />
            <ForecastDailyElement daily={forecast[3]} />
            <ForecastDailyElement daily={forecast[4]} />
            <ForecastDailyElement daily={forecast[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
