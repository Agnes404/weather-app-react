import React, { useEffect, useState } from "react";
import FormattedDate from "./FormattedDate";
import Forecast from "./Forecast";
import ForecastDaily from "./ForecastDaily";
import CurrentWeather from "./CurrentWeather";
import axios from "axios";
import ReactLoading from "react-loading";

import "./SearchEngine.css";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [searchInput, setSearchInput] = useState("");
  const [count, setCount] = useState();

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      windSpeed: Math.round(response.data.wind.speed),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    setSearchInput("");
  }

  function handleCityChange(event) {
    setCity(event.target.value);
    setSearchInput(event.target.value);
  }

  function search() {
    const apiKey = `dec577791fe2b9b980cbcd63ffd42e77`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse).catch(handleError);
  }

  function handleError(error) {
    if (error.response) {
      alert("Sorry, we couldn't find your city. Please type another one.");
    }
  }

  function handleLocation(position) {
    const apiKey = `dec577791fe2b9b980cbcd63ffd42e77`;
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function navigation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(handleLocation);
    return Spinner();
  }

  function Spinner() {
    setCount(
      <ReactLoading
        type={"spinningBubbles"}
        color={"black"}
        height={"30px"}
        width={"30px"}
      />
    );
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCount();
    }, 4000);

    return () => clearTimeout(timeout);
  }, [count]);

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
              value={searchInput}
            />
            <button type="submit" className="button btn btn-light mb-2">
              <i className="searchIcon fas fa-search"></i>
            </button>
            <button
              type="submit"
              className="button btn btn-light mb-2"
              onClick={navigation}
            >
              <i className="locationIcon fas fa-map-marker-alt"></i>
            </button>
            <span className="iconLoad">{count}</span>
          </form>
        </div>
        <FormattedDate date={weatherData.date} />
        <CurrentWeather weatherInfo={weatherData} />
        <Forecast city={weatherData.city} />
        <hr />
        <ForecastDaily coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return <h1> Loading... </h1>;
  }
}
