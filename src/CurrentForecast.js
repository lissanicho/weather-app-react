import React from "react";

export default function CurrentForecast() {
  return (
    <div>
      <div class="row" id="current-forecast">
        <div class="col-6">
          
          <ul>
            <li id="cityName">City</li>
          <li id="date">Day and time</li>
          <li>
            <span id="temp"> current temp </span>
          </li>
          <li id="cloud-condition">cloud condition</li>
          </ul>
        </div>
        <div class="col-6">
          <ul>
            <li><img src="" alt="cloudy" id="icon" /></li>
          <li id="humidity">humidity</li>
          <li id="wind">wind</li>
          </ul>
          
        </div>
      </div>
    </div>
  );
}
