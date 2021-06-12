import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Screen2 from "./components/screen2.js"

import {TimelineLite ,TweenMax, Power3} from 'gsap';
import Paperplane from "./plane9.png";
import Cloud1 from "./cloud4.png"


export default function Greensock() {
  // let tl = new TimelineLite({ delay: .8});

  function StartAnimation () {
    ScrollGreensock();
    Plane()
  }

  useEffect(() => {
     ScrollGreensock();
     IntroText()
     Clouds()
  }, []);

  function ScrollGreensock() {
    //animation for scroll effect
    gsap.registerPlugin(ScrollTrigger);
    // gsap.registerPlugin(TextPlugin)
    gsap.utils.toArray(".gsap-section").forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });
  }

  function Clouds() {
    // var tl = gsap.timeline({repeat: 2, yoyo: true})
    gsap.to('#gsap-cloud1', {duration: 200, x: 1000, delay: 0, ease:  'none' })
    gsap.to('#gsap-cloud2', {duration: 300, x: -1000, delay: 0, ease:  'none' })
    gsap.to('#gsap-cloud3', {duration: 300, x: -1000, delay: 0, ease:  'none' })
      }

  function IntroText () {
    var tli = gsap.timeline({ repeat: -1 })
    tli.to("#gsap-a", {duration: 1, color: '#ff9aa2'})
    tli.to("#gsap-a",  {duration: .8, color: 'black'})
    
    tli.to("#gsap-n", { duration: .8, color: '#ff9aa2'})
    tli.to("#gsap-n",  {duration: .8, color: 'black'})

    tli.to("#gsap-i", { duration: .8, color: '#ff9aa2'})
    tli.to("#gsap-i",  {duration: .8, color: 'black'})

    tli.to("#gsap-m", { duration: .8, color: '#ff9aa2'})
    tli.to("#gsap-m",  {duration: .8, color: 'black'})

    tli.to("#gsap-a2", { duration: .8, color: '#ff9aa2'})
    tli.to("#gsap-a2",  {duration: .8, color: 'black'})

    tli.to("#gsap-t", { duration: .8, color: '#ff9aa2'})
    tli.to("#gsap-t",  {duration: .8, color: 'black'})

    tli.to("#gsap-e", { duration: .8, color: '#ff9aa2'})
    tli.to("#gsap-e",  {duration: .8, color: 'black'})
  }


  function Plane() {
    var tl = gsap.timeline({})

    // Remove Animate text
    tl.to('#gsap-a, #gsap-n, #gsap-i, #gsap-m, #gsap-a2, #gsap-t, #gsap-e, #gsap-green-click', {opacity: 0})
    

    // little bumps
    tl.to('#gsap-img', {duration: .8, x: 200, y: 100, rotation: 60, ease:  'none'})
    tl.to('#gsap-img', {duration: .8, x: 400, y: 200, rotation: 50, ease:  'none'})
    tl.to('#gsap-img', {duration: .8, x: 600, y: 150, rotation: 10, ease:  'none'})
    tl.to('#gsap-img', {duration: .8, x: 800, y: 100, rotation: -5, ease:  'none'})
    tl.to('#gsap-img', {duration: .8, x: 1000, y: 50, rotation: -10, ease:  'none'})
    tl.to('#gsap-img', {duration: .8, x: 1200, y: 100, rotation: 30, ease:  'none'})
    tl.to('#gsap-img', {duration: .8, x: 1400, y: 150, rotation: 50, ease:  'none'})
    tl.to('#gsap-img', {duration: .8, x: 1600, y: 200, rotation: 55, ease:  'none'})
    tl.to('#gsap-img', {duration: .8, x: 1800, y: 300, rotation: 60, ease:  'none'})
    tl.to('#gsap-img', {duration: .8, x: 2000, y: 350, rotation: 65, ease:  'none'})

  // Off screen
  tl.to('#gsap-img', {duration: .5, opacity: 0, x: 2000, y: -250, rotation: 180, ease:  'none'})
  tl.to('#gsap-img', {duration: .5, x: 1800, y: -150, rotation: 200, ease:  'none'})

  tl.to('#gsap-img', {duration: .5, x: 1600, opacity: 1, y: -100, rotation: 180, ease:  'none'})
  tl.to('#gsap-img', {duration: .5, x: 1400, y: -50, rotation: 170, ease:  'none'})

  tl.to('#gsap-img', {duration: .5, x: 1300, y: 0, rotation: 150, ease:  'none'})

  tl.to('#gsap-img', {duration: .3, x: 1220, y: 50, rotation: 140, ease:  'none'})
  tl.to('#gsap-img', {duration: .3, x: 1250, y: 100, rotation: 100, ease:  'none'})
  tl.to('#gsap-img', {duration: .3, x: 1300, y: 150, rotation: 70, ease:  'none'})

  tl.to('#gsap-img', {duration: .3, x: 1400, y: 200, rotation: 60, ease:  'none'})
  tl.to('#gsap-img', {duration: .5, x: 1600, y: 300, rotation: 50, ease:  'none'})
  tl.to('#gsap-img', {duration: .5, x: 1800, y: 400, rotation: 45, ease:  'none'})
  tl.to('#gsap-img', {duration: .5, x: 2000, y: 300, rotation: 0, ease:  'none'})

  // Off screen 2

 tl.to('#gsap-img', {duration: .1, x: 2000, opacity: 0, y: -2000, rotation: 100, ease:  'none'})
 tl.to('#gsap-img', {duration: .1, x: 100, y: -2000, rotation: 90, ease:  'none'})
 tl.to('#gsap-img', {duration: .5, x: 0, opacity: 1, y: -700, rotation: 80, ease:  'none'})
 tl.to('#gsap-img', {duration: .5, x: 100, y: -500, rotation: 90, ease:  'none'})
 tl.to('#gsap-img', {duration: .8, x: 200, y: -200, rotation: 80, ease:  'none'})
 tl.to('#gsap-img', {duration: .8, x: 300, y: 0, rotation: 60, ease:  'none'})
 tl.to('#gsap-img', {duration: .7, x: 500, y: 0, rotation: 20, ease:  'none'}) 
 tl.to('#gsap-img', {duration: .5, x: 700, y: -100, rotation: 0, ease:  'none'}) 
 tl.to('#gsap-img', {duration: .5, x: 900, y: -50, rotation: 20, ease:  'none'}) 
 tl.to('#gsap-img', {duration: .5, x: 1100, y: -20, rotation: 25, ease:  'none'}) 
  //  tl.to('#gsap-img', {duration: .8, x: 1200, y: 100, rotation: 60, ease:  'none'})
  tl.to('#gsap-img', {duration: .3, x: 1200, y: -15, rotation: 30, ease:  'none'})
  tl.to('#gsap-img', {duration: .3, x: 1300, y: -10, rotation: 30, ease:  'none'})
  tl.to('#gsap-img', {duration: .3, x: 1400, y: -5, rotation: 30, ease:  'none'})
  tl.to('#gsap-img', {duration: .3, x: 1500, y: 0, rotation: 30, ease:  'none'})
  tl.to('#gsap-img', {duration: .3, x: 1600, y: 0, rotation: 30, ease:  'none'})

  tl.to('#gsap-green-text', {duration: 2, opacity: .8})
    tl.to('#gsap-green-p', {duration: 2, opacity: .6, })  
  }
  

  return (
    <>
      <div className="gsap-app">
            <button id="gsap-page1-btn" onClick={() => StartAnimation()}>xxxxxxxx</button>
        <div className="gsap-page1 gsap-section">
        <div>
          {/* <div id="gsap-page1-btn-container"> */}
          {/* </div> */}
          <img src={Paperplane} id="gsap-img"></img>
          <img src={Cloud1} id="gsap-cloud1"></img>
          <img src={Cloud1} id="gsap-cloud2"></img>
          <img src={Cloud1} id="gsap-cloud3"></img>
          <h1 id='gsap-green-text'>GreenSock Powered Animations</h1>
          <p id='gsap-green-p'>Scroll Down To Continue</p>
          </div>
        </div>
        <div>
            <p id='gsap-green-click'>click to</p>
          </div>
        <div className="gsap-intro-animation">
          <p id="gsap-a">A</p>
          <p id="gsap-n">n</p>
          <p id="gsap-i">i</p>
          <p id="gsap-m">m</p>
          <p id="gsap-a2">a</p>
          <p id="gsap-t">t</p>
          <p id="gsap-e">e</p>
        </div>


        <div className="gsap-page2 gsap-section">

          <Screen2 />
        </div>

        {/* <div className="gsap-page3 gsap-section">
          <p>Page 3</p>
        </div> */}
      </div>

    </>
  );
}



