import React from "react";
import {Link} from "react-router-dom";
import "./navbar.css"


const NavBar = () => (
  <React.Fragment>
      <nav class="navbar">
        <span class="open-slide">
          <a href="#" id="openmenu">
            {/* svg - scalable vector graphics */}
            <svg width="30" height="30">
              <path d="M0,5 30,5" stroke="#000" stroke-width="5"/>
              <path d="M0,14 30,14" stroke="#000" stroke-width="5"/>
              <path d="M0,23 30,23" stroke="#000" stroke-width="5"/>
            </svg>﻿
          </a>
        </span>
        <ul class="navbar-nav">
          <li><Link to="/main"><img src="" alt="Home logo"/></Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/attractions">ATTRACTIONS</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </nav>
  </React.Fragment>

)


export default NavBar;
