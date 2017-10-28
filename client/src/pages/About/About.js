import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class About extends Component {


  render() {
    return (

      <Container fluid>
            <section className="row">
              <div class="col-lg-12 mb-4">
                <div class="card">
                  <div class="card-header"><strong><h3>About</h3></strong></div>
                  
                  <div class="card-block">
                    <p>At Vigor we are revolutionizing the massage therapy and personal training industry by offering a unified solution that no one can rival. The beginning of the journey begins at a question, Where Does It Hurt? In this phase our clients begin by selecting a massage or the patented techniques of movement education we have developed to alleviate their pains. Not a single movement of our client's goes unanalyzed, our professionals are trained to asses patterns in movement in order to accurately solve the problem. With an entirely personalized array of stretches and movements, each client is treated individually with precision and care. As the body recovers our team trains our clients from diagnosing the problem, to solving it, to making sure it isn't privy to resurface. Ultimately, the goal is to become independent of all therapists, including ourselves, and regain control of their life.</p>
                  </div>
                </div>
              </div>
              </section>
    </Container>
)}}