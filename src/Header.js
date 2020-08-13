import React from "react";
import City from "./City";
import Form from "./Form";
import "bootstrap/dist/css/bootstrap.css";

import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="row" id="top-row">
        <div className="col-4 left-card">
          <City />
        </div>
        <div className="col-8 left-card">
          <Form />
        </div>
      </div>
    </div>
  );
}
