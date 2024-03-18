import './App.css';

import React from 'react';
import Searchbar from "./Searchbar";
import CurrentForecast from "./CurrentForecast";
import WeeklyForecast from "./WeeklyForecast";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function App() {
  return (
    <div className="App">
    <div className="container">
      <Searchbar />
      <CurrentForecast />
      <WeeklyForecast />
      <Footer />
    </div>
 </div> 
 );
}

export default App;
