import React from "react";

import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <div className="location">
        <form className="search">
          <input
            type="text"
            placeholder="Type a city"
            className="search form-control"
            autoFocus="on"
          />
          <button type="submit" className="button btn btn-light mb-2">
            <i className="searchIcon fas fa-search"></i>
          </button>
          <button type="submit" className="button btn btn-light mb-2">
            <i className="locationIcon fas fa-map-marker-alt"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
