import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

import Doge from "./img/doge.jpg";
import Phil from "./img/Philosoraptor.jpg";
import Sb from "./img/sb.jpg";
import Sp from "./img/sp.jpg";
import Spidy from "./img/spidy.jpg";
import Wyac from "./img/wyac.jpg";
import Kermit from "./img/kermit.jpg";
import BackOC from "./img/boc.png"

export default function Gameboard() {
  const [card1, setCard1] = useState("N");
  const [card2, setCard2] = useState("");

  const [selected, setSelected] = useState()

  let twoCards = []


    function CheckCard(card, cardName, CardId, CardImg) {

        cards.image = 'fred'
        
        // CardImg = "./img/boc.png"
        console.log(cards.name)
        twoCards.push(cardName)
        // console.log(twoCards)
        if (twoCards.length === 2){
            // console.log('===2')

            if (twoCards[0] === twoCards[1]){
                alert('match')
                
                twoCards = []

            } else {
                twoCards = []
            }
        }
    }


  let cards = [
    {
      id: 0,
      image: Doge,
      name: "doge",
    },
    {
      id: 1,
      image: Doge,
      name: "doge",
    },
    {
      id: 2,
      image: Sb,
      name: "sb",
    },
    {
      id: 3,
      image: Sb,
      name: "sb",
    },
    {
      id: 4,
      image: Sp,
      name: "sp",
    },
    {
      id: 5,
      image: Sp,
      name: "sp",
    },
    {
      id: 6,
      image: Spidy,
      name: "spidy",
    },
    {
      id: 7,
      image: Spidy,
      name: "spidy",
    },
    {
      id: 8,
      image: Wyac,
      name: "wyac",
    },
    {
      id: 9,
      image: Wyac,
      name: "wyac",
    },
    {
      id: 10,
      image: Kermit,
      name: "kermit",
    },
    {
      id: 11,
      image: Kermit,
      name: "kermit",
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
                CheckCard(card, card.name, card.id, card.image)
              }}
              style={{backgroundColor: selected}} 
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



// useEffect(() => {
//     if (card1 === card2) {
//       alert("match on odd");
//     }
//   }, [card1]);

//   useEffect(() => {
//     if (card1 === card2) {
//       alert("match on even");
//     }
//   }, [card2]);

//   function CardMatch(cardName, cardId) {
//     if (cardId % 2 === 0) {
//       //even

//       setCard1(cardName);
//       console.log(card1, "card 1", "card id:", cardId);
//     } else {
//       setCard2(cardName, cardId);
//       console.log(card2, "card 2", "card id:", cardId);
//     }
//   }
