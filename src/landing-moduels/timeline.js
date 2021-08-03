import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./header.js";

export default function TimelineLanding() {
    useEffect(() =>{
        TimelineFunc()
    })
    function TimelineFunc() {
        // Greensock Animations
        var tl = gsap.timeline({});
        var tl2 = gsap.timeline({ repeat: -1 });
        tl.to("#Timeline-h1", { delay: 0.2, duration: 1, y: -100 });
        tl.to("#Timeline-Des", { duration: 1, x: 1000 });
        tl.to("#Timeline-Animation-Container", { duration: 0, opacity: 1 }).add(
        Animation2
        );
        gsap.to("#Timeline-Link", { delay: 3.5, duration: 1, opacity: 1 });


        
        function Animation2() {
        tl2.to("#Timeline-Animation-Container", { opacity: 1 });
        tl2.to("#Timeline-Animation-Container", { delay: 2.2, duration: 1 });
        tl2.to("#Timeline-Animation-Answers", { y: -42 });
        tl2.to("#Roe", { backgroundColor: "rgba(255, 0, 0, 0.5)" });
        tl2.to("#Nixon", { backgroundColor: "white" });
        tl2.to("#Timeline-Animation-Answers", { delay: 1, y: -84 });
        tl2.to("#WW2", { backgroundColor: "rgba(255, 0, 0, 0.5)" });
        tl2.to("#Roe", { backgroundColor: "white" });
        tl2.to("#Timeline-Animation-Answers", { delay: 1, y: -126 });
        tl2.to("#FirstWebPage", { backgroundColor: "rgba(123, 239, 178, 1)" });
        tl2.to("#WW2", { backgroundColor: "white" });
        tl2.to("#WW2", { delay: 2 });
        tl2.to("#Timeline-Animation-Container", { duration: 1, opacity: 0 });
        }
    
      }
  return (
    <>
      <Header />

      <div id="timeline-Card">

          <div id="Timeline-Container-h1">
            <h1 id="Timeline-h1">American History Timeline</h1>
          </div>

          <div id="Timeline-Container-Des">
            <p id="Timeline-Des">
              Play a drag and drop game where you match American historical
              events to their dates. See how many you can get correct, and learn
              some new facts.
            </p>
            <Router forceRefresh>
              <NavLink id="Timeline-Link" to="/timelinegame">
                Visit Page
              </NavLink>
            </Router>
          </div>

          <div id="Timeline-Animation-Container">
            <div id="Timeline-Animation-Date">
              <p>1991</p>
            </div>
            <div id="Timeline-Animation-Answers">
              <p id="Nixon">Nixon Resigns</p>
              <p id="Roe">Roe v. Wade</p>
              <p id="WW2">World War II</p>
              <p id="FirstWebPage">The First Web Page</p>
            </div>
          </div>

      </div>
    </>
  );
}
