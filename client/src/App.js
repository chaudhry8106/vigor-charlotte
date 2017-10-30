import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dash from "./pages/Dash";
import Appointments from "./pages/Appointments";
import Payments from "./pages/Payments";
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./pages/About";


const App = () =>
  <Router>
    <div>
<<<<<<< HEAD
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
=======
      <Switch>
        <Route exact path="/" component={Dash} />
        {<Route exact path="/cover" component={LandingPage} />}
        {<Route exact path="/appointments" component={Appointments} />}
        {<Route exact path="/payments" component={Payments} />}
        {<Route exact path="/about" component={About} />}
        {<Route exact path="/contact" component={Contact} />}
        {<Route component={NoMatch} />}
      </Switch>
>>>>>>> origin/Chaudhry
    </div>
  </Router>;
  
export default App;
