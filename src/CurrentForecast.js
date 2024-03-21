import React, {useState} from "react";
import axios from "axios";



export default function CurrentForecast(props) {
  
  const [weatherData, setWeatherData] = useState({ready:false});
  function handleResponse(response){
    console.log (response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: response.data.weather[0].description,
      date: "Thursday 12.40pm"
    });
    
  }
  if (weatherData.ready) {return (
    <div>
      <div class="row" id="current-forecast">
        <div class="col-6">
          
          <ul>
            <li className="cityName">{weatherData.city}</li>
          <li className="date">{weatherData.date}</li>
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
          <li className="wind">Wind {Math.round(weatherData.wind)}km/h</li>
          </ul>
          
        </div>
      </div>
    </div>
  );}
  

  else{
  
  
  let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=17ad6e67aa629189f73b053634668b20&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading";
  }
}
