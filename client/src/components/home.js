import React from "react";
import './home.css'

const Home = () => (
  <div className="home-wrapper">
    <div className="slider">
      <p>Slider images will come here</p>
      <div id="arrow-left" class="arrow"></div>
      <div id="slider">
        <div class="slide slide1">
          <a href="sights/ajanta.html">
          <div class="slide-content">
            <span>Welcome to Aurangabad</span>
            <p>Your official guide to exploring Aurangabad.</p>
          </div>
          </a>
        </div>
        <div class="slide slide2">
          <a href="sights/bibiKaMaqbara.html">
          <div class="slide-content">
            <span>The city of gates</span>
          </div>
          </a>
        </div>
        <div class="slide slide3">
          <a href="sights/ellora.html">
          <div class="slide-content">
            <span>The city with history</span>
          </div>
        </a>
        </div>
      </div>
      <div id="arrow-right" class="arrow"></div>
    </div>

    <div className="weather">
      <p>Weather display</p>
    </div>

    <div className="sights">
      <p>Different sights</p>
    </div>
  </div>

)

export default Home;
