import React, {Component} from 'react';
import './attractions.css'

class Attractions extends Component{

  clearContent(){
    document.getElementById('main-content').innerHTML = "";
  }

  componentDidMount(){
    this.clearContent();
  }

  render(){
    return(
      <React.Fragment>
        <div class="attractions">
          <div id="attractions-head">
            <h1>All Attractions</h1>
          </div>
          <div id="img1">
            <a href="/sights/ajanta">
              <img src="/images/Ajanta.jpg" alt="Ajanta"/>
            </a>
          </div>
          <div id="img2">
            <a href="/sights/bibikamaqbara">
              <img src="/images/BibiKaMaqbara.jpg" alt="BibiKaMaqbara"/>
            </a>
          </div>
          <div id="img3">
            <a href="/sights/ellora">
              <img src="/images/Ellora.jpg" alt="Ellora"/>
            </a>
          </div>
          <div id="img4">
            <a href="/sights/panchakki">
              <img src="/images/Panchakki.jpg" alt="Panchakki"/>
            </a>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

// const Attractions = () => (
//   <h1>Attractions</h1>
// )

export default Attractions;
