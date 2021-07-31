import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Header() {
    return(
    <div className="landing-header-container">
        <div id="landing-heading">
        <div>
          <h1 id="landing-h1">React App Collection</h1>

        </div>
        <div id="card-links">
          <Router forceRefresh>
            <NavLink id="Home-Btn" to="/">
              Home
            </NavLink>
          </Router>

          <Router forceRefresh>
            <NavLink id="GS-MTM-Btn" to="/landing-gsap">
              Mission to Mars
            </NavLink>
          </Router>

          <button id="Timeline-Btn">
            Timeline Game
          </button>

          <button id="Speedtyper-btn">SpeedTyper</button>

          <button id="Spelling-btn">Spelling</button>
        </div>
      </div>
    </div>

    )
}