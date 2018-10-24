import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./navbar.css"
import "../App.js"

class NavBar extends Component {
  constructor () {
    super()
    this.state = {
    };
    this.openSideMenu = this.openSideMenu.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }

  openSideMenu() {
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  }

  searchHandler(event){
    console.log(event.target.value);
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar">
          <span className="open-slide">
            <a href="#" id="openmenu" onClick={this.openSideMenu}>
              {/* svg - scalable vector graphics */}
              <svg width="30" height="30">
                <path d="M0,5 30,5" stroke="#000" strokeWidth="5"/>
                <path d="M0,14 30,14" stroke="#000" strokeWidth="5"/>
                <path d="M0,23 30,23" stroke="#000" strokeWidth="5"/>
              </svg>﻿
            </a>
          </span>
          <ul className="navbar-nav">
            <li><Link to="/"><img src="" alt="Home logo"/></Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/attractions">ATTRACTIONS</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
          <form>
            <input type="text" onChange={this.searchHandler}/>
          </form>
        </nav>
      </React.Fragment>

    )
  }
}


export default NavBar;
