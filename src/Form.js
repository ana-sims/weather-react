import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form id="city-form">
        <div className="row" id="form-row">
          <div className="col-6">
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
            <input
              type="submit"
              value="Search"
              className="btn btn-info text-white shadow-lg"
              id="btn-search"
            />

            <input
              type="submit"
              value="My location"
              className="btn text-white shadow-lg"
              id="button-link"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
