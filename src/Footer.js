import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div id="signature">
        Open-source code by{" "}
        <a
          href="https://github.com/ana-sims/weather-react"
          className="text-info"
        >
          ana-sims
        </a>
        <i className="far fa-heart heart" />
      </div>
    </div>
  );
}
