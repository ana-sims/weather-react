import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./City.css";

export default function City() {
  return (
    <div className="City">
      <div className="card d-inline-block">
        <div className="card-body">
          <h5 className="card-title font-weight-bold" id="city-display">
            Lisbon
          </h5>
          <h6 className="card-subtitle mb-2 text-muted" id="date-display">
            Jun 22 2020
          </h6>
          <h6 className="card-subtitle mb-2 text-muted displaytime" id="time">
            12:00
          </h6>
        </div>
      </div>
    </div>
  );
}
