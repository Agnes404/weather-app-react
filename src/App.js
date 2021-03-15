import SearchEngine from "./SearchEngine";
import Date from "./Date";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="border">
        <div class="container">
          <SearchEngine />
          <Date />

          <div className="forecastList">
            <ul className="list-group" id="forecast-element"></ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
