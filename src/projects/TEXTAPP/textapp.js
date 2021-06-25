import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function TextApp() {
  const [animation, setAnimation] = useState("default");
  const [animation2, setAnimation2] = useState("default");
  const [text, setText] = useState("( CLICK A BUTTON TO SEE AN EFFECT )");
  const [text2, setText2] = useState("");

  const [credit, setCredit] = useState("");

  //Some effects require further dom manipulation beyond state like Background color

  function Melt() {
    setAnimation("textapp-glow");
    setText2("");
    setAnimation2("textapp-hover-glow");
    setText("");
    let backColor = document.getElementsByClassName("textapp-body");
    backColor[0].style.backgroundColor = "rgb(244, 207, 62)";
    let show = document.getElementsByClassName("textapp-melt");
    show[0].style.visibility = "visible";
  }

  function ElegantShadow() {
    let backColor = document.getElementsByClassName("textapp-body");
    backColor[0].style.backgroundColor = "rgb(231, 229, 228)";
  }

  function DeepShadow() {
    let backColor = document.getElementsByClassName("textapp-body");
    backColor[0].style.backgroundColor = "rgb(51, 51, 51)";
  }

  function Roses() {
    let backColor = document.getElementsByClassName("textapp-body");
    backColor[0].style.backgroundColor = "rgb(213, 46, 63)";
  }

  function disableActive() {
    let hide = document.getElementsByClassName("textapp-melt");
    hide[0].style.visibility = "hidden";
    let backColor = document.getElementsByClassName("textapp-body");
    backColor[0].style.backgroundColor = "rgb(15, 20, 36)";
  }

  return (
    <>
      <div className="textapp-body">
        <div className="textapp-buttons-container">
          {/* Reflection Effect */}
          <button
            onClick={() => {
              setAnimation("textapp-reflection");
              setText("REFLECTION");
              setAnimation2("textapp-reflection");
              setText2("");
              disableActive();
            }}
          >
            REFLECTION
          </button>

          {/* Glow Effect */}
          <button
            onClick={() => {
              setAnimation2("textapp-hover-glow");
              setText2("HOVER ON ME");
              setAnimation("textapp-glow");
              setText("GLOW EFFECT");
              disableActive();
            }}
          >
            GLOW
          </button>

          {/* Melt Effect */}
          <button onClick={() => Melt()}>Melt Effect</button>

          {/* Elegant Shadow */}
          <button
            onClick={() => {
              setAnimation("textapp-eligant");
              setText("Elegant Shadow");
              setAnimation2("textapp-eligant");
              setText2("");
              disableActive();
              ElegantShadow();
            }}
          >
            Elegant Shadow
          </button>

          {/* Deep Shadow */}
          <button
            onClick={() => {
              setAnimation("textapp-deepshadow");
              setText("Deep Shadow");
              setAnimation2("textapp-deepshadow");
              setText2("");
              disableActive();
              DeepShadow();
            }}
          >
            Deep Shadow
          </button>

          {/* Roses  */}
          <button
            onClick={() => {
              setAnimation("textapp-roses");
              setText("Roses");
              setAnimation2("textapp-roses");
              setText2("");
              disableActive();
              Roses();
            }}
          >
            Roses
          </button>
          <a id="credit">Credits</a>
        </div>

        <div className="textapp-text">
          <h1 id={animation}>{text} </h1>
          <br></br>
          <h1 id={animation2}>{text2} </h1>

          {/* Melt Effect */}
          <div class="textapp-melt">
            <span>M</span>
            <span>E</span>
            <span>L</span>
            <span>T</span>
          </div>
        </div>
      </div>
    </>
  );
}

// Glow
// https://codepen.io/qpi65/pen/LYNOXJO
// Melt
// https://codepen.io/cbanlawi/pen/MWbemYP
// Elegant Shadow / Deep Shadow
// https://codepen.io/juanbrujo/pen/yGpAK
// ROSES
// https://codepen.io/TajShireen/pen/abzmoRE
