import React, { useState, useRef, useEffect } from "react";
import { useSpeechSynthesis } from 'react-speech-kit';

export default function Spelling() {
  const [value, setValue] = useState('');
  const { speak } = useSpeechSynthesis();

  let intervalRef = useRef();
  const [num, setNum] = useState(60);
  const [start, setStart] = useState(false);
  const [randomWord, setRandomWord] = useState();
  const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * (100 - 0)) + 1);
  const [text, setText] = useState("");
  const [score, setScore] = useState(0);
  // const [seconds, setSeconds] = useState(60)
  const [spellingList, setSpellingList] = useState([
    {
      typo: '',
      word: '',
    }
  ])

  const [words, setWords] = useState([
    "the",
    "of",
    "and",
    "a",
    "to",
    "in",
    "is",
    "you",
    "that",
    "it",
    "he",
    "was",
    "for",
    "on",
    "are",
    "as",
    "with",
    "his",
    "they",
    "I",
    "at",
    "be",
    "this",
    "have",
    "from",
    "or",
    "one",
    "had",
    "by",
    "word",
    "but",
    "not",
    "what",
    "all",
    "were",
    "we",
    "when",
    "your",
    "can",
    "said",
    "there",
    "use",
    "an",
    "each",
    "which",
    "she",
    "do",
    "how",
    "their",
    "if",
    "will",
    "up",
    "other",
    "about",
    "out",
    "many",
    "then",
    "them",
    "these",
    "so",
    "some",
    "her",
    "would",
    "make",
    "like",
    "him",
    "into",
    "time",
    "has",
    "look",
    "two",
    "more",
    "write",
    "go",
    "see",
    "number",
    "no",
    "way",
    "could",
    "people",
    "my",
    "than",
    "first",
    "water",
    "been",
    "call",
    "who",
    "oil",
    "its",
    "now",
    "find",
    "long",
    "down",
    "day",
    "did",
    "get",
    "come",
    "made",
    "may",
    "part",
  ]);
  const [displayWord, setDisplayWord] = useState("");
  const decreaseNum = () => setNum((prev) => prev - 1);

  const Start = () => {
    if (!start) {
      setRandomIndex(Math.floor(Math.random() * (100 - 0)) + 1);
      RandomIndex();

      
      document.getElementById("sp-text").disabled = false;
    } else {


      setRandomIndex(Math.floor(Math.random() * (100 - 0)) + 1);
      RandomIndex();
    }
    setStart((prev) => !prev);
  };

  function Submit(evt) {
    evt.preventDefault();
    console.log(text);
    if (text === document.getElementById("sp-word").innerText) {
      setText("");
      setRandomIndex(Math.floor(Math.random() * (100 - 0)) + 1);
      if (num === 0) {
      } else {
        setScore(score + 5);
        setText("");
        setRandomIndex(Math.floor(Math.random() * (100 - 0)) + 1);
        RandomIndex();
        document.getElementById("sp-text").style.background = "white";
      }
    } else {
      document.getElementById("sp-text").style.background =
        "rgb(253, 161, 161)";
        console.log("this one 1")

        setSpellingList([
          ...spellingList, 
          {
            typo: text,
            word: displayWord,
          }
        ])
        console.log(spellingList)
        
    }
  }

  function RandomIndex() {
    return setDisplayWord(words[randomIndex]);
  }


  return (
    <div className="spelling-page">
      <div className="sp-container">
        <div className="sp-box">
          <h1 id="sp-title">Spelling Blaster</h1>

          <p id="sp-score">Score: {score}</p>
          <p id="sp-ending-text"></p>

          <p id="sp-instruction">Type the following</p>
          <p id="sp-word">{displayWord}</p>


          
          <form onSubmit={Submit}>
            <input
              id="sp-text"
              type="text"
              value={text}
              disabled
              onChange={(e) => setText(e.target.value)}
            ></input>
          </form>
          
          <button id="sp-start-btn" onClick={() => Start()}>
            START
          </button>
          {/* <button id="" onClick={() => PlayAgain() }>Play Again?</button> */}
          <p>{spellingList[0].typo}</p>
          <div>
            {/* <textarea
              value={value}
              onChange={(event) => setValue(event.target.value)}
            /> */}
            <button onClick={() => speak({ text: displayWord })}>Speak</button>
          </div>
        </div>
      </div>
    </div>
  );
}
