import React, {useState} from "react";
import axios from "axios";


export default function CurrentForecast() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  function handleResponse(response){
    console.log (response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: response.data.weather[0].description,
    });
    setReady(true);
  }
  if (ready) {return (
    <div>
      <div class="row" id="current-forecast">
        <div class="col-6">
          
          <ul>
            <li className="cityName">{weatherData.city}</li>
          <li className="date">Day and time</li>
          <li>
            <span className="temp"> {Math.round(weatherData.temperature)}°C</span>
          </li>
          <li className="cloud-condition">{weatherData.description}</li>
          </ul>
        </div>
        <div class="col-6">
          <ul>
            <li><img src={weatherData.iconUrl} alt={weatherData.description} id="icon" />{weatherData.icon}</li>
          <li className="humidity">{weatherData.humidity}% humidity</li>
          <li className="wind">{weatherData.wind}km/h</li>
          </ul>
          
        </div>
      </div>
    </div>
  );}
  

  else{
  
  let city= "London";
  let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=17ad6e67aa629189f73b053634668b20&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading";
  }
}
