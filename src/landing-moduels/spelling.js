import React, { useEffect } from 'react'
import gsap from 'gsap/gsap-core';

import Header from './header';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function SpellerLanding() {
  useEffect(() => {
    gsap.to('#speedTyperTitle', {duration:1, opacity:1})
    gsap.to('#speedTyperText', {duration:1, fontSize: '25px'})
  })
    return(
      <>
      <Header />
          <div id="landingSpeedTyper">
              <p id="speedTyperTitle">Speller</p>
              <p id="speedTyperText">Test yourself by seeing how many words you can type correctly in a minute. See how high of a score you can get.</p>
              <div id='clock'>
                <div id="clockHand"></div>
              </div>
            
                <Router forceRefresh>
                  <NavLink id="speedTyperLink" to="/spelling">
                    Visit Page
                  </NavLink>
                </Router>
        </div>
      </>
    )
}