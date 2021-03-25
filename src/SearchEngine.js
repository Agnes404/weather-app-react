import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";

import "./SearchEngine.css";
import CurrentWeather from "./CurrentWeather";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      windSpeed: Math.round(response.data.wind.speed),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = `dec577791fe2b9b980cbcd63ffd42e77`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="SearchEngine">
        <div className="location">
          <form className="search" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type a city"
              className="search form-control"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <button type="submit" className="button btn btn-light mb-2">
              <i className="searchIcon fas fa-search"></i>
            </button>
            <button type="submit" className="button btn btn-light mb-2">
              <i className="locationIcon fas fa-map-marker-alt"></i>
            </button>
          </form>
        </div>
        <FormattedDate date={weatherData.date} />
        <CurrentWeather weatherInfo={weatherData} />
      </div>
    );
  } else {
    search();
    return <h1> Loading... </h1>;
  }
}
