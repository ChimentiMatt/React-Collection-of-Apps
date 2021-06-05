import "./App.css";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import ERCPage from "./projects/Exchange-Rate-Calc/erc.js";
import "./projects/Exchange-Rate-Calc/erc.css";

import App2 from  "./projects/TAH/TAH.js"
import "./projects/TAH/TAH.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function App() {
  const [home, setHome] = useState(true);
  return (
    <>
    <div className="App">
      {home ? ( 
        <div>
      <h1>React app Collection</h1>
      <Router>
        <NavLink onClick={ () => setHome(false)} to="/erc">Exchange Rate Converter</NavLink>

      <br></br>

        <NavLink onClick={ () => setHome(false)} to="/timelinegame">Timeline Game</NavLink>
      </Router>
      </div>
      ) : ( 
        <div>
      <Router>
        <Switch>
          <Route exact path="/erc">
            <ERCPage />
          </Route>
          <Route exact path="/timelinegame">
            <App2 />
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
