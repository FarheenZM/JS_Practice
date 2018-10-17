import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./navbar";
import Main from "./main";
import About from "./about";
import Contact from "./contact";

class Header extends Component {
  render(){
    return(
      <Router>
        <div>
          <NavBar/>
          <Route exact path="/" component={Main}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default Header;
