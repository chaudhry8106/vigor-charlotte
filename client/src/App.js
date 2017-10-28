import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dash from "./pages/Dash";
import Appointments from "./pages/Appointments";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./pages/About";
import LandingPage from "./pages/LandingPage";

const App = () =>
  <Router>
    <div>
      <Nav />
      <main className="col-xs-12 col-sm-8 offset-sm-4 col-lg-9 offset-lg-3 col-xl-10 offset-xl-2 pt-3 pl-4">
        <Header />
        <Switch>
          <Route exact path="/" component={Dash} />
          <Route exact path="/landing" component={LandingPage} />
          <Route exact path="/about" component={About} />
          {<Route exact path="/appointments" component={Appointments} />}
          {<Route exact path="/contact" component={Contact} />}
          {<Route component={NoMatch} />}
        </Switch>
      </main>
    </div>
  </Router>;
  
export default App;
