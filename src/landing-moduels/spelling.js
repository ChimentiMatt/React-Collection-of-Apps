import React, { useEffect, useState } from 'react'
import gsap from 'gsap/gsap-core';

import { useSpeechSynthesis } from 'react-speech-kit';

import Header from './header';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function SpellerLanding() {
  const { speak } = useSpeechSynthesis();
  const [word, setWord] = useState('onomatopoeia')
  const [wrongWord, setWrongWord] = useState('')

  function showSubmit() {
    document.getElementById('landingSpellBtn').style.opacity = 1
    document.getElementById('landingSpellBtn').style.pointerEvents = 'auto'
  }

  function submitFunc() {
    console.log('test')
    let inputText = document.getElementById('inputText').value
    console.log(inputText)
    if (inputText === 'onomatopoeia'){
      console.log(' word check')
    }
    else if (inputText === ''){
      
    }
    else{
      setWrongWord(inputText)
      document.getElementById('spLandingAnswer').style.opacity = 1
    }
  }

  useEffect(() => {
    var tl = gsap.timeline({})
    tl.to('#spellingTitle', {duration:1, opacity:1})
    tl.to('#spellingText', {duration:1, opacity: 1})
    tl.to('#spellingDemo', {duration: 1, opacity: 1})
    tl.to('#spellingLink', {duration: 1, opacity: 1})

  })
    return(
      
      <>
      <Header />
          <div id="landingSpeedTyper">
              <p id="spellingTitle">Spelling Assist</p>

              <p id="spellingText">Listen to the word and then try to spell it. If you are incorrect, Spelling Assist will display your spelling as well as the correct spelling to help you learn. Try the demo below.</p>

    

             <div id='spellingDemo'>
                <p id="staticDemo">(Static Demo)</p>
                <p id="enterWordBelow">Enter the word that you hear below</p>
                <br></br>
                <input id="inputText" ></input>            
                <button id="landingSpellBtn" type="submit" onClick={() => submitFunc() }>Submit</button>
                <br></br>
                <button id="sp-speak-landing" onClick={() => speak({text: word}, showSubmit()  )}>Hear Word</button>
    
                <br></br>
             

                <div id="spLandingAnswer">
                  <p >Typo: {wrongWord}</p><p> Word: onomatopoeia </p>
                </div>
  
              </div>
                <Router forceRefresh>
                  <NavLink id="spellingLink" to="/spelling">
                    Visit Page
                  </NavLink>
                </Router>
        </div>
      </>
    )
}