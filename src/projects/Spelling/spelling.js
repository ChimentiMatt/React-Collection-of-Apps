import React, { useState, useRef, useEffect } from "react";
import { useSpeechSynthesis } from 'react-speech-kit';

export default function Spelling() {
  const [value, setValue] = useState('');
  const { speak } = useSpeechSynthesis();
  let counter = 0
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

    "advantage",
    "admission",
    'advertising',
    'agency',
    'agenda',
    'analyst',
    'anticipate',
    'audience',
    'awareness',

    'barrier',
    'beautiful',
    'benefit',
    'billion',
    'breathe',
    'burden',
    'business',

    'capability',
    'capture',
    'carrier',
    'ceiling',
    'ceremony',
    'championship',
    'characteristic',
    'characterize',
    'chocolate',
    'circumstance',
    'cognitive',
    'communicate',
    'congressional',
    'correspondent',

    'decision',
    'decrease',
    'defendant',
    'democracy',
    'demonstrate',
    'deserve',
    'dialogue',
    'dimension',
    'dismiss',
    'distribution',

    'economic',
    'effectively',
    'elementary',
    'emphasis',
    'enforcement',
    'environment',
    'extraordinary',

    'facility',
    'familiar',
    'fellow',
    'formation',
    'fundamental',
    'furthermore',

    'generally',
    'government',
    'guarantee',
    'guideline',

    'headquarters',
    'helicopter',
    'hypothesis',

    'identification',
    'illustrate',
    'incentive',
    'independence',
    'institutional',
    'intervention',
    'involvement',

    'journalist',
    'judgment',

    'knowledge',

    'language',
    'legacy',
    'legitimate',
    'legislation',
    'literature',

    'magazine',
    'management',
    'manufacturing',
    'marriage',
    'measurement',
    'mixture',
    'mortgage',

    'necessarily',
    'neighborhood',
    'nevertheless',
    'occasionally',
    'orientation',
    
    'participation',
    'perception',
    'phenomenon',
    'phrase',
    'prescription',

    'quarterback',

    'recommendation',
    'regardless',
    'representative',
    'reservation',
    'responsible',

    'satisfaction',
    'scholarship',
    'secretary',
    'significantly',
    'sophisticated',

    'technology',
    'testimony',
    'tournament',
    'tremendous',

    'unfortunately',
    'unusual',

    'vegetable',
    'vulnerable',

    'wisdom',
    'whisper',

    'xylophone',

    'yearning',
    'yielding',

    'zeal',
    'zealous',
    'zestful'














































































    
  ]);
  const [displayWord, setDisplayWord] = useState("");
  const decreaseNum = () => setNum((prev) => prev - 1);

  const Start = () => {
    if (!start) {
      document.getElementById('sp-start-btn').innerHTML = "New Word"
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
    <>
    <div className="spelling-page">
      <div className="sp-container">
        <div className="sp-box">
          <h1 id="sp-title">Spelling Assist</h1>

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
            Start
          </button>
          {/* <button id="" onClick={() => PlayAgain() }>Play Again?</button> */}
          <p>{spellingList[0].typo}</p>
          <div>
            {/* <textarea
              value={value}
              onChange={(event) => setValue(event.target.value)}
            /> */}
            <button id="sp-speak" onClick={() => speak({ text: displayWord })}>Speak</button>
          </div>
        </div>
      </div>
      <div id="missed-Container">
  
        {spellingList.map(item => {
          
          if (counter > 0){

          return (
            <div id="typoWordDisplay">
              <p id="spelling-ul" >
                Typo: {item.typo} 
              </p>
              <p id="spelling-ul" >
                Word: {item.word} 
              </p>
            </div>
          )
        }
          else{
            counter += 1
          }
          
        })}
   
        </div>
    </div>
      </>
  );
}
