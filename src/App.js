import "./App.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from './landing.js'
import MTMLanding from "./landing-moduels/mtm.js";
import TimelineLanding from "./landing-moduels/timeline.js"

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

function App() {
  const [home, setHome] = useState(true);

  function HideHome() {
    document.getElementById("landing").stayle.visibility = "hidden";
  }


  return (

      <div className="App">

            <Router>
              <Switch>
                <Route exact path="/">
                  <Landing />
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

                <Route exact path="/landing-gsap">
                  <MTMLanding />
                </Route>

                <Route exact path="/landing-timeline">
                  <TimelineLanding />
                </Route>

                <Route exact path="/matching">
                  <Matching />
                </Route>

                <Route exact path="/typer">
                  <TypingGame />
                </Route>

                <Route exact path="/rps">
                  <RPS />
                </Route>

                <Route exact path="/spelling">
                  <Spelling />
                </Route>
              </Switch>
            </Router>

      </div>

  );
}

export default App;
