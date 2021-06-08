import React, {useState, useEffect} from 'react'
import img from "./greensockimg.png"
import gsap from "gsap";

export default function Greensock() {
    function Animate() {

        gsap.to(".gsap-logo", {duration: 2, x: 300})
    }
    return(
        <>
        <div id="gsap-demo">
            <button onClick={() => Animate()}></button>
            <img className="gsap-logo" src={img} ></img>
        </div>

        </>
    )
}