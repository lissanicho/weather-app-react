import React from "react";

export default function CurrentForecast() {
  return (
    <div>
      <div class="row" id="current-forecast">
        <div class="col-6">
          <h1>City</h1>
          <p id="date">Day and time</p>
          <h2>
            <span id="temp"> current temp </span>
          </h2>
          <p id="cloud-condition">cloud condition</p>
        </div>
        <div class="col-6">
          <img src="" alt="cloudy" id="icon" />
          <p id="humidity">humidity</p>
          <p id="wind">wind</p>
        </div>
      </div>
    </div>
  );
}
