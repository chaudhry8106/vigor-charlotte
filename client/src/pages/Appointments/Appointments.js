import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class Appointments extends Component {


  render() {
    return (
      <Container fluid>
        <section>
          <div class="card mb-4">
            <div class="card-block">
              <h3 class="card-title">Calendar</h3>
              
              <div class="dropdown card-title-btn-container">
                <button class="btn btn-sm btn-subtle dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><em class="fa fa-cog"></em></button>
                
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#"><em class="fa fa-search mr-1"></em> More info</a>
                  <a class="dropdown-item" href="#"><em class="fa fa-thumb-tack mr-1"></em> Pin Window</a>
                  <a class="dropdown-item" href="#"><em class="fa fa-remove mr-1"></em> Close Window</a></div>
              </div>
              
              <h6 class="card-subtitle mb-2 text-muted">What's coming up</h6>
        
                <div class="calendly-inline-widget" id="calendar" data-url="https://calendly.com/vigor-charlotte">
                
                </div>

              <div id="calendar"></div>
            </div>
          </div>
        </section>
      </Container>
    );
  }
}

export default Appointments;
