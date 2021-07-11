import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

import ERCPage from "./projects/Exchange-Rate-Calc/erc.js";
import "./projects/Exchange-Rate-Calc/erc.css";

import TimelineGame from "./projects/TAH/TAH.js";
import "./projects/TAH/TAH.css";

import TextApp from "./projects/TEXTAPP/textapp.js";
import "./projects/TEXTAPP/textapp.css";

import Greensock from "./projects/Greensock/greensock.js";
import "./projects/Greensock/greensock.css";

import Matching from "./projects/Matching-Game/matching.js";
import "./projects/Matching-Game/matching.css";

import TypingGame from "./projects/SpeedTyper/speedtyper.js";
import "./projects/SpeedTyper/speedtyper.css";


import { render } from "@testing-library/react";

import RPS from "./projects/RPS/rps.js"

import Spelling from "./projects/Spelling/spelling.js"
import "./projects/Spelling/spelling.css";


export default function Landing() {
    return(
        <div id="landing">
        <h1>React App Collection</h1>
        <Router forceRefresh>
          <NavLink to="/">
            Home
          </NavLink>
          <br></br>
          <NavLink to="/erc">
            Exchange Rate Converter
          </NavLink>

          <br></br>

          <NavLink to="/timelinegame">
            Timeline Game
          </NavLink>

          <br></br>
          <NavLink to="/text">
            Text
          </NavLink>

          <br></br>
          <NavLink to="/gsap">
            GreenSock
          </NavLink>
          <br></br>

          <NavLink to="/matching">
            Matching Memes
          </NavLink>

          <br></br>

          <NavLink to="/typer">
            Typing Game
          </NavLink>

         <br></br>
         
          <NavLink to="/rps">
            Rock Paper Scissors
          </NavLink>

          <br></br>

          <NavLink  to="/spelling">
            Spelling
          </NavLink>

        </Router>
      </div>

    )
}