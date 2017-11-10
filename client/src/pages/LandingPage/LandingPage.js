import React, { Component } from "react";
import { Route, Link, Redirect, withRouter } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import axios from "axios";
class LandingPage extends Component {
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
    <div className="cover-div text-center">
      <h3 className="cover-heading">Vigor</h3>
      <p className="cover-text">Helping You Become Independent Of All Therapists, Including Ourselves</p>
      <a href="login"><button className="btn btn-dark">Enter</button></a>
    </div>
  </Container>
  </div>
    );
  }
}
export default LandingPage;