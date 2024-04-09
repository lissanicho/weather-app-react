import React from "react";

export default function WeeklyForecast() {
  return (
    <div>
      <div class="row" id="weekly-forecast">
        <div class="col-2">
          <p id="forecast-day">
            Day 1<br />
            <i class="fa-solid fa-sun" id="sunny"></i>
          </p>
        </div>
      </div>
    </div>
  );
}
