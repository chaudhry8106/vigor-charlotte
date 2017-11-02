import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import Dash from "./pages/Dash";
import Appointments from "./pages/Appointments";
import Payments from "./pages/Payments";
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Header from "./components/Header";



const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        {<Route exact path="/login" component={Login} />}
        {<Route exact path="/dash" component={Dash} />}
        {<Route exact path="/appointments" component={Appointments} />}
        {<Route exact path="/payments" component={Payments} />}
        {<Route exact path="/about" component={About} />}
        {<Route exact path="/contact" component={Contact} />}
        {<Route component={NoMatch} />}
      </Switch>
    </div>
  </Router>;


  
export default App;
