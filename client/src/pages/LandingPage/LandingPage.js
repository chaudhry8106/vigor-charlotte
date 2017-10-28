import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import axios from "axios";


class LandingPage extends Component {
    handleLogin=event =>{
        event.preventDefault();
        return axios.get('/login');
    }

  render() {
    return (
      <Container fluid>
          <div className="text-center">
        
          <div className="card rounded-0">
            <div className="card-header">
                <h3 className="mb-0" >Login</h3>
            </div>
            <div className="card-body">
                <form className="form" role="form" autocomplete="off" id="formLogin">
                    <div className="form-group">
                        <label for="uname1">Username</label>
                        <input type="text" className="form-control form-control-lg rounded-0" name="uname1" id="uname1" required="" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control form-control-lg rounded-0" id="pwd1" required="" autocomplete="new-password" />
                    </div>
                    <div>
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-indicator"></span>
                          <span className="custom-control-description small">Remember me on this computer</span>
                        </label>
                    </div>
                    <button type="button" className="btn btn-information" onClick={()=>this.handleLogin}>Click to Login</button>
                    <div className="fb-login-button" data-max-rows="1" onClick={this.handleLogin} data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="false"></div>
                    <button type="button" className="btn btn-success btn-lg float-right">Login</button>
                </form>
            </div>
        </div>
 </div>
      </Container>
    );
  }
}

export default LandingPage;
