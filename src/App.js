import SearchEngine from "./SearchEngine";
import Date from "./Date";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="border">
        <div class="container">
          <SearchEngine />
          <Date />
          <CurrentWeather />

          <div className="forecastList">
            <ul class="list-group list-group-flush">
              <Forecast />
              <Forecast />
              <Forecast />
              <Forecast />
              <Forecast />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
