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
              <p>Speed Typer</p>
                <Router forceRefresh>
                  <NavLink id="speedTyperLink" to="/typer">
                    Visit Page
                  </NavLink>
                </Router>
        </div>
      </>
    )
}