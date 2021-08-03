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
    animateGreetingText()
    // ScrollGreensock();
    HomePageScrollGSAP()
    document.getElementById('landing-h1').style.opacity = 0
    document.getElementById('Home-Btn').style.opacity = 0
    document.getElementById('GS-MTM-Btn').style.opacity = 0
    document.getElementById('Timeline-Btn').style.opacity = 0
    document.getElementById('Speedtyper-btn').style.opacity = 0
    document.getElementById('Spelling-btn').style.opacity = 0

    
    const trigger = [...document.getElementsByClassName("header-link")]

    // const word = document.getElementById("Home-Btn").innerHTML
    // for (let i = 0; i < word.length; i++) {
    //   console.log(word[i])
    // }


    const Home = document.getElementById('Home-Btn')

    Home.addEventListener("mouseenter", () => {
      gsap.to('#homeH', {fontSize: 40, x: 1000})
    })
    Home.addEventListener("mouseleave", () => {
      gsap.to('#homeH', {fontSize: 20})
    })
    // "header-link"
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

  function animateGreetingText() {
    let tl = gsap.timeline({ repeat: -1})
    tl.to('#greetingText', {duration: 2, opacity: .5})
    tl.to('#greetingText', {duration: 2, opacity: 1})
    

    let letter1 = document.getElementById('greetingTextL1')
    let letter2 = document.getElementById('greetingTextL2')
    let letter3 = document.getElementById('greetingTextL3')
    let letter4 = document.getElementById('greetingTextL4')
    let letter5 = document.getElementById('greetingTextL5')
    let letter6 = document.getElementById('greetingTextL6')
    let letter7 = document.getElementById('greetingTextL7')    
    let letter8 = document.getElementById('greetingTextL8')
    let letter9 = document.getElementById('greetingTextL9')
    let letter10 = document.getElementById('greetingTextL10')    
    let letter11 = document.getElementById('greetingTextL11')
    let letter12 = document.getElementById('greetingTextL12')
    let letter13 = document.getElementById('greetingTextL13')
    let letter14 = document.getElementById('greetingTextL14')
    let letter15 = document.getElementById('greetingTextL15')

    letter1.addEventListener("mouseenter", () => {
      gsap.to('#greetingTextL1', {color: '#fff69f', y: -15})
    })
    letter1.addEventListener("mouseleave", () => {
      gsap.to('#greetingTextL1', {color: '#ff2a6a', y: 0})
    })

    letter2.addEventListener("mouseenter", () => {
      gsap.to('#greetingTextL2', {color: 'red', y: -15})
    })
    letter2.addEventListener("mouseleave", () => {
      gsap.to('#greetingTextL2', {color: '#ff2a6a', y: 0})
    })

    letter3.addEventListener("mouseenter", () => {
      gsap.to('#greetingTextL3', {color: '#0a9cf5', y: -15})
    })
    letter3.addEventListener("mouseleave", () => {
      gsap.to('#greetingTextL3', {color: '#ff2a6a', y: 0})
    })

    letter4.addEventListener("mouseenter", () => {
      gsap.to('#greetingTextL4', {color: '#85ebd9', y: -15})
    })
    letter4.addEventListener("mouseleave", () => {
      gsap.to('#greetingTextL4', {color: '#ff2a6a', y: 0})
    })

    letter5.addEventListener("mouseenter", () => {
      gsap.to('#greetingTextL5', {color: '#65dc98', y: -15})
    })
    letter5.addEventListener("mouseleave", () => {
      gsap.to('#greetingTextL5', {color: '#ff2a6a', y: 0})
    })

    letter6.addEventListener("mouseenter", () => {
      gsap.to('#greetingTextL6', {color: '#af43be', y: -15})
    })
    letter6.addEventListener("mouseleave", () => {
      gsap.to('#greetingTextL6', {color: '#ff2a6a', y: 0})
    })

    letter7.addEventListener("mouseenter", () => {
      gsap.to('#greetingTextL7', {color: '#fbf665', y: -15})
    })
    letter7.addEventListener("mouseleave", () => {
      gsap.to('#greetingTextL7', {color: '#ff2a6a', y: 0})
    })

    letter8.addEventListener("mouseenter", () => {
      gsap.to('#greetingTextL8', {color: '#393f5f', y: -15})
    })
    letter8.addEventListener("mouseleave", () => {
      gsap.to('#greetingTextL8', {color: '#ff2a6a', y: 0})
    })

    letter9.addEventListener("mouseenter", () => {
      gsap.to('#greetingTextL9', {color: '#6a7e6a', y: -15})
    })
    letter9.addEventListener("mouseleave", () => {
      gsap.to('#greetingTextL9', {color: '#ff2a6a', y: 0})
    })

    letter10.addEventListener("mouseenter", () => {
      gsap.to('#greetingTextL10', {color: '#1afe49', y: -15})
    })
    letter10.addEventListener("mouseleave", () => {
      gsap.to('#greetingTextL10', {color: '#ff2a6a', y: 0})
    })

    letter11.addEventListener("mouseenter", () => {
      gsap.to('#greetingTextL11', {color: '#1afe49', y: -15})
    })
    letter11.addEventListener("mouseleave", () => {
      gsap.to('#greetingTextL11', {color: '#ff2a6a', y: 0})
    })

    letter12.addEventListener("mouseenter", () => {
      gsap.to('#greetingTextL12', {color: '#4682b4', y: -15})
    })
    letter12.addEventListener("mouseleave", () => {
      gsap.to('#greetingTextL12', {color: '#ff2a6a', y: 0})
    })

    letter13.addEventListener("mouseenter", () => {
      gsap.to('#greetingTextL13', {color: '#fd8090', y: -15})
    })
    letter13.addEventListener("mouseleave", () => {
      gsap.to('#greetingTextL13', {color: '#ff2a6a', y: 0})
    })

    letter14.addEventListener("mouseenter", () => {
      gsap.to('#greetingTextL14', {color: '#00FF00', y: -15})
    })
    letter14.addEventListener("mouseleave", () => {
      gsap.to('#greetingTextL14', {color: '#ff2a6a', y: 0})
    })

    letter15.addEventListener("mouseenter", () => {
      gsap.to('#greetingTextL15', {color: '#CC00FF', y: -15})
    })
    letter15.addEventListener("mouseleave", () => {
      gsap.to('#greetingTextL15', {color: '#ff2a6a', y: 0})
    })
  }


  function AnimateRC() {
    const isMobile = window.innerWidth >= 500
    if (isMobile == true){ 
      console.log('cats')
      var tl = gsap.timeline({})

      tl.to('#landing-h1', {opacity: 0, direction: 0})
      .to('#greetingText', {duration: 1, fontSize: 100})
      .to('#landing-right', {right: 0, width: '40vw'})
      .to('#landing-left', {duration: 1,width: '60vw', display: 'block'})
      
      .to('#landing-h1, #Home-Btn, #GS-MTM-Btn, #Timeline-Btn, #Speedtyper-btn, #Spelling-btn', {opacity: 1} )
      .to('#landing-line1', {opacity: 1})
      .to('#landing-line2', {delay: .5, opacity: 1})
      .to('#landing-line3', {delay: .5, opacity: 1})
      .to('#landing-line4', {delay: .5, opacity: 1})
      .to('#landing-line1, #landing-line2, #landing-line3, #landing-line4', { delay: 1,opacity: 0})
      .to('#landing-right', {width: '40vw',})
      // .to('#Home-Container', {backgroundColor: 'white'}).add('end', 8.3)
      // .to('#landing-left-container1', {marginLeft: '40vw', backgroundColor: "#05d9e8"}, 'end')
      // .call(gsapCall)
    }

  }
  function gsapCall() {
    document.getElementById('greetingText').innerHTML = "FUN TIMES"
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

      {/* <div id="Home-Container"> */}

        <div id="landing-left">
            <p id="landing-line1">One App For </p>
            <p id="landing-line2">New Technologies</p>
            <p id="landing-line3">Fun Projects</p>
            <p id="landing-line4">Super Cool Things</p>
        </div>

        <div id="landing-right">
          <div id="greetingText" onClick={AnimateRC}>
            <div id="greetingTextL1">R</div>
            <div id="greetingTextL2">e</div>
            <div id="greetingTextL3">a</div>
            <div id="greetingTextL4">c</div>
            <div id="greetingTextL5">t</div>
            <div>_</div>
            <div id="greetingTextL6"> C</div>
            <div id="greetingTextL7">o</div>
            <div id="greetingTextL8">l</div>
            <div id="greetingTextL9">l</div>
            <div id="greetingTextL10">e</div>
            <div id="greetingTextL11">c</div>
            <div id="greetingTextL12">t</div>
            <div id="greetingTextL13">i</div>
            <div id="greetingTextL14">o</div>
            <div id="greetingTextL15">n</div>
          </div>
        </div>
        {/* <p id="test1">Here</p> */}
      {/* </div> */}
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
