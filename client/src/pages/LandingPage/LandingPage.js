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
    passConfirm: "",
    userName: "",
    userPW: ""
  };

 

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };
    //new user registration
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if(this.state.firstName === "" ||
        this.state.lastName === ""||
        this.state.userEmail === ""||
        this.state.userPass === ""||
        this.state.passConfirm === "") {
            return alert("Please complete all fields");
        }
        //making sure password matches confirmation
    if (this.state.userPass !== this.state.passConfirm){
        return alert("Passwords do not match");
    } else {
        //create a newUser object
        const user = {
            name: this.state.firstName + " " + this.state.lastName,
            email: this.state.userEmail,
            password: this.state.userPass

        }
        //add user to user database, the clear out the new user form
        axios.post("/userSignup", user).then(res=>{
            console.log(res);
            this.setState({
            firstName: "",
            lastName: "",
            userEmail: "",
            userPass: "",
            passConfirm: ""
            
        });
        
        }).catch(err=>console.log(err));
        //redirect user to dashboard/main page.  This will load react component according to router in App.js within client/src folder 
        this.props.history.push("/");   
    } 
  };
  handleLogin = (event) => {
      event.preventDefault();
      const userLogin = {
          login_name: this.state.userName,
          user_pass: this.state.userPW
      }
      //send username and password to server
      axios.post("/userSignup/userCheck", userLogin)
      .then(res=>{
            console.log(res);
            //reset form data
            this.setState({
          userName: "",
          userPW: ""            
        });
        //returning email address if password is correct
        //if res.data is an empty string, password was not correct
        if(res.data === ""){
            this.props.history.push("/cover");
        } else {
            //otherwise password is good and send user to main page
            this.props.history.push({
                pathname: "/",
                //this is only good for the single route, email is lost while navigating through the nav
            state: {email: res.data}
            });
        }
        
        }).catch(err=>console.log(err));
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
                                        <input type="text" 
                                        className="form-control"
                                        value={this.state.userName}
                                        name="userName"
                                        onChange={this.handleInputChange}  
                                        id="inputEmailForm" 
                                        placeholder="Email" 
                                        required="" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    {/* <label for="inputPasswordForm" className="sr-only control-label">Password</label> */}
                                    <div className="offset-sm-2 col-sm-8">
                                        <input type="password" 
                                        className="form-control"
                                        value={this.state.userPW}
                                        name="userPW"
                                        onChange={this.handleInputChange}   
                                        id="inputPasswordForm"
                                        placeholder="Password" 
                                        required="" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="offset-sm-2 col-sm-8 pb-3 pt-2">
                                        <button onClick={this.handleLogin} type="submit" className="btn btn-primary btn-lg mt-2 btn-block">Sign-in</button>
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
                            <form role="form" action="/api/appointments/userSignup" method="post">
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
                                    {<label for="input2FnameForm" className="sr-only control-label">First Name</label>}
                                    <div className="offset-sm-2 col-sm-8">
                                        <input type="text" 
                                        className="form-control"
                                        value={this.state.firstName}
                                        name="firstName"
                                        onChange={this.handleInputChange} 
                                        id="input2FnameForm" 
                                        placeholder="First Name" 
                                        required="" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    {<label for="input2LnameForm" className="sr-only control-label">Last Name</label>}
                                    <div className="offset-sm-2 col-sm-8">
                                        <input type="text" 
                                        className="form-control"
                                        value={this.state.lastName}
                                        name="lastName"
                                        onChange={this.handleInputChange}  
                                        id="input2LnameForm" 
                                        placeholder="Last Name" 
                                        required="" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    {<label for="input2EmailForm" className="sr-only control-label">Email</label>}
                                    <div className="offset-sm-2 col-sm-8">
                                        <input type="text" 
                                        className="form-control"
                                        value={this.state.userEmail}
                                        name="userEmail"
                                        onChange={this.handleInputChange}  
                                        id="input2EmailForm" 
                                        placeholder="Email" 
                                        required="" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    {<label for="input2PasswordForm" className="sr-only control-label">Password</label>}
                                    <div className="offset-sm-2 col-sm-8">
                                        <input type="password" 
                                        className="form-control"
                                        value={this.state.userPass}
                                        name="userPass"
                                        onChange={this.handleInputChange} 
                                        id="input2PasswordForm" 
                                        placeholder="Password" required="" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    {<label for="input2Password2Form" className="sr-only control-label">Verify</label>}
                                    <div className="offset-sm-2 col-sm-8">
                                        <input type="password" 
                                        className="form-control"
                                        value={this.state.passConfirm}
                                        name="passConfirm"
                                        onChange={this.handleInputChange}  
                                        id="input2Password2Form" placeholder="Verify password" 
                                        required="" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="offset-sm-2 col-sm-8 pb-3 pt-2">
                                        <button type="submit" 
                                        className="btn btn-primary btn-lg mt-2 btn-block"
                                        onClick={this.handleFormSubmit}>Register</button>
                                   
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

export default withRouter(LandingPage);
