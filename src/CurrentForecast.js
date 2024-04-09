import React, { useState } from "react";
import axios from "axios";
import DisplayDate from "./DisplayDate";
import TemperatureConversion from "./TemperatureConversion";
import WeeklyForecast from "./WeeklyForecast";


export default function CurrentForecast(props) {
  const [weatherData, setWeatherData] = useState({ ready:false });
  const [city, setCity] = useState(props.defaultCity);
  
  function handleTempResponse(response){
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      date: new Date (response.data.dt *1000),
    });
    
  }


function handleSubmit(event){
  event.preventDefault();
  search();
}

function searchCity(event) {
  setCity(event.target.value);
}

function search(){
  let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=17ad6e67aa629189f73b053634668b20&units=metric`;
  axios.get(apiUrl).then(handleTempResponse);

}



  if (weatherData.ready) {
    return (
    <div className="CurrentForecast">
      <div className="Searchbar">
      <div class="row" id="button-row ">
        <div class="col-4">
          <form onSubmit ={handleSubmit} id="search-form">
            <input
              type="text"
              placeholder="Enter city"
              autoFocus="on"
              autoComplete="off"
              id="search-text-input"
              onChange={searchCity}
            />
            <input type="submit" value="search" />
          </form>
          
        </div>
        <div class="col-8">
          
        </div>
      </div>
    </div>
      <div class="row" id="current-forecast">
        <div class="col-6">
          
          <ul>
            <li className="cityName">{weatherData.city}</li>
          <li className="date"><DisplayDate date={weatherData.date}/></li>
          <div><TemperatureConversion celsius={weatherData.temperature}/></div>
          <WeeklyForecast coordinates={weatherData.coordinates} />
          <li className="cloud-condition">{weatherData.description}</li>
          </ul>
        </div>
        <div class="col-6">
          <ul>
            <li><img src={weatherData.iconUrl} alt={weatherData.description} id="icon" />{weatherData.icon}</li>
          <li className="humidity">{weatherData.humidity}% humidity</li>
          <li className="wind">Wind {Math.round(weatherData.wind)}km/h</li>
          </ul>
          
        </div>
      </div>
    </div>
  );}
  

  else{
  search();
  return "Currently loading";
  
  }
  
}
