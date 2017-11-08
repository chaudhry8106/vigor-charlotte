import React, { Component } from "react";
import { Route, Link, Redirect, withRouter } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import axios from "axios";


class Login extends Component {
// Setting the component's initial state
state = {
    firstName: "",
    lastName: "",
    userEmail: "",
    userPass: "",
    passConfirm: "",
    userName: "",
    userPW: "",
    option: ""
  };



  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
    console.log(name + ": " + value);
  };

  handleRegistration = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    //ensure all fields are completed
    if(this.state.firstName === "" ||
        this.state.lastName === ""||
        this.state.userEmail === ""||
        this.state.userPass === ""||
        this.state.passConfirm === "") {
            return alert("Please complete all fields");
        }
        //ensure passwords do match
    if (this.state.userPass !== this.state.passConfirm){
        return alert("Passwords do not match");
    } else {
        const user = {
            name: this.state.firstName + " " + this.state.lastName,
            email: this.state.userEmail,
            password: this.state.userPass

        }
        //route to the server to add user to the database
        axios.post("/userSignup", user).then(res=>{
            console.log(res);
        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`Hello ${user.name}.  Thank you for registering!  Please login.`);
            this.setState({
            firstName: "",
            lastName: "",
            userEmail: "",
            userPass: "",
            passConfirm: ""
        });
        
        }).catch(err=>console.log(err));
         //redirect user to dashboard/main page.  This will load react component according to router in App.js within client/src folder 
         this.props.history.push("/login");      
    }
  };
  
  handleLogin = (event) => {
      event.preventDefault();
      if (this.state.userName === "" || this.state.userPW === ""){
          return alert("Please Complete All Fields");
      }
      const userLogin = {
          login_name: this.state.userName,
          user_pass: this.state.userPW
      }
      console.log(userLogin);
      //send username and password to server
      axios.post("/userSignup/userCheck", userLogin)
      .then(res=>{
            console.log(res);
            //reset form data
            this.setState({
          userName: "",
          userPW: ""            
        });
        let result=res.data;
        //returning email address if password is correct
        //if res.data is an empty string, password was not correct
        if(result.error){
            Command: toastr["error"]("I forgot the e Tolsty", "War and Peac")
            console.log("this");
            alert("Incorrect Password");
            this.props.history.push("/login");
        } else {
            //otherwise password is good and send user to main page
            this.props.history.push({
                pathname: "/dash",
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
                            <form>
                                <div className="form-group row">
                                    <label for="inputEmailForm" className="sr-only control-label">Email</label>
                                    <div className="offset-sm-2 col-sm-8">
                                        <input type="text" 
                                        className="form-control" 
                                        id="inputEmailForm"
                                        placeholder="Email"
                                        value={this.state.userName}
                                        name="userName"
                                        onChange={this.handleInputChange}
                                        required="" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    {/* <label for="inputPasswordForm" className="sr-only control-label">Password</label> */}
                                    <div className="offset-sm-2 col-sm-8">
                                        <input type="password" 
                                        className="form-control" 
                                        id="inputPasswordForm"
                                        placeholder="Password"
                                        value={this.state.userPW}
                                        name="userPW"
                                        onChange={this.handleInputChange}
                                        required="" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="offset-sm-2 col-sm-8 pb-3 pt-2">
                                        <button type="submit" className="btn btn-primary btn-lg mt-2 btn-block" onClick={this.handleLogin}>Sign-in</button>
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
                            <form>
                                <div className="form-group row">
                                    <div className="offset-sm-2 col-sm-8">
                                        <select name="gender" className="form-control" type="" id="gender"
                                        value={this.state.option} onChange={this.handleInputChange}>
                                            <option value="">Select Gender</option>
                                            <option value="genderM">Male</option>
                                            <option value="genderF">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="input2FnameForm" className="sr-only control-label">First Name</label>
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
                                        onClick={this.handleRegistration}>Register
                                        </button>
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

export default Login;
