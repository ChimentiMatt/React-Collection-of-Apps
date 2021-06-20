import React, { useState, useRef, useEffect} from 'react'

export default function SpeedTyperPage() {

    const [num, setNum] = useState(10);
    const [start, setStart] = useState(false);
    let intervalRef = useRef();
    const [randomWord, setRandomWord] = useState()
    const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * (100 - 0)) + 1)
    const [text, setText] = useState('')
    const [score, setScore] = useState(0)
    // const [seconds, setSeconds] = useState(60)

    const [ words, setWords] = useState (
        ["the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part"]
        )
    const [ displayWord, setDisplayWord] = useState('')
    const decreaseNum = () => setNum((prev) => prev - 1);
  
    // useEffect(() => {
    //     if (num === 0){
    //         setDisplayWord('')
    //         clearInterval(intervalRef.current);
    //         // document.getElementById('st-text').disabled = true
    //         document.getElementById('st-ending-text').innerHTML = `${score  /5} words per minute`
    //         document.getElementById('st-start-btn').style.visibility = 'visible'
    //     }
    // });
    
    const Start = () => {
      if (!start) {
          setScore(0)

          intervalRef.current = setInterval(decreaseNum, 1000);
          
          document.getElementById('st-start-btn').innerHTML = 'New Game'
          document.getElementById('st-text').disabled = false
          setRandomIndex(Math.floor(Math.random() * (100 - 0 )) + 1)
          RandomIndex() 

        //   document.getElementById('st-start-btn').style.visibility = 'hidden'

        } else {
        setNum(10)
          clearInterval(intervalRef.current);
          intervalRef.current = setInterval(decreaseNum, 1000);
          setRandomIndex(Math.floor(Math.random() * (100 - 0 )) + 1)
          RandomIndex() 
      }
      setStart((prev) => !prev);
    };



    function Submit(evt) {
        evt.preventDefault()
        console.log(text)
        if (text === document.getElementById('st-word').innerText){
            setText('')
            setRandomIndex(Math.floor(Math.random() * (100 - 0 )) + 1)
            if (num === 0){
             
            }
            else {
                setScore( score + 5)
                setRandomIndex(Math.floor(Math.random() * (100 - 0 )) + 1)
                RandomIndex() 
            }
        }
    }

    function RandomIndex() {
        return(
            setDisplayWord(words[randomIndex])
        )
    }
    function PlayAgain(){
        setDisplayWord(words[randomIndex])
    }

    return(
        <>
        <div className="typer-Page">
            <h1>Speed Test</h1>
            <p id="st-time">Time Remaining: {num}s</p>
            <p>Score: {score}</p>
            <br></br>
            <p>Type the following</p>
            <p id="st-word">{displayWord}</p>
            <form onSubmit={Submit}>
                <input 
                id="st-text" 
                type='text'
                value={text}
                disabled
                onChange={e => setText(e.target.value)}
                ></input>
            </form>
            <p id="st-ending-text"></p>


<button id="st-start-btn" onClick={() => Start() }>Start</button>
<button id="" onClick={() => PlayAgain() }>Play Again?</button>

<br></br>
        </div>
        </>
    )
}



