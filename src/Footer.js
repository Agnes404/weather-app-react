import React, { useState } from "react";

import "./Footer.css";

export default function Footer() {
  const [author, setAuthor] = useState("Agnes 👩🏼‍💻");
  function showAuthor() {
    setAuthor("Agnieszka Krzysztofik 👩🏼‍💻");
  }

  function hideAuthor() {
    setAuthor("Agnes 👩🏼‍💻");
  }

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
        by{" "}
        <span
          className="pageAuthor"
          onMouseEnter={showAuthor}
          onMouseLeave={hideAuthor}
        >
          <a
            href="https://www.linkedin.com/in/agnieszka-krzysztofik/"
            target="_blank"
            rel="noreferrer"
            className="linkedInLink"
          >
            {author}
          </a>{" "}
        </span>{" "}
      </footer>
    </div>
  );
}
