import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";


class LandingPage extends Component {


  render() {
    return (
      <Container fluid>
          <div className="text-center">
            


          <div class="card rounded-0">
            <div class="card-header">
                <h3 class="mb-0">Login</h3>
            </div>
            <div class="card-body">
                <form class="form" role="form" autocomplete="off" id="formLogin">
                    <div class="form-group">
                        <label for="uname1">Username</label>
                        <input type="text" class="form-control form-control-lg rounded-0" name="uname1" id="uname1" required="" />
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control form-control-lg rounded-0" id="pwd1" required="" autocomplete="new-password" />
                    </div>
                    <div>
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <span class="custom-control-indicator"></span>
                          <span class="custom-control-description small">Remember me on this computer</span>
                        </label>
                    </div>
                    <button type="button" class="btn btn-success btn-lg float-right">Login</button>
                </form>
            </div>
        </div>




          </div>
      </Container>
    );
  }
}

export default LandingPage;
