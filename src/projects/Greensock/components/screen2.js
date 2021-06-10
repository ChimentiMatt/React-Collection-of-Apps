import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

import Ship from '../spaceship.png'
import Flame from '../flame.png'
import Star from '../star.png'
import Cloud from '../mtm-c1.png'
import Cloud2 from '../mtm-c2.png'
import Cloud3 from '../mtm-c3.png'

export default function Screen2() {

    // useEffect(() => {
    //     Text()
    // })

    function MissionToMars() {

        var tl = gsap.timeline({})
        tl.to('.gsap-p2-text1', {duration: 1, opacity: .9, ease: 'power1'})
        tl.to('.gsap-p2-text1', {duration: 0, opacity: 0, ease: 'power1'})
        tl.to('.gsap-p2-text2', {duration: 1, delay:1, opacity: .9, ease: 'none'})
        tl.to('.gsap-p2-text2', {duration: 0, opacity: 0, ease: 'none'})
        tl.to('.gsap-p2-text3', {duration: 1, delay:1, opacity: .9, ease: 'none'})
        tl.to('.gsap-p2-text3', {duration: 0, opacity: 0, ease: 'none'})
        tl.to('.gsap-p2-text4', {duration: 1, delay:1, opacity: .9, ease: 'none'})


        tl.to('#gsap-ship', {duration: .2, rotate: 2})
        tl.to('#gsap-ship', {duration: .2, rotate: -2})
        tl.to('#gsap-ship', {duration: .2, rotate: 2})
        tl.to('#gsap-ship', {duration: .2, rotate: -2})
        tl.to('#gsap-ship', {duration: 1, rotate: 0})
        tl.to('.gsap-p2-text4', {duration: 0, opacity: 0, ease: 'none'})
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
 
        tl.to('.gsap-page2', { duration: 3, background: 'black', ease: 'none'})
        tl.to('#gsap-flame', {opacity: 0})
        tl.to('#gsap-ship', {duration: 3, x: -150, y: -300, rotation: 60})

        // tl.to('#gsap-ship', { duration: .2, rotation: 45})


        tl.to('#gsap-mars', {duration: 1, height: 20, height: 10, width: 10, opacity: .5})

        tl.to('#gsap-mars', { opacity: 1})






        // delayed animations
    
        gsap.to('#gsap-mtm-cloud1', {delay: 13, duration: 10, y: 1000, ease: 'none'})
        gsap.to('#gsap-mtm-cloud2', {delay: 13, duration: 10, y: 1000, ease: 'none'})

        gsap.to('#gsap-mtm-cloud3', { delay: 21, opacity: 1,zIndex:1, ease: 'none'})
        gsap.to('#gsap-mtm-cloud3', {delay: 21, duration: 9,  y: 1400, ease: 'none'})

        gsap.to('#gsap-mtm-cloud4', {delay: 16, opacity: 1, zIndex:1, ease: 'none'})
        gsap.to('#gsap-mtm-cloud4', {delay: 16, duration: 9, y: 1700, ease: 'none'})


        gsap.to('#gsap-star', {delay: 31, height: 25, width: 25,duration: 0, opacity: .4})
        gsap.to('#gsap-star-2', {delay: 33, height: 35, width: 35, duration: .2, opacity: .8})
        
        gsap.to('#gsap-star-3', {delay: 31 , height: 10, width: 10, duration: .2, opacity: .5})
        gsap.to('#gsap-star-4, #gsap-star-5, #gsap-star-6', {delay: 32 , duration: .2, opacity: .5})

        gsap.to('#gsap-star-7, #gsap-star-8, #gsap-star-9', {delay: 31 , duration: .2, opacity: .5})

        gsap.to('#gsap-star-1, #gsap-star-2, #gsap-star-3, #gsap-star-4, #gsap-star-5, #gsap-star-6', {delay: 31, duration:  300, x: -1900})
        gsap.to('#gsap-star-7, #gsap-star-8, #gsap-star-9', { delay: 31, duration:  600, x: -1900})
        

        gsap.to('#gsap-mars', {delay: 32, duration: 5, height: 20, width: 20})


    }


    return(
        <>
        <div className="gsap-page2-container">
            <h1 className="gsap-p2-text gsap-p2-text1">3</h1>
            <h1 className="gsap-p2-text gsap-p2-text2">2</h1>
            <h1 className="gsap-p2-text gsap-p2-text3">1</h1>
            <h1 className="gsap-p2-text gsap-p2-text4">Liftoff</h1>
            <img src={Ship} id="gsap-ship"></img>
            <img src={Flame} id="gsap-flame"></img>
            <img src={Star} id="gsap-star"></img>
            <img src={Star} id="gsap-star-2"></img>
            <img src={Star} id="gsap-star-3"></img>

            <img src={Star} id="gsap-star-4"></img>
            <img src={Star} id="gsap-star-5"></img>
            <img src={Star} id="gsap-star-6"></img>

            <img src={Star} id="gsap-star-7"></img>
            <img src={Star} id="gsap-star-8"></img>
            <img src={Star} id="gsap-star-9"></img>



            <div id="gsap-mars"></div>
            <img src={Cloud} id="gsap-mtm-cloud1"></img>
            <img src={Cloud2} id="gsap-mtm-cloud2"></img>
            <img src={Cloud3} id="gsap-mtm-cloud3"></img>
            <img src={Cloud} id="gsap-mtm-cloud4"></img>
            <button onClick={() => MissionToMars()} id="gsap-p2-btn">Liftoff</button>
            <div id="gsap-liftoff-container"> 
            </div>
    </div>  
        </>
    )
}