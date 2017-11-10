import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Nav from "../../components/Nav";
import Header from "../../components/Header";

class About extends Component {


  render() {
    return (

      <Container fluid>
        <Nav/>
        <main className="col-xs-12 col-sm-8 offset-sm-4 col-lg-9 offset-lg-3 col-xl-10 offset-xl-2 pt-3 pl-4">
        <Header>
          <h1 className="float-left text-center text-md-left">About</h1>
        </Header>
        <section className="row text-center">
          <div class="col-lg-12 mb-4">
            <div class="card">
              <div class="card-header"><strong><h3>About</h3></strong></div>
              
              <div class="card-block">
                <p>At Vigor we are revolutionizing the massage therapy and personal training industry by offering a unified solution that no one can rival. The beginning of the journey begins at a question, Where Does It Hurt? In this phase our clients begin by selecting a massage or the patented techniques of movement education we have developed to alleviate their pains. Not a single movement of our client's goes unanalyzed, our professionals are trained to asses patterns in movement in order to accurately solve the problem. With an entirely personalized array of stretches and movements, each client is treated individually with precision and care. As the body recovers our team trains our clients from diagnosing the problem, to solving it, to making sure it isn't privy to resurface. Ultimately to become independent of all therapists, including ourselves, and regain control of their life.</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src="images/staff/mitchellgregory.jpeg" alt="Card image cap" />
              <div className="card-block">
                <h4 className="card-title">Mitchell Gregory</h4>
                <h5 className="card-title">Owner</h5>
                <h6 className="card-title">Movement Specialist</h6>
                <h6 className="card-title">Personal Trainer</h6>
                <p className="card-text">Mitchell has devoted his life to helping people be the best and feel their best. He developed a system of patented movement and stretching techniques to teach people, who are in debilitating pain, to become completely independent of all therapists, including him. Mitchell trains professional fighters, athletes, and people of all calibers to reach their full potential.</p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="images/staff/larryclark.jpeg" alt="Card image cap" />
              <div className="card-block">
              <h4 className="card-title">Larry Clark</h4>
              <h5 className="card-title">Business Manager</h5>
              <h6 className="card-title">Organizer</h6>
              <h6 className="card-title">Consultant</h6>
              <p className="card-text">Larry is the conductor behind the curtain. He makes sure our organization is effective and efficient so that our business can operate without hiccups day in and day out. In unison with his organizational work, Larry helps with many facets of our operations by being an excellent source of business knowledge.</p>
              </div>
            </div>
          </div>
        </section>
        <br />
        <section>
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src="images/staff/judgefulenwider.jpeg" alt="Card image cap" />
              <div className="card-block">
              <h4 className="card-title">Judge Fulenwider</h4>
              <h5 className="card-title">Lead Trainer</h5>
              <h6 className="card-title">Movement Educator</h6>
              <h6 className="card-title">Massage Therapist</h6>
              <h6 className="card-title">Personal Trainer</h6>
              <p className="card-text">Judge uses the revolutionary techniques of movement education in unison with massage therapy to provide an experience like no other. Through years of learning under Mitchell, he has learned to combine these practices integrating personal training to change the lives of people who came to him looking to only alleviate their pains.</p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="images/staff/devinsholly.jpg" alt="Card image cap" />
              <div className="card-block">
              <h4 className="card-title">Devin "Flex" Sholly</h4>
              <h5 className="card-title">Creative Director</h5>
              <h6 className="card-title">Photographer</h6>
              <h6 className="card-title">Producer</h6>
              <h6 className="card-title">Model</h6>
              <p className="card-text">Flex is a professional photographer and lead creative director for Vigor. He drives our marketing campaigns and utilizes unique advertising methods. As a seasoned musician, Flex composes music specifically for our therapists creating an unrivaled therapeutic experience for our clients.</p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="images/staff/reggievandale.jpeg" alt="Card image cap" />
              <div className="card-block">
              <h4 className="card-title">Reggie Vandale</h4>
              <h5 className="card-title">Senior Trainer</h5>
              <h6 className="card-title">Movement Educator</h6>
              <h6 className="card-title">Massage Therapist</h6>
              <br />
              <p className="card-text">Reggie is highly experienced in using the patented techniques of movement education to alleviate people pain and stress. A strong believer that a healthy mind leads to a healthy body, he instills a positive outlook and changes the way his clients look at their body.</p>
              </div>
            </div>
          </div>
        </section>
        <br />
        </main>
      </Container>
    );
  }
}

export default About;
