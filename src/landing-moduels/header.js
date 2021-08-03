import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div id="landing-header-container">
      <div id="landing-heading">
        <div>
          <h1 id="landing-h1">React App Collection</h1>
        </div>
        <div id="containerCardLinks">
          <div id="card-links" className="header-link">
            <Router forceRefresh>
              <NavLink id="Home-Btn" className="header-link" to="/">
                <span id="homeH">H</span>ome
              </NavLink>
            </Router>

            <Router forceRefresh>
              <NavLink
                id="GS-MTM-Btn"
                className="header-link"
                to="/landing-gsap"
              >
                Mission to Mars
              </NavLink>
            </Router>

            <button id="Timeline-Btn" className="header-link">
              Timeline Game
            </button>

            <button id="Speedtyper-btn" className="header-link">
              SpeedTyper
            </button>

            <button id="Spelling-btn" className="header-link">
              Spelling
            </button>
            <div id="card-links-deadspace"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
