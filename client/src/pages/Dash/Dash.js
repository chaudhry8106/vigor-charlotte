import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class Dash extends Component {


  render() {
    return (
      <Container fluid>
          <section className="row">
            <div className="col-sm-12">
              <section className="row">
                <div className="col-md-12 col-lg-8">
                  <div className="jumbotron">
                    <h1 className="mb-4">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                    <p className="lead"><a className="btn btn-primary btn-lg mt-2" href="#" role="button">Learn more</a></p>
                  </div>
                </div>
                <div class="col-md-12 col-lg-4">
                  <div class="card mb-4">
                    <div class="card-block">
                      <h3 class="card-title">Top Users</h3>
                      <h6 class="card-subtitle mb-2 text-muted">Most active this week</h6>

                      <div class="user-progress justify-center">

                        <div class="col-sm-3 col-md-2" >
                          <img src="images/profile-pic.jpg" alt="profile photo" class="circle profile-photo"></img>
                        </div>
                        
                        <div class="col-sm-6 col-md-8">
                          <h6 class="pt-1 offset-sm-2">Username</h6>
                          <div class="progress progress-custom offset-sm-2">
													  <div class="progress-bar bg-primary" style={{width: 75% + 'em'}} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
												  </div>
                        </div>
                        

                        <div class="col-sm-3 col-md-2">
                          <div class="progress-label">75%</div>
                        </div>
                        
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
      </Container>
    );
  }
}

export default Dash;
