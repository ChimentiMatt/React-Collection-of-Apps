import "./App.css";
import React, { useState } from "react";
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

import TypingGame from "./projects/SpeedTyper/speedtyper.js"
import "./projects/SpeedTyper/speedtyper.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import { render } from "@testing-library/react";

function App() {
  const [home, setHome] = useState(true);

function HideHome() {
  document.getElementById('landing').stayle.visibility = 'hidden'
}


  function Home() {
    return( 
    <p>cat</p>
    )
  }

  return (
    <>
      <div className="App">
        {home ? (
        <div id="landing">
        <h1>React App Collection</h1>
        <Router>
          <NavLink onClick={() => setHome(false)} to="/">
           Home
          </NavLink>
          <br></br>
          <NavLink onClick={() => setHome(false)} to="/erc">
            Exchange Rate Converter
          </NavLink>

          <br></br>

          <NavLink onClick={() => setHome(false)} to="/timelinegame">
            Timeline Game
          </NavLink>

          <br></br>
          <NavLink onClick={() => setHome(false)} to="/text">
            Text
          </NavLink>

          <br></br>
          <NavLink onClick={() => setHome(false)} to="/gsap">
            GreenSock
          </NavLink>
          <br></br>

          <NavLink onClick={() => setHome(false)} to="/matching">
            Matching Memes
          </NavLink>

          <br></br>

          <NavLink onClick={() => setHome(false)} to="/typer">
            Typing Game
          </NavLink>
          </Router>
          </div>
          ) : (
          <div>
          <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>


            <Route exact path="/erc">
              <ERCPage />
            </Route>

            <Route exact path="/timelinegame">
              <TimelineGame />
            </Route>

            <Route exact path="/text">
              <TextApp />
            </Route>

            <Route exact path="/gsap">
              <Greensock />
            </Route>

            <Route exact path="/matching">
              <Matching />
            </Route>

            <Route exact path="/typer">
              <TypingGame />
            </Route>

          </Switch>
        </Router>
        </div>
        )} 
      </div>
    </>
  );
}

export default App;
