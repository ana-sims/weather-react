import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [message, setMessage] = useState(null);

  function showTemperature(response) {
    setMessage(`It's ${response.data.main.temp}°C in Lisbon`);
  }

  let apiKey = "9bc8a95bb24bea24e1011758969f01a6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);

  return <h1>{message}</h1>;
}
