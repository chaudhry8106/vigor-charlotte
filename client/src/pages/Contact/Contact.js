import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Nav from "../../components/Nav";
import Header from "../../components/Header";

class Contact extends Component {


  render() {
    return (
      <Container fluid>
            <section className="row">
              <div className="col-sm-12">
                <section className="row">
                  
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
        </main>
      </Container>
    );
  }
}

export default Contact;
