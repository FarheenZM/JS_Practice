import React, {Component} from "react";
import './home.css';
import Weather from './weather';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      sliderImages : [],
      current : 0
    }
  }

  reset = () => {
    this.state.sliderImages = document.querySelectorAll('.slide');

    this.state.sliderImages.forEach(function(image){
      image.style.display = 'none';
    });

  }

  startSlide = () => {
    this.reset();
      this.state.sliderImages[0].style.display = 'block';
  }

  slideLeft = () => {
    this.reset();
    if(this.state.current === 0){
        this.state.current = this.state.sliderImages.length;
    }
    this.state.sliderImages[this.state.current - 1].style.display = 'block';
    this.state.current--;
  }

  slideRight = () => {
    this.reset();
    if(this.state.current === this.state.sliderImages.length-1){
      this.state.current = -1;
    }
    this.state.sliderImages[this.state.current + 1].style.display = 'block';
    this.state.current++;
  }

  componentDidMount(){
    this.startSlide();
  }

  render(){
    return(
      <React.Fragment>

      <div className="home-wrapper">

        <div className="slider-wrapper">

          <div id="arrow-left" className="arrow" onClick={this.slideLeft}></div>

          <div id="slider">
              <div className="slide slide1">
                <a href="/sights/ajanta">
                  <div className="slide-content">
                    <span>Welcome to Aurangabad</span>
                    <p>Your official guide to exploring Aurangabad.</p>
                  </div>
                </a>
              </div>

              <div className="slide slide2">
                <a href="/sights/bibiKaMaqbara">
                  <div className="slide-content">
                    <span>The city of gates</span>
                  </div>
                </a>
              </div>

              <div className="slide slide3">
                <a href="/sights/ellora">
                  <div className="slide-content">
                    <span>The city with history</span>
                  </div>
                </a>
              </div>
          </div>

          <div id="arrow-right" className="arrow" onClick={this.slideRight}></div>

      </div>

      <div id='todays-weather' className="weather">
        <p>Weather in Aurangabad</p>
        <Weather/>
      </div>

      <div className="sights">
        <div className="sightHead">
          <p>Sights</p>
        </div>
        <div className="sight1">
          <a href="/sights/bibikamaqbara">
            <img src="images/BibiKaMaqbara.jpg" alt="maqbara pic" height="250" width="250"/>
            <p>Bibi Ka Maqbara</p>
          </a>
        </div>
        <div className="sight2">
          <a href="/sights/panchakki">
            <img src="images/Panchakki.jpg" alt="panchakki pic" height="250" width="250"/>
            <p>Panchakki</p>
          </a>
        </div>
        <div className="sight3">
          <a href="/sights/ajanta">
            <img src="images/Ajanta.jpg" alt="ajanta pic" height="250" width="250"/>
            <p>Ajanta Caves</p>
          </a>
        </div>
        <div className="sight4">
          <a href="/sights/ellora">
            <img src="images/Ellora.jpg" alt="ellora pic" height="250" width="250"/>
            <p>Ellora</p>
          </a>
        </div>
      </div>

    </div>
    </React.Fragment>
    )
  }
}


export default Home;
