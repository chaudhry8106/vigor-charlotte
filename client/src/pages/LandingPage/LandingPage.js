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
    
        <br />
        <br />
        <br />
        <div className="row" id="parent">
            <div className="col-md-8 col-12 offset-sm-4 offset-lg-3 offset-xl-2 card d-block border-0 py-2">
                <a href="" className="btn btn-outline-secondary" data-toggle="collapse" data-target="#cardLogin" data-parent="#parent">Login</a>
                <a href="" className="btn btn-outline-secondary" data-toggle="collapse" data-target="#cardRegister" data-parent="#parent">Register</a>
                <div className="collapse show py-2" id="cardLogin">
                    <div className="card">
                        <div className="card-block">
                            <h2 className="text-xs-center">Login</h2>
                            <ul className="list-inline text-center">
                                <li className="list-inline-item"><a className="btn btn-lg" href="" title="Twitter"><i className="fa fa-2x fa-twitter"></i></a>&nbsp; </li>
                                <li className="list-inline-item"><a className="btn btn-lg" href="" title=""><i className="fa fa-2x fa-google-plus"></i></a>&nbsp; </li>
                                <li className="list-inline-item"><a className="btn btn-lg" href="" title="Facebook"><i className="fa fa-2x fa-facebook"></i></a></li>
                            </ul>
                            <form role="form">
                                <div className="form-group row">
                                    {/* <label for="inputEmailForm" className="sr-only control-label">Email</label> */}
                                    <div className="offset-sm-2 col-sm-8">
                                        <input type="text" className="form-control" id="inputEmailForm" placeholder="Email" required="" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    {/* <label for="inputPasswordForm" className="sr-only control-label">Password</label> */}
                                    <div className="offset-sm-2 col-sm-8">
                                        <input type="text" className="form-control" id="inputPasswordForm" placeholder="Password" required="" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="offset-sm-2 col-sm-8 pb-3 pt-2">
                                        <button type="submit" className="btn btn-primary btn-lg mt-2 btn-block">Sign-in</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="collapse py-2" id="cardRegister">
                    <div className="card">
                        <div className="card-block">
                            <h2 className="text-center">Register</h2>
                            <ul className="list-inline text-center">
                                <li className="list-inline-item"><a className="btn btn-lg" href="" title="Twitter"><i className="fa fa-2x fa-twitter"></i></a>&nbsp; </li>
                                <li className="list-inline-item"><a className="btn btn-lg" href="" title=""><i className="fa fa-2x fa-google-plus"></i></a>&nbsp; </li>
                                <li className="list-inline-item"><a className="btn btn-lg" href="" title="Facebook"><i className="fa fa-2x fa-facebook"></i></a></li>
                            </ul>
                            <form role="form" action="/userSignup" method="post">
                                <div className="form-group row">
                                    <div className="offset-sm-2 col-sm-8">
                                        <select name="gender" class="form-control" type="" id="gender">
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    {/* <label for="input2FnameForm" className="sr-only control-label">First Name</label> */}
                                    <div className="offset-sm-2 col-sm-8">
                                        <input type="text" className="form-control" id="input2FnameForm" placeholder="First Name" required="" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    {/* <label for="input2LnameForm" className="sr-only control-label">Last Name</label> */}
                                    <div className="offset-sm-2 col-sm-8">
                                        <input type="text" className="form-control" id="input2LnameForm" placeholder="Last Name" required="" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    {/* <label for="input2EmailForm" className="sr-only control-label">email</label> */}
                                    <div className="offset-sm-2 col-sm-8">
                                        <input type="text" className="form-control" id="input2EmailForm" placeholder="Email" required="" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    {/* <label for="input2PasswordForm" className="sr-only control-label">password</label> */}
                                    <div className="offset-sm-2 col-sm-8">
                                        <input type="text" className="form-control" id="input2PasswordForm" placeholder="Password" required="" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    {/* <label for="input2Password2Form" className="sr-only control-label">verify</label> */}
                                    <div className="offset-sm-2 col-sm-8">
                                        <input type="text" className="form-control" id="input2Password2Form" placeholder="Verify password" required="" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="offset-sm-2 col-sm-8 pb-3 pt-2">
                                        <button type="submit" className="btn btn-primary btn-lg mt-2 btn-block">Register</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
      </Container>
    );
  }
}

export default LandingPage;
