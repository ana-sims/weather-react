import React from "react";

import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form id="city-form">
        <div className="row" id="form-row">
          <div className="col-7">
            <div className="form-group entercity">
              <input
                type="search"
                placeholder="Enter your city"
                className="form-control border-light shadow p-3 mb-5 bg-white"
                aria-describedby="enterCity"
                id="city-input"
              />
            </div>
          </div>
          <div className="col">
            <button
              type="submit"
              className="btn btn-info text-white shadow-lg"
              id="btn-search"
            >
              <i className="fas fa-search" />
            </button>

            <button
              type="submit"
              className="btn text-white shadow-lg"
              id="button-link"
            >
              <i className="fas fa-map-marker-alt sm-icon" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
