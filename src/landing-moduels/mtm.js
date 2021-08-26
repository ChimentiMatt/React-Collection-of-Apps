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
    const notMobile = window.innerWidth >= 500
    if (notMobile == true){ 
  
        // Greensock Animations
        gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);
        
        var tl = gsap.timeline({});
        var tl2 = gsap.timeline({ repeat: -1 });
        var tl3 = gsap.timeline({ repeat: -1 });

        tl.to("#GS-MTM-Card-h1", { delay: 0.2, duration: 1, y: -100 });
        tl.to("#GS-MTM-Des", { duration: .7, opacity: 1});
        tl.to("#GS-MTM-Link", {duration: 0, opacity: 1 });
        tl.to("#GS-MTM-Mars-Image", { duration: 1, opacity: 1 });
        gsap.to("#GS-MTM-Mars-Image", { duration: 400, rotate: 90 });
        tl2.to("#GS-MTM-Ship-Image", {
        delay: 4,
        duration: 17,
        ease: "none",
        motionPath: {
            path: 'M309.588,112.515 C313.091,103.009 543.13,7.703 724.606,-33.171 892.107,-70.901 1135.962,51.672 1293.229,160.041 1438.6162,260.2264 1486.573,253.641 1653.373,273.839 1738.328,284.126 1817.0692,275.8371 1952.347,259.854 2264.096,223.02 2120.983,-31.357 1916.739,21.737 1805.151,50.745 1811.753,63.43 1647.86,125.717 1436.797,205.93 1137.5613,277.9234 748.236,241.242 386.47,207.156 303.082,208.499 303.565,208.751 ',
            autoRotate: true,
            },
        });
        // Uncomment for Plugin, Works in Browser
        // MotionPathHelper.create('#GS-MTM-Ship-Image');

        tl3.to("#GS-MTM-Mars-Image", { delay: 10, opacity: 1, zIndex: 3 });
        tl3.to("#GS-MTM-Mars-Image", { delay: 8, zIndex: 0 });
        tl3.to("#GS-MTM-Mars-Image", { delay: 2, zIndex: 2 });
        }
    else {
        document.getElementById('GS-MTM-Card-h1').style.fontSize = '40px'
        document.getElementById('GS-MTM-Card-h1').style.marginTop = '40px'
        document.getElementById('GS-MTM-Mars-Image').style.height = '200px'
        document.getElementById('GS-MTM-Des').style.fontSize = '16px'
        document.getElementById('GS-MTM-Container-Des').style.marginLeft = '10%'
        document.getElementById('GS-MTM-Container-Des').style.marginRight = '10%'
        document.getElementById('GS-MTM-Container-Des').style.height = '360px'
        document.getElementById('GS-MTM-Ship-Image').style.height = '25px'

        // GS-MTM-Des

        var tl = gsap.timeline({});
        var tl2 = gsap.timeline({ repeat: -1 });
        var tl4 = gsap.timeline({ repeat: -1 });

        tl.to("#GS-MTM-Card-h1", { delay: 0.2, duration: 1, y: -100 });
        tl.to("#GS-MTM-Des", { duration: 2, opacity: 1 });
        tl.to("#GS-MTM-Link", { opacity: 1 });
        tl.to("#GS-MTM-Mars-Image", { opacity: 1 });
        tl4.to("#GS-MTM-Mars-Image", { duration: 400, rotate: 90 });
        gsap.to("#GS-MTM-Ship-Image", {
        delay: 5,
        duration: 10,
        ease: "none",
        motionPath: {
            path: 'M362.731,90.603 C376.856,139.408 860.297,193.904 862.341,105.854 864.505,12.597 348.078,57.494 361.561,58.75 ',
            autoRotate: true,
            },
        });
        // Uncomment MotionPathHelper for Plugin, Works in Browser
        // MotionPathHelper.create('#GS-MTM-Ship-Image');

        
        var tl3 = gsap.timeline({ repeat: 10 });


        tl3.to("#GS-MTM-Mars-Image", { delay: 5, zIndex: 0 });
        tl3.to("#GS-MTM-Mars-Image", { delay: 5, zIndex: 3 });
        // tl4.to("#GS-MTM-Ship-Image", { delay: 5, opacity: 1, height: 35 });
        // tl4.to("#GS-MTM-Ship-Image", { delay: 5, opacity: 1, height: 30 });
        }
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