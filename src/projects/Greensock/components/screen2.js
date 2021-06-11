import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

import Ship from '../spaceship.png'
import Flame from '../flame.png'
import Star from '../star.png'
import Cloud from '../mtm-c1.png'
import Cloud2 from '../mtm-c2.png'
import Cloud3 from '../mtm-c3.png'
import Moon from '../moon3.png'
import Astro from '../astro-edit-trans.png'

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
        tl.to('#gsap-ship', {delay: 1})
        tl.to('#gsap-ship', {duration: 16, x: -150, y: -350, rotation: 75})

        // tl.to('#gsap-ship', { duration: .2, rotation: 45})










        // delayed animations

        gsap.to('#gsap-mtm-title', { duration: 7, opacity: 0 ,ease: 'none'})


        gsap.to('#gsap-mtm-cloud1 , #gsap-mtm-earth-1, #gsap-mtm-earth-2, #gsap-mtm-earth-3', {delay: 13, duration: 13, y: 1300, ease: 'none'})
        gsap.to('#gsap-mtm-cloud2', {delay: 13, duration: 20, y: 1400, ease: 'none'})
        
     


        gsap.to('#gsap-mtm-cloud3', { delay: 23, opacity: 1, ease: 'none'})
        gsap.to('#gsap-mtm-cloud3', {delay: 23, duration: 9,  y: 2000, ease: 'none'})

        gsap.to('#gsap-mtm-cloud4', {delay: 16, opacity: 1, ease: 'none'})
        gsap.to('#gsap-mtm-cloud4', {delay: 16, duration: 15, y: 2300, ease: 'none'})

        gsap.to('#gsap-mtm-moon', {delay: 30 , duration: 5, opacity: .7, ease: 'none'})
   


        gsap.to('#gsap-star', {delay: 34, height: 25, width: 25,duration: 0, opacity: .4})
        gsap.to('#gsap-star-2', {delay: 35, height: 35, width: 35, duration: .2, opacity: .8})
        
        gsap.to('#gsap-star-3', {delay: 31 , height: 10, width: 10, duration: .2, opacity: .5})
        gsap.to('#gsap-star-4, #gsap-star-5, #gsap-star-6', {delay: 32 , duration: .2, opacity: .5})

        gsap.to('#gsap-star-7, #gsap-star-8, #gsap-star-9', {delay: 31 , duration: .2, opacity: .5})

        gsap.to('#gsap-star-1, #gsap-star-2, #gsap-star-3, #gsap-star-4, #gsap-star-5, #gsap-star-6', {delay: 31, duration:  300, x: -1900})
        gsap.to('#gsap-star-7, #gsap-star-8, #gsap-star-9', { delay: 31, duration:  600, x: -1900})
        

        gsap.to('#gsap-mtm-shooting-star', {delay: 90,  duration: 60, opacity: .9, ease: 'none'})
        gsap.to('#gsap-mtm-shooting-star', {delay: 91, duration: 60, x: -2200, y: 1900, ease: 'none'})
        
        gsap.to('#gsap-mtm-shooting-star-2', {delay: 85,  duration: 3, opacity: .9, ease: 'none'})
        gsap.to('#gsap-mtm-shooting-star-2', {delay: 86 , duration: 15, x: -2200, y: 1000, ease: 'none'})


        gsap.to('#gsap-mtm-moon', {delay: 32 , duration: 15, opacity: 1,  ease: 'none'})
        gsap.to('#gsap-mtm-moon', {delay: 28 , duration: 10, height: 200, x: -300, y: 200, ease: 'none'})
        gsap.to('#gsap-mtm-moon', {delay: 36 , duration: 10, height: 500,x: -500, ease: 'none'})
        gsap.to('#gsap-mtm-moon', {delay: 41 , duration: 10, ease: 'none'})
        gsap.to('#gsap-ship', {delay: 37, duration: 14, rotation: 90})

        gsap.to('#gsap-mtm-moon', {delay: 51 , duration: 36, x: -2050, ease: 'none'})
        gsap.to('#gsap-mtm-moon', {delay: 69 , duration: 20, height: 200, ease: 'none'})



        gsap.to('#gsap-ship', {delay: 50, duration: 12, x: 500, height: 10})
        gsap.to('#gsap-ship', {delay: 62, duration: 19, height: 200, x: 350 })
        
        
        gsap.to('#gsap-ship', {delay: 79, duration: 10, y:50, x: 200, height: 1100})
        
        gsap.to('#gsap-mtm-astro', {delay: 89, duration: 10, opacity: 1})
        gsap.to('#gsap-mtm-astro', {delay: 104, duration: 10, opacity: 0})

        // gsap.to('#gsap-ship', {delay: 75, duration: 30, x: -150})
    }


    return(
        <>
        <div className="gsap-page2-container">
            <h1 className="gsap-p2-text gsap-p2-text1">3</h1>
            <h1 className="gsap-p2-text gsap-p2-text2">2</h1>
            <h1 className="gsap-p2-text gsap-p2-text3">1</h1>
            <h1 className="gsap-p2-text gsap-p2-text4">LIFTOFF</h1>
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
            <div id="gsap-liftoff-container"> </div>
            <div id="gsap-mtm-earth-1"> </div>
            <div id="gsap-mtm-earth-2"> </div>
            <div id="gsap-mtm-earth-3"> </div>

            <img src={Moon} id="gsap-mtm-moon"></img>
            <img src={Star} id="gsap-mtm-shooting-star"></img>
            <img src={Star} id="gsap-mtm-shooting-star-2"></img>

            <img src={Astro} id="gsap-mtm-astro"></img>




            <h1 id="gsap-mtm-title">MISSION to<span id='mtm-red'> MARS</span></h1>
    </div>  
        </>
    )
}