import React, { Component } from "react";
import { Route, Link, Redirect, withRouter } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import axios from "axios";


class LandingPage extends Component {

componentWillMount= () => {
 console.log("handlemefooo")
  //send username and password to server
  axios.post("/userSignup/logout")
  .then(res=>{
    console.log(res);
    let result=res.data;
    //logout 
    console.log(result.success)
    this.props.history.push("/");    
    }).catch(err=>console.log(err));
};

  render() {
    return (
<div>        
  <nav className="navbar navbar-expand-lg navbar-light bg-default">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to = "/about"><a className="navbar-brand cover-brand" href="#">Vigor</a></Link>
    </div>
  </nav>

  <Container fluid>
    <div className="cover-div text-center">
      <h3 className="cover-heading">Vigor</h3>
      <p className="cover-text">Helping You Become Independent Of All Therapists, Including Ourselves</p>
      <a href="login"><button className="btn btn-dark">Enter</button></a>
    </div>
  </Container>
  </div>
    )
  }
}
export default LandingPage;