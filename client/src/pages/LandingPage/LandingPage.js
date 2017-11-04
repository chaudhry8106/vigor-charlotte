import React, { Component } from "react";
import { Route, Link, Redirect, withRouter } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import axios from "axios";


class LandingPage extends Component {

  render() {
    return (
      <Container fluid>
        <div className="text-center">Vigor
            </div>
 
      </Container>
    );
  }
}

export default withRouter(LandingPage);
