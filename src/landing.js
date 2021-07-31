import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";




import Header from "./landing-moduels/header.js"

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
    document.getElementById('landing-h1').style.opacity = 0
    document.getElementById('Home-Btn').style.opacity = 0
    document.getElementById('GS-MTM-Btn').style.opacity = 0
    document.getElementById('Timeline-Btn').style.opacity = 0
    document.getElementById('Speedtyper-btn').style.opacity = 0
    document.getElementById('Spelling-btn').style.opacity = 0
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
    // gsap.to('#text1', {delay: 1, duration: 1, opacity: 1})
    // gsap.to('#text2', {delay: 2, opacity: 1 })
    gsap.registerPlugin(ScrollTrigger)

  }



  function AnimateRC() {
    const isMobile = window.innerWidth >= 500
    if (isMobile == true){ 
      console.log('cats')
      var tl = gsap.timeline({})

      tl.to('#landing-h1', {opacity: 0, direction: 0})
      tl.to('#text1', {duration: 1, fontSize: 100})
      tl.to('#landing-left-container1', {duration: 1,width: '60vw', display: 'block'})
      
      tl.to('#landing-h1, #Home-Btn, #GS-MTM-Btn, #Timeline-Btn, #Speedtyper-btn, #Spelling-btn', {opacity: 1} )
      tl.to('#landing-line1', {opacity: 1})
      tl.to('#landing-line2', {delay: .5, opacity: 1})
      tl.to('#landing-line3', {delay: .5, opacity: 1})
      tl.to('#landing-line4', {delay: .5, opacity: 1})
      tl.to('#landing-line1, #landing-line2, #landing-line3, #landing-line4', { delay: 1,opacity: 0})
      tl.to('#landing-left', {width: '0vw'})
      tl.to('#landing-right', {width: '40vw',})
      tl.to('#Home-Container', {backgroundColor: 'white'})
    }

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
      <Header />

      <div id="Home-Container">

        <div id="landing-left">
          <div id="landing-left-container1">
            <p id="landing-line1">One App For </p>
            <p id="landing-line2">New Technologies</p>
            <p id="landing-line3">Fun Projects</p>
            <p id="landing-line4">Super Cool Things</p>
          </div>
        </div>

        <div id="landing-right">
          <p id="text1" onClick={AnimateRC}>React Collection</p>
        </div>
        {/* <p id="test1">Here</p> */}
      </div>
{/* 
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
      </div> */}


    </>
  );
}
