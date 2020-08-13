import React from "react";

import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="row" id="center-row">
      <div className="col-2" id="icon-card">
        <div className="card-body">
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            className="card-img-center"
            alt="sunny"
            id="icon-main"
          />
        </div>
      </div>
      <div className="col-6" id="temperature-card">
        <div className="card center-card text-center">
          <h3 className="card-body text-primary mb-2">
            <div>
              <span id="display-temperature">32</span>
              <span className="celsius">
                <a
                  href="https://github.com/ana-sims/my-awesome-project"
                  id="celsius-link"
                  class="active"
                >
                  {" "}
                  °C
                </a>
              </span>
              <span className="stick">|</span>
              <span className="fahrenheit">
                <a
                  href="https://github.com/ana-sims/my-awesome-project"
                  id="fahrenheit-link"
                >
                  {" "}
                  °F
                </a>
              </span>
            </div>
          </h3>
        </div>
      </div>

      <div className="col-5" id="info-card">
        <div className="card card-left">
          <div className="card-body text-left text-muted" id="info">
            <span className="card-text" id="description">
              Sunny
            </span>
            <span className="card-text">
              <br />
              Humidity: <span id="humidity">15</span>%
            </span>
            <span className="card-text">
              <br />
              Wind: <span id="wind">5</span> km/h
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
