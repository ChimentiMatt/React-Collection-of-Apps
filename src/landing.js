import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";

import Mars from './mars.png'
import Ship from './spaceship.png'

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

import RPS from "./projects/RPS/rps.js";

import Spelling from "./projects/Spelling/spelling.js";
import "./projects/Spelling/spelling.css";
import gsapCore from "gsap/gsap-core";

export default function Landing() {
  const [mtmSelected, setMtmSelected] = useState(false)
  useEffect(() => {
    ScrollGreensock();
  }, []);

  function ScrollGreensock() {

  }

  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#landing-h1",
  //       start: 'center center',
  //       end: 'bottom top',
  //       markers: true,
  //       scrub: true,

  //     }
  //   })
  //   .from('#landing-h1', { x : 500, y: 400, fontSize: 100})
  // }

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

  function MtmFunc() {
    //state stops duplication of animations
    if (mtmSelected == true){
    }
    else {
      setMtmSelected(true)
    document.getElementById('GS-MTM-Btn').style.color = '#FF0000'
    document.getElementById('GS-MTM-Card').style.visibility = 'visible'
    
    gsap.registerPlugin(MotionPathPlugin, MotionPathHelper)
    var tl = gsap.timeline({})
    tl.to('#GS-MTM-Card-h1', {delay: .2, duration: 1, y: -100})
    tl.to('#GS-MTM-Des', { duration: 2, x: 1000})
    tl.to('#GS-MTM-Link', {opacity: 1})
    tl.to('#GS-MTM-Mars-Image', {duration: 1, opacity: 1})
    tl.to('#GS-MTM-Ship-Image', {duration: 20, ease: 'none', motionPath:{ 
      path:'M330.589,213.51599 C334.093,204.01699 488.13,-63.297 669.606,-104.171 837.107,-141.901 1080.962,-19.328 1238.229,89.041 1445.925,232.163 1590.421,371.131 1914.347,364.854 2228.206,358.772 2062.554,-78.119 1857.739,-27.263 1589.114,39.438 1429.464,103.669 1245.234,226.402 1100.588,322.763 926.005,308.839 670.236,302.242 364.053,294.344 183.082,246.499 183.565,246.751 ',
      autoRotate: true,
      }
    })
    // Uncomment for Plugin, Works in Browser    
    // MotionPathHelper.create('#GS-MTM-Ship-Image');
    }
    gsap.to('#GS-MTM-Mars-Image', {delay: 12, opacity: 1, zIndex: 10})
  }

  return (
    <>
      <div className="landing gsap-section">
        <div className="box">
          <h1 id="landing-h1">React App Collection</h1>
        </div>

        <div id="card-links">
          <button 
          id="GS-MTM-Btn"
          onClick={() => MtmFunc()}
          >Mission to Mars</button>
          <button
          id="Timeline-Btn"
          >Timeline Game</button>
          <button
          id="Speedtyper-btn"
          >SpeedTyper</button>
          <button
          id="Spelling-btn"
          >Spelling</button>
        </div>

        <div id="GS-MTM-Card">
            <div id="GS-MTM-Container-h1">
              <h1 id="GS-MTM-Card-h1">Mission To Mars</h1>
            </div>

            <div id="GS-MTM-Container-Des">
              <p id="GS-MTM-Des">After a brief intro animation, sit back and watch the animation "Mission to Mars". It uses GreenSock, also know as gsap for animations. This page was a great project for me to learn more about the technology and animations. It allowed me to grow in my understanding of animations and since their creations, I now use much-improved tools and techniques. Gsap is a powerful library that I highly recommend to anyone doing javascript. The main animation is a little over an about minute long. Have fun!</p>
              <NavLink id="GS-MTM-Link" to="/gsap">Visit Page</NavLink>
            </div>


            <div id="GS-MTM-Mars-Image-Container">
              <img id ="GS-MTM-Mars-Image" src={Mars}></img>
              <img id="GS-MTM-Ship-Image" src={Ship}></img>
              {/* <path id="path" d="M-199.412,93.515 C-192.405,74.515 -131.887,3.637 -58.861,2.643 16.127,2.643 14.762,53.632 40.762,81.637 73.758,115.637 176.17,147.393 225.17,147.393 312.17,147.393 478.569,98.745 485.569,75.754 "></path> */}
            </div>
        </div>





        <Router forceRefresh>
          <NavLink to="/">Home</NavLink>
          <br></br>
          <NavLink to="/erc">Exchange Rate Converter</NavLink>

          <br></br>

          <NavLink to="/timelinegame">Timeline Game</NavLink>

          <br></br>
          <NavLink to="/text">Text</NavLink>

          <br></br>
          <NavLink to="/gsap">GreenSock</NavLink>
          <br></br>

          <NavLink to="/matching">Matching Memes</NavLink>

          <br></br>

          <NavLink to="/typer">Typing Game</NavLink>

          <br></br>

          <NavLink to="/rps">Rock Paper Scissors</NavLink>

          <br></br>

          <NavLink to="/spelling">Spelling</NavLink>
        </Router>
      </div>






    </>
  );
}
