import React, { Component } from "react";
import { Container } from "../../components/Grid";
import axios from "axios";
import Nav from "../../components/Nav";
import Header from "../../components/Header";

class Dash extends Component {

state = {
  quote: "",
  author: "",
  userName: "",
  email: ""
}

componentWillMount(){
  //.currently causing problems because the email is lost up navigating through the nav
  // //first, we take the email sent from the landinpage component and send to db for username
  // console.log(this.props.location.state.email);

  //check for user cookie before loading dash.  If no cookie, route to login
  if (!document.cookie){
    this.props.history.push("/login");
  } else {
  // axios.post("/userSignup/getUser", email)
  // .then(response=>{
  //   console.log(response);
  //  this.setState({userName: response.data.name})
  // })
  // .catch(err=>console.log(err));

  axios.get('https://quotes.rest/qod.json')
    .then(response => {
      let createQuote = response.data.contents.quotes[0];
      this.setState({quote: createQuote.quote, author: createQuote.author})
      })
    .catch(err => {console.log(err)});


  axios.get("/userSignup")
  .then(response =>
  {
  })
  .catch(err=>console.log(err));
}

}
  
  render() {
    return (
      <Container fluid>
        {/* <Nav /> */}
        <main className="col-xs-12 col-sm-8 offset-sm-4 col-lg-9 offset-lg-3 col-xl-10 offset-xl-2 pt-3 pl-4">
        <Header>
          <h1 className="float-left text-center text-md-left">Dashboard</h1>
        </Header>
        <section className="row">
          <div className="col-sm-12">
            <section className="row">
              <div className="col-md-12 col-lg-8">
                <div className="jumbotron">
                  <h1 className="mb-4">{`Hello ${this.state.userName}`}</h1>
                  <p className="quote">{`"${this.state.quote}"`}</p>
                  <p className="author">{`---${this.state.author}`}</p>



            <div className="row" id="parent">
            <div className="col-md-8 col-12 offset-sm-4 offset-lg-3 offset-xl-2 card d-block border-0 py-2">
                <a href="" className="btn btn-primary btn-lg mt-2" aria-expanded= "false" data-toggle="collapse" data-target="#cardPersonal" data-parent="#parent">Personal Training</a>
                <a href="" className="btn btn-primary btn-lg mt-2" aria-expanded= "false" data-toggle="collapse" data-target="#cardCardio" data-parent="#parent">Cardio Training</a>
                <a href="" className="btn btn-primary btn-lg mt-2" aria-expanded= "false" data-toggle="collapse" data-target="#cardMovement" data-parent="#parent">Movement Education</a>
                <a href="" className="btn btn-primary btn-lg mt-2" aria-expanded= "false" data-toggle="collapse" data-target="#cardClinical" data-parent="#parent">Clinical Bodywork</a>
                <div className="collapse py-2" id="cardPersonal">
                    <div className="card">
                        <div className="card-block">
                            <p className="text-xs-center">A system of cardio-respiratory training, weight training, 
                              dietary analysis, and overall use and individualization of each muscle for optimal weight 
                              and muscle balance.</p>
                        </div>            
                    </div>
                </div>
                <div className="collapse py-2" id="cardCardio">
                    <div className="card">
                        <div className="card-block">
                            <p className="text-xs-center">A system of exercises intended to increase and improve your heart rate,
                               reduce unwanted fat, make the body sweat, and increase energy output through ATP production.</p>
                        </div>            
                    </div>
                </div>
                <div className="collapse py-2" id="cardMovement">
                    <div className="card">
                        <div className="card-block">
                            <p className="text-xs-center">Developed by Mitchell Gregory, this therapy is used to completely alleviate 
                              musculoskeletal pain through targeted patented stretches and routines by creating blood flow in stagnated 
                              muscles and helping them become supple and pain free.</p>
                        </div>            
                    </div>
                </div>
                <div className="collapse py-2" id="cardClinical">
                    <div className="card">
                        <div className="card-block">
                            <p className="text-xs-center">We offer a number of patented treatment plans which target specific muscles in 
                              order to reduce inflammation through manual manipulation. Once the body is free of all pain, stretches and 
                              movements are properly introduced to aid the healing process and remove all ailments entirely.</p>
                        </div>            
                    </div>
                </div>
            </div>  
        </div>  

        <span style={{zIndex:"50", fontSize:"0.9em"}}><img src="https://theysaidso.com/branding/theysaidso.png" 
        height={"20"} width={"20"} alt={"theysaidso.com"}/><a href="https://theysaidso.com" target="_blank" 
        title="Powered by quotes from theysaidso.com" 
        style={{color: "#9fcc25", marginLeft: "4px", verticalAlign:"middle"}}>theysaidso.com</a></span>                 
      
        </div>
              </div>
              <div class="col-md-12 col-lg-4">
                <div class="card mb-4">
                  <div class="card-block">
                    <h3 class="card-title">Massages:</h3>
                    <h6 class="card-subtitle mb-2 text-muted">This Week</h6>

                    <div class="user-progress justify-center">

                      <div class="col-sm-3 col-md-2" >
                        <img src="images/profile-pic.jpg" alt="profile photo" class="circle profile-photo"></img>
                      </div>
                      
                      <div class="col-sm-6 col-md-8">
                        <h6 class="pt-1 offset-sm-2">{this.state.userName}</h6>
                        {/* <div class="progress progress-custom offset-sm-2">
                          <div class="progress-bar bg-primary" style={{width: 75% + 'em'}} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div> */}
                      </div>
                      

                      {/* <div class="col-sm-3 col-md-2">
                        <div class="progress-label">75%</div>
                      </div> */}
                      
                    </div>
                    <div class="divider"></div>
                  
                    <div id="calendar"></div>
                    
                    <div class="divider"></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        </main>
      </Container>
    );
  }
}

export default Dash;
