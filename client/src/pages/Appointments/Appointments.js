import React, { Component } from "react";
import { Container } from "../../components/Grid";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Dialog from 'material-ui/Dialog'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from "material-ui/TimePicker"
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton'
import SnackBar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment'

import API from "../../utils/API.js"

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
  confirmationSnackbarOpen: false,
  apptType: "",
  pfdTherapist: ""
}

  handleSubmit(event) {
   
    const appointment = {
      date: moment(this.state.date).format('MM-DD-YYYY'),
      slot: this.state.slot,
      name: this.state.firstName + ' ' + this.state.lastName,
      email: this.state.email,
      phone: this.state.phone
    }
    API.saveAppointment(appointment)
    .then(response => 
      {
        //send text message to users number using Twilio
        
        this.setState({ confirmationSnackbarMessage: "Appointment succesfully added!", confirmationModalOpen: false, confirmationSnackbarOpen: true, processed: true })
      }
    )
    .catch(err => {
      console.log(err)
      return this.setState({ confirmationSnackbarMessage: "Appointment failed to save.", confirmationModalOpen: false, confirmationSnackbarOpen: true })
    })
  }

  validateEmail(email) {
    const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i
    return regex.test(email) ? this.setState({ email: email, validEmail: true }) : this.setState({ validEmail: false })
  }

  validatePhone(phoneNumber) {
    const regex = /^(1\s|1|)?((\(\d{3}\))|\d{3})(-|\s)?(\d{3})(-|\s)?(\d{4})$/
    return regex.test(phoneNumber) ? this.setState({ phone: phoneNumber, validPhone: true }) : this.setState({ validPhone: false })
  }
  renderAppointmentConfirmation() {
    const spanStyle = { color: '#00bcd4' }
    return <section>
      <p>Name: <span style={spanStyle}>{this.state.firstName} {this.state.lastName}</span></p>
      <p>Number: <span style={spanStyle}>{this.state.phone}</span></p>
      <p>Email: <span style={spanStyle}>{this.state.email}</span></p>
      <p>Appointment: <span style={spanStyle}>{moment(this.state.date).format('dddd[,] MMMM Do[,] YYYY')}</span> at <span style={spanStyle}>{this.state.slot}</span></p>
    </section>//moment(this.state.slot).format('h:mm a')
  }
  handleChange =(event, index, value) => {
    this.setState({apptType:value});
    console.log(this.state.apptType);
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
    let therapist= ["Therapist 1", "Therapist 2", "Therapist 3", "Therapist 4", "Therapist 5"]
    return (
     
      <Container fluid>
        <Nav />
        <main className="col-xs-12 col-sm-8 offset-sm-4 col-lg-9 offset-lg-3 col-xl-10 offset-xl-2 pt-3 pl-4">
        <Header>
          <h1 className="float-left text-center text-md-left">Appointments</h1>
        </Header>
        <section>
          <div class="card mb-4">
            <div class="card-block">
              <h3 class="card-title">Make an Appointment</h3>

              <h4>Select Appointment Type:</h4>
              <SelectField
                      style={{
                        marginLeft: 10
                      }}
                      floatingLabelText="Select Type"
                      value={this.state.apptType}
                      onChange={(event, index, value) =>this.setState({apptType:value})}>
                      <MenuItem value={"MSG"} primaryText="Massage Therapy" />
                      <MenuItem value={"PT"} primaryText="Personal Training" />
                      <MenuItem value={"EDU"} primaryText="Movement Education" />
                      <MenuItem value={"CLINICAL"} primaryText="Clinical Bodywork" />
                      <MenuItem value={"CARDIO"} primaryText="Cardio Training" />
                      
                      </SelectField>
                      
              <h4>Select Preferred Therapist:</h4>
              <SelectField
                      style={{
                        marginLeft: 10
                      }}
                      floatingLabelText="Select Therapist"
                      value={this.state.pfdTherapist}
                      onChange={(event, index, value) =>{console.log({value}) 
                      this.setState({pfdTherapist:value})}}>
                      <MenuItem value={therapist[0]} primaryText={therapist[0]} />
                      <MenuItem value={therapist[1]} primaryText={therapist[1]} />
                      <MenuItem value={therapist[2]} primaryText={therapist[2]} />
                      <MenuItem value={therapist[3]} primaryText={therapist[3]} />
                      <MenuItem value={therapist[4]} primaryText={therapist[4]} />
                      
                      </SelectField>
              
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
              onChange={(evt, newValue) => 
              {
                const time =moment(newValue).format("LT");
                this.setState({ slot: time })
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
                      style={{ display: 'block', marginTop: 20, maxWidth: 100}}
                      label={contactFormFilled ? 'Schedule' : 'Fill out your information to schedule'}
                      labelPosition="before"
                      primary={true}
                      fullWidth={true}
                      onClick={() => this.setState({ confirmationModalOpen: !this.state.confirmationModalOpen })}
                      disabled={!contactFormFilled}
                       />
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
        
                <div class="calendly-inline-widget" id="calendar" data-url="https://calendly.com/vigor">
                
                </div>

              <div id="calendar"></div>
            </div>
          </div>
        </section>
      </main>
    </Container>
    );
  }
}

export default Appointments;
