import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <a
          href="https://github.com/Agnes404/weather-app-react"
          target="_blank"
          rel="noreferrer"
          className="gitHubLink"
        >
          Open-source code
        </a>{" "}
        by <span className="pageAuthor">Agnes 👩🏼‍💻</span>{" "}
      </footer>
    </div>
  );
}
