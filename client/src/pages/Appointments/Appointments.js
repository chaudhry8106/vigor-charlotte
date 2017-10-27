import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Dialog from 'material-ui/Dialog'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from "material-ui/TimePicker"
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import SnackBar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment'
import axios from 'axios'

class Appointments extends Component {


state = {
  appointments: [],
  confirmationModalOpen: false,
  validEmail: true,
  validPhone: true,
  firstName:"",
  lastName:"",
  date: "",
  slot: "",
  confirmationModalOpen: false,
  confirmationSnackbarOpen: false
}

  handleSubmit(event) {
   
    const appointment = {
      date: moment(this.state.date).format('YYYY-DD-MM'),
      slot: this.state.slot,
      name: this.state.firstName + ' ' + this.state.lastName,
      email: this.state.email,
      phone: this.state.phone
    }
    axios.post('api/appointments', appointment)
    .then(response => 
      {
        //send text message to users number using Twilio
        
        this.setState({ confirmationSnackbarMessage: "Appointment succesfully added!", confirmationSnackbarOpen: true, processed: true })
      }
    )
    .catch(err => {
      console.log(err)
      return this.setState({ confirmationSnackbarMessage: "Appointment failed to save.", confirmationSnackbarOpen: true })
    })
  }

  validateEmail(email) {
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    return regex.test(email) ? this.setState({ email: email, validEmail: true }) : this.setState({ validEmail: false })
  }

  validatePhone(phoneNumber) {
    const regex = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/
    return regex.test(phoneNumber) ? this.setState({ phone: phoneNumber, validPhone: true }) : this.setState({ validPhone: false })
  }

  componentWillMount() {
  
        axios.get('api/appointments').then(res => {
          console.log(res.data.data)
            })
  }

  renderAppointmentConfirmation() {
    const spanStyle = { color: '#00bcd4' }
    return <section>
      <p>Name: <span style={spanStyle}>{this.state.firstName} {this.state.lastName}</span></p>
      <p>Number: <span style={spanStyle}>{this.state.phone}</span></p>
      <p>Email: <span style={spanStyle}>{this.state.email}</span></p>
      <p>Appointment: <span style={spanStyle}>{moment(this.state.date).format('dddd[,] MMMM Do[,] YYYY')}</span> at <span style={spanStyle}>{moment(this.state.slot).format('h:mm a')}</span></p>
    </section>
  }


  render() {
    const contactFormFilled = this.state.firstName && this.state.lastName && this.state.phone && this.state.email && this.state.validPhone && this.state.validEmail && this.state.date && this.state.slot
    const modalActions = [
      <FlatButton
        label="Cancel"
        primary={false}
        onClick={() => this.setState({ confirmationModalOpen : false})} />,
      <FlatButton
        label="Confirm"
        primary={true}
        onClick={() => this.handleSubmit()} />
    ]
    
    return (
      <Container fluid>
        <section>
          <div class="card mb-4">
            <div class="card-block">
              <h3 class="card-title">Make an Appointment</h3>
              
              <div class="dropdown card-title-btn-container">
                <button class="btn btn-sm btn-subtle dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><em class="fa fa-cog"></em></button>
                
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#"><em class="fa fa-search mr-1"></em> More info</a>
                  <a class="dropdown-item" href="#"><em class="fa fa-thumb-tack mr-1"></em> Pin Window</a>
                  <a class="dropdown-item" href="#"><em class="fa fa-remove mr-1"></em> Close Window</a></div>
              </div>
              <h4>Select a Day:</h4>
              <DatePicker
                      style={{
                        marginTop: 10,
                        marginLeft: 10
                      }}
                      hintText="Select a date"
                      onChange={(evt, newValue) => this.setState({ date: newValue })}/>
                    
              <h4>Select a Start Time (Between 9am and 5pm):</h4>
              <TimePicker 
              minutesStep={60}
              onChange={(evt, newValue) => 
              {
                console.log(moment(newValue, "hh mm"));
                this.setState({ slot: newValue })
              }
                }/>
              <h4>Share your contact information with us and we'll send you a reminder:</h4>
              <section>
                    <TextField
                      style={{ display: 'block' }}
                      name="first_name"
                      hintText="First Name"
                      floatingLabelText="First Name"
                      onChange={(evt, newValue) => this.setState({ firstName: newValue })}/>
                    <TextField
                      style={{ display: 'block' }}
                      name="last_name"
                      hintText="Last Name"
                      floatingLabelText="Last Name"
                      onChange={(evt, newValue) => this.setState({ lastName: newValue })}/>
                    <TextField
                      style={{ display: 'block' }}
                      name="email"
                      hintText="name@mail.com"
                      floatingLabelText="Email"
                      errorText={this.state.validEmail ? null : 'Enter a valid email address'}
                      onChange={(evt, newValue) => this.validateEmail(newValue)}/>
                    <TextField
                      style={{ display: 'block' }}
                      name="phone"
                      hintText="(888) 888-8888"
                      floatingLabelText="Phone"
                      errorText={this.state.validPhone ? null: 'Enter a valid phone number'}
                      onChange={(evt, newValue) => this.validatePhone(newValue)} />
                    <RaisedButton
                      style={{ display: 'block' }}
                      label={contactFormFilled ? 'Schedule' : 'Fill out your information to schedule'}
                      labelPosition="before"
                      primary={true}
                      fullWidth={true}
                      onClick={() => this.setState({ confirmationModalOpen: !this.state.confirmationModalOpen })}
                      disabled={!contactFormFilled}
                      style={{ marginTop: 20, maxWidth: 100}} />
                  </section>
          <Dialog
            modal={true}
            open={this.state.confirmationModalOpen}
            actions={modalActions}
            title="Confirm your appointment">
            {this.renderAppointmentConfirmation()}
          </Dialog>

          <SnackBar
            open={this.state.confirmationSnackbarOpen}
            message={this.state.confirmationSnackbarMessage || ''}
            autoHideDuration={10000}
            onRequestClose={() => this.setState({ confirmationSnackbarOpen: false })} />
              
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
