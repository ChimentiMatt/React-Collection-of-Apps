import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {TimelineLite ,TweenMax, Power3} from 'gsap';
import Paperplane from "./plane6.png";
import Cloud1 from "./cloud1.png"
import Cloud2 from "./cloud2.png"

export default function Greensock() {
  let tl = new TimelineLite({ delay: .8});
  useEffect(() => {
    Greensock();
    Clouds()
  }, []);

  function Greensock() {
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
    gsap.to('#gsap-cloud1', {duration: 300, x: 1000, delay: 0, ease:  'none' })
    gsap.to('#gsap-cloud2', {duration: 590, x: 2000, delay: 0, ease:  'none',yoyo: true })

      }


  function Something() {

    var tl = gsap.timeline({})
    

    tl.to('#gsap-img', {duration: .5, x: 300, y: 150, rotation: 20, ease:  'none'})
    tl.to('#gsap-img', {duration: .5, x: 650, y: 300, rotation: 10, ease:  'none'})
    tl.to('#gsap-img', {duration: .6, x: 1000, y: 350, rotation: -15, ease:  'none'})

    tl.to('#gsap-img', {duration: .6, x: 1500, y: 200, rotation: -35, ease:  'none'})

    tl.to('#gsap-img', {duration: .4, x: 1800, y: -50, rotation: -75, ease:  'none'})
    tl.to('#gsap-img', {duration: .4, x: 1600, y: -250, rotation: -100, ease:  'none'})
    tl.to('#gsap-img', {duration: .2, x: 1500, y: -500, rotation: -150, ease:  'none'})
    tl.to('#gsap-img', {duration: .2, x: 1400, y: -700, rotation: -190, ease:  'none'})

    tl.to('#gsap-img', {duration: .5, x: 200, y: -700, rotation: 90, ease:  'none'})
    tl.to('#gsap-img', {duration: 1, x: 200, y: 500, rotation: 30, ease:  'none'}) 

    tl.to('#gsap-img', {duration: 1.1, x: 1100, y: 150, rotation: -60, ease:  'none'})
    tl.to('#gsap-img', {duration: .3, x: 1200, y: -50, rotation: -80, ease:  'none'})
    tl.to('#gsap-img', {duration: .3, x: 1100, y: -250, rotation: -130, ease:  'none'})

    tl.to('#gsap-img', {duration: .3, x: 900, y: -450, rotation: -180, ease:  'none'})
    tl.to('#gsap-img', {duration: .3, x: 500, y: -400, rotation: -180, ease:  'none'})
    tl.to('#gsap-img', {duration: .5, x: 300, y: -250, rotation: -220, ease:  'none'})
    tl.to('#gsap-img', {duration: .2, x: 150, y: -100, rotation: -220, ease:  'none'})
    tl.to('#gsap-img', {duration: .2, x: 50, y: 0, rotation: -250, ease:  'none'})
    tl.to('#gsap-img', {duration: .1, x: 50, y: 100, rotation: -250, ease:  'none'})
    // tl.to('#gsap-img', {duration: 1, x: 400, y: 200, rotation: 15, ease:  'none'})
    // tl.to('#gsap-img', {duration: 1, x: 600, y: 200, ease:  'none'})
    // tl.to('#gsap-img', {duration: 1, x: 800, y: 250, rotation: -25, ease:  'none'})
    // tl.to('#gsap-img', {duration: 1, x: 1000, y: -100, rotation: -70, ease:  'none'})
    // tl.to('#gsap-img', {duration: 1, x: 800, y: -300, rotation: -140, ease:  'none'})
    // tl.to('#gsap-img', {duration: 1, x: 600, y: -200, rotation: -200, ease:  'none'})
  }
  

  return (
    <>
      <div className="gsap-app">
        <div className="gsap-page1 gsap-section">
        <div>
          <button id="gsap-page1-btn" onClick={() => Something()}>Animate</button>
          <img src={Paperplane} id="gsap-img"></img>
          <img src={Cloud1} id="gsap-cloud1"></img>
          <img src={Cloud2} id="gsap-cloud2"></img>
          </div>
        </div>

        <div className="gsap-page2 gsap-section">
          <p>Page 2</p>
        </div>

        <div className="gsap-page3 gsap-section">
          <p>Page 3</p>
        </div>
      </div>

    </>
  );
}

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
