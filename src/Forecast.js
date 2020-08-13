import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row text-center forecast-row" id="forecast">
        <div className="card">
          <div className="card-body text-center">
            <h6 className="card-subtitle mb-2 text-muted daydate">
              <div id="time-stamp">--:--</div>
            </h6>
            <img
              src="https://openweathermap.org/img/wn/01d@2x.png"
              className="card-img-center"
              alt="sunny"
              id="icon"
            />
            <h6 className="card-subtitle mb-2 text-primary text-center">
              <br />
              <div className="maxtemp">
                <strong>--°C</strong>
              </div>
              <div className="text-muted">--°C</div>
            </h6>
          </div>
        </div>

        <div className="card">
          <div className="card-body text-center">
            <h6 className="card-subtitle mb-2 text-muted daydate">
              <div id="time-stamp">--:--</div>
            </h6>
            <img
              src="https://openweathermap.org/img/wn/02d@2x.png"
              className="card-img-center"
              alt="cloudy"
              id="icon"
            />
            <h6 className="card-subtitle mb-2 text-primary text-center">
              <br />
              <div className="maxtemp">
                <strong>--°C</strong>
              </div>
              <div className="text-muted">--°C</div>
            </h6>
          </div>
        </div>

        <div className="card">
          <div className="card-body text-center">
            <h6 className="card-subtitle mb-2 text-muted daydate">
              <div id="time-stamp">--:--</div>
            </h6>
            <img
              src="https://openweathermap.org/img/wn/03d@2x.png"
              className="card-img-center"
              alt="clouds"
              id="icon"
            />
            <h6 className="card-subtitle mb-2 text-primary text-center">
              <br />
              <div className="maxtemp">
                <strong>--°C</strong>
              </div>
              <div className="text-muted">--°C</div>
            </h6>
          </div>
        </div>

        <div className="card">
          <div className="card-body text-center">
            <h6 className="card-subtitle mb-2 text-muted daydate">
              <div id="time-stamp">--:--</div>
            </h6>
            <img
              src="https://openweathermap.org/img/wn/02d@2x.png"
              className="card-img-center"
              alt="cloudy"
              id="icon"
            />
            <h6 className="card-subtitle mb-2 text-primary text-center">
              <br />
              <div className="maxtemp">
                <strong>--°C</strong>
              </div>
              <div className="text-muted">--°C</div>
            </h6>
          </div>
        </div>

        <div className="card">
          <div className="card-body text-center">
            <h6 className="card-subtitle mb-2 text-muted daydate">
              <div id="time-stamp">--:--</div>
            </h6>
            <img
              src="https://openweathermap.org/img/wn/02n@2x.png"
              className="card-img-center"
              alt="cloudy"
              id="icon"
            />
            <h6 className="card-subtitle mb-2 text-primary text-center">
              <br />
              <div className="maxtemp">
                <strong>--°C</strong>
              </div>
              <div className="text-muted">--°C</div>
            </h6>
          </div>
        </div>

        <div className="card">
          <div className="card-body text-center">
            <h6 className="card-subtitle mb-2 text-muted daydate">
              <div id="time-stamp">--:--</div>
            </h6>
            <img
              src="https://openweathermap.org/img/wn/01n@2x.png"
              className="card-img-center"
              alt="clear sky"
              id="icon"
            />
            <h6 className="card-subtitle mb-2 text-primary text-center">
              <br />
              <div className="maxtemp">
                <strong>--°C</strong>
              </div>
              <div className="text-muted">--°C</div>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
