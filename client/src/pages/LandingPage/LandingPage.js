import React, { Component } from "react";
import { Route, Link, Redirect, withRouter } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import axios from "axios";


class LandingPage extends Component {
// Setting the component's initial state
state = {
    firstName: "",
    lastName: "",
    userEmail: "",
    userPass: "",
    passConfirm: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (this.state.userPass !== this.state.passConfirm){
        return alert("Passwords do not match");
    } else {
        const user = {
            name: this.state.firstName + " " + this.state.lastName,
            email: this.state.userEmail,
            password: this.state.userPass

        }
        axios.post("/userSignup", user).then(res=>{
            console.log(res);
                // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`Hello ${user.name}.  Welcome!`);
            this.setState({
            firstName: "",
            lastName: "",
            userEmail: "",
            userPass: "",
            passConfirm: ""
        });
        
        }).catch(err=>console.log(err));     
    } 
    
  };

  render() {
    return (
<div>        
<nav class="navbar navbar-expand-lg navbar-light bg-default">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand cover-brand" href="#">Vigor</a>
  </div>
</nav>
<Container fluid>
    
</Container>
</div>

    );
  }
}

export default LandingPage;
