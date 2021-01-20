import React from 'react';
import './Cards.css';
import Sliders from './Sliders'

function Cards() {
  return (
    <div className="cards-container">
      <div className="block-container">
        <iframe src="https://open.spotify.com/embed/playlist/5ElhZEfZPHfomaZGinLzPr"
          className="spotify-player"
          width="300" height="500" frameborder="0" allowtransparency="true"
          allow="encrypted-media"></iframe>
      </div>
      <div className="slider-container">
        <h3 className="events">Upcoming Events</h3>
        <Sliders></Sliders>
      </div>
      <div className="weather-container">
        <a class="weatherwidget-io" href="https://forecast7.com/en/32d78n96d80/dallas/?unit=us"
          data-label_1="DALLAS" data-label_2="WEATHER" data-theme="original" >DALLAS WEATHER</a>
      </div>
    </div>
  );
}

export default Cards;