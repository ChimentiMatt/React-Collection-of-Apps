import "./App.css";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ERCPage from "./projects/Exchange-Rate-Calc/index.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function App() {
  const [home, setHome] = useState("");
  return (
    <>
    <div className="App">
      <h1>React app Collection</h1>
      <Router>
        <NavLink to="/erc">Exchange Rate Converter</NavLink>
      </Router>

      <Router>
        <Switch>
          <Route exact path="/erc">
            <ERCPage />
          </Route>
        </Switch>
      </Router>

    </div>
    </>
  );
}

export default App;
