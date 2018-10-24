import React, {Component} from "react";
import './ajanta.css';

class Ajanta extends Component{

  render(){
    return(
      <div class="ajanta">
        <div id="ajanta-head">
          <h1>Ajanta</h1>
        </div>
        <div id="ajanta-image">
          <img src="/images/Ajanta.jpg" alt="Ajanta"/>
        </div>
        <div id="ajanta-details">
          <p>Details & more information</p>
        </div>
        <div id="ajanta-location">
          <p>Address details</p>
          <p>See on map</p>
        </div>
        <div id="ajanta-images">
          <img src="/images/Ajanta.jpg" alt="ajanta1"/>
          <img src="/images/Ajanta.jpg" alt="ajanta2"/>
          <img src="/images/Ajanta.jpg" alt="ajanta3"/>
          <img src="/images/Ajanta.jpg" alt="ajanta4"/>
        </div>
      </div>
    )
  }
}


export default Ajanta;
