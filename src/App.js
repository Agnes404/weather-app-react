import SearchEngine from "./SearchEngine";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="border">
        <div className="container">
          <SearchEngine defaultCity="New York" />
          <div className="forecastList">
            <ul className="list-group list-group-flush">
              <Forecast />
              <Forecast />
              <Forecast />
              <Forecast />
              <Forecast />
            </ul>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
