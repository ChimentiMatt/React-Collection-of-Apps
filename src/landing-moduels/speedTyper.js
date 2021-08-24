import gsap from 'gsap/gsap-core';
import React from 'react'

import Header from './header';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function SpeedTyperLanding() {
    return(
      <>
      <Header />
          <div id="landingSpeedTyper">
              <p id="speedTyperTitle">Speed Typer</p>
              <p>Test yourself by seeing how many words you can type correctly in a minute. See how high of a score you can get.</p>
                <Router forceRefresh>
                  <NavLink id="speedTyperLink" to="/typer">
                    Visit Page
                  </NavLink>
                </Router>
        </div>
      </>
    )
}