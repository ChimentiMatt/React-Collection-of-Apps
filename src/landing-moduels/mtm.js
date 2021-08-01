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
        tl.to("#GS-MTM-Des", { duration: 2, opacity: 1});
        tl.to("#GS-MTM-Link", { opacity: 1 });
        tl.to("#GS-MTM-Mars-Image", { duration: 1, opacity: 1 });
        gsap.to("#GS-MTM-Mars-Image", { duration: 400, rotate: 90 });
        tl2.to("#GS-MTM-Ship-Image", {
        delay: 4,
        duration: 17,
        ease: "none",
        motionPath: {
            path: 'M316.588,54.515 C320.091,45.009 550.13,-50.297 731.606,-91.171 899.107,-128.901 1142.962,-6.328 1300.229,102.041 1507.925,245.163 1708.421,379.131 1987.347,297.854 2288.73,210.033 2124.554,-65.119 1919.739,-14.263 1651.114,52.438 1491.464,116.669 1307.234,239.402 1162.588,335.763 988.005,321.839 732.236,315.242 426.053,307.344 310.082,150.499 310.565,150.751 ',
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
        // Greensock Animations
        gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);
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