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
  const [card1Id, setCard1Id] = useState(0);

  const [card2, setCard2] = useState("");
  const [card2Id, setCard2Id] = useState(0);



  const [counter, setCounter] = useState(0);

  const [toggleState, setToggleState] = useState(true);
  const [toggleState2, setToggleState2] = useState(true);

  const [cards, setCards] = useState([
    {
      id: 0,
      image: Doge,
      name: "doge",
      backOc: CardBack,
      matched: false
    },
    {
      id: 1,
      image: Doge,
      name: "doge",
      backOc: CardBack,
      matched: false
    },
    {
      id: 2,
      image: Sb,
      name: "sb",
      backOc: CardBack,
      matched: false
    },
    {
      id: 3,
      image: Sb,
      name: "sb",
      backOc: CardBack,
      matched: false
    },
    {
      id: 4,
      image: Sp,
      name: "sp",
      backOc: CardBack,
      matched: false
    },
    {
      id: 5,
      image: Sp,
      name: "sp",
      backOc: CardBack,
      matched: false
    },
    {
      id: 6,
      image: Spidy,
      name: "spidy",
      backOc: CardBack,
      matched: false
    },
    {
      id: 7,
      image: Spidy,
      name: "spidy",
      backOc: CardBack,
      matched: false
    },
    {
      id: 8,
      image: Wyac,
      name: "wyac",
      backOc: CardBack,
      matched: false
    },
    {
      id: 9,
      image: Wyac,
      name: "wyac",
      backOc: CardBack,
      matched: false
    },
    {
      id: 10,
      image: Kermit,
      name: "kermit",
      backOc: CardBack,
      matched: false
    },
    {
      id: 11,
      image: Kermit,
      name: "kermit",
      backOc: CardBack,
      matched: false
    },
  ]);





  // function CheckForMatch() {

  //     alert("match on odd");
  //     setCard1('')
  //     setCard2('m')
  //     setCounter(0)
  //     setCat('cat')

  // }

  function CheckCard(card, index) {
    setToggleState(!toggleState);
    
    cards.forEach((thisCard, thisIndex) => {

      if (thisIndex === index) {
        thisCard.backOc = thisCard.image;
        
        if (counter === 0) {
          setCard1(thisCard.name);
          setCard1Id(thisIndex);
          setCounter(counter + 1);

        } 
        
        else if (counter === 1) {
          console.log('cats poop')
          setCard2(thisCard.name)
          setCard2Id(thisIndex)
          

          if (card1 === thisCard.name) {
            alert("match")
            setCounter(0)
            cards[card1Id].matched = true;
            cards[thisIndex].matched = true;
            // card1.matched = true
            // card2.matched = true
            // setCard2('')
            // setCard1('')
          } 
          else {
            console.log("Else Statement")
            cards[card1Id].matched = false;
            cards[thisIndex].matched = false;
            setCounter(0)
            setToggleState(!toggleState);
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
              card.matched ? (

              <img
                onClick={() => CheckCard(card, index)}
                className="grid-item"
                id="mg-front"
                key={card.id}
                alt={"card"}
                src={card.image}
              />
              ) : 
              <img
                onClick={() => CheckCard(card, index)}
                className="grid-item"
                id="mg-front"
                key={card.id}
                alt={"card"}
                src={card.backOc}
              />
            )
          })}
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
