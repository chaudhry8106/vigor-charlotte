import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NoMatch from "./pages/NoMatch";

const Cover = () =>
  <Router>
    <div className="container">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          {<Route component={NoMatch} />}
        </Switch>
    </div>
  </Router>;
  
export default Cover;