//Notes from guides

// export default function Greensock() {
//     // make it so animations hapeen in a  timeline, essentially, it knows not to trigger
//     // until previous animation is over
//     // if you want a delay betweem, add ,"+=1" at the end, after } closes before )
//     // example      ...ease: "back"},"+=1" )

//     //to make it repeat infinitly use -1
//     // yoyo makes the second repeat go backwards


//     var tl = gsap.timeline({repeat: 2, yoyo: true})

//     function Animate() {
//         tl.from(".gsap-logo", {duration: 1.5, opacity: 0, scale:0.3, ease: "back", rotation: 360})
//         tl.from(".gsap-circle", {duration: 1, opacity: 0, y: "random(-200, 200)",
//         stagger: 0.25})
//     }



//     return(
//         <>
//         <div id="gsap-demo">
//             <button onClick={() => Animate()}>Animate</button>
//             <div className="gsap-images">
//                 <img className="gsap-logo" src={img} ></img>
//                 <div className="gsap-circle"></div>
//                 <div className="gsap-circle"></div>
//                 <div clclassNameass="gsap-circle"></div>
//                 <div className="gsap-circle"></div>
//                 <div className="gsap-circle"></div>
//             </div>
//         </div>

//         </>
//     )
// }

// multiple class of gsap-circle go out in a staggered fashion
// gsap.from(".gsap-circle", {duration: 1, opacity: 0, y: 150, stagger: 0.25})

