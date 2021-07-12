import React, { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";

import ERCPage from "./projects/Exchange-Rate-Calc/erc.js";
import "./projects/Exchange-Rate-Calc/erc.css";

import TimelineGame from "./projects/TAH/TAH.js";
import "./projects/TAH/TAH.css";

import TextApp from "./projects/TEXTAPP/textapp.js";
import "./projects/TEXTAPP/textapp.css";

import Greensock from "./projects/Greensock/greensock.js";
import "./projects/Greensock/greensock.css";

import Matching from "./projects/Matching-Game/matching.js";
import "./projects/Matching-Game/matching.css";

import TypingGame from "./projects/SpeedTyper/speedtyper.js";
import "./projects/SpeedTyper/speedtyper.css";

import { render } from "@testing-library/react";

import RPS from "./projects/RPS/rps.js"

import Spelling from "./projects/Spelling/spelling.js"
import "./projects/Spelling/spelling.css";
import gsapCore from 'gsap/gsap-core';



export default function Landing() {

  useEffect(() => {
    ScrollGreensock();


  }, []);



  function ScrollGreensock() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.timeline({
      scrollTrigger: {
        trigger: "#landing-h1",
        start: 'center center',
        end: 'bottom top',
        markers: true,
        scrub: true
      }
    })
    .from('#landing-h1', { x : 500, y: 500})

    
    // gsap.utils.toArray('.gsap-section').forEach((section) => {
    //   ScrollTrigger.create({
    //     trigger: section,
    //     start: "top top",
    //     pin: true,
    //     pinSpacing: false
    //   });
    // });
  

    // gsap.to("#landing-h1", {
    //   scrollTrigger: "#landing-h1", 
    //   delay: 2,
    //   duration:3, 
    //   x: -510,
    //   y: -400});
  }
    return(
      <>
        <div className="landing gsap-section">
          <div className='box'>
            <h1 id="landing-h1">React App Collection</h1>
         </div>
          <Router forceRefresh>
            <NavLink to="/">
              Home
            </NavLink>
            <br></br>
            <NavLink to="/erc">
              Exchange Rate Converter
            </NavLink>

            <br></br>

            <NavLink to="/timelinegame">
              Timeline Game
            </NavLink>

            <br></br>
            <NavLink to="/text">
              Text
            </NavLink>

            <br></br>
            <NavLink to="/gsap">
              GreenSock
            </NavLink>
            <br></br>

            <NavLink to="/matching">
              Matching Memes
            </NavLink>

            <br></br>

            <NavLink to="/typer">
              Typing Game
            </NavLink>

          <br></br>
          
            <NavLink to="/rps">
              Rock Paper Scissors
            </NavLink>

            <br></br>

            <NavLink  to="/spelling">
              Spelling
            </NavLink>
        
          </Router>
      </div>
          {/* <div className="gsap-landing2 gsap-section">
            <p>cats</p>
          </div> */}
      </>
    )
}