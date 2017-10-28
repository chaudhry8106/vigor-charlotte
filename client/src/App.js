import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dash from "./pages/Dash";
import Appointments from "./pages/Appointments";
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Header from "./components/Header";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Dash} />
        {<Route exact path="/cover" component={LandingPage} />}
        {<Route exact path="/appointments" component={Appointments} />}
        {<Route exact path="/contact" component={Contact} />}
        {<Route component={NoMatch} />}
      </Switch>
    </div>
  </Router>;
  
export default App;
