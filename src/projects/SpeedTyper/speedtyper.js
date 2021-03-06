import React, { useState, useRef, useEffect } from "react";

export default function SpeedTyper() {
  let intervalRef = useRef();
  const [num, setNum] = useState(60);
  const [start, setStart] = useState(false);
  const [randomWord, setRandomWord] = useState();
  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * (100 - 0)) + 1
  );
  const [text, setText] = useState("");
  const [score, setScore] = useState(0);
  // const [seconds, setSeconds] = useState(60)

  const [wrongWord, setWrongWord] = useState([

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

  useEffect(() => {
    if (num === 0) {
      setDisplayWord("");
      clearInterval(intervalRef.current);
      // document.getElementById('st-text').disabled = true
      document.getElementById("st-ending-text").innerHTML = `${
        score / 5
      } words per minute`;
      document.getElementById("st-start-btn").style.visibility = "visible";
    }
  });

  const Start = () => {

    if (!start) {
      setScore(0);
 
      intervalRef.current = setInterval(decreaseNum, 1000);

      document.getElementById("st-text").disabled = false;
      document.getElementById("st-start-btn").style.visibility = "hidden";

      setRandomIndex(Math.floor(Math.random() * (100 - 0)) + 1);
      RandomIndex();

      //   document.getElementById('st-start-btn').style.visibility = 'hidden'
    } else {
      setNum(60);
      setScore(0);
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(decreaseNum, 1000);
      setRandomIndex(Math.floor(Math.random() * (100 - 0)) + 1);
      RandomIndex();
    }
    setStart((prev) => !prev);
  };

  function Submit(evt) {
    evt.preventDefault();
    console.log(text);
    if (text === document.getElementById("st-word").innerText) {
      setText("");
      setRandomIndex(Math.floor(Math.random() * (100 - 0)) + 1);
      if (num === 0) {
      } else {
        setScore(score + 5);
        setText("");
        setRandomIndex(Math.floor(Math.random() * (100 - 0)) + 1);
        RandomIndex();
        document.getElementById("st-text").style.background = "white";
      }
    } else {
      document.getElementById("st-text").style.background =
        "rgb(253, 161, 161)";
        console.log("this one 1")

        // const handleWord = (index, text) => {
        //     const newWord = [...wrongWord]
        //     newWord.push(text)
        //     setWrongWord(newWord)
        // }
        // handleWord()
        // console.log(wrongWord)
        setWrongWord(wrongWord => [...wrongWord, text])
        console.log(wrongWord)
        
    }
  }

  function RandomIndex() {
    return setDisplayWord(words[randomIndex]);
  }
  function PlayAgain() {
    setDisplayWord(words[randomIndex]);
  }

  return (
    <div className="typer-Page">
      <div className="st-container">
        <div className="st-box">
          <div id="st-tile-and-time">
          <h1 id="st-title">SpeedTyper</h1>
          <p id="st-time">Time Remaining: {num}s</p>
          </div>
          <p id="st-score">Score: {score}</p>
          <p id="st-ending-text"></p>

          <p id="st-instruction">Type the following</p>
          <p id="st-word">{displayWord}</p>
          <form onSubmit={Submit}>
            <input
              id="st-text"
              type="text"
              value={text}
              disabled
              onChange={(e) => setText(e.target.value)}
            ></input>
          </form>
          <button id="st-start-btn" onClick={() => Start()}>
            START
          </button>
          {/* <button id="" onClick={() => PlayAgain() }>Play Again?</button> */}
        </div>
      </div>
    </div>
  );
}
