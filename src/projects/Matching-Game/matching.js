import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

import Doge from "./img/doge.jpg";
import Phil from "./img/Philosoraptor.jpg";
import Sb from "./img/sb.jpg";
import Sp from "./img/sp.jpg";
import Spidy from "./img/spidy.jpg";
import Wyac from "./img/wyac.jpg";
import Kermit from "./img/kermit.jpg";

export default function Gameboard() {
    const [card1, setCard1] = useState('N')
    const [card2, setCard2] = useState('')
    const [counter, setCoutner] = useState(1)

    function Matching(cardName) {
        // console.log(cardName, 'Set Card Name')
        setCoutner(counter +1)
        console.log(counter, 'counter')

        if (counter % 2 === 0 ){
            const promise1 = Promise((resolve, reject) => {
                resolve(setCard2(cardName))
            });
            promise1.then(() => {
            if (card1 === card2){
                console.log('match')
                alert('match')
            }
        })}
        else if (counter % 2 !== 0 ){
            const promise1 = Promise((resolve, reject) => {
                resolve(setCard2(cardName))
            });   
            promise1.then(() => {
            if (card1 === card2){
                console.log('match')
                alert('match')
            }
        })}

    }

  const cards = [
    {
      id: 1,
      image: Doge,
      name: 'doge'
    },
    {
      id: 2,
      image: Doge,
      name: 'doge'
    },
    {
      id: 3,
      image: Sb,
      name: 'sb'
    },
    {
      id: 4,
      image: Sb,
      name: 'sb'
    },
    {
      id: 5,
      image: Sp,
      name: 'sp'
    },
    {
      id: 6,
      image: Sp,
      name: 'sp'
    },
    {
      id: 7,
      image: Spidy,
      name: 'spidy',
    },
    {
      id: 8,
      image: Spidy,
      name: 'spidy',    
    },
    {
      id: 9,
      image: Wyac,
      name: 'wyac',   
    },
    {
      id: 10,
      image: Wyac,
      name: 'wyac',  
    },
    {
      id: 11,
      image: Kermit,
      name: 'kermit'
    },
    {
      id: 12,
      image: Kermit,
      name: 'kermit'
    },
  ];
  return (
    <>
      <div>
        <h1 id="mg-title">Matching Memes</h1>
        <p id="mg-score">Score</p>
      </div>
      <div id="mg-board">
        <div class="grid-container">

          {cards.map((card) => (



            <img
              onClick={() => {
                //   console.log("card", card.id, "clicked"); 
                //   setCardName(card.name) 
                    Matching(card.name)
                }}
              className="grid-item"
              id="mg-front"
              key={card.id}
              src={card.image}
              />

          ))}
        </div>
      </div>
    </>
  );
}
