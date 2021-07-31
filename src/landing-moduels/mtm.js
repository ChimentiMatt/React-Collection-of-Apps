import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import Header from "./header.js"


import Mars from "./mars.png";
import Ship from "./spaceship.png";
import "../projects/Greensock/greensock.css";


export default function MTMLanding() {

    useEffect(() => {
        MtmFunc()
    })

    function MtmFunc() {


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

    tl3.to("#GS-MTM-Mars-Image", { delay: 10, opacity: 1, zIndex: 3 });
    tl3.to("#GS-MTM-Mars-Image", { delay: 8, zIndex: 0 });
    tl3.to("#GS-MTM-Mars-Image", { delay: 2, zIndex: 2 });
    }
    return (
        <>
          <Header />
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
      </>
    )
}