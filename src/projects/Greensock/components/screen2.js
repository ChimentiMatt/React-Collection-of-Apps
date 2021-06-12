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
import Astroid from '../astroid.png'
import Flare from '../flare.png'
import Meteor from '../meteor.png'
import RedBtn from '../red-button.png'


import Ocean from '../ocean-long.jpg'
import EFlames from '../earth-flames-trans.png'


export default function Screen2() {

    useEffect(() => {
        InherentAni()
    })


    function InherentAni() { 
        //Inherent animations
        var tlo = gsap.timeline({ repeat: -1})
        tlo.to('#gsap-mtm-ocean', { delay: 0, duration: 30, x: 550, ease: 'none'})

        }


    function MissionToMars() {

        var tl = gsap.timeline({})
        tl.to('.gsap-p2-text1', {duration: 1, opacity: .9, ease: 'power1'})
        tl.to('.gsap-p2-text1', {duration: 0, opacity: 0, ease: 'power1'})
        tl.to('.gsap-p2-text2', {duration: 1, delay:1, opacity: .9, ease: 'none'})
        tl.to('.gsap-p2-text2', {duration: 0, opacity: 0, ease: 'none'})
        tl.to('.gsap-p2-text3', {duration: 1, delay:1, opacity: .9, ease: 'none'})
        tl.to('.gsap-p2-text3', {duration: 0, opacity: 0, ease: 'none'})
        tl.to('.gsap-p2-text4', {duration: 1, delay:1, opacity: .9, ease: 'none'})
        tl.to('.gsap-p2-text4', {duration: 0, opacity: 0, ease: 'none'})

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




        tl.to('#gsap-flame', {opacity: 1})

        tl.set('#gsap-ship, #gsap-flame', {})
        tl.to('#gsap-ship', {duration: .2, rotate: 2, ease: 'none'})
        tl.to('#gsap-ship', {duration: .2, rotate: -2, ease: 'none'})
        tl.to('#gsap-ship', {duration: .2, rotate: 0, ease: 'none'})
        tl.to('#gsap-ship, #gsap-flame', {duration: 6})

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

        // tl.to('#gsap-ship', {duration: 12, x: -150, y: -350})

        // tl.to('#gsap-ship', { duration: .2, rotation: 45})




        // delayed animations -------------


        gsap.to('#gsap-ship, #gsap-flame', {delay: 10,duration: 10, y: -100, ease: 'none'})

        gsap.to('#gsap-ship, #gsap-flame', {delay: 20, duration: 5, y: -300, ease: 'none'})



        gsap.to('#gsap-mtm-title', { duration: 8, opacity: 0 ,ease: 'none'})

        // gsap.to('#gsap-mtm-back', { delay: 13, y: 400, ease: 'none'})


        gsap.to('#gsap-p2-btn', {duration: 1, opacity: 0})
        gsap.to('#gsap-liftoff-container', {duration: 1, opacity: 0})


        gsap.to('#gsap-mtm-meteor', { delay: 3.5, opacity: 1 })
        gsap.to('#gsap-mtm-meteor', { delay: 3.5, duration: 9, height: 500, x: -2000, y: 800, ease: 'slow'})
        gsap.to('#gsap-mtm-meteor', { delay: 13.5, opacity: 0 })


        gsap.to('#gsap-mrm-flash', { delay: 9.5, opacity: 1 })
        gsap.to('#gsap-mrm-flash', { delay: 9.9, opacity: 0 })
        gsap.to('#gsap-mrm-redgrowth', {delay: 10, opacity: .3})

        gsap.to('#gsap-mrm-redgrowth', {delay: 21, duration: 16, opacity: 0})
        gsap.to('#gsap-mtm-eflames', {delay: 10, duration: 15, opacity: 1, y:-580})
        gsap.to('#gsap-mtm-eflames', {delay: 25, duration: 9, y: 300})

        gsap.to('#gsap-mtm-earth-3, #gsap-mtm-earth-2, #gsap-mtm-earth-1, #gsap-mtm-ocean', {delay: 13, duration: 13, y: 1300, ease: 'none'})
        // gsap.to('#gsap-mtm-cloud2', {delay: 13, duration: 20, y: 1100, ease: 'none'})
        
        gsap.to('#gsap-mtm-cloud1', {delay: 10, duration: 6, y: -500, x: -900, rotation: -55, ease: 'slow'})
        gsap.to('#gsap-mtm-cloud2', {delay: 10, duration: 8, y: -200, x: 900, rotation: 35, ease: 'slow'})

        gsap.to('#gsap-mtm-cloud3', {delay: 16, opacity: 1, ease: 'none'})
        gsap.to('#gsap-mtm-cloud3', {delay: 17, duration: 5, rotation: -30, y: 2500, x: -600, ease: 'none'})


        gsap.to('#gsap-mtm-cloud4', {delay: 15, opacity: 1, ease: 'none'})
        gsap.to('#gsap-mtm-cloud4', {delay: 16, duration: 5, rotation: 30, y: 2300, x: 1100, ease: 'none'})


        // flare section
        gsap.to('#gsap-mtm-flare6, #gsap-mtm-flare7, #gsap-mtm-flare8', {delay: 16, duration: 10, x:-1000, y: 1000, opacity: 1, ease: 'none'})
        gsap.to('#gsap-mtm-flare, #gsap-mtm-flare2, #gsap-mtm-flare3', {delay: 20, duration: 9, x:-1000, y: 1000, opacity: 1, ease: 'none'})
        gsap.to('#gsap-mtm-flare4, #gsap-mtm-flare5', {delay: 12, duration: 10, x:-1000, y: 1000, opacity: 1, ease: 'none'})






        gsap.to('.gsap-page2', { delay: 23, duration: 3, background: 'black', ease: 'none'})

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


        gsap.to('#gsap-ship', {delay: 27, duration: 3, rotation: 90})

        gsap.to('#gsap-mtm-moon', {delay: 30 , duration: 15, opacity: 1,  ease: 'none'})
        gsap.to('#gsap-mtm-moon', {delay: 27 , duration: 4, height: 200, x: -100, y: 120, ease: 'none'})
        gsap.to('#gsap-mtm-moon', {delay: 29 , duration: 8, height: 500,x: -200, ease: 'none'})
        gsap.to('#gsap-flame', {delay: 26.5, opacity: 0})

        gsap.to('#gsap-mtm-moon', {delay: 35 , duration: 15, x: -2050, ease: 'none'})
        // gsap.to('#gsap-mtm-moon', {delay: 69 , duration: 20, height: 200, ease: 'none'})


        // gsap.to('#gsap-ship', {delay: 32, duration: 3, y: -300})
        gsap.to('#gsap-ship', {delay: 36, duration: 6, x: 300, height: 10})
        gsap.to('#gsap-ship', {delay: 43, duration: 5.5, height: 200, x: 350 })
        
        
        gsap.to('#gsap-ship', {delay: 49, duration: 5, y:50, x: 200, height: 1100})
        
        gsap.to('#gsap-mtm-astro', {delay: 54.5, duration: 1, opacity: 1})
        
        

        gsap.to('#gsap-mtm-astroid2', {delay: 54, opacity: 1})
        gsap.to('#gsap-mtm-astroid2', {delay: 55, duration: 16, x: -3100, y: 800,rotation: 180})


        gsap.to('#gsap-mtm-astroid', {delay: 57, opacity: 1})
        gsap.to('#gsap-mtm-astroid', {delay: 58, duration: 16, x: -3100,rotation: 100})
        



        gsap.to('#gsap-mtm-astro', {delay: 68, duration: 1, opacity: 0})
        gsap.to('#gsap-ship', {delay: 70, duration: 6, y:-350, x: 200, height: 200})

        // gsap.to('#gsap-ship', {delay: 65, duration: 4, height:50})
        // gsap.to('#gsap-ship', {delay: 71, duration: 3, height:200})
        // gsap.to('#gsap-ship', {delay: 75, duration: 30, x: -150})


        gsap.to('#gsap-mtm-moon', {delay: 25,  duration: 5, opacity: 1,  ease: 'none'})



        

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


            <button 
            onClick={() => MissionToMars()} id="gsap-p2-btn">LIFTOFF</button>


{/* <img id="gsap-mtm-redbtn" src={RedBtn}></img> */}


            <div id="gsap-liftoff-container"> </div>
            <div id="gsap-mtm-earth-1"> </div>
            <div id="gsap-mtm-earth-2"> </div>
            <div id="gsap-mtm-earth-3"> </div>

            <img src={Moon} id="gsap-mtm-moon"></img>
            <img src={Star} id="gsap-mtm-shooting-star"></img>
            <img src={Star} id="gsap-mtm-shooting-star-2"></img>

            <img src={Astro} id="gsap-mtm-astro"></img>

            <img src={Astroid} id="gsap-mtm-astroid"></img>
            <img src={Astroid} id="gsap-mtm-astroid2"></img>

            <img src={Flare} id="gsap-mtm-flare"></img>
            <img src={Flare} id="gsap-mtm-flare2"></img>
            <img src={Flare} id="gsap-mtm-flare3"></img>

            <img src={Flare} id="gsap-mtm-flare4"></img>
            <img src={Flare} id="gsap-mtm-flare5"></img>
            

            <img src={Flare} id="gsap-mtm-flare6"></img>
            <img src={Flare} id="gsap-mtm-flare7"></img>
            <img src={Flare} id="gsap-mtm-flare8"></img>

            <img src={Meteor} id="gsap-mtm-meteor"></img>
            <div id="gsap-mrm-flash">cats</div>
            <div id="gsap-mrm-redgrowth">red</div>

            <img id="gsap-mtm-ocean" src={Ocean}></img>

            <img id="gsap-mtm-eflames" src={EFlames}></img>
            {/* <img id="gsap-mtm-eflames2" src={EFlames}></img> */}

            <h1 id="gsap-mtm-title">MISSION TO <span id='mtm-red'>MARS</span></h1>
    </div>  
        </>
    )
}