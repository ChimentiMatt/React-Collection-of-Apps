import React, { useState, useRef, useEffect} from 'react'

export default function SpeedTyperPage() {

    const [num, setNum] = useState(60);
    const [pause, setPause] = useState(false);
    
    let intervalRef = useRef();
    
    const decreaseNum = () => setNum((prev) => prev - 1);
  
    useEffect(() => {
      setPause(false);
      intervalRef.current = setInterval(decreaseNum, 1000);
  
      return () => clearInterval(intervalRef.current);
    }, []);
    
    const handleClick = () => {
      if (!pause) {
        clearInterval(intervalRef.current);
      } else {
        intervalRef.current = setInterval(decreaseNum, 1000);
      }
      setPause((prev) => !prev);
    };
    
    



    // const [randomWord, setRandomWord] = useState()
    // const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * (100 - 0)) + 1)
    // const [text, setText] = useState('')
    // const [score, setScore] = useState(0)
    // const [seconds, setSeconds] = useState(60)


    // const [ words, setWords] = useState (
    //     ["the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part"]
    //     )


    // useEffect(() => {
    //     if (seconds > 0) {
    //         setTimeout(() => setSeconds(seconds -1), 1000)
    //     } else {
    //         setSeconds('Game Over')
    //     }
    // })

    // function Start() {
    //     if (seconds > 0) {
    //         setTimeout(() => setSeconds(seconds -1), 1000)
    //     } else {
    //         setSeconds('Game Over')
    //     } 
    // }

    // function Submit(evt) {
    //     evt.preventDefault()
    //     console.log(text)
    //     if (text === document.getElementById('st-word').innerText){
    //         setScore( score + 5)
    //         setText('')
    //         setRandomIndex(Math.floor(Math.random() * (100 - 0 )) + 1)
    //         // setSeconds( seconds + 5)
    //     }
    // }


    return(
        <>
        <div className="typer-Page">
            {/* <h1>Speed Test</h1>
            <p id="st-time">Time Remaining: {seconds}s</p>
            <p>Score: {score}</p>
            <p>Type the following</p>
            <p id="st-word">{words[randomIndex]}</p>
            <button onClick={Start}>Start</button>
            <form onSubmit={Submit}>
                <input 
                id="st-text" 
                type='text'
                value={text}
                onChange={e => setText(e.target.value)}
                ></input>
            </form> */}

      <div>{num}</div>

<button onClick={(() => setNum(60))}>Reset</button>
<button onClick={handleClick}>{pause ? "Run" : "Pause"}</button>


        </div>
        </>
    )
}