// multiple class of gsap-circle go out in a staggered fashion WITH RANDOM function
// gsap.from(".gsap-circle", {duration: 1, opacity: 0, y: "random(-200, 200)",
// stagger: 0.25})

//Small to big
// gsap.from(".gsap-logo", {duration: 1.5, opacity: 0, scale:0.3, ease: "back"})

//Move right with border
// gsap.to(".gsap-logo", {duration: 2, x: 300, backgroundColor: "rgb(86, 5, 99)",
// borderRadius: '20%', border: '5px solid white', ease: "elastic" })

//Do a 360
// gsap.to(".gsap-logo", {duration: 2, rotation 360})

//Set transform origin
// gsap.to(".gsap-logo", {transform: "50% 50%"})


//Notes from guides

// export default function Greensock() {
//     // make it so animations hapeen in a  timeline, essentially, it knows not to trigger
//     // until previous animation is over
//     // if you want a delay betweem, add ,"+=1" at the end, after } closes before )
//     // example      ...ease: "back"},"+=1" )

//     //to make it repeat infinitly use -1
//     // yoyo makes the second repeat go backwards


//     var tl = gsap.timeline({repeat: 2, yoyo: true})

//     function Animate() {
//         tl.from(".gsap-logo", {duration: 1.5, opacity: 0, scale:0.3, ease: "back", rotation: 360})
//         tl.from(".gsap-circle", {duration: 1, opacity: 0, y: "random(-200, 200)",
//         stagger: 0.25})
//     }



//     return(
//         <>
//         <div id="gsap-demo">
//             <button onClick={() => Animate()}>Animate</button>
//             <div className="gsap-images">
//                 <img className="gsap-logo" src={img} ></img>
//                 <div className="gsap-circle"></div>
//                 <div className="gsap-circle"></div>
//                 <div clclassNameass="gsap-circle"></div>
//                 <div className="gsap-circle"></div>
//                 <div className="gsap-circle"></div>
//             </div>
//         </div>

//         </>
//     )
// }

// multiple class of gsap-circle go out in a staggered fashion
// gsap.from(".gsap-circle", {duration: 1, opacity: 0, y: 150, stagger: 0.25})

// multiple class of gsap-circle go out in a staggered fashion WITH RANDOM function
// gsap.from(".gsap-circle", {duration: 1, opacity: 0, y: "random(-200, 200)",
// stagger: 0.25})

//Small to big
// gsap.from(".gsap-logo", {duration: 1.5, opacity: 0, scale:0.3, ease: "back"})

//Move right with border
// gsap.to(".gsap-logo", {duration: 2, x: 300, backgroundColor: "rgb(86, 5, 99)",
// borderRadius: '20%', border: '5px solid white', ease: "elastic" })

//Do a 360
// gsap.to(".gsap-logo", {duration: 2, rotation 360})

//Set transform origin
// gsap.to(".gsap-logo", {transform: "50% 50%"})
