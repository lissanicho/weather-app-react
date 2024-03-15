import './App.css';
import './style.css';
import React from 'react';
import Searchbar from "./Searchbar";
import CurrentForecast from "./CurrentForecast";
import WeeklyForecast from "./WeeklyForecast";
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
      <Searchbar />
      <CurrentForecast />
      <WeeklyForecast />
      <Footer />
    </div>
  );
}

export default App;
