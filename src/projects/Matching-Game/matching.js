import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

import Doge from "./img/doge.jpg";
import Phil from "./img/Philosoraptor.jpg";
import Sb from "./img/sb.jpg";
import Sp from "./img/sp.jpg";
import Spidy from "./img/spidy.jpg";
import Wyac from "./img/wyac.jpg";
import Kermit from "./img/kermit.jpg";
import CardBack from "./img/boc2-transp.png";

export default function Gameboard() {
  const [card1, setCard1] = useState("");

  const [selected, setSelected] = useState();
  const [cardCount, setCardCount] = useState([])

  const [cat, setCat] = useState('meow')

  const [counter, setCounter] = useState(0)

  const [toggleState, setToggleState] = useState(true)
  const [toggleState2, setToggleState2] = useState(true)

  const [cards, setCards] = useState([
    {
      id: 0,
      image: Doge,
      name: "doge",
      backOc: CardBack
    },
    {
      id: 1,
      image: Doge,
      name: "doge",
      backOc: CardBack
    },
    {
      id: 2,
      image: Sb,
      name: "sb",
      backOc: CardBack
    },
    {
      id: 3,
      image: Sb,
      name: "sb",
      backOc: CardBack
    },
    {
      id: 4,
      image: Sp,
      name: "sp",
      backOc: CardBack
    },
    {
      id: 5,
      image: Sp,
      name: "sp",
      backOc: CardBack
    },
    {
      id: 6,
      image: Spidy,
      name: "spidy",
      backOc: CardBack
    },
    {
      id: 7,
      image: Spidy,
      name: "spidy",
      backOc: CardBack
    },
    {
      id: 8,
      image: Wyac,
      name: "wyac",
      backOc: CardBack
    },
    {
      id: 9,
      image: Wyac,
      name: "wyac",
      backOc: CardBack
    },
    {
      id: 10,
      image: Kermit,
      name: "kermit",
      backOc: CardBack
    },
    {
      id: 11,
      image: Kermit,
      name: "kermit",
      backOc: CardBack
    },
  ]);


// useEffect(() => {
//     if (card1 === card2) {
//       alert("match on odd");
//     }
//   }, [card2]);


// function CheckForMatch() {

//     alert("match on odd");
//     setCard1('')
//     setCard2('m')
//     setCounter(0)
//     setCat('cat')

// }






  function CheckCard(card, index) {

    setToggleState(!toggleState)
    setCounter(counter +1)

    cards.forEach((thisCard, thisIndex) => {
      if (thisIndex === index  ) {
        thisCard.backOc = thisCard.image
        setCounter(counter +1)
        if (counter === 0){
          console.log('sdfsd')
          setCard1(thisCard.name)
        }
        else{
          if (card1 === thisCard.name){
            alert('match')
          }
        }
      }
    })
  }
  return (
    <>
      <div>
        <h1 id="mg-title">Matching Memes</h1>
        <p id="mg-score">Score</p>
      </div>
      <div id="mg-board">
        <div class="grid-container">
        
            {/* <img className="grid-item" src={cards[Math.floor(Math.random() * cards.length)].image}></img> */}

           {cards.map((card, index) => {
            return (
            <img
              onClick={() => CheckCard(card, index)}

              className="grid-item"
              id="mg-front"
              key={card.id}
              alt={'card'}
              src={card.backOc}
            />
          )})} 
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
