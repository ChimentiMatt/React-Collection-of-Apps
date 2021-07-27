import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";

import Mars from "./mars.png";
import Ship from "./spaceship.png";

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
  const [mtmSelected, setMtmSelected] = useState(false);
  const [tlSelected, setTlSelected] = useState(false);

  useEffect(() => {
    // ScrollGreensock();
    HomePageScrollGSAP()
  }, []);


  gsap.utils.toArray('.gsap-section').forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      pin: true,
      pinSpacing: false
    });
  });

  function HomePageScrollGSAP() {
    gsap.to('#text1', {delay: 1, duration: 2, opacity: 1})
    gsap.to('#text2', {delay: 2, duration: 2, opacity: 1 })
    gsap.registerPlugin(ScrollTrigger)
  
  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '#text1',
  //       start: '150px 59.5%',
  //       end: '150px 10%',
  //       // end: '200px 200px',
  //       toggleActions: 'play none none none',
  //       markers: true,
  //       scrub: true,    
  //     }
  //   })
  //   .from('#text1', {  fontSize: 100})
  //   .from('#text2', {  fontSize: 25})
  // }

  gsap.to('#text1, #text2',{
    fontSize: 0,
    scrollTrigger: {
      trigger: '#text1',
      start: '150px 59.5%',
      end: '150px 10%',
      // end: '200px 200px',
      toggleActions: 'play none none none',
      markers: true,
      scrub: true,    
    }
  })
}

// NOTES ScrollTrigger Start
// First: when top of trigger hits viewport or scroller

// NOTES ScrollTrigger ToggleActions
// toggleActions: 1st option 
// play, pause, resume, reverse, restart, reset, complete, none

// toggleActions: 2st option
// When it goes forward past the end point

// toggleActions: 3rd option
// when it resumes when coming back into view

// toggleActions: 4th option
// When we scroll all the way back 

  function MtmFunc() {
    //state stops duplication of animations
    if (mtmSelected == true) {
    } else {
      setMtmSelected(true);
      setTlSelected(false);
      // displays current page
      document.getElementById("GS-MTM-Btn").style.color = "#FF0000";
      document.getElementById("GS-MTM-Card").style.display = "contents";
      document.getElementById("GS-MTM-Btn").style.color = "#FF0000";

      // removes all other active pages
      document.getElementById("timeline-Card").style.display = "none";
      document.getElementById("Timeline-Btn").style.color = "black";
      document.getElementById("Home-Container").style.display = "none";

      // Greensock Animations
      gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);
      var tl = gsap.timeline({});
      var tl2 = gsap.timeline({ repeat: -1 });
      var tl3 = gsap.timeline({ repeat: -1 });
      tl.to("#GS-MTM-Card-h1", { delay: 0.2, duration: 1, y: -100 });
      tl.to("#GS-MTM-Des", { duration: 2, x: 1000 });
      tl.to("#GS-MTM-Link", { opacity: 1 });
      tl.to("#GS-MTM-Mars-Image", { duration: 1, opacity: 1 });
      gsap.to("#GS-MTM-Mars-Image", { duration: 400, rotate: 90 });
      tl2.to("#GS-MTM-Ship-Image", {
        delay: 4,
        duration: 17,
        ease: "none",
        motionPath: {
          path: "M330.589,213.51599 C334.093,204.01699 488.13,-63.297 669.606,-104.171 837.107,-141.901 1080.962,-19.328 1238.229,89.041 1445.925,232.163 1590.421,371.131 1914.347,364.854 2228.206,358.772 2062.554,-78.119 1857.739,-27.263 1589.114,39.438 1429.464,103.669 1245.234,226.402 1100.588,322.763 926.005,308.839 670.236,302.242 364.053,294.344 183.082,246.499 183.565,246.751 ",
          autoRotate: true,
        },
      });
      // Uncomment for Plugin, Works in Browser
      // MotionPathHelper.create('#GS-MTM-Ship-Image');
    }
    tl3.to("#GS-MTM-Mars-Image", { delay: 10, opacity: 1, zIndex: 3 });
    tl3.to("#GS-MTM-Mars-Image", { delay: 8, zIndex: 0 });
    tl3.to("#GS-MTM-Mars-Image", { delay: 2, zIndex: 2 });
  }

  function TimelineFunc() {
    if (tlSelected == true) {
    } else {
      setTlSelected(true);
      setMtmSelected(false);
      // displays current page
      document.getElementById("Timeline-Btn").style.color = "#FF0000";
      document.getElementById("timeline-Card").style.display = "contents";
      // removes all other active pages
      document.getElementById("GS-MTM-Btn").style.color = "black";
      document.getElementById("GS-MTM-Card").style.display = "none";


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
  }


  return (
    <>
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
            <button id="GS-MTM-Btn" onClick={() => MtmFunc()}>
              Mission to Mars
            </button>

            <button id="Timeline-Btn" onClick={() => TimelineFunc()}>
              Timeline Game
            </button>

            <button id="Speedtyper-btn">SpeedTyper</button>

            <button id="Spelling-btn">Spelling</button>
          </div>
        </div>
      </div>
      <div id="Home-Container">
        <p id="text1">React Collection</p>
        <p id="text2">scroll to continue</p>
        <p id="test1">Here</p>
        {/* <h1 id="Home-h1"><span id="span-1">One</span> <span id="span-2">App</span> <span id="span-3">for</span> <span id="span-4">Tech</span> <span id="span-5">Demos,</span> <section id="span-6">Polished Projects,</section> <span id="span-7">and More</span></h1> */}
      </div>

      <div id="GS-MTM-Card">
        <div id="GS-MTM-Container">
          <div id="GS-MTM-Container-h1">
            <h1 id="GS-MTM-Card-h1">Mission To Mars</h1>
          </div>

          <div id="GS-MTM-Container-Des">
            <p id="GS-MTM-Des">
              After a brief intro animation, sit back and watch the animation
              "Mission to Mars". It uses GreenSock, also know as gsap for
              animations. This page was a great project for me to learn more
              about the technology and animations. It allowed me to grow in my
              understanding of animations and since their creations, I now use
              much-improved tools and techniques. Gsap is a powerful library
              that I highly recommend to anyone doing javascript. The main
              animation is a little over an about minute long. Have fun!
            </p>
            <Router forceRefresh>
              <NavLink id="GS-MTM-Link" to="/gsap">
                Visit Page
              </NavLink>
            </Router>
          </div>

          <div id="GS-MTM-Mars-Image-Container">
            <img id="GS-MTM-Mars-Image" src={Mars}></img>
            <img id="GS-MTM-Ship-Image" src={Ship}></img>
          </div>
        </div>
      </div>

      <div id="timeline-Card">
        <div id="timeline-Container">
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

        {/* <Router forceRefresh>
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
        </Router> */}
      </div>
    </>
  );
}
