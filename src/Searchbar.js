import React from "react";

export default function App() {
  return (
    <div className="Searchbar">
      <div class="row" id="button-row ">
        <div class="col-4">
          <form id="search-form">
            <input
              type="text"
              placeholder="Enter city"
              autofocus="on"
              autocomplete="off"
              id="search-text-input"
            />
            <input type="submit" value="search" />
          </form>
        </div>
        <div class="col-8">
          <button id="current-location">My Location</button>
        </div>
      </div>
    </div>
  );
}
