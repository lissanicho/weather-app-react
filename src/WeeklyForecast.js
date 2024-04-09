import React from "react";
import WeatherIcons from "./WeatherIcons";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeeklyForecast(props) {
  function handleResponse (response) {
    console.log (response.data);
  }

  
  let latitude=-33.86785000;
  let longitude=151.20732000;
  let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=2980ff43226d67e53abfcdb6d457dcc8`;

  axios.get(apiUrl).then(handleResponse);
  
  return (
    <div className="WeeklyForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Today</div>
          <WeatherIcons code="01d" size={30}/>
          <div className="temperatures">            
          <span className="maximum-temperature">35</span>
            <span className="minimum-temperature">22</span>
            </div>
            </div>
            </div>
            </div>
              );
}
