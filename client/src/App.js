import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import Dash from "./pages/Dash";
import Appointments from "./pages/Appointments";
import Payments from "./pages/Payments";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Header from "./components/Header";

class App extends Component {

  state = {
    email: ""
  }

handleNewUser(email){
  this.setState({email});
};
render() {
  const email = this.state.email;
return (
<div>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        {<Route exact path="/login" component={Login} email = {email} emailAdd={this.handleNewUser} />}
        {<Route exact path="/dash" component={Dash} email = {email} emailAdd={this.handleNewUser} />}
        {<Route exact path="/appointments" component={Appointments} />}
        {<Route exact path="/payments" component={Payments} />}
        {<Route exact path="/about" component={About} />}
        {<Route exact path="/contact" component={Contact} />}
        {<Route component={NoMatch} />}
      </Switch>
    </div>
  </Router>;
  </div>
)}
}

  
export default App;
