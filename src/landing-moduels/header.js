import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Header() {
  useEffect(() => {
    const Home = document.getElementById("Home-Btn");
    const MTM = document.getElementById("GS-MTM-Btn");
    const TL = document.getElementById("Timeline-Btn");
    const ST = document.getElementById("Speedtyper-btn");
    const SP = document.getElementById("Spelling-btn");

    Home.addEventListener("mouseenter", () => {
      let tl = gsap.timeline({});
      tl.to("#gsaplink1", { duration: 0.1, rotation: 5 });
      tl.to("#gsaplink1", { duration: 0.1, rotation: -5 });
      tl.to("#gsaplink1", { duration: 0.1, rotation: 0 });
    });

    MTM.addEventListener("mouseenter", () => {
      let tl = gsap.timeline({});
      tl.to("#gsaplink2", { duration: 0.1, rotation: 5 });
      tl.to("#gsaplink2", { duration: 0.1, rotation: -5 });
      tl.to("#gsaplink2", { duration: 0.1, rotation: 0 });
    });
    TL.addEventListener("mouseenter", () => {
      let tl = gsap.timeline({});
      tl.to("#gsaplink3", { duration: 0.1, rotation: 5 });
      tl.to("#gsaplink3", { duration: 0.1, rotation: -5 });
      tl.to("#gsaplink3", { duration: 0.1, rotation: 0 });
    });
    ST.addEventListener("mouseenter", () => {
      let tl = gsap.timeline({});
      tl.to("#gsaplink4", { duration: 0.1, rotation: 5 });
      tl.to("#gsaplink4", { duration: 0.1, rotation: -5 });
      tl.to("#gsaplink4", { duration: 0.1, rotation: 0 });
    });
    SP.addEventListener("mouseenter", () => {
      let tl = gsap.timeline({});
      tl.to("#gsaplink5", { duration: 0.1, rotation: 5 });
      tl.to("#gsaplink5", { duration: 0.1, rotation: -5 });
      tl.to("#gsaplink5", { duration: 0.1, rotation: 0 });
    });
  });
  return (
    <div id="landing-header-container">
      <div id="landing-heading">
        <div>
          <h1 id="landing-h1">React App Collection</h1>
        </div>
        <div id="containerCardLinks">
          <div id="card-links" className="header-link">
            <Router forceRefresh>
              <div id="gsaplink1">
                <NavLink id="Home-Btn" className="header-link" to="/">
                  Home
                </NavLink>
              </div>
            </Router>

            <Router forceRefresh>
              <div id="gsaplink2">
                <NavLink
                  id="GS-MTM-Btn"
                  className="header-link"
                  to="/landing-gsap"
                >
                  Mission to Mars
                </NavLink>
              </div>
            </Router>
            <Router forceRefresh>
              <div id="gsaplink3">
                <NavLink id="Timeline-Btn" className="header-link" to="/landing-timeline"> 
                  Timeline Game
                </NavLink>
              </div>
            </Router>

            <div id="gsaplink4">
              <button id="Speedtyper-btn" className="header-link">
                SpeedTyper
              </button>
            </div>

            <div id="gsaplink5">
              <button id="Spelling-btn" className="header-link">
                Spelling
              </button>
            </div>
            <div id="card-links-deadspace"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
