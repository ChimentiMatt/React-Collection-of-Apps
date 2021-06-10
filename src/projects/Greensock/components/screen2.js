import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

import Ship from '../spaceship.png'
import Flame from '../flame.png'
import Star from '../star.png'

export default function Screen2() {

    // useEffect(() => {
    //     Text()
    // })

    function MissionToMars() {
        var tl = gsap.timeline({})
    
        tl.to('#gsap-p2-text1', {duration: 1, opacity: .9, ease: 'power1'})
        tl.to('#gsap-p2-text1', {duration: 0, opacity: 0, ease: 'power1'})
        tl.to('#gsap-p2-text2', {duration: 1, delay:1, opacity: .9, ease: 'none'})
        tl.to('#gsap-p2-text2', {duration: 0, opacity: 0, ease: 'none'})
        tl.to('#gsap-p2-text3', {duration: 1, delay:1, opacity: .9, ease: 'none'})
        tl.to('#gsap-p2-text3', {duration: 0, opacity: 0, ease: 'none'})
        tl.to('#gsap-p2-text4', {duration: 1, delay:1, opacity: .9, ease: 'none'})
        tl.to('#gsap-p2-text4', {duration: 0, opacity: 0, ease: 'none'})

        tl.to('#gsap-ship', {duration: .2, rotate: 2})
        tl.to('#gsap-ship', {duration: .2, rotate: -2})
        tl.to('#gsap-ship', {duration: .2, rotate: 2})
        tl.to('#gsap-ship', {duration: .2, rotate: -2})
        tl.to('#gsap-ship', {duration: 1, rotate: 0})

        tl.to('#gsap-ship', {duration: .2, rotate: 2})
        tl.to('#gsap-ship', {duration: .2, rotate: -2})
        tl.to('#gsap-ship', {duration: .2, rotate: 2})
        tl.to('#gsap-ship', {duration: .2, rotate: -2})
        tl.to('#gsap-ship', {duration: 1, rotate: 0})

        tl.to('#gsap-p2-btn', {duration: 0, opacity: 0})
        tl.to('#gsap-liftoff-container', { x: -2500, y: -2500, duration: 0, opacity: 0})


        tl.to('#gsap-flame', {opacity: 1})

        tl.set('#gsap-ship, #gsap-flame', {})
        tl.to('#gsap-ship', {duration: .2, rotate: 2, ease: 'none'})
        tl.to('#gsap-ship', {duration: .2, rotate: -2, ease: 'none'})
        tl.to('#gsap-ship', {duration: .2, rotate: 0, ease: 'none'})
        tl.to('#gsap-ship, #gsap-flame', {duration: 6, y: -500, ease: 'none'})

        tl.to('#gsap-ship', {duration: .2, rotate: 3,  ease: 'none'})
        tl.to('#gsap-ship', {duration: .2, rotate: -3,  ease: 'none'})
        tl.to('#gsap-ship', {duration: .2, rotate: 0,  ease: 'none'})

        tl.to('.gsap-page2', {delay: 1, duration: 2, background: 'blue', ease: 'none'})
        tl.to('#gsap-ship, #gsap-flame', {duration: 2, ease: 'none'})
        // tl.to('#gsap-ship', {duration: .2, rotate: 3,  ease:  'none'})
        tl.to('#gsap-ship', {duration: .2, rotate: -3})
        tl.to('#gsap-ship', {duration: 1, rotate: 0})
        // tl.to('.gsap-page2', {delay: 3, duration: 3, background: 'darkblue', ease: 'none'})
        // tl.to('#gsap-ship', {delay: 2})
        tl.to('#gsap-ship', {duration: .2, rotate: 3})
        tl.to('#gsap-ship', {duration: .2, rotate: -3})
        tl.to('#gsap-ship', {duration: 1, rotate: 0})
 
        tl.to('.gsap-page2', { delay: 3, duration: 3, background: 'black', ease: 'none'})
        tl.to('#gsap-flame', {opacity: 0})
        tl.to('#gsap-ship', {duration: 5, delay: 2, x: -150, y: -300, rotation: 45})

        tl.to('#gsap-ship', {delay: 1, duration: .2, rotation: 45})

        tl.to('#gsap-star', {delay: 1, height: 50, width: 50,duration: 0, opacity: .4})
        tl.to('#gsap-star-2', {delay: .2, height: 70, width: 70, duration: .2, opacity: .8})
        
        tl.to('#gsap-star-3', {delay: .2 , duration: .2, opacity: .5})


        tl.to('#gsap-mars', {duration: 1, height: 20, height: 10, width: 10, opacity: .5})
    }


    return(
        <>
        <div className="gsap-page2-container">
            <h1 id="gsap-p2-text1">3</h1>
            <h1 id="gsap-p2-text2">2</h1>
            <h1 id="gsap-p2-text3">1</h1>
            <h1 id="gsap-p2-text4">Liftoff</h1>
            <img src={Ship} id="gsap-ship"></img>
            <img src={Flame} id="gsap-flame"></img>
            <img src={Star} id="gsap-star"></img>
            <img src={Star} id="gsap-star-2"></img>
            <img src={Star} id="gsap-star-3"></img>

            <div id="gsap-mars"></div>

            <button onClick={() => MissionToMars()} id="gsap-p2-btn">Liftoff</button>
            <div id="gsap-liftoff-container"> 
            </div>
    </div>  
        </>
    )
}