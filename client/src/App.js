import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./components/navbar";
import Home from './components/home.js'
import About from "./components/about";
import Attractions from './components/attractions.js'
import Contact from "./components/contact";
// import "./components/navbar.css"
import Ajanta from "./components/sights/Ajanta";
import BibiKaMaqbara from "./components/sights/BibiKaMaqbara";
import Ellora from "./components/sights/Ellora";
import Panchakki from "./components/sights/Panchakki";

class App extends Component {
  constructor () {
    super()
    this.state = {
    };
    this.closeSideMenu = this.closeSideMenu.bind(this);
  }

  closeSideMenu() {
    document.getElementById('side-menu').style.width = '0px';
    document.getElementById('main').style.marginLeft = '0px';
  }

  render() {
    return (
      <React.Fragment>
        <div id="side-menu" className="side-nav">
          <a href="#" id="closebtn" className="btn-close" onClick={this.closeSideMenu}>&times;</a> {/* for displaying X */}
          <a href="/about">ABOUT</a>
          <a href="/attractions">ATTRACTIONS</a>
          <a href="/contact">CONTACT</a>

        </div>

        <div id="main" className="wrapper">
          <Router>
            <div className="header">
              <NavBar/>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/attractions" component={Attractions}/>
              <Route path="/contact" component={Contact}/>
            </div>
          </Router>

          <div id="main-content" className="body-content">
            <Router>
                <div>
                <Route path="/sights/ajanta" component={Ajanta}/>
                <Route path="/sights/bibikamaqbara" component={BibiKaMaqbara}/>
                <Route path="/sights/ellora" component={Ellora}/>
                <Route path="/sights/panchakki" component={Panchakki}/>
              </div>
            </Router>
          </div>

        <div className="footer">
          <footer>by Farheen &copy; 2018</footer>
          ~built using React<img src={logo} className="App-logo" alt="React logo" />
        </div>

      </div>
    </React.Fragment>
  );
}
}

export default App;
