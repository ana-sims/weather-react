import React from "react";
import Header from "./Header";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div
        className="container rounded border border-white shadow p-3 mb-3"
        id="container"
      >
        <Header />
        <Temperature />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
