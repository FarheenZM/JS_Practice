import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/customers/customer.js'

class App extends Component {
  render() {
    return (
      <React.Fragment>

      <div className="header">
        <Customer/>
      </div>

      <div className="slider">
        <p>Slider images will come here</p>
      </div>

      <div className="weather">
        <p>Weather display</p>
      </div>

      <div className="sights">
        <p>Different sights</p>
      </div>

      <div className="footer">
        <footer>This is footer &Copy</footer>
        <p>This app is built using React<img src={logo} className="App-logo" alt="logo" /></p>
      </div>

    </React.Fragment>
    );
  }
}

export default App;
