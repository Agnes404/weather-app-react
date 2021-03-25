import React from "react";

import "./FormattedDate.css";

export default function FormattedDate(props) {
  function currentDate() {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[props.date.getDay()];

    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let month = months[props.date.getMonth()];

    let date = props.date.getDate();

    return `${day}, ${month} ${date}`;
  }

  function currentTime() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${hours}:${minutes}`;
  }

  return (
    <div className="FormattedDate">
      <div className="row">
        <div className="col">
          <h2 className="date">{currentDate()}</h2>
        </div>
        <div className="col">
          <h2>
            <i className="far fa-clock"></i>
            <span className="time">{currentTime()}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
