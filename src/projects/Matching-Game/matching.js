import React, { useState, useEffect } from 'react'


import Doge from './img/doge.jpg'
import Phil from './img/Philosoraptor.jpg'
import Sb from './img/sb.jpg'
import Sp from './img/sp.jpg'
import Spidy from './img/spidy.jpg'
import Wyac from './img/wyac.jpg'
import Kermit from './img/kermit.jpg'

export default function Gameboard() {
    const [cards, setCards] = useState([ 
    {
        id: 1,
        img: ''
    },   
    {
        id: 2,
        img: ''
    },   
    {
        id: 3,
        img: ''
    },   
    {
        id: 4,
        img: ''
    },   
    {
        id: 5,
        img: ''
    },   
    {
        id: 6,
        img: ''
    },           
        
    ])
    return(
        <div id="mg-board">
            <h1>Matching Memes</h1>
            <div id='card1Container'>
                <img id='card1Img' src={Doge}></img>
            </div>
            {/* <img src={}></img>
            <img src={}></img>
            <img src={}></img>
            <img src={}></img> */}
        </div>
    )
}