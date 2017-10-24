import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class Contact extends Component {


  render() {
    return (
      <Container fluid>
            <section className="row">
              <div class="col-lg-12 mb-4">
                <div class="card">
                  <div class="card-header"><strong><h3>About</h3></strong></div>
                  
                  <div class="card-block">
                    <p>At Vigor we are revolutionizing the massage therapy and personal training industry by offering a unified solution that no one can rival. The beginning of the journey begins at a question, Where Does It Hurt? In this phase our clients begin by selecting a massage or the patented techniques of movement education we have developed to alleviate their pains. Not a single movement of our client's goes unanalyzed, our professionals are trained to asses patterns in movement in order to accurately solve the problem. With an entirely personalized array of stretches and movements, each client is treated individually with precision and care. As the body recovers our team trains our clients from diagnosing the problem, to solving it, to making sure it isn't privy to resurface. Ultimately to become independent of all therapists, including ourselves, and regain control of their life.</p>
                  </div>
                </div>
              </div>
    
              <div className="col-sm-12">
                <section className="row">
                  
                  <div className="col-sm-12 col-md-12">
                    <div className="card mb-12">
                      <div className="card-block">
                        <h3 className="card-title">Contact</h3>
                        
                        <div className="dropdown card-title-btn-container">
                          <button className="btn btn-sm btn-subtle dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><em className="fa fa-cog"></em></button>
                          
                          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton"><a className="dropdown-item" href="#"><em className="fa fa-search mr-1"></em> More info</a>
                            <a className="dropdown-item" href="#"><em className="fa fa-thumb-tack mr-1"></em> Pin Window</a>
                            <a className="dropdown-item" href="#"><em className="fa fa-remove mr-1"></em> Close Window</a></div>
                        </div>
                        
                        <h6 className="card-subtitle mb-2 text-muted">Subtitle</h6>
                        
                        <form className="form-horizontal" action="" method="post">
                          <fieldset>
                     
                            <div className="form-group">
                              <label className="col-12 control-label no-padding" for="name">Name</label>
                              
                              <div className="col-12 no-padding">
                                <input id="name" name="name" type="text" placeholder="Your name" className="form-control"></input>
                              </div>
                            </div>
                          
                           
                            <div className="form-group">
                              <label className="col-12 control-label no-padding" for="email">Your E-mail</label>
                              
                              <div className="col-12 no-padding">
                                <input id="email" name="email" type="text" placeholder="Your email" className="form-control"></input>
                              </div>
                            </div>
                            
                        
                            <div className="form-group">
                              <label className="col-12 control-label no-padding" for="message">Your message</label>
                              
                              <div className="col-12 no-padding">
                                <textarea className="form-control" id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>
                              </div>
                            </div>
                            
                    
                            <div className="form-group">
                              <div className="col-12 widget-right no-padding">
                                <button type="submit" className="btn btn-primary btn-md float-right">Submit</button>
                              </div>
                            </div>
                          </fieldset>
                        </form>
                      </div>
                    </div>

                  </div>
                </section>
                <section className="row">
                  <div className="col-12 mt-1 mb-4">Template by <a href="https://www.medialoot.com">Medialoot</a></div>
                </section>
              </div>
            </section>
      </Container>
    );
  }
}

export default Contact;
